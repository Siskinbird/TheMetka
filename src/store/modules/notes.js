import axios from "axios";

export default {
    //Initial state
    state: {
         localNotes: [],
         notes: [
            {
                id: 1,
                title: 'Рыба...',
                newTitle: 'Рыба...',
                descr: 'Как выровнять блок по центру контейнера? И не отхватить леща от тим лида?',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Height',
                isEdit: false
            },
            {
                id: 2,
                title: 'Оладышки',
                newTitle: 'Оладышки',
                descr: 'Это что то на вкусном, но варить я их конечно же не буду!',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Medium',
                isEdit: false
            },
            {
                id: 3,
                title: 'Меладзе',
                newTitle: 'Меладзе',
                descr: 'Один из самых страшных кошмаров, это забыть его тексты.',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Default',
                isEdit: false
            },
            {
                id: 4,
                title: 'Факт дня',
                newTitle: 'Факт дня',
                descr: 'Правильно сформулированный вопрос, содержит в себе половину ответа.',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Medium',
                isEdit: false
            },
            {
                id: 5,
                title: 'Тестовая',
                newTitle: 'Тестовая',
                descr: 'Интересно, сколько ещё нужно времени, для того что бы заработало',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Default',
                isEdit: false
            },
            {
                id: 6,
                title: 'Вперёд!',
                newTitle: 'Вперёд',
                descr: 'Видно что прогресс есть,и он продолжает идти вперед!',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Medium',
                isEdit: false
            },
        ]
    },
    getters: {
        getNotes(state) {
            state.notes = JSON.parse(localStorage.getItem('notes'))
            return state.notes
        },
        //геттер для заметок из локал стора
        // getLocalNotes(state) {
        //     let data = localStorage.getItem('notes')
        //     let localNotes = JSON.parse(data)
        //     this.notes = [...localNotes]
        //     return state.notes
        // },
        getSearchNotes: state => value => {
            let array = state.notes
            if (!value) {
                return array
            } else {
                value = value.trim().toLowerCase()
                array = array.filter(function (item) {
                    if (item.title.toLowerCase().indexOf(value) !== -1) {
                        return item
                    }
                })
                return array;
            }
        },
    },
    mutations: {
        pushLocalNotes(state) {
            let localNotes = state.notes
            localStorage.setItem('notes', JSON.stringify(localNotes))
        },
        // saveNewTitle(state, index) {
        //     state.notes[index].newTitle = state.notes[index].title
        //     this.notes[index].isEdit = false
        // },
        // loadTitle(state, index) {
        //     let temporary = [];
        //     temporary.push(state.notes[index].newTitle)
        //     console.log(temporary);
        //     this.notes[index].title = temporary
        //     console.log(this.notes[index].title);
        // },
        editNoteTitle(state, index) {
          state.notes[index].isEdit = !state.notes[index].isEdit;
        },
        addNote(state, newNote) {
            state.notes.push(newNote)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        removeNote(state, index) {
            state.notes.splice(index, 1)
        },
    },
    actions: {
        //Заполняем локальное хранилище заметками
        pushLocalNotes({commit}, payload) {
            commit('pushLocalNotes', payload)
        },
        saveNewTitle({commit}, payload) {
            commit('saveNewTitle', payload)
        },
        // loadTitle({commit}, payload) {
        //   commit('loadTitle', payload)
        // },
        editNoteTitle({commit}, payload) {
          commit('editNoteTitle', payload)
        },
        addNote({commit}, payload) {
            commit('addNote', payload)
        },
        removeNote({commit}, payload) {
            commit('removeNote', payload)
        }
    }
}