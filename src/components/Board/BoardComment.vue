<template>
  <div>
    <div :key="index" v-for="(item, index) in comments">
      <!-- board.js의 comment 배열에서 해당 글에 맞는 댓글만 가져오기 위해  -->
      <CommentList />
    </div>
  </div>
</template>

<script>
import board from "@/Data/data.js";
import CommentList from "./CommentList.vue";
export default {
  name: "BoardComment",
  props: {
    contentId: Number, //게시글 읽기에서 프롭스를 받아 글번호가 몇 번인지 받아왔음
  },
  data() {
    return {
      comments: board.Comment.filter(
        (item) => item.content_id === this.contentId
      ),
    };
  },
  components: { CommentList },
};
</script>

<style></style>
