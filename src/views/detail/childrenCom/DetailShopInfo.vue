<template>
 <div class="shop-info">
   <div class="shop-info-title">
     <img :src="shop.logo" alt="">
     <span>{{shop.name}}</span>
   </div>
   <div class="shop-info-con">
     <div class="left">
       <div class="left-con">
         <span>{{shop.sells | sellCountFilter}}</span>
         <span>总销量</span>
       </div>
       <div class="left-con">
         <span>{{shop.goodsCount}}</span>
         <span>全部宝贝</span>
       </div>
     </div>
     <div class="right">
       <p v-for="(item,index) in shop.score" :key="index">
         <span>{{item.name}}</span>
         <span class="count"  :class="{'scrol-better':item.isBetter }">{{item.score}}</span>
         <span class="better-color" :class="{'better-more':item.isBetter }">{{item.isBetter ? '高' : '底'}}</span>
       </p>
     </div>
   </div>
   <div class="shop-info-button">
     <button>进店逛逛</button>
   </div>
 </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props:{
    shop:Object
  },
  filters:{
    sellCountFilter(value){
      if(value < 10000) return value;
      return (value/10000).toFixed(2) + '万'
    }
  }
}

</script>
<style scoped>
.shop-info{padding: 10px 15px;border-bottom: 3px solid #eee;}
.shop-info-title{display: flex;font-size: 16px;color: #333;align-items: center;}
.shop-info-title img{width: 45px;height: 45px;border-radius: 50%;display: inline-block;}
.shop-info-title span{display: inline-block;padding-left: 10px;}
.shop-info-con{display: flex;padding:15px 0;align-items: center;}
.shop-info-con .left{flex:1;border-right: 1px solid #ddd;font-size: 13px;color: #333;display: flex;justify-content: space-evenly;text-align: center;line-height: 20px;}
.shop-info-con .left .left-con{display:inline-block;}
.left-con span{display: block;}
.right{display: flex;flex-wrap: wrap;flex:1;}
.right p{margin-left: 15%;font-size: 13px;line-height: 23px;display: flex;}
.right p span{display: inline-block;}
.right p .count{padding: 0 5px;color: #86cf5e;width: 40px;margin-left: 5px;}
.shop-info-button button{width: 100px;border: 0;background: #f1f4fb;margin: 0 auto;border-radius:6px;font-size: 14px;display: block;height: 28px;color: #c3c4c9;}
.better-color{background: #86cf5e;color: #fff;height: 18px;line-height: 18px;}
.better-color.better-more{background:red;}
.right p .count.scrol-better{color: red;}
</style>