<template>
  <header class="" style="">
    <div class="Header_container">
      <div class="logo">
        <a href="index"></a>
      </div>

      <ul class="menu">
        <li><a href="#">example 1</a></li>
        <li><a href="#">example 2</a></li>
        <li><a href="#">example 3</a></li>
        <li><a href="#">example 4</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  width: 100%;
  height: 96px;
  position: fixed;
  z-index: 10;
  background: transparent;
  transition: all 0.4s;
}
.Header_container {
  width: 1180px;
  max-width: 1180px;
  min-width: 1180px;
  height: inherit;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.logo {
  width: 320px;
  height: 100%;
  background: url(../assets/pybp.png) no-repeat center left;
  background-size: 40%;
  float: left;
}
.menu {
  height: inherit;
  float: right;
  margin: 0;
}
.menu li {
  display: inline-block;
  margin: 0 16px;
  line-height: 100px;
  transition: all 0.4s;
}
.menu li a {
  color: #ffffff;
  text-decoration: none;
  list-style: none;
}
</style>
