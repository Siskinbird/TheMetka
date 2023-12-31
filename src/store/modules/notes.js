import notes from "@/components/Notes";

export default {
    state: {
         notes: []
    },
    getters: {
        //Если в локальном хранилище пусто, то закидываем туда пустой массив
        //если там что-то есть, отрисовываем заметки из хранилища
        getNotes(state) {
            if( JSON.parse(localStorage.getItem('notes')) === null) {
                localStorage.setItem('notes', JSON.stringify([]))
            } else {
                state.notes = JSON.parse(localStorage.getItem('notes'))
                return state.notes
            }
        },

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
        editNoteTitle(state, id) {
           for(let i = 0; i < state.notes.length; i++) {
               if(state.notes[i].id === id) {
                   console.log('Target ID: ' + state.notes[i].id);
                  state.notes[i].isEdit = !state.notes[i].isEdit;
               }
           }
        },
        addNote(state, newNote) {
            state.notes.unshift(newNote)
            localStorage.setItem('notes', JSON.stringify(state.notes))
        },
        removeNote(state, id) {
            let tempArr = JSON.parse(localStorage.getItem('notes'));
            const updatedArr = tempArr.reduce((acc, note) => {
                if (note.id !== id) {
                    acc.push(note);
                }
                return acc;
            }, []);
            state.notes = updatedArr;
            console.log('Заметка с идентификатором' + ': ' + id + ' успешно удалена из локального хранилища')
            localStorage.setItem('notes', JSON.stringify(updatedArr));
        },
        //makeCalculate() {
        //     this.$moment.locale('ru')
        //     return this.$moment().format('LLL')
        // },

        //Сохранение нового заголовка заметки
        saveNewTitle(state, id) {
            for(let i = 0; i < state.notes.length; i++) {
                if(state.notes[i].id === id) {
                    if (state.notes[i].title.length > 2 && state.notes[i].title.length < 30) {
                        state.notes[i].newTitle = state.notes[i].title
                        state.notes[i].isEdit = false
                        //state.notes[i].date = state.makeCalculate(new Date(Date.now()))
                        localStorage.setItem('notes', JSON.stringify(state.notes))
                        console.log('Заголовок заметки с идентификатором' + ': ' + state.notes[i].id + ' успешно изменён');
                    } else {
                        console.log('Title must be be be be be be be be');
                    }
                }
            }
        }
    },
    actions: {
        editNoteTitle({commit}, payload) {
          commit('editNoteTitle', payload)
        },
        addNote({commit}, payload) {
            commit('addNote', payload)
        },
        removeNote({commit}, payload) {
            commit('removeNote', payload)
        },
        saveNewTitle({commit}, payload) {
            commit('saveNewTitle', payload)
        }
    }
}