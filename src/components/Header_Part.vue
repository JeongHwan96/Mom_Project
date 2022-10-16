<template>
  <div class="header">
    <a href="/" class="logo">MOM</a>

    <ul>
      <li><a href="/board/list">Board</a></li>
      <li><a href="#">Login</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  background: #2f1839;
  color: white;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  position: sticky;
  top: 0;
  z-index: 999;
}

.header .logo {
  position: relative;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  transition: 0.6s;
  letter-spacing: 2px;
}

.header ul {
  list-style-type: none;
  padding: 0;
}

.header ul li {
  display: inline-block;
  margin-left: 16px;
  font-size: 18px;
  font-weight: bold;
}

.header ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.6s;
}
</style>
