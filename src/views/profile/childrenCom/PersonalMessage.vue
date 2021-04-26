<template>
 <div class="person-message">
   <div class="left">
     <img class="picture" src="~assets/img/user/img_01.png" alt="">
    <div class="person-login">
      <span>登录/注册</span>
      <span class="phone">暂无绑定手机号</span>
    </div>
   </div>
   <img class="next" src="~assets/img/common/icon_02.png" alt="">
 </div>
</template>

<script>
export default {
  name:'PersonalMessage'
}

</script>
<style scoped>
.person-message{
  background: var(--color-tint);
  color: #ffffff;
  display: flex;
  align-items: center;
  padding: 20px 15px 15px 15px;
  justify-content: space-between;
}
.person-message .next{
  display: inline-block;
  width: 18px;
}
.left{
  display: flex;
  align-items: center;
}
.left .picture{
  display: inline-block;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
}
.person-login span{
  font-size: 15px;
  display: block;
}
.person-login span.phone{
  font-size: 13px;
  margin-top: 5px;
}
</style>