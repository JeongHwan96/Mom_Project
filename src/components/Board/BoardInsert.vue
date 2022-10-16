<template>
  <div>
    <Header_Part />
    <div class="container">
      <h3>게시글 작성</h3>

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="제목"
          label-for="input-1"
          class="title-area"
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            type="text"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="내용"
          label-for="input-2"
          class="content-area"
        >
          <b-form-input
            id="input-2"
            v-model="form.content"
            required
            class="content"
          ></b-form-input>
        </b-form-group>
        <br />
        <div class="btn-area">
          <b-button type="submit" variant="primary">Submit</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import Header_Part from "../Header_Part.vue";

export default {
  components: { Header_Part },
  data() {
    return {
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
  padding-top: 30px;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
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
}
</style>
