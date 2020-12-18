import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    personaje: [], 
    favorito: [],
    opinion: [],
  },
  getters: {
    enviarPersonaje(state){
      return state.personaje;
    },
    enviarFavoritos(state){
      return state.favorito;
    },
    enviarOpinion(state){
      return state.opinion;
    },
    enviarOpAdm(state){
      return state.opinion;
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
      let resultado = state.personaje.find(result => result.name == valor.name);
      state.favorito.push(resultado)
    },
    borrarFav(state,index){
      state.favorito.splice(index,1);
    },
    mutandoOpinion(state,nombre){
      state.opinion.push(nombre);
    },
    borrarOpinion(state,index){
      state.opinion.splice(index,1)
    },

    mutandoOpiAdm(state,item){
      state.opinion.shift(item)
      state.opinion.push(item)

    }

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
    agregandoFavoritos({commit},favorito){
      commit('mutandoFavoritos',favorito);
      router.push({name: 'Favoritos'})
    },
    eliminandoFav({commit},index){
      commit('borrarFav',index);
    },
    agregarOpinion({commit},opinion){
      commit('mutandoOpinion',opinion);
    },
    eliminandoOpinion({commit},index){
      commit('borrarOpinion', index);
    },
    guardarPersonaje({commit},item){
      commit('mutandoOpiAdm',item);
    },

  },
})
