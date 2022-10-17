<template>
  <div>
    <HeaderHe />
    <div class="boardBar">
      <div class="boardList">BOARD > LIST</div>
    </div>
    <div class="overflow-auto container">
      <h3>게시글 목록</h3>
      <b-table
        striped
        hove
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        @row-clicked="rowClick"
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
          class="customPagination"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderHe from "../HeaderHe.vue";

export default {
  data() {
    return {
      perPage: 15,
      currentPage: 1,
      items: [
        {
          NO: 19,
          Title: "답답하면 니들이 뛰던지",
          작성자: "Shaw",
          작성일: "2022-10-15",
        },
        {
          NO: 18,
          Title: "오늘 경기 첼시가 이길듯",
          작성자: "Shaw",
          작성일: "2022-10-15",
        },
        {
          NO: 17,
          Title: "토트넘 화이팅",
          작성자: "Shaw",
          작성일: "2022-10-15",
        },
        {
          NO: 16,
          Title: "축구 왤케 못함",
          작성자: "Shaw",
          작성일: "2022-10-15",
        },
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
  components: { HeaderHe },
  methods: {
    goWrite() {
      this.$router.push({ path: "/board/insert" });
    },
    rowClick(items) {
      this.$router.push({ path: `/board/read/${items.NO}` });
    },
  },
};
</script>

<style scoped>
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

.boardBar {
  background: url("@/assets/weekly/throphy3.jpg") 3% no-repeat;
  background-size: cover;
  height: 400px;
  margin-top: 100px;
}

.boardList {
  text-align: center;
  color: rgb(226, 185, 108);
  font-size: 3rem;
  font-weight: bold;
  line-height: 400px;
}

#my-table {
  cursor: pointer;
}
</style>
