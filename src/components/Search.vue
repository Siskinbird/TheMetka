<template>
  <section title="Поиск по заметкам" class="search col-12 col-sm-10">
    <b-form-input type="search" v-model="search" :placeholder="placeholder"/>
  </section>
</template>
<script>
export default  {
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Поиск...'
    }
  },
  data() {
    return {
      search: this.value
    }
  },
  watch: {
    search(val) {
      this.$emit('search', val);
      console.log(val);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>