import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import msg from './common/msg'
Vue.prototype.$msg = msg;
// 导入
import FastClick from 'fastclick'
// 导入vuelazyload
import VueLazyLoad from 'vue-lazyload'

// vant使用
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() //定义一个bus方法

// 解决移动端300ms延迟
FastClick.attach(document.body)

// 使用vuelazyload
Vue.use(VueLazyLoad, {
    //同时可以再图片加载前添加默认图片
    loading: require('./assets/img/common/placeholder.png')
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')