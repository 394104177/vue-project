<template>
    <div>
        <mt-tabbar v-model="selected">
            <mt-tab-item id="外卖">
              <img slot="icon" src='../assets/icons/weixin.png'>
              微信
            </mt-tab-item>
            <mt-tab-item id="订单">
              <img slot="icon" src="../assets/icons/shequ.png">
              通讯录
            </mt-tab-item>
            <mt-tab-item id="发现">
              <img slot="icon" src="../assets/icons/pengyouquan.png">
              发现
            </mt-tab-item>
            <mt-tab-item id="我的">
              <img slot="icon" src="../assets/icons/wode.png">
              我
            </mt-tab-item>
          </mt-tabbar>
    </div>
</template>

<style scoped>
    div {
        padding-top: 41px;
    }
</style>

<script>
    export default {
        data() {
            return {
                selected: null
            }
        }
    }
</script>