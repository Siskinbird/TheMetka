<template>
  <div class="container border border-success mt-4 mb-4 pb-4 rounded-top rounded-bottom shadow-lg">
    <div id="app">
                  <!--H1 MAIN TITLE-->
      <mainTitle title="Note App v2.1" sub-title="Hello!"/>

                <!--NEW NOTE COMPONENT-->
      <newNote :note="note"/>


      <search
          :value="search"
          @search="search = $event"
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
import {mapActions, mapGetters} from "vuex";


export default {
  components: {
    notes,
    mainTitle,
    newNote,
    search
  },
  data() {
    return {
      search: '',
      note: {
        title: '',
        descr: '',
        date: new Date(Date.now()).toLocaleString()
      },
      notes: this.$store.state.notes.notes,
    }
  },

  computed: {
    notesFilter() {
      let array = this.notes,
          search = this.search
      if(!search) return array
      //Small
      search = search.trim().toLowerCase()
      //Filter
      array = array.filter(function(item) {
        if(item.title.toLowerCase().indexOf(search) !== -1) {
          return item
        }
      })
      //Error
      console.log(array);
      return array
    },

    // ...mapGetters(['getNotes','getPosts']),
    //...mapActions(['setNotes']),

    // notesFilter() {
    //   let notesArr = this.notes,
    //       search = this.search
    //   //Blank title
    //   if(!search) {
    //     return notesArr
    //   } else {
    //     //Filter
    //     search = search.trim().toLowerCase()
    //     notesArr = notesArr.filter(function(item) {
    //       if(item.title.toLowerCase().indexOf(search) !== -1) {
    //         return item
    //       }
    //     })
    //     //Error
    //     return notesArr
    //   }
    // }
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
