import note from "@/components/note";

export default {
    state: {
        note: {
            title: 'hi',
            descr: 'Moooooooooooon'
        }
    },
    mutations: {
        setNote(state, payload) {
            state.note = payload;
        }
    },
    actions: {
        setNote({commit}, payload) {
            commit('setNote', payload)
        }
    },

    getters: {
        getNote(state) {
            return state.note;
        }
    }
}