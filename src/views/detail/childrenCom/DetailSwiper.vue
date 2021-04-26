<template>
 <div>
   <swiper class="detail-swiper">
        <van-swipe-item v-for="(item,index) in topImages" :key="index" class="swiper-img">
            <img :src="item" alt="">
       </van-swipe-item>
   </swiper>
 </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
export default {
  name:'DetailSwiper',
  components:{
    Swiper
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}

</script>
<style scoped>
.swiper-img{height: 300px;}
.swiper-img img{width: 100%;}
</style>