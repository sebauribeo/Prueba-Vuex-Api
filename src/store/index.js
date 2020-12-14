import Vue from 'vue'
import Vuex from 'vuex'

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
    eviarOpAdm(state){
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
      let resultado = state.personaje.find(result => result.id == valor.id);
      resultado.favorito = true;
      state.favorito.push(resultado)
    },
    borrarFav(state,index){
      state.favorito.splice(index,1);
    },
    mutandoOpinion(state,opinion){
      state.opinion.push(opinion);
    },
    borrarOpinion(state,index){
      state.opinion.splice(index,1)
    },
    mutandoOpiAdm(state, item){
    let opinion = state.opinion.find(result => result.id == opinion.id)
      opinion.nombre = item.nombre;
      opinion.comentario = item.comentario;
      opinion.name = item.name;
      opinion.id = item.id;
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
    agregandoFavoritos({commit},valor){
      commit('mutandoFavoritos',valor);
    },
    eliminandoFav({commit},index){
      commit('borrarFav',index);
    },
    agregandoOpinion({commit},nueva){
      commit('mutandoOpinion',nueva);
    },
    eliminandoOpinion({commit},index){
      commit('borrarOpinion', index);
    },
    guardarEditar({commit},item){
      commit('mutandoOpiAdm',item);
    }
  },
})
