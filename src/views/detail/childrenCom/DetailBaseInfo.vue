<template>
 <div class="detail-base-info" v-if="Object.keys(goods).length !==0">
   <div class="info-title">{{goods.title}}</div>
   <div class="info-price">
     <span class="price1">{{goods.newPrice}}</span>
     <span class="price2">{{goods.oldPrice}}</span>
     <span class="price3" v-if="goods.discount">{{goods.discount}}</span>
   </div>
   <div class="info-message">
     <span>{{goods.columns[0]}}</span>
     <span>{{goods.columns[1]}}</span>
     <span>{{goods.services[goods.services.length-1].name}}</span>
   </div>
   <div class="info-services">
     <span class="info-services-item" v-for="index in goods.services.length-1" :key="index">
       <img :src="goods.services[index-1].icon" alt="">
       <span>{{goods.services[index-1].name}}</span>
     </span>
   </div>
 </div>
</template>

<script>
export default {
  name:'DetailBaseInfo',
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}

</script>
<style scoped>
.detail-base-info{padding:15px 10px;border-bottom: 3px solid #eee;}
.info-title{font-size: 12px;color: #333;}
.info-price{display: flex;margin-top: 10px;align-items: center;}
.info-price span{display: inline-block;}
.info-price span.price1{font-size: 18px;color: var(--color-high-text);}
.info-price span.price2{font-size: 12px;color: #949393;margin: 0 5px;}
.info-price span.price3{background-color:var(--color-high-text) ;color: #ffffff;border-radius: 12px;padding: 3px 5px;font-size: 12px;}
.info-message,.info-services{display: flex;font-size: 12px;color: #949393;justify-content: space-between;margin: 15px 0;}
.info-message span{display: inline-block;}
em{font-style: normal;}
.info-services{margin: 0;color: #333;align-items: center;}
.info-services-item img{width: 15px;vertical-align: middle;margin-right: 2px;}
</style>