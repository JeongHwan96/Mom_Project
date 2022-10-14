<template>
  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <h4>Team Name</h4>
      <p>Team desc</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
</style>
