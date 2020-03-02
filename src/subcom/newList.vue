<template>

    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in lunbotulist">
                
                <router-link :to="'/home/newList/info/'+item.id">
                    <img class="mui-media-object mui-pull-left" src="https://i1.hdslb.com/bfs/face/b4261f53a146346cc95ec687cdbb5b7102ba9481.png@102w_102h_1c_100q.webp">
                    <div class="mui-media-body">                     
                        <h1>{{item.title}}</h1>
                        <p class="mui-ellipsis">
                        <span>发表时间{{item.add_time | dataformate}}</span>
                        <span>点击次数{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
            
        </ul>
      
    </div>
</template>

<style>
    .mui-table-view::after {
        height: 0;
    }
</style>

<script>
    import {
        Toast
    } from 'mint-ui';
    export default {
        data() {
            return {
                lunbotulist: [{
                    add_time: "2015-04-16T03:50:28.000Z",
                    click: 2,
                    id: 12,
                    title: "测试",
                    zhaiyao: "测试摘要"
                }, {
                    add_time: "2015-04-16T03:50:28.000Z",
                    click: 1,
                    id: 13,
                    title: "测试",
                    zhaiyao: "测试摘要"
                }, {
                    add_time: "2020-02-16T03:50:28.000Z",
                    click: 1,
                    id: 13,
                    title: "测试",
                    zhaiyao: "测试摘要"
                }, {
                    add_time: "2020-02-16T03:50:28.000Z",
                    click: 1,
                    id: 13,
                    title: "测试",
                    zhaiyao: "测试摘要"
                }, {
                    add_time: "2020-02-16T03:50:28.000Z",
                    click: 1,
                    id: 13,
                    title: "测试",
                    zhaiyao: "测试摘要"
                }, {
                    add_time: "2020-02-16T03:50:28.000Z",
                    click: 1,
                    id: 13,
                    title: "测试",
                    zhaiyao: "测试摘要"
                }, {
                    add_time: "2020-02-16T03:50:28.000Z",
                    click: 1,
                    id: 13,
                    title: "测试",
                    zhaiyao: "测试摘要"
                }, {
                    add_time: "2020-02-16T03:50:28.000Z",
                    click: 1,
                    id: 13,
                    title: "测试",
                    zhaiyao: "测试摘要"
                }]
            }
        },
        methods: {
            getPic() {

                //     Toast("页面加载中")
                //         //取得请求数组，包含状态码，跳转url和图片地址 {status:0,message:[url,picurl]}
                //     axios.get('www.baidu.com').then(function(res) {
                //         if (res.status === 0) {
                //             this.lunbotulist = res.message
                //         } else {
                //             Toast('获取图片失败')
                //         }
                //     })
                // }
            },
            created() {
                this.getPic()
            }

        }
    }
</script>