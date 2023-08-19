<template>
  <div class="notes row">
    <note v-for="(note, i) in getNotes" :key="i" :note="note"/>
  </div>
</template>


<script>
import {mapGetters} from "vuex";
import note from "@/components/note";

export default {
  components: {note},
  computed: {
    ...mapGetters(['getNotes'])
  }
}
</script>
