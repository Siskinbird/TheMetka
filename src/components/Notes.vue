<template>
  <div class="notes row">
                            <!------------------------GRID TOGGLE------------------------>
    <div class="note col-12 col-sm-6 g-4" :class="{'grid': !grid}" v-for="(note, i) in notes" :key="i">
      <div class="note-wrapper">
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

          <div :class="{'col-12': note.isEdit}" class="note-title col-10">
            <p id="paragraph"
               role='button'
               v-if="!notes[i].isEdit"
               @click="editNoteTitle(i)">{{ note.title }}
            </p>

<!--            <div class="line-pattern">-->
<!--              <svg fill="currentColor" role="img" aria-hidden="true">-->
<!--                <title>Checker Dense</title>-->
<!--                <pattern id="CheckerDense-pattern-137" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">-->
<!--                  <rect width="1" height="1" fill="currentColor"></rect>-->
<!--                  <rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>-->
<!--                </pattern><rect width="100%" height="100%" fill="url(#CheckerDense-pattern-137)"></rect>-->
<!--              </svg>-->
<!--            </div>-->



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

            ></b-form-input>


<!--            <b-input v-on:blur="loadTitle(i)"-->
<!--                     v-model="note.title"-->
<!--                     v-if="notes[i].isEdit"-->
<!--                     @keydown.enter="saveNewTitle(i)"-->
<!--                     @keydown.esc="loadTitle(i)"-->
<!--                     autofocus-->
<!--            />-->

          </div>
                      <!---------------------------REMOVE NOTE------------------------------->
          <div v-if="!note.isEdit" :class="{'d-none': note.isEdit}" class="note-remove col-2 d-flex align-items-center justify-content-center">
            <div>
              <b-icon class="removeIco" icon="x-square" font-scale="1" variant="black" @click="removeNote(i)"/>
            </div>
          </div>
        </div>



        <div class="line-pattern">
          <svg fill="currentColor" role="img" aria-hidden="true">
            <title>Checker Dense</title>
            <pattern id="CheckerDense-pattern-137" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect width="1" height="1" fill="currentColor"></rect>
              <rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
            </pattern><rect width="100%" height="100%" fill="url(#CheckerDense-pattern-137)"></rect>
          </svg>
        </div>
                      <!------------------------NOTE DESCRIPTION----------------------------->
        <div class="note-description text-start  mb-auto">
          <p>{{ note.descr }}</p>
        </div>

                          <!------------------------NOTE DATE------------------------>

        <div class="note-date ">
          <div class="line-pattern">
            <svg fill="currentColor" role="img" aria-hidden="true">
              <title>Checker Dense</title>
              <pattern id="CheckerDense-pattern-137" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect width="1" height="1" fill="currentColor"></rect>
                <rect x="2" y="2" width="1" height="1" fill="currentColor"></rect>
              </pattern><rect width="100%" height="100%" fill="url(#CheckerDense-pattern-137)"></rect>
            </svg>
          </div>
          <span>{{ note.date }}</span>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapGetters, mapActions, mapMutations} from "vuex";


export default {

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
    this.notes = this.$store.getters.getNotes
  },
  computed: {
    ...mapGetters(['getNotes']),

    // nameState(i) {
    //   console.log(this.notes[i]);
    //   return this.notes[i].title.length > 2
    //
    // }
  },
  methods: {
    makeCalculate() {
      this.$moment.locale('ru')
      return this.$moment().format('LLL')
    },
    removeNote(i) {
      console.log('Note id is ' + this.notes[i].id);
      this.$store.dispatch("removeNote", i)
    },
    editNoteTitle(i) {
      this.$store.dispatch('editNoteTitle', i)
    },
    saveNewTitle(i) {
      if (this.notes[i].title.length > 2 && this.notes[i].title.length < 30) {
        let temporary = [];
        temporary.push(this.notes[i].title)
        this.notes[i].newTitle = this.notes[i].title
        this.notes[i].date = this.makeCalculate(new Date(Date.now()))
        this.notes[i].isEdit = false
        localStorage.setItem('notes', JSON.stringify(this.notes))
      } else {
        console.log('Title must be be be be be be be be');
      }

    },
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
  //display: flex;
  //align-items: stretch;
  &:hover{
    transform: translate(3%, -3%);
    -webkit-box-shadow: -8px 8px 0px 0px rgba(0,0,0,1);
    -moz-box-shadow: -8px 8px 0px 0px rgba(0,0,0,1);
    box-shadow: -8px 8px 0px 0px rgba(0,0,0,1);
  }

}
.note-body {
  height: 100%;
  transition: .2s ease-in-out;
  background-color: #fff;
}
.note {
  display: flex;
  align-items: stretch;
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
</style>