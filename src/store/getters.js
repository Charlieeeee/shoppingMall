export default {
  // 获取购物车顶部的数量
  cartLength(state){
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  }
}