<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <slot></slot>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name:'Swiper'
}
</script>

<style scoped>
/* .my-swipe{height: 300px;} */
</style>
