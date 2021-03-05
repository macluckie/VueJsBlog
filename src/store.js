import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: false,
    articles: "",
    displayMenu: true,
    btnLogin: true
  },
  mutations: {
    stateToken: (state,payload) => {
      state.token = payload;
    },
    displayMenuChanger: (state, payload) => {
      state.displayMenu = payload;
    },

    btnLoginChanger: (state, payload) => {
      state.btnLogin = payload;
      console.log(state.btnLogin)
    },

  },
  getters: {
    getArticles: (state, getters) => {
      return axios
        .get(process.env.VUE_APP_URLAPI + "articles")
        .then(response => {
          state.articles = response.data;
          return state.articles;
        })
    }

  },
  actions: {
    setToken: (context, token) => {
      localStorage.setItem('token', token);
      localStorage.setItem('is_connnect', true);
      // context.commit('stateToken');
    },
    deconnexion: (context) => {
      localStorage.removeItem('token');
      localStorage.setItem('is_connnect', false);
      window.location.replace('/');
    }

  }
})
