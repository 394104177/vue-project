import Vue from 'vue'
//安装 vue-loader 解析。vue的文件  其中依赖 vue-template-compiler -D

//配置文件中 配置 {test:/\.vue$/,use:'vue-loader'} 

//导入路由模块
import VueRouter from 'vue-router'

// import Mint from 'mint-ui'

// import 'mint-ui/lib/style.css' //省略前缀 自动在nodele modukles 找

// Vue.use(Mint)
import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

// import { Header } from 'mint-ui'

// import { Button } from 'mint-ui'

// import { Tabbar, TabItem } from 'mint-ui';

// import { TabContainer, TabContainerItem } from 'mint-ui';

// import { Cell } from 'mint-ui';

// import { Navbar, TabItem } from 'mint-ui';

// import { Swipe, SwipeItem } from 'mint-ui';

import mintui from 'mint-ui'

Vue.use(mintui)

import 'mint-ui/lib/style.css'

import moment from 'moment'

import VuePreview from 'vue2-preview'

Vue.use(VuePreview)



// Vue.component(Swipe.name, Swipe);

// Vue.component(SwipeItem.name, SwipeItem);

// Vue.component(Navbar.name, Navbar);

// Vue.component(TabItem.name, TabItem);

// Vue.component(Cell.name, Cell);

// Vue.component(TabContainer.name, TabContainer);

// Vue.component(TabContainerItem.name, TabContainerItem);

// Vue.component(Tabbar.name, Tabbar);

// Vue.component(TabItem.name, TabItem);

// Vue.component(Header.name, Header)

// Vue.component(Button.name, Button)
// datastr 为第一个参数  pattern为第二个参数：设置了默认值  而在管道符号 | 后 的第一个值 data | dataformate(arg1,arg2) 的 arg 为函数第二个形参
Vue.filter('dataformate', function(datastr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(datastr).format(pattern)
})

import app from './demo.vue'

Vue.use(VueRouter)

import router from './router.js'

new Vue({
    el: "#app",
    data: {
        number1: 123
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