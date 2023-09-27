<template>
  <div class="new-note">
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

    <div class="button-block mt-4 d-flex justify-content-between flex-column flex-sm-row">
      <b-button @click="addNote" variant="success" size="lg" class="col-12 col-md-3 col-sm-4 mt-sm-0 mt-3">Сохранить</b-button>
      <b-form-select
          v-model="note.priority"
          :options="note.options"
          class="select rounded mx-sm-2"
          >
      </b-form-select>
      <b-button @click="reset" variant="danger" size="lg" class="col-12 col-md-3 col-sm-4 mb-sm-0 mb-3">Сбросить</b-button>
    </div>
  </div>
</template>

<script>
import message from "@/components/Message";
import notes from "@/store/modules/notes";
import moment from "moment";
import {mapGetters} from "vuex";



export default {
  components: {
    message
  },
  data() {
    return {
      message: null,
      notes: [],
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
    // ...mapGetters['getMoment'],
    nameState() {
      if (this.note.title.length === 0) {
        return this.note.nameState = null
      } else if (this.note.title.length > 27) {
        return false
      } else return this.note.title.length > 2;
    }
  },
  // created() {
  //   window.addEventListener('storage', () => {
  //     console.log("This is localChanger");
  //   })
  // },
  methods: {
    makeCalculate() {
      this.$moment.locale('ru')
      return this.$moment().format('LLL')
    },
    reset() {
      this.note.title = ''
      this.note.descr = ''
      this.message = null
      this.note.isEdit = false
      this.note.priority = 'Default'
    },
    // addLocalNote() {
    //   if ((this.note.title.length > 2) && (this.note.descr !== '')) {
    //     let {title, descr, priority } = this.note
    //     this.$store.dispatch('addLocalNote', {
    //       id: this.$store.getters.getLocalNotes.length + 1,
    //       title,
    //       newTitle: title,
    //       descr,
    //       isEdit: false,
    //       priority,
    //       date: new Date(Date.now()).toLocaleString()
    //     })
    //     }
    //   }
    // },
    addNote() {
      if (this.note.title.length < 2) {
        this.message = 'Title can`t be empty'
      } else if (this.note.title.length > 29) {
        return this.message = 'Title must be les 30 letter'
      } else {
        let {title, descr, priority} = this.note
        this.$store.dispatch('addNote', {
          id: Date.now().toString(),
          title,
          newTitle: title,
          descr,
          isEdit: false,
          priority,
          date: this.makeCalculate(new Date(Date.now())),
        })

        this.reset()
            //return this.message = 'zbs'

      }
    }
  }
}
</script>
<style lang="scss" scoped>
.select {
  max-width: 100%;
  min-height: 48px;
  text-align: center;
  @media (max-width: 575px) {
    margin-top: 6px;
    margin-bottom: 6px;
  }
}
//.new-note {
//  z-index: 4;
//}
  //.button-block {
  //  @include media-breakpoint-down() {
  //    flex-direction: column;
  //    justify-content: center;
  //  }
  //}
</style>