import { createRouter, createWebHashHistory } from "vue-router";
import ListPage from "../modules/pokemon/pages/ListPage.vue";
import AboutPage from "../modules/pokemon/pages/AboutPage.vue";
import PokemonPage from "../modules/pokemon/pages/PokemonPage.vue";
import NotPageFound from "../modules/shared/pages/NotPageFound.vue";

const routes = [
  { path: "/", component: ListPage },
  { path: "/about", component: AboutPage },
  { path: "/id", component: PokemonPage },
  { path: "/:pathMatch(.*)*", component: NotPageFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
