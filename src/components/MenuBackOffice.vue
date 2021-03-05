<template>
  <div>
    <div class="fond"></div>
    <div class="menu">
      <button class="create">Create Article</button>
      <button v-on:click="goEdit" class="edit">Edit Article</button>
      <button v-on:click="backHome" class="quitter">quitter</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("displayMenuChanger", false);
  },
  destroyed() {
     this.$store.commit("displayMenuChanger", true);
  },
  methods: {
    backHome(){
      this.$router.push({name: 'Home'});
    },
    goEdit(){
       this.$router.push({name: 'Edition'});
    },
    goCreate(){
       this.$router.push({name: 'Create'});
    }
  },
};
</script>
<style scoped>
.fond {
  width: 100%;
  padding-top: 20%;
  min-height: 100vh;
  background-color: rgb(15, 15, 15);
  opacity: 0.2;
}

.menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 30%;
  left: 30%;
  top: 30%;
}

button:hover {
  background-color: brown;
}
</style>