<template>
  <div>
    <h5 title="Опа... Ошибочка вышла" class="text-bg-danger rounded p-2">{{message}}</h5>
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