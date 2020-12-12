import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personaje: [], 
    favorito: []   
  },
  getters: {
    enviarPersonaje(state){
      return state.personaje;
    },
    enviarFavoritos(state){
      return state.favorito;
    }


  },
  mutations: {
    mutandoPersonaje(state,datos){
      for (let index = 0; index < datos.length; index++) {
          datos[index].favorito = false;
      }
      state.personaje = datos;
    },
    mutandoFavoritos(state,valor){
      let resultado = state.personaje.find(result => result.results == valor.results);
      resultado.favorito = true;
      state.favorito.push(resultado)
    },
    borrarFav(state,index){
      state.favorito.splice(index,1);
    },

  },
  actions: {
    async llamadoAPI({commit}){
      try {
        let result = await fetch('https://rickandmortyapi.com/api/character/')
        let datos = await result.json();
        commit('mutandoPersonaje',datos.results);
      } catch (error) {
        console.error(error);
      }
    },
    agregandoFavoritos({commit},valor){
      commit('mutandoFavoritos',valor)
    },
    eliminandoFav({commit},index){
      commit('borrarFav',index);
    },
  },
  modules: {
  }
})
