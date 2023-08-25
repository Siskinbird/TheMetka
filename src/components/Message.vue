<template>
  <div>
    <h4 class="text-bg-danger rounded-pill p-2">{{message}}</h4>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>