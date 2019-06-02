import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  mutations
})

/* export default new Vuex.Store({
    state: {
        city: localStorage.city || '上海'
    },
    mutations: {
        changeCity (state,city) {
            state.city = city
            localStorage.city = city
        }

    }
}) */