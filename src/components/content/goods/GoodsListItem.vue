<template>
 <div class="goods-item" @click="itemClick">
   <!-- <img :src="showImg" alt="" @load="ImageLoad"> -->
   <img v-lazy="showImg" alt="" @load="ImageLoad">
   <div class="goods-info">
     <p>{{goodsItem.title}}</p>
     <span class="price">{{goodsItem.price}}</span>
     <span class="collect">{{goodsItem.cfav}}</span>
   </div>
 </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    ImageLoad(){
      this.$bus.$emit('ImageLoad')
    },
    // 跳转详情页
    itemClick(){
      this.$router.push('/detail/' + this.goodsItem.iid)
      // this.$router.push({
      //   path:'/detail/',
      //   query:{
      //     iid:this.goodsItem.iid
      //   }
      // })
    }
  },
  computed:{
    showImg(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}

</script>
<style scoped>
.goods-item{width: 48%;font-size: 12px;padding-bottom: 40px;position: relative;}
.goods-item img{width: 100%;}
.goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
   .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
.goods-item p{overflow: hidden; text-overflow:ellipsis; white-space: nowrap;padding-bottom: 5px;}
</style>