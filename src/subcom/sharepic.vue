<template>
    <div id='container'>
        <div id="slider" class="mui-slider ">
            <div id="sliderSegmentedControl"
                class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a v-for="item in cates" :class="['mui-control-item',item.id==0?'mui-active':'']" >
                        {{item.title}}
                    </a>

                </div>
            </div>

        </div>
        <ul>
            <router-link v-for='item in list' :key=item.id tag='li' :to="'/home/sharepic/piclist/'+item.id">
                <img v-lazy='item.url'>
                <div class="info">
                    <h1>{{item.title}}</h1>
                    <span>{{item.zhaiyao}}</span>
                </div>
            </router-link>
            
        </ul>
    </div>

</template>
<style scoped>
    * {
        touch-action: pan-y;
    }
    
    ul {
        list-style: none;
        padding: 10px;
        padding-bottom: 0;
    }
    
    li {
        margin-bottom: 10px;
        background-color: #ccc;
        box-shadow: 0 0 6px #999;
        position: relative;
    }
    
    img {
        width: 100%;
        vertical-align: bottom;
    }
    
    img[lazy='loading'] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
    
    .info {
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    h1 {
        font-size: 15px;
        color: blanchedalmond;
    }
    
    span {
        font-size: 12px;
        color: blanchedalmond;
    }
</style>
<script>
    import mui from "../lib/mui/js/mui.js"


    export default {
        data() {
            return {
                cates: [{
                    id: 0,
                    title: 'java'
                }, {
                    id: 1,
                    title: 'c++'
                }, {
                    id: 2,
                    title: 'c'
                }, {
                    id: 3,
                    title: 'javascript'
                }, {
                    id: 4,
                    title: 'python'
                }],
                list: [{
                    id: 0,
                    title: '测试',
                    url: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg',
                    zhaiyao: '这是测试内容'
                }, {
                    id: 1,
                    title: '测试',
                    url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1963304009,2816364381&fm=26&gp=0.jpg',
                    zhaiyao: '这是测试内容'
                }, {
                    id: 2,
                    title: '测试',
                    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
                    zhaiyao: '这是测试内容'
                }, {
                    id: 3,
                    title: '测试',
                    url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3105600238,693167464&fm=26&gp=0.jpg',
                    zhaiyao: '这是测试内容'
                }, {
                    id: 4,
                    title: '测试',
                    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=226419046,487093019&fm=26&gp=0.jpg',
                    zhaiyao: '这是测试内容'
                }, {
                    id: 5,
                    title: '测试',
                    url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3002804590,2503086066&fm=26&gp=0.jpg',
                    zhaiyao: '这是测试内容'
                }, {
                    id: 6,
                    title: '测试',
                    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2352577117,2934074928&fm=26&gp=0.jpg',
                    zhaiyao: '这是测试内容'
                }]




            }
        },
        mounted() {
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006

            });
        }

    }
</script>