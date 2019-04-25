<template>
  <div class="home">


    <!--导入列表图-->
    <list></list>
    <!--导入广告-->
    <Adv></Adv>
    <!--导入列表-->
    <div v-for="(item,index) in list":key="index">
      <item :item="item"></item>

      <!--<router-link>-->
       <!---->
      <!--</router-link>-->

    </div>
  </div>
</template>

<script>

import List from "@/components/List";
import Adv from "@/components/Adv";
import Item from "@/components/Item";

export default {
  name: 'home',
  data(){
    return{
      list:[],  //用来获取后台请求商品集合
      adv:[]    //用来获取广告集合
    }
  },
  components: {
    Adv,List,Item
  },
  created() {
    //发送请求数据
      this.$http.get('/data/home.json')
              .then(({data})=>{
                // 回掉函数，结构函数
                // {data}=success.data
                this.adv=data.dav;
                this.list=data.list;
      })
  }
}
</script>

<style scoped lang="less">
   .home{
     background-color: #eee;
     a{
       text-decoration: none;
     }
   }
</style>
