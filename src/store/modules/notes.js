import axios from "axios";
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

        //

        getSearchNotes: state => value => {
            let array = state.notes
            if (!value) {
                return array
            } else {
                value = value.trim().toLowerCase()
                array = array.filter(function (item) {
                    if (item.title.toLowerCase().indexOf(value) !== -1) {
                        console.log(item.id);
                        return item
                    }
                })
                return array;
            }
        },
    },
    mutations: {
        editNoteTitle(state, index) {
          state.notes[index].isEdit = !state.notes[index].isEdit;
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
            localStorage.setItem('notes', JSON.stringify(updatedArr));
        },
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
        }
    }
}