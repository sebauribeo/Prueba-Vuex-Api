import Vue from 'vue';
import Vuex from 'vuex';
import store from '@../../../src/store/';

describe('Testing store', ()=>{
    beforeAll(()=>{
        Vue.use(Vuex);
        store = new Vuex.Store(store);
    });
});

// TESTING MUTATION//

describe('Prueba Mutation',()=>{
    it('prueba a mutation de store',()=>{
        store.dispatch('mutandoFavoritos');
        expect(store.state.favorito);
    });
});