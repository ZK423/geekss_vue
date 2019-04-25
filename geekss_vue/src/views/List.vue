<template>
    <div class="List">
        <!--显示排序内容-->
        <div class="orders">
            <div class="o_item" v-for="(item,index) in orders" :key="index" @click="toOrder(item.id)">
                {{item.title}}
            </div>
        </div>

        <!--显示商品信息-->
        <div class="items">
            <item v-for="(item,index) in list":key="index" :item="item"></item>
        </div>

        <!--显示其他商品信息-->
        <div class="others" @click="showMore" v-show="others.length">
            查看其他{{others.length}}条团购~
        </div>

    </div>
</template>

<script>
    import Item from '@/components/Item'
    export default {
        name: "List",
        data(){
            return{
                orders:[{
                    id:'price',
                    title:'价格排序'
                },{
                    id:'sales',
                    title:'销量排序'
                },{
                    id:'evaluate',
                    title:'好评排序'
                },{
                    id:'discount',
                    title:'优惠排序'
                }],
                list:[],
                others:[]
            }
        },
        components:{
            Item
        },
        created(){
            this.$http.get('/data/list.json')
                .then(({data})=>{
                    this.list=data.slice(0,3);
                    this.others=data.slice(3);
                })
        },
        methods:{
            toOrder(id){
                if(id==="discount"){
                    this.list.sort(function(a, b){
                        let a_price =a.originPrice - a.price;
                        let b_price =b.originPrice - b.price;
                        console.info(a_price+"---"+b_price);
                        return a_price - b_price;
                    });
                    return;
                }
                this.list.sort(function (a,b) {
                    return b[id] - a[id]
                })

            },
            showMore(){
                this.list=this.list.concat(this.others);
                this.others=[]
            }
        }
    }
</script>

<style scoped lang="less">
    .List {
        .orders {
            display: flex;
            align-items: center;

            :last-child {
                border-right: 0px;
            }

            div {
                flex: 1;
                text-align: center;
                border-right: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                font-size: 12px;
                padding: 8px 0;
                color: #555;
            }

        }
            .others {
                text-align: center;
                padding: 10px 0;
                color: #108ee9;
                font-weight: bold;
                background-color: #06c1ae;
                margin: 10px;
                border-radius: 10px;

                .items{
                    border-bottom: 1px solid #ccc;
            }
        }
    }
</style>