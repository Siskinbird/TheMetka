<template>
  <div class="search col-12 col-sm-10">
    <b-form-input type="search" v-model="search" :placeholder="placeholder"/>
  </div>
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
      default: 'Search'
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