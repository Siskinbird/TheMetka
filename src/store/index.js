import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'
import localNotes from "@/store/modules/localNotes";


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notes,
    localNotes
  }
})
