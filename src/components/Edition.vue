<template>
  <div>
    <h1>EDITION</h1>
    <Trix v-for="(article,index) in displayedArticles" :key="index" :articles= "article" :id="index" />
    <nav class="nav_paginate" aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <button type="button" class="page-link" v-if="page != 1" @click="page--">Previous</button>
        </li>
        <li class="page-item">
          <button
            type="button"
            class="page-link"
            v-for="pageNumber in pages.slice(page-1, page+5)"
            @click="page = pageNumber"
          >{{pageNumber}}</button>
        </li>
        <li class="page-item">
          <button type="button" @click="page++" v-if="page < pages.length" class="page-link">Next</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Trix from "./Trix";
import axios from "axios";

export default {
  name: "Edition",
  data() {
    return {
      articles: "",
      page: 1,
      perPage: 5,
      pages: []
    };
  },
  created() {
     this.$store.getters.getArticles.then(response=>{
        this.articles = response;
     }) 
  },
  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.articles.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(articles) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return articles.slice(from, to);
    }
  },
  computed: {
    displayedArticles() {
      return this.paginate(this.articles);
    }
  },
  watch: {
    articles() {
      this.setPages();
    },
    	filters: {
		trimWords(value){
			return value.split(" ").splice(0,20).join(" ") + '...';
		}
	}
  },
  components: {
    Trix
  }
};
</script>

<style scoped>
.nav_paginate{
  padding-left: 33%;

}
button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
</style>