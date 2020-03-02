<template>

    <div>
    
      {{id}}

      <div class="content" v-html>{{}} </div>

      <commit></commit>
    </div>

   
</template>

<style>

</style>

<script>
    import commit from './commit.vue'
    export default {
        data() {
            return {
                id: this.$route.params.id,
                url: 'https://www.baidu.com/',
                contents: null
            }
        },
        methods: {
            // getnews() {
            //     axios.get(this.url).then(function() {
            // this.contents = result.
            //     })
            // }
        },
        created() {
            // this.getnews()
        },
        components: {
            commit
        }

    }
</script>