import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import DetailPostPage from "@/pages/DetailPostPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/store',
        component: PostPageWithStore,
    },
    {
        path: '/composition',
        component: PostPageCompositionApi,
    },
    {
        path: '/posts',
        component: PostPage,
    },
    {
        path: '/posts/:id',
        component: DetailPostPage,
    },

]
const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;