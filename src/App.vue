<template>
  <div class="bg">

  <div class="wrapper">
    <!--  APP MAIN CONTAINER-->
    <div class="container border border-secondary pb-4 rounded-top rounded-bottom shadow-lg">
      <div id="app">


        <!--H1 MAIN TITLE-->
      <app-header/>

        <!--NEW NOTE COMPONENT-->
        <newNote :note="note"/>

        <!--SEARCH ABD GRID CONTAINER-->
        <div class="flex-wrapper d-flex justify-content-between mt-4">
          <search
              :search="search"
              @search="search = $event"
              value=""
          />
          <div class="note-icons col-2 pt-1 d-none d-sm-block">
            <svg :class="{ active: grid }" class="grid-ico" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <title>Отобразить плиткой</title>
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <svg :class="{ active: !grid }" class="grid-ico" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <title>Отобразить строкой</title>
              <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line>
              <line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line>
              <line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>
            </svg>
          </div>
        </div>

        <!--NOTES COMPONENT-->
        <notes
            :notes="notesFilter"
            :grid="grid"
            :priority="note.priority"
        />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
document.title = 'TheМетки'

import mainTitle from "@/components/MainTitle";
import notes from "@/components/Notes";
import search from "@/components/Search";
import newNote from "@/components/NewNote";
import {mapActions, mapGetters} from "vuex";
import appHeader from "@/components/AppHeader";


export default {
  components: {
    appHeader,
    notes,
    mainTitle,
    newNote,
    search
  },
  data() {
    return {
      id: Date,
      search: '',
      grid: true,
      note: {
        isEdit: false,
        title: '',
        newTitle: '',
        descr: '',
        date: new Date(Date.now()).toLocaleString(),
      },
      notes: this.getNotes,
    }
  },

  computed: {
    ...mapActions(['removeNote']),
    ...mapGetters(['getSearchNotes', "getNotes"]),
    notesFilter () {
      return this.getSearchNotes(this.search)
    }
  },

}

</script>

<style lang="scss">
//Variables
$font-family-base: Montserrat, Helvetica, Arial, sans-serif;

//Mine
body {
  background: #FFF0E5 url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><circle r="2" fill="%23888" /></svg>') repeat !important;
}

.bg {

  //width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  //height: 100%;
}
#app {
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.wrapper {
  max-width: 880px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.container {
  background-color: #FFF0E5;
}
.grid-ico {
  cursor: pointer;
  transition: .3s ease-in-out;
  &:hover {
    scale: 113%;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  }
}

</style>
