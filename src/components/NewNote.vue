<template>
  <div>

    <!--DANGER MESSAGE-->
    <message v-if="message" :message="message"/>
    <div class="note-title mb-3 shadow-sm">
<!--      <label for="input-live">Title:</label>-->
      <b-form-input
          class="title-input"
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
      <b-button @click="reset" variant="danger" class="col-2">Сбросить</b-button>
      <b-button @click="addNote" variant="success" class="col-2">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
import message from "@/components/Message";



export default {
  components: {
    message
  },
  data() {
    return {
      message: null,
      note: {
        title: '',
        descr: '',
        nameState: null
      }
    }
  },
  computed: {
    nameState() {
      if (this.note.title.length === 0) {
        return this.note.nameState = null
      } else return this.note.title.length > 2;
    }
  },
  methods: {
    reset() {
      this.note.title = '',
          this.note.descr = '',
          this.message = null
    },
    addNote() {
      if ((this.note.title.length > 2) && (this.note.descr !== '')) {
        let {title, descr} = this.note
        this.$store.dispatch('addNote', {
          id: this.$store.getters.getNotes.length + 1,
          title,
          descr,
          date: new Date(Date.now()).toLocaleString()
        })
        this.reset()
      } else {
        this.message = 'Title can`t be empty'
        console.log('Title not be a empty')
      }
    }
  }
}
</script>