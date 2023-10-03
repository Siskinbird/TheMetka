<template>
  <section class="new-note">
    <!--DANGER MESSAGE-->
    <message v-if="message" :message="message"/>
    <div class="note-title mb-3 mt-3 shadow-sm">

      <!--TITLE INPUT-->
      <b-form-input
          title="Сюда нужно ввести заголовок заметки"
          class="title-input"
          id="input-live"
          v-model="note.title"
          :state="nameState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Введите название заметки"
          trim
      />

      <!--DANGER FEEDBACK MESSAGE-->
      <b-form-invalid-feedback id="input-live-feedback">
        Название заметки должно состоять из 3х или более букв!
      </b-form-invalid-feedback>
    </div>

      <!--NOTE DESCRIPTION-->
    <div class="note-descr shadow-sm">
      <b-form-textarea
          title="Это поле ждёт только самые светлые мысли!"
          id="textarea"
          v-model="note.descr"
          placeholder="Введите текст заметки..."
          rows="4"
          max-rows="6"
      />
    </div>

    <div class="button-block mt-4 d-flex justify-content-end align-items-center flex-column flex-sm-row">
    <!--CHECK PRIORITY-->
    <b-form-select
        title="Выберите приоритет"
        v-model="note.priority"
        :options="note.options"
        class="select rounded mx-sm-2 col-12 col-md-3 col-sm-4"
    >
    </b-form-select>

    <!--ACCEPT BUTTON-->

      <button title="Сохранить заметку" @click="addNote" class="btn-l btn-ok col-12 col-md-3 col-sm-4 mt-sm-0 mt-3 rounded">Сохранить</button>


      <!--RESET BUTTON-->
<!--      <button title="Сбросить все поля" @click="reset" class="btn-l btn-cancel col-12 col-md-3 col-sm-4 mb-sm-0 mb-3 rounded">Сбросить</button>-->
    </div>
  </section>
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
    nameState() {
      if (this.note.title.length === 0) {
        return this.note.nameState = null
      } else if (this.note.title.length > 27) {
        return false
      } else return this.note.title.length > 2;
    }
  },

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

    addNote() {
      if (this.note.title.length < 2) {
        this.message = 'Title can`t be empty'
        console.log('Title can`t be empty');
      } else if (this.note.descr === '') {
        this.message = 'Description can`t be empty'
        console.log('Description can`t be empty');
      }
      else if (this.note.title.length > 29) {
        console.log('Title must be les 30 letter');
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
  min-height: 42px;
  text-align: center;
  @media (max-width: 575px) {
    margin-top: 6px;
    margin-bottom: 6px;
  }
}

  .btn-l {
    background: 0 0;
    border: 1px solid #3498DB;
    color: #3498DB;
    transition: all .5s;
    padding: 7px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 2px;
    //margin: 5px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &:hover, &:focus {
      color: #fff;
      background: #3498DB;
    }
  }
.btn-ok {
  border-color: #009e7e;
  color: #009e7e;
  &:hover, &:focus {
    background: #009e7e;
  }
}
.btn-cancel {
  border-color: #cd201f;
  color: #cd201f;
  &:hover, &:focus {
    background: #cd201f;
  }
}
.accept-button {

}
.reset-button {

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