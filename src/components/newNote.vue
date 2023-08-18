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
      <b-button @click="addNote" variant="success">Сохранить</b-button>
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
    },
    descr: {
      type: String,
    }
  },

  methods: {
    addNote() {
      let {title, descr} = this.note
      this.$store.dispatch('addNote', {
        title,
        descr,
        date: new Date(Date.now()).toLocaleString()
      })
    }
  }
}
</script>