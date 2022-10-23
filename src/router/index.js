import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardList from "../../src/components/Board/BoardList.vue";
import BoardInsert from "../../src/components/Board/BoardInsert.vue";
import BoardRead from "../../src/components/Board/BoardRead.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/board/list",
    name: "boardList",
    component: BoardList,
  },
  {
    path: "/board/insert/:contentId?",
    //글쓰기, 수정에 쓰임 contentId는 수정때만 쓰이고 (등록에는 쓰이지 않으므로) 필수요소가 아니라 선택적으로 들어가게 하기위해 물음표를 붙였음
    name: "boardInsert",
    component: BoardInsert,
  },
  {
    path: "/board/read/:contentId",
    name: "boardRead",
    component: BoardRead,
  },
  {
    path: "/arsenal/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/asenal/asenalPlayer.vue"
      ),
  },
  {
    path: "/arsenal",
    name: "arsenal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Mom_Arsenal_Detail.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
