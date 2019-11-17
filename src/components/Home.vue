<template>
  <div>
    <header class="masthead" style="background-image: url('img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div v-for="(article, index) in articles" v-bind:key="index" class="post-preview">
            <a href="post.html">
              <h2 class="post-title">{{article.title}}</h2>
              <h3 class="post-subtitle">{{article.subTitle}}</h3>
            </a>
            <p class="post-meta">
              Posted by
              <a href="#">{{article.auteur}}</a>
              {{article.date}}
            </p>
          </div>
          <hr />

          <!-- Pager -->
          <div class="clearfix">
            <a v-on:click="paginate" class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  mounted() {
    import("./../../public/js/clean-blog.min.js");
  },
  data() {
    return {
      articles: [],
      token: ""
    };
  },
  created() {
    axios
      .post(process.env.VUE_APP_URLAPI + "api/login_check", {
        username: process.env.VUE_APP_USERNAME,
        password: process.env.VUE_APP_PASSWORD
      })
      .then(response => {
        this.token = response.data.token;
        axios
          .get(process.env.VUE_APP_URLAPI + "articles", {
            headers: {
              Authorization: "Bearer " + response.data.token
            }
          })
          .then(response => {
            let allArticles;
            allArticles = response.data.articles;
            allArticles.forEach((element, index) => {
              if (index <= 5) {
                this.articles.push(element);
              }
            });
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    paginate: function() {
      axios
        .get(process.env.VUE_APP_URLAPI + "articles", {
          headers: {
            Authorization: "Bearer " + this.token
          }
        })
        .then(response => {
          let maxIdArticles;
          let allArticles;
          let oldArticles = [];
          maxIdArticles = this.articles[this.articles.length - 1].id;
          allArticles = response.data.articles;

          allArticles.forEach((element, index) => {
           
            if (
              element.id >= maxIdArticles &&
              element.id <= maxIdArticles + 5
            ) {
              oldArticles.push(element);
            }

            this.articles = oldArticles;
          });
        });
    }
  }
};
</script>
<style scoped>
</style>