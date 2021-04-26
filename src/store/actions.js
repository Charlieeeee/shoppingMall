export default {
    // 详情页发送的加入购物车的方法
    addCartA(context, payload) {
        return new Promise((resolve, reject) => {
            // 方法2find函数 如果相等 会直接将item对象赋值给oldProduct
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                context.commit('addCounter', oldProduct)
                resolve('给现有商品+1')
            } else {
                payload.count = 1
                context.commit('addToCart', payload)
                resolve('添加商品成功')
            }
        })
    }
}