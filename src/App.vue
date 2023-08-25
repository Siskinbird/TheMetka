<template>
  <div class="container border border-success mt-4 mb-4 pb-4 rounded-top rounded-bottom shadow-lg">
    <div id="app">
                  <!--H1 MAIN TITLE-->
      <mainTitle title="Note App v2.1" sub-title="Hello!"/>

                <!--NEW NOTE COMPONENT-->
      <newNote :note="note"/>

                  <!--NOTES COMPONENT-->
      <notes :notes="getNotes"/>
    </div>
  </div>
</template>

<script>


import mainTitle from "@/components/MainTitle";
import notes from "@/components/Notes";
import newNote from "@/components/NewNote";
import {mapGetters} from "vuex";


export default {
  components: {
    notes,
    mainTitle,
    newNote
  },
  computed: {
    ...mapGetters(['getNotes']),
  },
  data () {
    return {
      note: {
        title: '',
        descr: '',
        date: new Date(Date.now()).toLocaleString()
      },
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
