export default {
  // 点击添加购物车如果cartList中有相同数据，直接给购物车中的count+1
  addCounter(state,payload){
    payload.count += 1
  },
  // 点击加入购物车cartList没有改条数据  直接放到数组中
  addToCart(state,payload){
    payload.check = true
    state.cartList.push(payload)
  }
}