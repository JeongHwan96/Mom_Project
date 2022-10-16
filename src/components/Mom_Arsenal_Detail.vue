<template>
  <div class="arsenal_total_div">
    <div class="logoImg">
      <img src="../assets/Logo/ars.png" alt="" class="arsenalLogo" />
      <div class="arsenal_teamName">
        <span>{{ teamName }}</span>
      </div>
      <ul>
        <li v-for="teamdata in team" :key="teamdata.identifier">
          <p class="first"><span> 정식명칭:</span>{{ teamdata.team_name }}</p>
          <p class="first"><span> 별칭:</span>{{ teamdata.nickname }}</p>
          <p class="first"><span> 창단일:</span>{{ teamdata.establish }}</p>
          <p class="first"><span> 소속리그:</span>{{ teamdata.league }}</p>
          <p class="first"><span> 연고지:</span>{{ teamdata.hometown }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import teamDataJson from "../assets/TeamJsonFile/Arsenal_Detail.json";
const teamData = teamDataJson;
const arsenalPart = teamData[0].Arsenal;
export default {
  data() {
    return {
      team: arsenalPart,
      teamName: "아스널FC",
    };
  },
};
</script>

<style>
* {
  list-style-type: none;
}
.arsenal_total_div {
  margin: 1%;
}
.logoImg {
  border: 2px solid rgb(255, 3, 3);
}
.arsenalLogo {
  width: 10%;
}
.arsenal_teamName {
  background-image: linear-gradient(
    to right,
    #023474 4%,
    #fff 4%,
    #fff 5%,
    #f00000 5%,
    #f00000 95%,
    #fff 95%,
    #fff 96%,
    #023474 96%
  );
}
</style>
