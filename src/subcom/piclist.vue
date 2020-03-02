<template> 
    <vue-preview
      :list="picshow"
      :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
     
      :tapToClose="true"
      @close="closeHandler"
      @destroy="destroyHandler"
    />
</template>

<script>
    export default {

        data() {
            return {
                piclist: [{
                        id: 0,
                        src: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
                            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3105600238,693167464&fm=26&gp=0.jpg',
                            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3002804590,2503086066&fm=26&gp=0.jpg'
                        ]
                    }, {
                        id: 1,
                        src: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
                            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3105600238,693167464&fm=26&gp=0.jpg',
                            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3002804590,2503086066&fm=26&gp=0.jpg'
                        ]
                    }, {
                        id: 2,
                        src: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1830914723,3154965800&fm=26&gp=0.jpg',
                            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3105600238,693167464&fm=26&gp=0.jpg',
                            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3002804590,2503086066&fm=26&gp=0.jpg'
                        ]
                    }

                ],
                picshow: []

            }
        },
        methods: {
            getlistinfo() {
                this.piclist.forEach(element => {

                    if (element.id == this.$route.params.id) {


                        element.src.forEach(element => {
                            this.picshow.push({
                                src: element,
                                w: 400,
                                h: 400
                            })
                        })

                    }


                });


            },
            closeHandler() {
                console.log('closeHandler')
            },
            // 完全关闭之后，调用这个函数清理资源
            destroyHandler() {
                console.log('destroyHandler')
            }

        },
        created() {
            this.getlistinfo()

        }
    }
</script>
<style>

</style>