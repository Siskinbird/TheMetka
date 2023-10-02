<template>
  <div>
      <h1 class="app-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'mainTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>

.app-title {
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
  h1{
    text-align: right;
  }
}
</style>