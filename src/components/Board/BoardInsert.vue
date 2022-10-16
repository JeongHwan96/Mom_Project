<template>
  <div>
    <Header_Part />
    <div class="container">
      <h3>게시글 작성</h3>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-input
          id="input-1"
          v-model="form.title"
          placeholder="제목"
          type="text"
          required
        ></b-form-input>

        <b-form-group
          id="input-group-2"
          label-for="input-2"
          class="content-area"
        >
          <vue-editor
            v-model="form.content"
            id="input-2"
            required
            class="content"
          ></vue-editor>
        </b-form-group>

        <div class="btn-area">
          <b-button type="submit">글쓰기 완료</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import Header_Part from "../Header_Part.vue";
import { VueEditor } from "vue2-editor";

export default {
  components: { Header_Part, VueEditor },
  data() {
    return {
      content: "<h1>Some initial content</h1>",
      form: {
        title: "",
        content: "",
      },

      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.title = "";
      this.form.content = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
h3 {
  margin-bottom: 10px;
}

.content {
  height: 500px;
}
.content-area {
  margin-top: 10px;
}
.btn-area {
  display: flex;
  justify-content: right;
  margin-top: 80px;
}
#input-1 {
  height: 80px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
}

#input-1::placeholder {
  font-size: 1.5rem;
}
.form-control:focus {
  border-color: inherit !important;
  box-shadow: inherit !important;
}
</style>
