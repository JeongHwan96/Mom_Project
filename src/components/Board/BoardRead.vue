<template>
  <div>
    <Header_Part />
    <div class="readArea">
      <div class="readTitle">
        <p>글제목</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header_Part from "../Header_Part.vue";
export default { components: { Header_Part } };
</script>

<style>
.readArea {
  border: 0.5px solid gray;
  height: 800px;
  width: 1000px;
  margin: 40px 600px;
}

.readTitle {
  height: 1000px;
  height: 58px;
  border-bottom: 0.5px solid gray;
}
</style>
