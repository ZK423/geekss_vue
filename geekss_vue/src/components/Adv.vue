<template>
    <div class="adv">
        <div>
            <p class="movie">电影院礼包</p>
            <p>赢50元卷</p>
            <img src="../../public/img/ad/01.png"/>
        </div>
        <div>
            <p class="money">10元毕业游</p>
            <p>学生过暑假</p>
            <img src="../../public/img/ad/02.png"/>
        </div>
        <div>
            <p class="tour">旅拍跳楼价</p>
            <p>0元住城堡</p>
            <img src="../../public/img/ad/03.png"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Adv"
    }
</script>

<style scoped lang="less">
    .adv{
        display: flex;
        > div{
            padding: 10px 0px;
            flex: 1;
            text-align: center;
            margin-right: 2px;
            margin-bottom: 10px;
            p{
                color: #555;
                font-size: 14px;
                padding-bottom: 10px;
            }
            .movie{
                color: #f40000;
                font-size: 16px;
            }
            .money{
                color: #108ee9;
                font-size: 16px;
            }
            .tour{
                color: lawngreen;
                font-size: 16px;
            }
        }
    }
</style>