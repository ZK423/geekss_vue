<template>
    <div class="header">
        <img @click="goBack" src="../assets/left.png"/>
        <p class="title">美团</p>
        <p class="login">
            <a href="javascript:void(0)">登陆</a>
        </p>
    </div>
</template>

<script>
    export default {
        name: "Top",
        methods:{
            //  回退页面
            goBack(){
              history.go(-1);
            }
        }
    }
</script>

<style scoped lang="less">
    .header{
        display: flex;
        align-content: center;
        justify-content: space-between;
        background-color: #06c1ae;
        color: #fff;
        padding: 8px;
        img{
            height: 20px;
        }
        .title{
            font-size: 18px;
        }
        .login{
            a{
                text-decoration: none;
                color: #fff;
            }
        }
    }
</style>