<template>
<!-- 底部菜单 -->
    <tab-bar>
      <tab-bar-item path="/home" itemColor="#eecc2c">
        <img src="~assets/img/tabbar/q7.png" alt="" slot="item-img">
        <img src="~assets/img/tabbar/q11.png" alt="" slot="item-img-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" itemColor="#eecc2c">
        <img src="~assets/img/tabbar/q8.png" alt="" slot="item-img">
        <img src="~assets/img/tabbar/q12.png" alt="" slot="item-img-active">
        <div slot="item-text">列表</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" itemColor="#eecc2c">
        <img src="~assets/img/tabbar/q9.png" alt="" slot="item-img">
        <img src="~assets/img/tabbar/q13.png" alt="" slot="item-img-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" itemColor="#eecc2c">
        <img src="~assets/img/tabbar/q10.png" alt="" slot="item-img">
        <img src="~assets/img/tabbar/q14.png" alt="" slot="item-img-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  name:'mainTabbar',
  components:{
    TabBar,
    TabBarItem
  }
}

</script>
<style>
</style>