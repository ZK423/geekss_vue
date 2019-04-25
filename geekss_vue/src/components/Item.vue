<template>
    <div class="item">
        <div class="img">
            <img :src="'/img/list/'+item.img">
        </div>
        <div class="info">
            <p class="title">{{item.title}}</p>
            <div class="ctx">
                <p class="prices">
                    <label class="price">{{item.price}}</label>
                    <label class="originPrice">门市价{{item.originPrice}}</label>
                </p>
                <p class="sales">销量{{item.sales}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Item",
        props:["item"]
    }
</script>

<style scoped lang="less">
    .item{
        background-color: #fff;
        padding: 10px 5px;
        border-top: 1px solid #cdcdcd;
        display: flex;
        align-items: center;
        .img{
            flex: 3;
            img{
                width: 100%;
            }
        }
        .info{
            flex: 5;
            margin:0 10px;
            font-size: 12px;
            .title{
                font-size: 14px;
                color: #555;
            }
            .ctx{
                display: flex;
                justify-content: space-between;
                margin-top: 10%;
                .price{
                    color: #108ee9;
                }
                .originPrice{
                    color: #f40000;
                }
                .sales{
                    color: #555;
                }
            }

        }
    }
</style>