<template>
  <div class="arsenal_total_div">
    <div class="logoImg">
      <img src="../assets/Logo/ars.png" alt="" class="arsenalLogo" />
      <div class="teamName-kr">
        <span>{{ teamName }}</span>
      </div>
      <div class="teamName-en" style="border-bottom: 1px solid #ddd">
        <span>{{ teamName_en }}</span>
      </div>

      <table
        v-for="teamdata in team"
        :key="teamdata.identifier"
        style="width: 100%"
      >
        <tbody>
          <!-- 정식명칭 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 정식명칭</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.team_name }}</div>
            </td>
          </tr>

          <!-- 별칭 section -->
          <tr>
            <td class="td_style">
              <div>
                <strong
                  ><p class="first">
                    <span> 정식명칭:</span>
                  </p></strong
                >
              </div>
            </td>
            <td class="underLine">
              <div>{{ teamdata.nickname }}</div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <p class="first"><span> 별칭:</span>{{ teamdata.nickname }}</p>
        <p class="first"><span> 창단일:</span>{{ teamdata.establish }}</p>
        <p class="first"><span> 소속리그:</span>{{ teamdata.league }}</p>
        <p class="first"><span> 연고지:</span>{{ teamdata.hometown }}</p> -->
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
      teamName: "아스널 FC",
      teamName_en: "Arsenal FC",
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
.teamName-kr {
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
li {
  text-align: left;
}
.desc_title {
  width: 10%;
  border: 1px solid;
}
.td_style {
  width: 25%;
  text-align: center;
  border-bottom: 1px solid white;
  background-color: red;
}
.underLine {
  border-bottom: 1px solid #ddd;
  text-align: left;
}
</style>
