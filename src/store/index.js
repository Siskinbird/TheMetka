import Vue from 'vue'
import Vuex from 'vuex'
import notes from './modules/notes'
import newNote from "./modules/newNote";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notes,
    newNote
  }
})
