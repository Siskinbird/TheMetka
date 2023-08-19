export default {
    //Initial state
    state: {
        notes: [
            {
                title: 'First Note',
                descr: 'Description for first note',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Second Note',
                descr: 'Description for second note',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Third Note',
                descr: 'Description for third note',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Four Note',
                descr: 'Description for four note',
                date: new Date(Date.now()).toLocaleString()
            },
        ]
    },
    getters: {
        getNotes(state) {
            return state.notes
        }
    },
    mutations: {
        addNote(state, newNote) {
            state.notes.push(newNote)
        }
    },
    actions: {
        addNote({commit}, payload) {
            commit('addNote', payload)
        },
    }
}