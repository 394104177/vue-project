<template>
    <div>
 
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item1" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/cart">
          <span class="mui-icon-extra mui-icon  mui-icon-extra-cart"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item1" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>
    </div>
</template>

<style scoped>
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    
    .mui-bar-tab .mui-tab-item1 .mui-icon {
        top: 3px;
        width: 24px;
        height: 24px;
        padding-top: 0;
        padding-bottom: 0;
    }
    
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    
    .mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label {
        font-size: 11px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .mui-bar-tab .mui-tab-item1 {
        display: table-cell;
        overflow: hidden;
        width: 1%;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #929292;
    }
    
    .mui-bar.mui-bar-tab .mui-active {
        color: #26A2FF;
    }
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