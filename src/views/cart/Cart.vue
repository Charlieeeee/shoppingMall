<template>
 <div id="cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list />
    <!-- 底部结算 -->
    <cart-bottom-bar/>
 </div>
</template>

<script>
import CartList from './childrenCom/CartList'
import CartBottomBar from './childrenCom/CartBottomBar'

import NavBar from 'components/common/navbar/NavBar'

import { mapGetters } from 'vuex'

export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}

</script>
<style>
#cart{
  height: 100vh;
    overflow: hidden;
}
  .cart-bar{
    background: var(--color-tint);
    color: #fff;
  }
</style>