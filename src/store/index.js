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
      let resultado = state.personaje.find(result => result.id == valor.id);
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
    mutandoOpiAdm(state, item){
      let resultado = state.opinion.find(result => result.id == item.id);
      resultado.opinion = true;
      state.opinion.push(item);
    },
    mutandoGuardar(state,item){
      let valor = [];
      for (let index = 0; index < 1; index++){
        valor.push(item)
      }
      let id = valor.push('');
      item.id = id;
      let name = valor.join('');
      item.name = name;
      let comentario = valor.join('');
      item.comentario = comentario;
      let nombre = valor.join('');
      item.nombre = nombre;
      state.opinion.push(item);
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
    agregarOpinion({commit},opinion){
      commit('mutandoOpinion',opinion);
    },
    eliminandoOpinion({commit},index){
      commit('borrarOpinion', index);
    },
    agregarEditar({commit},item){
      commit('mutandoOpiAdm',item);
    },
    guardarPersonaje({commit},item){
      commit('mutandoGuardar',item)
    }
  },
})
