import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue"
import Progetti from "./pages/Progetti.vue"

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
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }