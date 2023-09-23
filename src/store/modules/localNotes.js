import axios from "axios";

export default {

    state: {
        localNotes: [
            {
                id: 1,
                title: "Это из ХРАНИЛИЩА",
                newTitle: "Это из ХРАНИЛИЩА",
                descr: 'Как выровнять блок по центру контейнера? И не отхватить леща от тим лида?',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Height',
                isEdit: false
            },
            {
                id: 2,
                title: "Это из ХРАНИЛИЩА",
                newTitle: "Это из ХРАНИЛИЩА",
                descr: 'Это что то на вкусном, но варить я их конечно же не буду!',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Medium',
                isEdit: false
            },

        ]
    },
    mutations: {
        addLocalNote(state, newLocalNote) {
            localStorage.setItem('localNotes', JSON.stringify(newLocalNote))
            let temp = JSON.parse(localStorage.getItem('localNotes'))
            console.log(temp);
            state.localNotes.push(temp)
        },

    },
    actions: {
        addLocalNote({commit}, payload) {
            commit('addLocalNote', payload)
        }
    },
    getters: {
        getLocalNotes(state) {
            let temp = localStorage.getItem('localNotes')
            let localData = JSON.parse(temp)
            console.log(localData);

           state.localNotes = localData
            console.log(this.localNotes);
            return state.localNotes
        }
    },
}