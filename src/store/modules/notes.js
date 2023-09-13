import axios from "axios";

export default {
    //Initial state
    state: {
        posts: [],
        notes: [
            {
                id: 1,
                title: 'Интересно...',
                descr: 'Как выровнять блок по центру контейнера?',
                date: new Date(Date.now()).toLocaleString(),
                priority: {
                    default: false,
                    height: false,
                    medium: true
                },
                selected: 'C',
                isEdit: false
            },
            {
                id: 2,
                title: 'Русский',
                descr: 'По русски читать гораздо проще , чем на не русском',
                date: new Date(Date.now()).toLocaleString(),
                priority: {
                    default: true,
                    height: false,
                    medium: false
                },
                selected: 'B',
                isEdit: false
            },
            {
                id: 3,
                title: 'Будет так',
                descr: 'Только так как ты захочешь, не иначе',
                date: new Date(Date.now()).toLocaleString(),
                priority: {
                    default: true,
                    height: false,
                    medium: false
                },
                selected: 'A',
                isEdit: false
            },
            {
                id: 4,
                title: 'Интересные факты',
                descr: 'Если долго заниматься, что то да получится',
                date: new Date(Date.now()).toLocaleString(),
                priority: {
                    default: true,
                    height: false,
                    medium: false
                },
                selected: 'B',
                isEdit: false
            },
            {
                id: 5,
                title: 'Тестовая',
                descr: 'Интересно, сколько ещё нужно времени, для того что бы заработало',
                date: new Date(Date.now()).toLocaleString(),
                priority: {
                    default: true,
                    height: false,
                    medium: false
                },
                selected: 'A',
                isEdit: false
            },
            {
                id: 6,
                title: 'Вспоминая начало',
                descr: 'Видно что прогресс есть,и он продолжает идти вперед!',
                date: new Date(Date.now()).toLocaleString(),
                priority: {
                    default: false,
                    height: true,
                    medium: false
                },
                selected: 'B',
                isEdit: false
            },

        ]
    },
    getters: {
        getNotes(state) {
            return state.notes
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
        // setNotes(state, filterNotes) {
        //     state.notes.push(filterNotes)
        // },
        editNoteTitle(state, index) {
          state.notes[index].isEdit = !state.notes[index].isEdit;
        },
        addNote(state, newNote) {
            state.notes.push(newNote)
        },
        removeNote(state, index) {
            state.notes.splice(index, 1)
        },
        fetchPosts(state, posts) {
            state.posts = posts;
        }
    },
    actions: {
        // setNotes({commit}, payload) {
        //   commit('setNotes', payload)
        // },
        editNoteTitle({commit}, payload) {
          commit('editNoteTitle', payload)
        },
        addNote({commit}, payload) {
            commit('addNote', payload)
        },
        removeNote({commit}, payload) {
            commit('removeNote', payload)
        },
        fetchPosts({commit}) {
            return axios.get('https://jsonplaceholder.typicode.com/posts?limit10')
                .then((posts) => {
                    commit('fetchPosts', posts.data)
                    console.log(posts.data);
                    return posts
                })
                .catch((error) => {
                    console.log(error);
                    return error
                })
        }
        // resetNote({commit}, payload) {
        //     commit('resetNote', payload)
        // }
    }
}