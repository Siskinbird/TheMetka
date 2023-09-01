<template>
  <div class="search mt-4">
    <b-form-input class="test-input col-8" type="search" v-model="search" :placeholder="placeholder"/>
<!--      <b-icon class="test-position col-2" icon="search" font-scale="1"></b-icon>-->
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
//.search {
//  display: flex;
//  align-items: center;
//}
//input {
//  padding-left: 32px;
//}
//.test-input {
//  &::placeholder {
//    padding-left: 20px;
//  }
//}
//.test-position {
//  margin-left: -420px;
//}
</style>