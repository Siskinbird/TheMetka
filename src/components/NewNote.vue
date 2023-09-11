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
      />
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
      />
    </div>
<!--    <div class="note-priority">-->

<!--    </div>-->
    <div class="mt-4 d-flex justify-content-between">
      <b-button @click="reset" variant="danger" size="sm" class="col-4 col-md-3">Сбросить</b-button>
      <b-form-select
          v-model="note.selected"
          :options="note.options"
          size="sm"
          class="mt-3">
      </b-form-select>

      <b-dropdown text="Приоритет" size="md">
        <b-dropdown-item @click="note.priority.height = true">Очень важный</b-dropdown-item>
        <b-dropdown-item @click="note.priority.medium = true">Важный</b-dropdown-item>
        <b-dropdown-item @click="note.priority.default = true">Обычный</b-dropdown-item>
      </b-dropdown>

      <b-button @click="addNote" variant="success" size="sm" class="col-4 col-md-3">Сохранить</b-button>
    </div>
  </div>
</template>

<script>
import message from "@/components/Message";
import {options} from "axios";



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
        nameState: null,
        priority: {
          default: false,
          height: false,
          medium: false
        },
        selected: 'A',
        options: [
          { value: 'A', text: 'Стандартный'},
          { value: 'B', text: 'Средний' },
          { value: 'C', text: 'Высокий' }
        ]

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
    // setHeightPriority() {
    //     this.note.priority.default = false
    //     this.note.priority.height = true
    //     this.note.priority.medium = false
    // },
    // setMediumPriority() {
    //   this.note.priority.default = false
    //       this.note.priority.height = false
    //       this.note.priority.medium = true
    // },
    // setDefaultPriority() {
    //   this.note.priority.default = true
    //       this.note.priority.height = false
    //       this.note.priority.medium = false
    // },
    reset() {
      this.note.title = ''
      this.note.descr = ''
      this.message = null
      this.note.priority = {
        default: false,
        height: false,
        medium: false
      }
    },
    addNote() {
      if ((this.note.title.length > 2) && (this.note.descr !== '')) {
        let {title, descr, priority, selected} = this.note
        this.$store.dispatch('addNote', {
          id: this.$store.getters.getNotes.length + 1,
          title,
          descr,
          priority,
          selected,
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
<style lang="scss" scoped>

</style>