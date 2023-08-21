<template>
  <div>
    <div class="note-title mb-3 shadow-sm">
      <label for="input-live">Title:</label>
      <b-form-input
          id="input-live"
          v-model="note.title"
          :state="nameState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Введите название заметки"
          trim
      ></b-form-input>
      <b-form-invalid-feedback id="input-live-feedback">
        Название заметки должно состоять из 3х или более букв!
      </b-form-invalid-feedback>
<!--      <b-form-input type="text" v-model="note.title" required placeholder="Введите название заметки"/>-->
    </div>
    <div class="note-descr shadow-sm">
      <b-form-textarea
          id="textarea"
          v-model="note.descr"
          placeholder="Введите текст заметки..."
          rows="4"
          max-rows="6"
      ></b-form-textarea>
    </div>
    <div class="mt-4 d-flex justify-content-between">
      <b-button @click="reset" variant="danger">Сбросить</b-button>
      <b-button @click="addNote" variant="success">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  computed: {
    nameState() {
      return this.note.title.length > 2
    }
  },
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
    reset() {
      this.note.title = ''
      this.note.descr = ''
    },
    addNote() {
      let {title, descr} = this.note
      this.$store.dispatch('addNote', {
        title,
        descr,
        date: new Date(Date.now()).toLocaleString()
      })
      this.reset()
    },
  }
}
</script>