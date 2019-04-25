<template>
    <div class="list">
        <div class="one">
            <router-link v-for="(item,index) in one" :key="index" :to="'/list/'+index">
                <div>
                    <img :src="'/img/icon/'+item.img">
                    <p>{{item.title}}</p>
                </div>
            </router-link>
        </div>
        <div class="two">
            <router-link v-for="(item,index) in two" :key="index" :to="'/list/'+index">
                <div>
                    <img :src="'/img/icon/'+item.img">
                    <p>{{item.title}}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                one: [{
                    title: '美食',
                    img: '01.png'
                }, {
                    title: '电影',
                    img: '02.png'
                }, {
                    title: '酒店',
                    img: '03.png'
                }, {
                    title: '休闲',
                    img: '04.png'
                }, {
                    title: '外卖',
                    img: '05.png'
                }],
                two: [{
                    title: 'KTV',
                    img: '06.png'
                }, {
                    title: '周边',
                    img: '07.png'
                }, {
                    title: '丽人',
                    img: '08.png'
                }, {
                    title: '小吃',
                    img: '09.png'
                }, {
                    title: '火车票',
                    img: '10.png'
                }]
            }
        }
    }
</script>

<style scoped lang="less">
    .list {
        background-color: #fff;
        margin-bottom: 10px;
        > div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px 0px;
            text-align: center;
            font-size: 14px;
            background-color: #eee;
            a{
                text-decoration: none;
                color:#555;
                div {
                    img {
                        height: 45px;
                    }
                }

            }

        }
    }
</style>