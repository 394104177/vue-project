import VueRouter from 'vue-router'

import home from './subcom/home.vue'
import member from './subcom/member.vue'
import cart from './subcom/cart.vue'
import search from './subcom/search.vue'
import newList from './subcom/newList.vue'
import info from './subcom/info.vue'
import sharepic from './subcom/sharepic.vue'
import piclist from './subcom/piclist.vue'
import goodlist from './subcom/goodlist.vue'


var router = new VueRouter({

    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/member', component: member },
        { path: '/cart', component: cart },
        { path: '/search', component: search },
        { path: '/home/newList', component: newList },
        { path: '/home/newList/info/:id', component: info },
        { path: '/home/sharepic', component: sharepic },
        { path: '/home/sharepic/piclist/:id', component: piclist },
        { path: '/home/sharepic/goodlist', component: goodlist }

    ],
    linkActiveClass: 'mui-active'
})


export default router