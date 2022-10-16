<template>
  <div>
    <Mom_Header />
    <div class="overflow-auto container">
      <h3>게시글 목록</h3>
      <b-table
        striped
        hove
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
      ></b-table>
      <div class="btn-area">
        <button class="btn-write" @click="goWrite">글쓰기</button>
      </div>
      <div class="pagination">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>

      <!-- <p class="mt-3">Current Page: {{ currentPage }}</p> -->
    </div>
  </div>
</template>

<script>
import Mom_Header from "../Mom_Header.vue";

export default {
  data() {
    return {
      perPage: 15,
      currentPage: 1,
      items: [
        { NO: 19, Title: "글제목19", 작성자: "Shaw", 작성일: "2022-10-15" },
        { NO: 18, Title: "글제목18", 작성자: "Shaw", 작성일: "2022-10-15" },
        { NO: 17, Title: "글제목17", 작성자: "Shaw", 작성일: "2022-10-15" },
        { NO: 16, Title: "글제목16", 작성자: "Shaw", 작성일: "2022-10-15" },
        { NO: 15, Title: "글제목15", 작성자: "Wilson", 작성일: "2022-10-15" },
        { NO: 14, Title: "글제목14", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 13, Title: "글제목13", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 12, Title: "글제목12", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 11, Title: "글제목11", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 10, Title: "글제목10", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 9, Title: "글제목9", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 8, Title: "글제목8", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 7, Title: "글제목7", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 6, Title: "글제목6", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 5, Title: "글제목5", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 4, Title: "글제목4", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 3, Title: "글제목3", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 2, Title: "글제목2", 작성자: "Carney", 작성일: "2022-10-15" },
        { NO: 1, Title: "글제목1", 작성자: "Carney", 작성일: "2022-10-15" },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  components: { Mom_Header },
  methods: {
    goWrite() {
      this.$router.push({ path: "/board/insert" });
    },
  },
};
</script>

<style scoped>
.container {
  padding-right: 200px;
  padding-left: 200px;
}
h3 {
  padding-top: 30px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
}

.pagination {
  display: flex;
  justify-content: center;
}

.btn-write {
  width: 80px;
  height: 30px;
  border: 0;
  border-radius: 6px;
  background: gray;
  margin: 0;
  color: white;
}

.btn-area {
  display: flex;
  justify-content: right;
}
</style>
