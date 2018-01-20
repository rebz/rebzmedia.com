import Vue from "vue";
import App from "../components/App.vue";
import HomeRoutes from "../views/home/routes";
import PageNotFound from "../components/PageNotFound.vue";

window.VueRouter = require("vue-router/dist/vue-router.common");

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact',
    scrollBehavior (to, from, savedPosition) {
        if(to.hash) {
            return {
                selector: to.hash
            }
        }
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: "",
            component: App,
            children: [
                ...HomeRoutes
            ]
        },
        {
            path: "*",
            component: App,
            children: [
                {
                    path: "",
                    name: "404",
                    components: {
                        default: PageNotFound
                    }
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    next()
})

export default router;