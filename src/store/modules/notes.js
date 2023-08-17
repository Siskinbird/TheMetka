export default {
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
            }
        ]
    },
    getters: {},
    mutations: {},
    actions: {},
}