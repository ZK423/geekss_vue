<template>
    <div class="root">
        <!--导入顶部导航-->
        <top></top>

        <!--搜索框-->
        <div class="search" v-show="$route.path.indexOf('/detail/')<0">
            <input type="text" placeholder="请输入搜索关键字" @keyup.enter="sendResult">
        </div>
        <!--路由占位-->
        <router-view/>
    </div>
</template>

<script>
    import Top from '@/components/Top';
    export default {
        name: "App",
        components:{
            Top
        },
        data(){
            return{
                result:''
            }
        },
        methods:{
            sendResult(){
                this.$store.commit('updateResult',this.result);
            }
        }
    }
</script>

<style scoped lang="less">
    .search{
        margin: 10px 20px;
        background-color: #eee;
        padding: 10px;
        border-radius: 20px;
        input{
            margin-left: 15px;
            font-size: 12px;
            border: 0px;
            outline: none;
            background-color: #eee;

        }
    }
</style>