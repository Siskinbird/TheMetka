<template>
  <div class="notes row">

    <div class="note col-12 col-sm-6 g-4 " :class="{'grider': !grid}" v-for="(note, i) in notes" :key="i">
      <div class="note-body border border-primary rounded-top rounded-bottom shadow d-flex flex-column justify-content-between">
        <div  :class="{'bg-danger': note.selected === 'C', 'bg-warning': note.selected === 'B', 'bg-light': note.selected === 'A'}" class="note-header col-12 border-bottom border-primary rounded-top bg-primary bg-gradient d-flex align-baseline">
          <div class="note-title col-10">
            <p class="text-light">{{ note.title }}</p>
          </div>
          <div class="note-remove col-2 d-flex align-items-center justify-content-center">
            <b-icon class="removeIco" icon="x-square" font-scale="1" variant="light" @click="removeNote(i)"/>
          </div>
        </div>
        <div class="note-description">
          <p>{{ note.descr }}</p>
        </div>
        <div class="note-data">
          <span>{{ note.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {mapActions, mapGetters} from "vuex";
import search from "@/components/Search";


export default {
  props: {
    notes: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    },
    priority: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeNote(i) {
      console.log('Note id is ' + this.notes[i].id);
      this.$store.dispatch("removeNote", i)
    },
    fetchPosts() {
      this.$store.dispatch('fetchPosts')
    },
    getNoteIndex(i) {
      console.log(`${this.notes[i].id}`);
    }
  }
}

</script>

<style lang="scss" scoped>
p {
  padding: 8px;
  margin: 0;
}
.grider {
  flex: 0 0 auto;
  width: 100%;
}
//.note {
//  padding: 6px;
//}
.note-body {
  min-height: 210px;
  background-image: url("../assets/img/squared-paper-texture.jpg");
}

.note-remove {
  //padding-top: 8px;
  cursor: pointer;
  transition: .3s ease-in-out;
}
</style>