import { createRouter, createWebHashHistory } from "vue-router";
import ListPage from "../modules/pokemon/pages/ListPage.vue";
import PokemonPage from "../modules/pokemon/pages/PokemonPage.vue";
import NotPageFound from "../modules/shared/pages/NotPageFound.vue";

const routes = [
  { path: "/", component: ListPage },
  {
    path: "/about",
    component: () =>
      import(
        /* webpackChunkName: 'About' */ "../modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/:id",
    component: PokemonPage,
    props: (route) => {
      const { id } = route.params;
      return isNaN(Number(id)) ? { id: 1 } : { id };
    },
  },
  { path: "/:pathMatch(.*)*", component: NotPageFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
