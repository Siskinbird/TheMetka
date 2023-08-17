<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{subTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'mainTitle',
  props: {
    title: String,
    subTitle: String,
  }
}
</script>