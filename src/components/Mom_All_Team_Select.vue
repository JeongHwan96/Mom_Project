<template>
  <div class="selectTeam">
    <div class="container">
      <!--player-->
      <h1 class="pickYou">PICK YOUR FAVORITE</h1>
      <div class="players">
        <modalPop />
        <div class="player">
          <router-link to="/arsenal"><div class="image"></div></router-link>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
        <div class="player">
          <div class="image"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalPop from "../components/Mom_Modal.vue";
export default {
  components: {
    modalPop,
  },
};
</script>

<style>
.selectTeam {
  background: url(../assets/bg_main_0517.jpg) center center fixed no-repeat;
}
.container {
  padding: 50px 0;
}
.players {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}
.player {
  width: 170px;
  height: 170px;
  margin: 4px;
  border: 3px solid #fff;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #555;

  transition: transform 0.1s, background-color 0.6s;
}
.player:hover {
  background-color: #ff9c00;
  transform: skewX(0deg) scale(1.3);
  z-index: 1;
}
.player .image {
  width: 145%;
  height: 100%;
  transform: translateX(-16px) skewX(0deg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90px;
}
.player:nth-child(1) .image {
  background-image: url("../assets/Logo/ars.png");
  background-size: 120px 120px;
  background-position: 33% 67%;
}
.player:nth-child(2) .image {
  background-image: url("../assets/Logo/aston.png");
  background-size: 120px 120px;
  background-position: 33% 67%;
}
.player:nth-child(3) .image {
  background-image: url("../assets/Logo/born.png");
  background-size: 120px 120px;
  background-position: 33% 67%;
}
.player:nth-child(4) .image {
  background-image: url("../assets/Logo/brent.png");
  background-size: 135px 135px;
  background-position: left 30% bottom 50%;
}
.player:nth-child(5) .image {
  background-image: url("../assets/Logo/brigh.png");
  background-size: 135px 135px;
  background-position: left 30% bottom 50%;
}
.player:nth-child(6) .image {
  background-image: url("../assets/Logo/chel.png");
  background-position: left 32% bottom 50%;
  background-size: 135px 135px;
  background-position: left 30% bottom 50%;
}
.player:nth-child(7) .image {
  background-image: url("../assets/Logo/ever.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 40%;
}
.player:nth-child(8) .image {
  background-image: url("../assets/Logo/forest.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(9) .image {
  background-image: url("../assets/Logo/full.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 35%;
}
.player:nth-child(10) .image {
  background-image: url("../assets/Logo/lees.png");
  background-size: 60px 60px;
  background-size: 135px 135px;
  background-position: left 30% bottom 40%;
}

.player:nth-child(11) .image {
  background-image: url("../assets/Logo/leic.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(12) .image {
  background-image: url("../assets/Logo/liverpoolfc_crest.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(13) .image {
  background-image: url("../assets/Logo/mancity.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(14) .image {
  background-image: url("../assets/Logo/manu.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(15) .image {
  background-image: url("../assets/Logo/new.png");
  background-size: 60px 60px;
  background-size: 130px 130px;
  background-position: left 32% bottom 55%;
}
.player:nth-child(16) .image {
  background-image: url("../assets/Logo/palce.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(17) .image {
  background-image: url("../assets/Logo/south.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(18) .image {
  background-image: url("../assets/Logo/tott.png");
  background-size: 60px 60px;
  background-size: 120px 120px;
  background-position: left 32% bottom 50%;
}
.player:nth-child(19) .image {
  background-image: url("../assets/Logo/west.png");
  background-size: 118px 118px;
  background-position: left 32% bottom 33%;
}
.player:nth-child(20) .image {
  background-image: url("../assets/Logo/wolves.png");
  background-size: 60px 60px;
  background-size: 148px 148px;
  background-position: left 27% bottom 45%;
}

.pickYou {
  font-size: 4rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 6px 2px 2px rgb(78, 77, 77);
  top: 80px;
  left: 300px;
  text-align: center;
}
</style>
