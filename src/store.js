import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: false,
    articles: ""
  },
  mutations: {
    stateToken: (state) => {
      state.token = true;
    }
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
      context.commit('stateToken');
    },

  }
})
