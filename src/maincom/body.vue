<template>

    <div>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="微信">
              <mt-cell v-for="n in 30" title="微信" >微信</mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="通讯录">
              <mt-cell v-for="n in 5" title="通讯录" >通讯录</mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="发现">
              <mt-cell v-for="n in 7" title="发现" >发现</mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="我的">
                <mt-cell v-for="n in 7" title="我的" >我的</mt-cell>
              </mt-tab-container-item>
          </mt-tab-container>
    </div>
</template>

<style></style>

<script>
    export default {
        data() {
            return {

            }
        },
        props: [
            'active'
        ]
    }
</script>