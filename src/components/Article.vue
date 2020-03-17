<template>
  <div>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('img/post-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{article.title}}</h1>
              <h2 class="subheading">{{article.subTitle}}</h2>
              <span class="meta">
                {{article.auteur}}               
                {{article.date}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            {{article.contenue}}       
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Article",
  data(){
    return{
      token: '',
      articleId: '',
      article:'',
    }
  }, 
  created(){
    // if (Number.isInteger(this.$route.params.id)) {
      this.articleId = this.$route.params.id;
       axios
        .post(process.env.VUE_APP_URLAPI + "api/login_check", {
          username: process.env.VUE_APP_USERNAME,
          password: process.env.VUE_APP_PASSWORD
        })
        .then(response => {
          this.token = response.data.token;
          axios
            .get(process.env.VUE_APP_URLAPI + "article/" +  this.articleId , {
              headers: {
                Authorization: "Bearer " + response.data.token
              }
            })
            .then(response=>{
              this.article = response.data.article;
            })          
        })
        .catch(function(error) {
          console.log(error);
  
        });   
      
    // }

  }
};
</script>
<style scoped>
</style>