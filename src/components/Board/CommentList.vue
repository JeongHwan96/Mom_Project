<template>
  <div>
    <div class="comment-area">
      <div class="comment-writer-area">
        <div>{{ commentWriter }}</div>
      </div>
      <div class="comment-context-area">{{ Comment.context }}</div>
      <div class="comment-button-area">
        <button class="material-icons" @click="editComment">edit</button>
        <button class="material-icons" @click="deleteComment">
          delete_outline
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import board from "@/Data/data.js";
export default {
  name: "CommentList",
  props: {
    Comment: Object,
  },
  components: {},
  data() {
    return {
      commentWriter: board.User.filter(
        (item) => item.user_id === this.Comment.user_id
      )[0].name,
      // data.js의 comment배열에 userName이 없으므로 user배열에 있는것과 연결시켜주기
    };
  },
  methods: {
    editComment() {
      alert(2222);
    },
    deleteComment() {
      alert(1111);
      const deleteComment = board.Comment.findIndex(
        (item) => item.comment_id === this.comment_id
      );
      board.Comment.splice(deleteComment, 1);
    },
  },
};
</script>

<style>
.comment-area {
  display: flex;
  justify-content: space-between;
}
.comment-writer-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: left;
  border-top: 0.3px solid gray;

  padding: 1em;
  width: 150px;
  height: 40px;
  font-weight: bold;
}
.comment-context-area {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66em;
  height: 40px;
  border-top: 0.3px solid gray;
}
.comment-button-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 0.3px solid gray;

  height: 40px;
  padding: 1em;
}
.btn {
  margin-bottom: 1em;
}
.update-comment,
.delete-comment {
  width: 50px;
  height: 30px;
}
button .comment-list-item-subcomment-list {
  display: flex;
  justify-content: space-between;
  padding-bottom: 1em;
  margin-left: 10em;
}
.material-icons {
  border: 0;
  margin: 4px;
}
</style>
