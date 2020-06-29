<template>
  <div>
    <form v-bind:id="id">
      <input type="hidden" name="id" :value="article_data.id" />
      <div class="form-group m-form__group row">
        <label for="example-text-input" class="col-1 col-form-label">Titre</label>
        <div class="col-10">
          <input
            class="form-control m-input"
            type="text"
            :value="article_data.title"
            id="example-text-input"
            name="titre"
          />
        </div>
      </div>
      <div class="form-group m-form__group row">
        <label for="example-text-input" class="col-1 col-form-label">Auteur</label>
        <div class="col-10">
          <input
            class="form-control m-input"
            type="text"
            :value="article_data.auteur"
            id="example-text-input"
            name="auteur"
          />
        </div>
      </div>
      <div class="form-group m-form__group row">
        <label for="example-text-input" class="col-1 col-form-label">Contenue</label>
        <div class="col-10">
          <!-- <trix-editor input="x" ></trix-editor> -->
          <vue-trix v-model="article_data.contenue" placeholder="enter your content..." />
        </div>
      </div>
      <div class="form-group m-form__group row validation">
        <div class="col-10">
          <button v-on:click="validForm" class="btn-primary">Valider</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import("../../public/css/trix.css");
import axios from "axios";
import VueTrix from "vue-trix";

export default {
  props: ["articles", "id"],
  component: {
    "vue-trix": VueTrix
  },
  computed: {
    article_data() {
      return this.articles;
    }
  },
  created() {
    this.params = this.id;
    this.contenue = this.articles.contenue;
  },
  data() {
    return {
      titre: "",
      auteur: "",
      contenue: "",
      params: ""
    };
  },
  methods: {
    validForm: async function(e) {
      e.preventDefault();
      var formElement = document.getElementById(this.params);
      var form = new FormData(formElement);
      axios
        .post(process.env.VUE_APP_URLAPI + "edit_article", form, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
        .then(response => {})
        .catch(error => {
          this.$router.push("login");
        });
    }
  },
  name: "Trix"
};
</script>
<style scoped>
form {
  width: 80%;
  margin: auto;
  margin-bottom: 7%;
}
.validation {
  padding-left: 72%;
}
</style>