<template>
  <div class="bottom-bar">
    <div class="bottom-checkall">
      <check-button :is-check="selectAll" @click.native="clickAll"/>
      <span>全选</span>
    </div>
    <!-- 合计 -->
    <div class="bottom-total">合计：{{totalPrice}}</div>
    <!-- 去结算 -->
    <div class="bottom-balance" @click="goSet">去结算({{cartCount}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

import { mapGetters } from 'vuex'

export default {
  name:'CartBottomBar',
  components:{
    CheckButton
  },
  computed:{
    ...mapGetters(['cartList']),
    // 合计
    totalPrice(){
      return this.cartList.filter(item => item.check == true).reduce((preValue,item) =>{
        return preValue + item.lowNowPrice * item.count
      },0).toFixed(2)
    },
    // 结算的店铺数
    cartCount(){
      return this.cartList.filter(item => item.check).length
    },
    // 监听列表是否全选中
    selectAll(){ 
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item =>!item.check)
    }
  },
  methods:{
    // 点击全选
    clickAll(){
      console.log(this.selectAll)
      if(this.selectAll){
        this.cartList.forEach(item => item.check = false)
      }else{
        this.cartList.forEach(item => item.check = true)
      }
    },
    // 点击去结算
    goSet(){
      if(this.cartCount === 0){
        this.$msg.inform('请选中要结算的店铺！')
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 40px;
  background: #fff;
  padding-left:10px;
  position: relative;
  font-size: 13px;
  display: flex;
}
.bottom-checkall{
  display: flex;
  width: 50px;
  align-items: center;
  justify-content: space-between;
}
.bottom-total{
  flex: 1;
  line-height: 40px;
  padding-left: 10px;
}
.bottom-balance{
  width: 90px;
  color: #fff;
  background: red;
  text-align: center;
  line-height: 40px;
}
</style>
