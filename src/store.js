import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: false,
  },
  mutations: {
    stateToken: (state)=>{
      state.token = true;
      console.log('value de token dans le store est true');
    }
  },
  actions: {
    setToken: (context, token)=>{
      localStorage.setItem('token',token);      
      context.commit('stateToken');
    },   

  }
})
