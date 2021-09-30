import Vue from "vue";
import Router from "vue-router";
import HelloQyf from "@/views/HelloQyf";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloQyf",
      component: HelloQyf
    },
    {
      path: "/home",
      name: "HomePage",
      component: _ => import("@/views/homePage")
    },
    {
      path: "/doll",
      name: "DollPage",
      component: _ => import("@/views/dollPage")
    },
    {
      path: "/rank",
      name: "RankPage",
      component: _ => import("@/views/rankPage")
    }
  ]
});
