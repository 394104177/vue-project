<template>
    <div class="container" >
       
        <!--header-->
         <myheader></myheader>
      
        
        <!--body -->
        <transition >
        <router-view></router-view>
        </transition>
        <!--footer-->
        <myfooter></myfooter>
    </transition>
    </div>
</template>

<script>
    import myheader from './maincom/header.vue'
    import mybody from './maincom/body.vue'
    import myfooter from './maincom/footer.vue'

    export default {
        data() {
            return {



            }
        },
        methods: {


        },

        created() {


        },

        components: {
            myheader,

            myfooter
        }
    }
</script>

<style scoped>
    .mint-header.is-fixed {
        z-index: 99;
    }
    
    .v-enter {
        opacity: 0;
        transform: translateX(100%);
    }
    
    .v-leave-to {
        opacity: 0;
        transform: translateX(-100%);
        position: absolute;
    }
    
    .v-enter-active,
    .v-leave-active {
        transition: all 0.5s ease;
    }
    
    .container {
        overflow-x: hidden;
        padding-top: 40px;
        padding-bottom: 50px;
    }
</style>