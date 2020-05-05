import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modellist: [{
      name: 'name1',
      type: 'type1'
    }, {
      name: 'name2',
      type: 'type2'
    }]
  },
  mutations: {
    addAtt:(state, newattribute) => {
      console.log('trigger the add att mutation.');
      state.modellist = [...state.modellist, newattribute];
    },
    clearAll: state => {
      state.modellist = [];
    }
  },
  actions: {
    addAtt: (context,newattribute) => {
      console.log('trigger the add att action.')
      context.commit('addAtt', newattribute)
    },
    clearAll: context => {
      context.commit('clearAll');
    }
  },
  modules: {
  }
})
