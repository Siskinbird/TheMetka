<template>
  <div class="notes row">
    <note v-for="(note, i) in notes" :key="i" :note="note"/>
  </div>
</template>


<script>
import {mapGetters} from "vuex";
import note from "@/components/note";

export default {
  components: {note},
  data() {
    return {
      notes: []
    }
  },
  computed: {
    ...mapGetters(['getNotes'])
  },
  created() {
    this.notes = this.getNotes
  }
}
</script>
