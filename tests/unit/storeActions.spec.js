import Vue from 'vue';
import Vuex from 'vuex';
import store from '@../../../src/store/';

describe('Testing store', ()=>{
    beforeAll(()=>{
        Vue.use(Vuex);
        store = new Vuex.Store(store);
    });
});

// TESTING ACTIONS//

describe('Prueba Actions',()=>{
    it('prueba a actions de store',()=>{
        store.dispatch('agregandoFavoritos');
        expect(store.state.favorito);
    });
});


