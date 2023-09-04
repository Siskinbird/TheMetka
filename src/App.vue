<template>
  <div class="container border border-success mt-4 mb-4 pb-4 rounded-top rounded-bottom shadow-lg">
    <div id="app">
                  <!--H1 MAIN TITLE-->
      <mainTitle title="Note App v2.1" sub-title="Hello!"/>

                <!--NEW NOTE COMPONENT-->
      <newNote :note="note"/>


      <search
          :search="search"
          @search="search = $event"
          value=""
      />

                  <!--NOTES COMPONENT-->
      <notes
          :notes="notesFilter"
      />
    </div>
  </div>
</template>"

<script>


import mainTitle from "@/components/MainTitle";
import notes from "@/components/Notes";
import search from "@/components/Search";
import newNote from "@/components/NewNote";
import { mapGetters } from "vuex";


export default {
  components: {
    notes,
    mainTitle,
    newNote,
    search
  },
  data() {
    return {
      id: notes.length + 1,
      search: '',
      note: {
        title: '',
        descr: '',
        date: new Date(Date.now()).toLocaleString()
      },
      notes: this.getNotes,
    }
  },

  computed: {
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
#app {
  font-family: $font-family-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
