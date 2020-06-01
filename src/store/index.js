import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建store实例 提供初始state对象以及一些mutation即可
const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
})

export default store
