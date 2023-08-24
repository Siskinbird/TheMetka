<template>
  <div class="container border border-success mt-4 mb-4 pb-4 rounded-top rounded-bottom shadow-lg">
    <div id="app">
      <mainTitle title="Note App v2.1" sub-title="Hello!"/>
      <newNote :note="note"/>
      <notes :notes="$store.getters.getNotes"/>
    </div>
  </div>
</template>

<script>


import mainTitle from "@/components/mainTitle";
import notes from "@/components/notes";
import newNote from "@/components/newNote";

export default {
  components: {
    notes,
    mainTitle,
    newNote
  },
  data () {
    return {
      note: {
        title: '',
        descr: '',
        //nameState: null,
        date: new Date(Date.now()).toLocaleString()
      }
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
