<template>
    <div>
 
        <mt-tabbar v-model="selected" fixed >
     
            <mt-tab-item id="微信">
              <img slot="icon" src='../assets/icons/weixin.png'>
              微信
            </mt-tab-item>
            <mt-tab-item id="通讯录">
              <img slot="icon" src="../assets/icons/shequ.png">
              通讯录
            </mt-tab-item>
            <mt-tab-item id="发现">
              <img slot="icon" src="../assets/icons/pengyouquan.png">
              发现
            </mt-tab-item>
            <mt-tab-item id="我的">
              <img slot="icon" src="../assets/icons/wode.png">
              我的
            </mt-tab-item>
          </mt-tabbar>
    </div>
</template>

<style scoped>

</style>

<script>
    export default {
        data() {
            return {
                selected: null
            }
        },

        computed: {
            ret: function() {
                return this.selected
            }
        },

        beforeUpdate: function() {


            this.$emit('func', this.ret)

        }
    }
</script>