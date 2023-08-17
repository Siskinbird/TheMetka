<template>
  <div class="container">
    <div id="app">
      <mainTitle title="Note App v2.1" sub-title="Hello!"/>
    </div>
  </div>
</template>

<script>


import mainTitle from "@/components/mainTitle";

export default {
  name: 'App',
  components: {
    mainTitle
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
