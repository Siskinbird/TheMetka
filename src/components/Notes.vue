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
        <div :class="{ 'bg-danger': note.selected === 'C', 'bg-warning': note.selected === 'B', 'bg-primary': note.selected === 'A' }"
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
            <p id="paragraph" class="text-light ml-40px d-block" v-on:focus="editNoteTitle(i)" v-if="!notes[i].isEdit" @click="editNoteTitle(i)">{{ note.title }}</p>

                    <!---------------------------NOTE TITLE CHANGER INPUT--------------------------->
            <b-input id="hiddenInput"
                     v-on:blur="notes[i].isEdit = false"
                     v-model="note.title"
                     :value="note.title"
                     v-if="notes[i].isEdit"
                     @keydown.enter="notes[i].isEdit = false"
                     @keydown.esc="notes[i].isEdit = false"

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

export default {
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
  methods: {
    // foc() {
    //   document.getElementById('hi').focus()
    //   //this.$refs.myInput.focus();
    // },
    removeNote(i) {
      console.log('Note id is ' + this.notes[i].id);
      this.$store.dispatch("removeNote", i)
    },
    editNoteTitle(i) {
      console.log(this.notes[i].title);
      let bue = document.getElementById('paragraph')
      let test =  document.getElementById('hiddenInput')
      bue.addEventListener('click', () => {
       test.focus()
     })
      this.$store.dispatch('editNoteTitle', i)
    },
    // returnOldTitle(i) {
    //   this.notes[i].title = this.$store.state.notes[i].title;
    //   this.notes[i].isEdit = false
    // }
    // test(i) {
    //   this.editNoteTitle(i)
    //   this.foc();
    // },

    // fetchPosts() {
    //   this.$store.dispatch('fetchPosts')
    // },
    // getNoteIndex(i) {
    //   console.log(`${this.notes[i].id}`);
    // }
  }
}

</script>

<style lang="scss" scoped>
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