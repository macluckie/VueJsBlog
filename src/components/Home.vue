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
          <div v-for="(article, index) in allArticles" v-bind:key="index" class="post-preview">
            <a v-bind:href="'/article/' + article.id">
              <h2 class="post-title">{{article.title}}</h2>
              <h3 class="post-subtitle">{{article.subtitle}}</h3>
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
import store from "../store";

export default {
  name: "Home",
  mounted() {
    import("./../../public/js/clean-blog.min.js");
  },
  data() {
    return {
      articles: [""],
      token: ""
    };
  },
  created() {
    store.getters.getArticles.then(response => {
      response.forEach((element, index) => {
        if (index <= 5) {
          this.articles.push(element);
        }
      });
    });

  
  },
  computed: {
    allArticles: function() {
      return this.articles;
    }
  },
  methods: {
    paginate: function() {
      axios
        .get(process.env.VUE_APP_URLAPI + "articles")
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