<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="index.html">Start Bootstrap</a>
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
            <li v-for="(nav_link, index) in nav_links" v-bind:key="index" class="nav-item">
              <router-link class="nav-link" :to="nav_link.route">{{nav_link.name}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('http://localhost:8080/sw.js');
  });
}

export default { 
  
  
  name: "App",
  data() {
    return {
      nav_links: [
        { name: "Home", route: "/" },
        { name: "About", route: "/about" },
        {
          name: "Article",
          route: "/article/:id"
        },
        {
          name: "Contact",
          route: "/contact"
        }
      ]
    };
  },
  mounted() {
    import ('./../public/vendor/bootstrap/js/bootstrap.bundle.min.js')
  }

};
</script>

<style lang="scss" scoped>


</style>
