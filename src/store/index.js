import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    materials: []
  },
  mutations: {
    ADD_MATERIALS: (state, name) => {
      const mid = {
        name
      }
      state.materials.push(mid)
    },
    REMOVE_MATERIALS: (state, name) => {
      state.materials = state.materials.filter(item => item.name !== name)
    }
  },
  actions: {
    Add_Material: (ctx, name) => {
      ctx.commit('ADD_MATERIALS', name)
    },
    Remove_Material: (ctx, name) => {
      ctx.commit('REMOVE_MATERIALS', name)
    }
  },
  modules: {}
})
