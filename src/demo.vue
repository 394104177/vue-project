<template>
    <div class="container" >
       
        <!--header-->
        <myheader></myheader>
      
       
        <!--body -->
        <mybody :active='active1' ></mybody>

        <!--footer-->
        <myfooter v-on:func='change' ></myfooter>
    
    </div>
</template>

<script>
    import myheader from './maincom/header.vue'
    import mybody from './maincom/body.vue'
    import myfooter from './maincom/footer.vue'

    export default {
        data() {
            return {

                active1: '微信'

            }
        },
        methods: {

            change(data) {

                this.active1 = data
            }
        },

        components: {
            myheader,
            mybody,
            myfooter
        }
    }
</script>

<style scoped>
    .container {
        padding-top: 41px;
    }
</style>