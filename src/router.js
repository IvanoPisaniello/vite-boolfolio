import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue"
import Progetti from "./pages/Progetti.vue"
import ProjectShow from "./pages/ProjectShow.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/Progetti",
        name: "progetti",
        component: Progetti,
    },
    {
        path: "/projects/:slug",
        name: "projects.show",
        component: ProjectShow,
    }


]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }