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

    <button id="install">installer l'application</button>
  </div>
</template>

<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('http://' + window.location.host + '/sw.js');
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

    let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.

  deferredPrompt = e;

  var btnAdd = document.getElementById("install");
  console.log(btnAdd)
  btnAdd.style.display = 'block';

  btnAdd.addEventListener('click', (e) => {
  // hide our user interface that shows our A2HS button
  btnAdd.style.display = 'none';
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});
});







  }

};
</script>

<style lang="scss" scoped>


</style>
