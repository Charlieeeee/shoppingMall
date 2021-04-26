<template>
 <div class="message-list">
   <div class="list-item">
     <img src="~assets/img/user/icon_01.png" alt="">
    <span>我的消息</span>
   </div>
   <div class="list-item">
     <img src="~assets/img/user/icon_02.png" alt="">
    <span>积分商城</span>
   </div>
   <div class="list-item">
     <img src="~assets/img/user/icon_03.png" alt="">
    <span>会员卡</span>
   </div>
   <div class="item-line"></div>
   <div class="list-item">
     <img src="~assets/img/user/icon_04.png" alt="">
    <span>我的购物车</span>
   </div>
   <div class="list-item">
     <img src="~assets/img/user/icon_05.png" alt="">
    <span>下载购物APP</span>
   </div>
 </div>
</template>

<script>
export default {
  name:'OtherMessage'
}

</script>
<style scoped>
  .message-list{}
  .list-item{
    display: flex;
    align-items: center;
    height: 40px;
    line-height: 40px;
  }
  .list-item img {
    width: 20px;
    margin-left:15px;
    margin-right: 10px;
    display: inline-block;
  }
  .list-item span{
    display: inline-block;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
    flex: 1;
  }
  .item-line{
    height: 10px;
    background: #eee;
  }
</style>