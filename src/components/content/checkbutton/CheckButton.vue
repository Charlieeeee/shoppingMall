<template>
  <div class="check-button" :class="{check:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
    isCheck:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .check-button{
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 2px solid #aaa;
    text-align: center;
  }
  .check-button img{
    width: 13px;
  }
  .check{
    border-color: red;
    background: red;
  }
</style>
  
