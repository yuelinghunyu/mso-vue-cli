import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 引用modules 
import moduleA from '%/modules/moduleA'

const store = new Vuex.Store({
    modules: {
        initMoudle: moduleA
    }
})

export default store