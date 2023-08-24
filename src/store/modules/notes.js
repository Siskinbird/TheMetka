export default {
    //Initial state
    state: {
        notes: [
            {
                title: 'Интересно...',
                descr: 'Как выровнять блок по центру контейнера?',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Русский',
                descr: 'По русски читать гораздо проще , чем на не русском',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Будет так',
                descr: 'Только так как ты захочешь, не иначе',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Интересные факты',
                descr: 'Если долго заниматься, что то да получится',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Тестовая',
                descr: 'Интересно, сколько ещё нужно времени, для того что бы заработало',
                date: new Date(Date.now()).toLocaleString()
            },
            {
                title: 'Вспоминая начало',
                descr: 'Видно что прогресс есть,и он продолжает идти вперед!',
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
        },
        removeNote(state, index) {
            state.notes.splice(index, 1)
        },
        resetNote(state, payload) {
            state.note
        }
    },
    actions: {
        addNote({commit}, payload) {
            commit('addNote', payload)
        },
        removeNote({commit}, payload) {
            commit('removeNote', payload)
        },
        resetNote({commit}, payload) {
            commit('resetNote', payload)
        }
    }
}