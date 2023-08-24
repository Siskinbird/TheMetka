<template>
  <div class="notes row">
    <div class="note col-12 col-sm-6 g-4" v-for="(note, i) in getNotes" :key="i">
      <div class="note-body border border-primary rounded-top rounded-bottom shadow">
        <div class="note-header col-12 border-bottom border-primary bg-primary bg-gradient d-flex align-baseline">
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
<!--    <note v-for="(note, i) in getNotes" :key="i" :note="note"/>-->
  </div>
</template>


<script>
import {mapActions, mapGetters} from "vuex";


export default {
  props: {
    notes: {
      type: Array,
      required: true
    },
  },
  computed: {
    ...mapGetters(['getNotes']),
  },
  methods: {
    removeNote(i) {
      console.log(i);
      this.$store.dispatch("removeNote", i)
    }
  },
    getNoteIndex(i) {
      console.log(`${i}`);
    }
}
</script>

<style lang="scss" scoped>
p {
  padding: 8px;
  margin: 0;
}
//.note {
//  padding: 6px;
//}

.note-remove {
  //padding-top: 8px;
  cursor: pointer;
  transition: .3s ease-in-out;
}
</style>