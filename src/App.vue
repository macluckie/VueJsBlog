<template>
  <div id="app">
    <nav
      v-if="displayMenu"
      class="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
    >
      <div class="container">
        <router-link class="nav-link" to="/"> Acceuil</router-link>

        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li
              v-for="(nav_link, index) in navBar"
              v-bind:key="index"
              class="nav-item"
            >
              <router-link
                class="nav-link"
                :class="nav_link.name"
                :to="nav_link.route"
                v-on:click.native="deconnexion(nav_link.name)"
              >
                <div></div>
                {{ nav_link.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <!-- <button id="install">installer l'application</button> -->
  </div>
</template>

<script>
//import("./callServiceWorker.js")
import axios from "axios";
import store from "./store";

export default {
  name: "App",
  data() {
    return {
      nav_links: [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        {
          name: "Article",
          route: "/article/:id",
        },
        {
          name: "Contact",
          route: "/contact",
        },
        {
          name: "Login",
          route: "/login",
        },
      ],
      is_connect: "",
    };
  },
  computed: {
    displayMenu() {
      return store.state.displayMenu;
    },

    navBar() {
      if (store.state.token && localStorage.getItem("is_connnect")) {
        this.nav_links = this.nav_links.filter((el) => {
          return el.name != "Login";
        });
        this.nav_links.push({
          name: "Deconnexion",
          route: "#",
        });
        return this.nav_links;
      }
      return this.nav_links;
    },
  },
  created() {
    if (localStorage.getItem("is_connnect") == "true") {
      this.nav_links = this.nav_links.filter((el) => {
        return el.name != "Login";
      });
      this.nav_links.push({
        name: "Deconnexion",
        route: "#",
      });
      return this.nav_links;
    }
  },
  mounted() {
    import("./../public/vendor/bootstrap/js/bootstrap.bundle.min.js");
    axios
      .get(process.env.VUE_APP_URLAPI + "articleId")
      .then((response) => {
        var id =
          Math.floor(
            Math.random() * (response.data.maxId - response.data.minId + 1)
          ) + response.data.minId;
        this.nav_links.forEach(function (value) {
          if (value.name === "Article") {
            value.route = "/article/" + id;
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    deconnexion: function (routeName) {
      if (routeName == "Deconnexion") {
        this.$store.dispatch("deconnexion");
        this.$store.commit("btnLoginChanger", true);
      }
    },
  },
};
</script>

<style  scoped>
</style>
