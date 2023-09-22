<template>
  <div class="notes row">
                            <!------------------------GRID TOGGLE------------------------>
    <div class="note col-12 col-sm-6 g-4 " :class="{'grid': !grid}" v-for="(note, i) in notes" :key="i">
      <div class="note-body
               border
               border-primary
               rounded-top
               rounded-bottom
               shadow
               d-flex
               flex-column
               justify-content-between"
      >

                              <!------------------------PRIORITY CLASS TOGGLE------------------------>
        <div :class="{ 'bg-danger': note.priority === 'Height', 'bg-warning': note.priority === 'Medium', 'bg-primary': note.priority === 'Default' }"
             class=
                 "note-header
                  col-12
                  border-bottom
                  border-primary
                  rounded-top
                  bg-primary
                  bg-gradient
                  d-flex
                  align-baseline"
        >

                        <!---------------------------NOTE TITLE--------------------------->
          <div class="note-title col-10">
            <p id="paragraph"
               role='button'
               class="text-light ml-40px"
               v-if="!notes[i].isEdit"
               @click="editNoteTitle(i)">{{ note.title }}
            </p>

                    <!---------------------------NOTE TITLE CHANGER INPUT--------------------------->
            <b-input v-on:blur="notes[i].isEdit = false"
                     v-model="note.title"
                     v-if="notes[i].isEdit"
                     @keydown.enter="saveNewTitle(i)"
                     @keydown.esc="loadTitle(i)"
                     autofocus
            />
          </div>

                      <!---------------------------REMOVE NOTE------------------------------->
          <div class="note-remove col-2 d-flex align-items-center justify-content-center">
            <b-icon class="removeIco" icon="x-square" font-scale="1" variant="light" @click="removeNote(i)"/>
          </div>
        </div>

                      <!------------------------NOTE DESCRIPTION----------------------------->
        <div class="note-description">
          <p>{{ note.descr }}</p>
        </div>

                          <!------------------------NOTE DATE------------------------>
        <div class="note-data m-2">
          <span>{{ note.date }}</span>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
import {mapGetters, mapActions, mapMutations} from "vuex";

export default {
  data() {
    return {
      test: []
    }
  },
  props: {
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
      this.$store.dispatch('pushLocalNotes')
    // let data = localStorage.getItem('notes')
    // console.log(data);
    // this.test = JSON.parse(data)
    // console.log(this.test)
  },
  methods: {
    removeNote(i) {
      console.log('Note id is ' + this.notes[i].id);
      this.$store.dispatch("removeNote", i)
    },
    editNoteTitle(i) {
      this.$store.dispatch('editNoteTitle', i)
    },
    saveNewTitle(i) {
      let temporary = []
      temporary.push(this.notes[i].title)
      this.notes[i].newTitle = this.notes[i].title
      this.notes[i].date = new Date(Date.now()).toLocaleString()
      this.notes[i].isEdit = false
      // this.$store.dispatch('saveNewTitle', i);
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
.note {
  transition: .3s ease-in-out;
  &:hover {
    scale: 102%;
  }
}
p {
  padding: 8px;
  margin: 0;
}
.grid {
  flex: 0 0 auto;
  width: 100%;
}

.note-body {
  min-height: 210px;
  background-image: url("../assets/img/squared-paper-texture.jpg");
}

.ml-40px {
  margin-left: 40px;
}

.note-remove {
  //padding-top: 8px;
  cursor: pointer;
  transition: .3s ease-in-out;
}
</style>