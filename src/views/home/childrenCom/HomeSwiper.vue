<template>
 <div>
   <swiper>
        <van-swipe-item v-for="(item,index) in banners" :key="index" class="swiper-img">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="swiperImgLoad">
          </a>
       </van-swipe-item>
   </swiper>
 </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
export default {
  name:'HomeSwiper',
  components:{
    Swiper
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad:false
    }
  },
  methods:{
    swiperImgLoad(){
      if(!this.isLoad){
        this.$emit('swiperImgLoad')
        this.isLoad = true;
      }
    }
  }
}

</script>
<style scoped>
.swiper-img img{width: 100%;}
</style>