<template>
  <div>
    <h5 class="text-bg-danger rounded-pill p-2">{{message}}</h5>
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