<template>
 
    <div class="goodlistcontainer">
        <transition  
        @before-enter='beforeEnter'
        @enter='enter'
        @after-enter='afterEnter'>   
        <div class="ball" v-show='flag' ref='ball'></div>
        </transition> 
        <div class="mui-card">
            <div class="mui-card-header">
                <mt-swipe :auto="4000">
                    <mt-swipe-item></mt-swipe-item>
                    <mt-swipe-item></mt-swipe-item>
                    <mt-swipe-item></mt-swipe-item>
                </mt-swipe>
            </div>
         
        </div>

        <div class="mui-card">
            <div class="mui-card-header">小米 16G</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                     <p>市场价:<del>￥2699</del> <span>$2199</span></p> 
                    
                    购买数量: <goodlistnumber @func='getnum'></goodlistnumber>
                </div>
            </div>
            <div class="mui-card-footer">
                <p>
                    <mt-button  size="small" type='primary'>立即购买</mt-button>
                    <mt-button  size="small" type='danger' @click='buy'>加入购物车</mt-button>
                </p>
              
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-header">产品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    商品货号:123123123
                    <br>
                    库存情况:60
                    <br>
                    上架时间:2020-2-28
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
    </div>
</template>
<style>
    .goodlistcontainer {
        background-color: #eee;
        overflow: hidden;
    }
    
    .mui-card-header {
        padding: 0 0;
    }
    
    .mint-swipe {
        height: 200px;
        width: 100%;
    }
    
    .mint-swipe-item:nth-child(1) {
        background-color: red;
    }
    
    .mint-swipe-item:nth-child(2) {
        background-color: green;
    }
    
    .mint-swipe-item:nth-child(3) {
        background-color: pink;
    }
    
    .mui-card-content {
        margin: 10px 0;
    }
    
    .ball {
        width: 15px;
        height: 15px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        z-index: 99;
        top: 370px;
        left: 139px;
    }
</style>

<script>
    import goodlistnumber from './goodlist_number.vue'
    export default {
        data() {
            return {
                flag: false

            }
        },
        methods: {
            buy() {
                this.flag = !this.flag
            },
            beforeEnter(el) {

                el.style.transform = 'translate(0,0)'
            },
            enter(el, done) {
                el.offsetWidth

                const ballposition = this.$refs.ball.getBoundingClientRect()

                const cartposition = document.querySelector('.mui-badge').getBoundingClientRect()


                var x = cartposition.right - ballposition.right

                var y = cartposition.top - ballposition.top

                el.style.transform = `translate(${x}px,${y}px)`
                el.style.transition = 'all 0.5s ease'
                done()
                document.querySelector('.mui-badge').innerText = this.num
            },
            afterEnter(el) {

                this.flag = !this.flag

            },
            getnum(number) {
                this.num = number
            }
        },
        components: {
            goodlistnumber
        }
    }
</script>