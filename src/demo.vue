<template>
    <div>
        <!--header-->
        <myheader></myheader>

        <!--body -->
        <mybody></mybody>


        <!--footer-->
        <myfooter></myfooter>
        <router-view>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
            <router-link to=""></router-link>
        </router-view>



    </div>
</template>

<script>
    import myheader from './maincom/header.vue'
    import mybody from './maincom/body.vue'
    import myfooter from './maincom/footer.vue'

    export default {
        data() {
            return {}
        },
        methods: {

        },
        components: {
            myheader,
            mybody,
            myfooter
        }
    }
</script>

<style lang="less"></style>