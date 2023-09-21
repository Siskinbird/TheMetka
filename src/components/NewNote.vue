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
    <div class="button-block mt-4 d-flex justify-content-between flex-column flex-sm-row">
      <b-button @click="reset" variant="danger" size="sm" class="col-12 col-md-3 col-sm-4 mb-sm-0 mb-3">Сбросить</b-button>
      <b-form-select
          v-model="note.priority"
          :options="note.options"
          class="select rounded mx-sm-2"
          >
      </b-form-select>

<!--      <b-dropdown text="Приоритет" size="md">-->
<!--        <b-dropdown-item @click="note.priority.height = true">Очень важный</b-dropdown-item>-->
<!--        <b-dropdown-item @click="note.priority.medium = true">Важный</b-dropdown-item>-->
<!--        <b-dropdown-item @click="note.priority.default = true">Обычный</b-dropdown-item>-->
<!--      </b-dropdown>-->

      <b-button @click="addNote" variant="success" size="sm" class="col-12 col-md-3 col-sm-4 mt-sm-0 mt-3">Сохранить</b-button>
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
        newTitle: '',
        descr: '',
        nameState: null,
        priority: 'Default',
        options: [
          { value: 'Default', text: 'Стандартный'},
          { value: 'Medium', text: 'Средний' },
          { value: 'Height', text: 'Высокий' }
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
      this.note.priority = 'Default'
    },
    addNote() {
      if ((this.note.title.length > 2) && (this.note.descr !== '')) {
        let {title, descr, priority} = this.note
        this.$store.dispatch('addNote', {
          id: this.$store.getters.getNotes.length + 1,
          title,
          descr,
          priority,
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
.select {
  max-width: 100%;
  min-height: 31px;
}
  //.button-block {
  //  @include media-breakpoint-down() {
  //    flex-direction: column;
  //    justify-content: center;
  //  }
  //}
</style>