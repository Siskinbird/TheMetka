import axios from "axios";

export default {
    //Initial state
    state: {
         notes: [
            {
                id: 1,
                title: 'Рыба...',
                descr: 'Как выровнять блок по центру контейнера? И не отхватить леща от тим лида?',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Height',
                isEdit: false
            },
            {
                id: 2,
                title: 'Оладышки',
                descr: 'Это что то на вкусном, но варить я их конечно же не буду!',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Medium',
                isEdit: false
            },
            {
                id: 3,
                title: 'Меладзе',
                descr: 'Один из самых страшных кошмаров, это забыть его тексты.',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Default',
                isEdit: false
            },
            {
                id: 4,
                title: 'Факт дня',
                descr: 'Правильно сформулированный вопрос, содержит в себе половину ответа.',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Medium',
                isEdit: false
            },
            {
                id: 5,
                title: 'Тестовая',
                descr: 'Интересно, сколько ещё нужно времени, для того что бы заработало',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Default',
                isEdit: false
            },
            {
                id: 6,
                title: 'Вперёд!',
                descr: 'Видно что прогресс есть,и он продолжает идти вперед!',
                date: new Date(Date.now()).toLocaleString(),
                priority: 'Medium',
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
    }
}