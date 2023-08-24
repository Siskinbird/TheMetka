<template>
  <div class="notes row">
    <note v-for="(note, i) in getNotes" :key="i" :note="note"/>
  </div>
</template>


<script>
import {mapActions, mapGetters} from "vuex";
import note from "@/components/note";

export default {
  components: {note},
  props: {
    notes: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters(['getNotes']),
  },
  methods: {
    getNoteIndex(i) {
      console.log(`${i}`);
    }
  }
}
</script>
