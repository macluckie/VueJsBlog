<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>articles:</h2>

    <ul>
      <button v-if="display" v-on:click="display=false">Effacer</button>
      <button v-if="!display" v-on:click="display=true">afficher</button>
      <li v-if="display" v-for="(article, index) in articles" :key="index">{{article.auteur}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "My Blog",
      articles: "",
      display: true
    };
  },
  created() {
    axios
      .get("http://localhost:8000/articles", {
        headers: {
          "Authorization": "Bearer " + 
"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NzA5OTk1NjEsImV4cCI6MTU3MTAwMzE2MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZG91ZG91In0.b7gVdfOTUYKXccGn6N4TV7FbATxBIUQ-8P1SLdi4cpaC9TUbD9Gx9NaWquFhKf0mnOE01cAkkFRyXWewp5wUaMkPRWLm4GlpdvdG5CK0WDZ0-vUAW03qfwI4LpJDB26GtUsyoiVb1VbiKmZwCoss3Wyc-M1YOg5jz9Ti2pew-kGhpnz5dwmp8tkE9SrrcdncOxVAAF09C26gtlX2HU3qzYHHrmeAXrHG0Talv4tvLn60jbXvwblTAeBLBc74w-WwbS9tNk6laDws2TNkAnEk7vxK_RSmU2wgI1VDohc9gvHRb_RArzr3TkFyPynUVr7719u70uiGXvLil6bCmDpcsZ3cA0oCzlZlTWKRrvgoQ-fuc6d-33VDo9dvfhtHkjqjmKyxymqS1SUjEV6Ym3vCrfoPcHUbqxX7pxiSWMKUYfXLIOgnYofGnfc-wH5Ka_1lfvMtFAG5EXfbdGsZLI9fEV8RLgqtYZUNO9sN1aW8InyePMF5o2K3IXlMoSz2hekrvG-fypZsTQLlGL1akfW2I-Dcdx4CQ2Q7yRkW-lA8jEQ6ZLC7oY8JWEqAoqzYXnOSWjkQIvOhz5tnfJGtNkSGhSb8ZWlrM6wDYv4iwNDAAHl662Rf0jYFjvnOeFpreUyflU9BB_fWh5h39XNgJDrUK2X523MuUYgZbgGLyZ7P5R0"        }
      })
      .then(response => {
        console.log(response.data.articles);
        this.articles = response.data.articles;
      });
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
</style>
