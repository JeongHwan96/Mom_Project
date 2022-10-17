<template>
  <header>
    <a href="/" class="logo">Man of the Match</a>

    <ul>
      <li><a href="/board/list" class="goBoard">자유게시판</a></li>
      <li>
        <a href="/arsenal">
          <img src="@/assets/Logo/ars.png" class="userSelectedTeam" />
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans KR";
}
body {
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 30px 70px;
  z-index: 100000;
  background-color: black;
}

header.sticky {
  padding: 10px 100px;
  background-color: #fff;
}
header.sticky .logo,
header.sticky ul li a {
  color: #000;
}

header .logo {
  position: relative;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  transition: 0.6s;
  letter-spacing: 2px;
}

header ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  position: relative;
  list-style: none;
}

header ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.6s;
}

.userSelectedTeam {
  width: 30px;
  height: 30px;
}

.goBoard {
  font-weight: bold;
  font-size: 1.2rem;
}

header .logo:hover {
  color: white;
}

header .goBoard:hover {
  color: white;
}
</style>
