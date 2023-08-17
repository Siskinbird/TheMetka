<template>
  <div class="notes row">
    <div class="note col-12 col-sm-6 g-2" v-for="(note, i) in this.getNotes" :key="i" >
      <div class="note-body border border-primary rounded-top rounded-bottom">


<!--        Header note, must contain remove button-->
        <div class="note-header col-12 border-bottom border-primary bg-primary bg-gradient">
          <div class="note-title col-10">
            <p class="text-light">{{note.title}}</p>
          </div>
          <div class="note-remove col-2">
            <b-icon class="removeIco" icon="x-square" font-scale="1"/>
          </div>
        </div>




        <div class="note-description">
          <p>{{note.descr}}</p>
        </div>
        <div class="note-data">
          <span>{{note.date}}</span>
        </div>
      </div>
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
<style lang="scss" scoped>
p {
  padding: 8px;
  margin: 0;
}
</style>