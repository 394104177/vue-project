<template>
    <div>
      <mt-header title="vue购物" fixed>
        <a  slot="left" @click.prevent="returnAbove">
          <mt-button icon="back">返回</mt-button>
        </a>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    </div>
</template>

<style>

</style>

<script>
    export default {
        methods: {
            returnAbove() {
                console.log(123)
                this.$router.go(-1)
            }
        }
    }
</script>