<template>
  <main class="notes row">
                            <!------------------------GRID TOGGLE------------------------>
    <div class="note col-12 col-sm-6 g-4" :class="{'grid': !grid}" v-for="(note, i) in notes" :key="note.id">
      <article class="note-wrapper">
      <div class="note-body
               bb-col
               rounded-top
               rounded-bottom

               shadow
               d-flex
               flex-column

               justify-content-between"
      >




                              <!------------------------PRIORITY CLASS TOGGLE------------------------>
        <div :class="{ 'bg-height': note.priority === 'Height', 'bg-medium': note.priority === 'Medium', 'bg-default': note.priority === 'Default' }"
             class=
                 "note-header
                  col-12
                  rounded-top
                  bg-default
                  bg-gradient
                  d-flex
                  align-baseline"
        >


                        <!---------------------------NOTE TITLE--------------------------->

          <div title="Редактировать заголовок" :class="{'col-12': note.isEdit}" class="note-title col-10 p-wrap">
            <p id="paragraph"
               role='button'
               v-if="!notes[i].isEdit"
               @click="editNoteTitle(i)">{{ note.title }}
            </p>


                    <!---------------------------NOTE TITLE CHANGER INPUT--------------------------->

            <b-form-input
                v-if="notes[i].isEdit"
                v-model="note.title"
                :state="note.title.length > 2 && 30 > note.title.length"
                v-on:blur="loadTitle(i)"
                @keydown.enter="saveNewTitle(i)"
                @keydown.esc="loadTitle(i)"
                aria-describedby="input-live-help input-live-feedback"
                autofocus
                trim
            />
            <b-form-invalid-feedback id="input-live-feedback" class="input-live-feedback">
              Заголовок должен быть длиннее 3-х и меньше 29-и символов!
            </b-form-invalid-feedback>

          </div>
                      <!---------------------------REMOVE NOTE------------------------------->
          <div v-if="!note.isEdit" :class="{'d-none': note.isEdit}" class="note-remove col-2 d-flex align-items-center justify-content-center">
            <div title="Удалить заметку">
              <b-icon class="removeIco" icon="x-square" font-scale="1" variant="black" @click="removeNote(note.id)"/>
            </div>
          </div>

        </div>


                             <!--. . . . . . . . . . . . . . . . . . . . . . . . . . .-->
        <div class="line-pattern">
          <svg fill="currentColor" role="img" aria-hidden="true">
            <title>Точечки</title>
            <pattern id="CheckerDense-pattern-137" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect width="1" height="1" fill="currentColor"></rect>
              <rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
            </pattern><rect width="100%" height="100%" fill="url(#CheckerDense-pattern-137)"></rect>
          </svg>
        </div>
                      <!------------------------NOTE DESCRIPTION----------------------------->
        <div title="Это твои светлые мысли" class="note-description text-start mb-auto">
          <p class="p-wrap">{{ note.descr }}</p>
        </div>

                          <!------------------------NOTE DATE------------------------>

        <div class="note-date ">
                          <!--. . . . . . . . . . . . . . . . . . . . . . . . . . .-->
          <div class="line-pattern">
            <svg fill="currentColor" role="img" aria-hidden="true">
              <title>Точечки</title>
              <pattern id="CheckerDense-pattern-137" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect width="1" height="1" fill="currentColor"></rect>
                <rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
              </pattern><rect width="100%" height="100%" fill="url(#CheckerDense-pattern-137)"></rect>
            </svg>
          </div>
          <time title="Дата публикации">{{ note.date }}</time>
        </div>
        </div>
      </article>
    </div>
  </main>
</template>


<script>
import {mapActions, mapGetters} from "vuex";


export default {
// data() {
//   return {
//     notes: this.$store.state.notes.notes
//
//   }
// },
  props: {
    //Для закрытия ошибки закомментировать пропс notes, но с ошибкой оно реактивно, без, приходится перезагружаться
     notes: {
       type: Array,
       required: true
     },
    grid: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    this.notes = this.getNotes
  },
  computed: {
    ...mapGetters(['getNotes', 'getSearchNotes']),
    //...mapActions(['removeNote', 'editNoteTitle', 'saveNewTitle'])

  },
  methods: {
    makeCalculate() {
      this.$moment.locale('ru')
      return this.$moment().format('LLL')
    },
    removeNote(id) {
      this.$store.dispatch("removeNote", id);
    },
    editNoteTitle(i) {
      this.$store.dispatch('editNoteTitle', i);
    },
    saveNewTitle(i) {
      this.$store.dispatch('saveNewTitle', i)
      this.notes[i].date = this.makeCalculate(new Date(Date.now()))
    },
    // saveNewTitle(i) {
    //   if (this.notes[i].title.length > 2 && this.notes[i].title.length < 30) {
    //     let temporary = [];
    //     temporary.push(this.notes[i].title)
    //     this.notes[i].newTitle = this.notes[i].title
    //     this.notes[i].date = this.makeCalculate(new Date(Date.now()))
    //     this.notes[i].isEdit = false
    //     localStorage.setItem('notes', JSON.stringify(this.notes))
    //   } else {
    //     console.log('Title must be be be be be be be be');
    //   }
    //
    // },
    loadTitle(i) {
      let temporary = []
      temporary.push(this.notes[i].newTitle)
      if (temporary !== this.notes[i].title) {
        this.notes[i].title = this.notes[i].newTitle
      }
      this.notes[i].isEdit = false
    },
  },
}

</script>

<style lang="scss" scoped>

p {
  color: #10162fff;
  padding: 8px 12px;
  margin: 0;
}
.grid {
  flex: 0 0 auto;
  width: 100%;
}
.note-wrapper {
  border-radius: 0.375rem;
  transition: .2s ease-in-out;
  height: 100%;
  align-items: stretch;
  &:hover{
    transform: translate(3%, -3%);
    -webkit-box-shadow: -8px 8px 0px 0px rgba(0,0,0,1);
    -moz-box-shadow: -8px 8px 0px 0px rgba(0,0,0,1);
    box-shadow: -8px 8px 0px 0px rgba(0,0,0,1);
  }
}
.note {
 height: auto;
}
.note-body {
  height: 100%;
  transition: .2s ease-in-out;
  background-color: #fff;
}
.bg-default {
  background-color: #f5fcffff ;
}
.bg-medium {
  background-color: #EAFDC6;
}
.bg-height {
  background-color: #fff0e5ff;
}

.note-title {
  //font-family: 'Roboto Mono', monospace;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
}
.note-date {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  font-size: 14px;
}
.input-live-feedback {
  padding: 8px 12px;
  text-align: center;
  transition: .3s ease-in-out;
}

.note-remove {
  cursor: pointer;
  transition: .3s ease-in-out;
}
//Border bottom dotted
.bb-dot {
  border-bottom: 1px #10162fff dotted;
  }
.bt-dot {
  border-top: 1px #10162fff dotted;

}
.bb-col {
  border: 1px #10162fff solid;
 // color: #10162fff;
}

//Line after title svg try

.line-pattern {
  position: relative;
  justify-content: center;
  height: 4px;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 8px;
    padding-right: 8px;
    height: 2px;
    width: 100%;
  }
}
.p-wrap {
   //word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>