<template>
  <div>
    <div class="note-title">
      <b-form-input type="text" v-model="note.title" required placeholder="Введите название заметки"/>
    </div>
    <div class="note-descr">
      <b-form-textarea
          id="textarea"
          v-model="note.descr"
          placeholder="Введите текст заметки..."
          rows="4"
          max-rows="6"
      ></b-form-textarea>
    </div>
    <div>
      <b-button @click="setNote" variant="success">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      note: {
        title: '',
        descr: ''
      }
    }
  },
  props: {
    title: {
      type: String,
      //required: true
    },
    descr: {
      type: String,
      //required: true
    }
  },
  computed: {
    ...mapActions(['setNote'])

  },

  methods: {
    setNote() {
      //console.log(this.note)
      this.$store.dispatch('setNote', {note: this.note})
    }
  },
}
</script>