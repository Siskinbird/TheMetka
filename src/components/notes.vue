<template>
  <div class="notes">
    <div class="note" v-for="(note, i) in this.getNotes" :key="i" >
<!--      <p>{{note}}</p>-->
      <div class="note-title">
        <p>{{note.title}}</p>
      </div>
      <div class="note-description">
        <p>{{note.descr}}</p>
      </div>
      <div class="note-data">
        <span>{{note.date}}</span>
      </div>
<!--      <div class="note-wrapper">-->
<!--        <div class="note-title"><p>{{note.title}}</p></div>-->
<!--        <div class="note-descr"><p>{{note.descr}}</p></div>-->
<!--        <div class="note-date">{{note.date}}</div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'notes',
  computed: {
    ...mapGetters(['getNotes'])
  },
}
</script>