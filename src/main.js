import Vue from 'vue'
//安装 vue-loader 解析。vue的文件  其中依赖 vue-template-compiler -D

//配置文件中 配置 {test:/\.vue$/,use:'vue-loader'}


//导入路由模块
import VueRouter from 'vue-router'

// import Mint from 'mint-ui'

// import 'mint-ui/lib/style.css' //省略前缀 自动在nodele modukles 找

// Vue.use(Mint)
import 'mint-ui/lib/style.css'

import { Header } from 'mint-ui'

import { Button } from 'mint-ui'

import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);

Vue.component(TabItem.name, TabItem);

Vue.component(Header.name, Header)

Vue.component(Button.name, Button)



import app from './demo.vue'

Vue.use(VueRouter)

import router from './router.js'

new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    // components: {
    //     login
    // }
    // render: function(create) {
    //     return create(login) //webpack 中想通过vue的runtime运行要使用render
    // }

    router,
    render: c => c(app)
})

console.log('123')