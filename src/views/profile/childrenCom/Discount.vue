<template>
 <div class="profile-discount">
   <div class="discount-item">
     <span class="count">0.00<em>元</em></span>
     <span class="text">我的余额</span>
   </div>
   <div class="discount-item">
     <span class="count">0<em>个</em></span>
     <span class="text">我的优惠</span>
   </div>
   <div class="discount-item">
     <span class="count">0<em>分</em></span>
     <span class="text">我的积分</span>
   </div>
 </div>
</template>

<script>
export default {
  name:'Discount'
}

</script>
<style>
.profile-discount{
  border-bottom: 10px solid #eee;
  display: flex;
}
.discount-item{
  flex: 1;
  text-align: center;
  padding: 15px 0;
  font-size: 14px;
  border-right: 1px solid #f7f7f7;
}
.profile-discount .discount-item:last-child{
  border-right: 0;
}
.discount-item span{
  display: block;
}
.discount-item span.count{
  font-size: 18px;
  font-weight: bold;
  color: var(--color-tint);
}
.discount-item span.count em{
  font-size: 13px;
  color: #8c8c8c;
  font-weight: normal;
  font-style: normal;
}
.discount-item span.text{
  margin-top: 3px;
}
</style>