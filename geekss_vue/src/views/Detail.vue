<template>
    <div class="detail">
        <div class="info">
            <div class="img">
                <img :src="'/img/item/'+item.src">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.description}}</p>
            </div>
            <div class="price">
                <div class="p">
                    <p class="now">
                        {{item.price}}<label>元</label>
                    </p>
                    <p class="originPrice">
                        门市价{{item.originPrice}}元
                    </p>
                </div>
                <div class="buy">
                    <p>立即购买</p>
                </div>
            </div>

            <div class="sales">
                <p class="TH">支持立即退货&nbsp&nbsp&nbsp&nbsp&nbsp支持随时退货</p>
                <p class="XL">销量{{item.sales}}</p>
            </div>
        </div>

        <div class="dianJia">
            <p class="dj">店家信息</p>
            <div class="basic">
                <p class="storeName">{{item.storeName}}</p>
                <p class="storeAddress">{{item.storeAddress}}</p>
                <p class="storeNum">{{item.storeNum}}</p>
            </div>
        </div>
        <div class="buyKnow">
            <p class="notice">购买须知</p>
            <div class="validateTime">
                <p class="effective">有效日期</p>
                <p class="validateTime">{{item.validateTime}}</p>
            </div>
            <div class="useTime">
                <p class="user">使用日期</p>
                <p class="useTime">{{item.useTime}}</p>
            </div>
            <div class="rules">
                <p class="rule">使用规则</p>
                <p class="rules">{{item.rules}}</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Detail",
        data(){
            return{
                item:{}
            }
        },
        created() {
            this.$http.get('/data/product.json',{
                params:{
                    id:this.$route.params.id
                }
            })//,then(({data}))
        }
    }
</script>

<style scoped lang="less">
    .detail{
        background-color: #ccc;
        .info{
            img{
                img{
                    max-width: 100%;
                }
                p{
                    position: relative;
                    color: #fff;
                    margin-left: 20px;
                }
                .title{
                    font-size: 22px;
                    top: 200px;
                }
                .desc{
                    top: 250px;

                }
            }
        }
        .dianJia{}
        .buyKnow{}
    }
</style>