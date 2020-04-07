import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Peras', cantidad: 0},
      {nombre: 'Naranja', cantidad: 0}
    ]
  },
  mutations: {
    aumentar(state, index) {
      state.frutas[index].cantidad++
    },
     restart(state) {
       state.frutas.forEach(fruta => {
         fruta.cantidad = 0;
       });
     }
  },
  actions: {
  },
  modules: {
  }
})
