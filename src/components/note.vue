<template>
  <div class="note col-12 col-sm-6 g-4">
    <div class="note-body border border-primary rounded-top rounded-bottom shadow">
      <div class="note-header col-12 border-bottom border-primary bg-primary bg-gradient d-flex align-baseline">
        <div class="note-title col-10">
          <p class="text-light">{{ note.title }}</p>
        </div>
        <div class="note-remove col-2 d-flex align-items-center justify-content-center">
          <b-icon class="removeIco" icon="x-square" font-scale="1" variant="light"/>
        </div>
      </div>
      <div class="note-description">
        <p>{{ note.descr }}</p>
      </div>
      <div class="note-data">
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  padding: 8px;
  margin: 0;
}
//.note {
//  padding: 6px;
//}

.note-remove {
  //padding-top: 8px;
  cursor: pointer;
  transition: .3s ease-in-out;
}
</style>