<template>
 <div class="detail">
   <detail-nav-bar ref="navbar" class="detail-nav-bar" @titleClick="titleClick"/>
   <scroll class="wrapper" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad"/>
      <detail-goods-param ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <!-- 滚动部分end -->
    <back-top v-show="backTopShow" @click.native="topClick"/>
 </div>
</template>

<script>
import DetailNavBar from './childrenCom/DetailNavBar'
import DetailSwiper from './childrenCom/DetailSwiper'
import DetailBaseInfo from './childrenCom/DetailBaseInfo'
import DetailShopInfo from './childrenCom/DetailShopInfo'
import DetailGoodsInfo from './childrenCom/DetailGoodsInfo'
import DetailGoodsParam from './childrenCom/DetailGoodsParam'
import DetailCommentInfo from './childrenCom/DetailCommentInfo'
import DetailBottomBar from './childrenCom/DetailBottomBar'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail.js'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
// import { } from ''

import {itemImgListMixin,backTopMixin} from 'common/mixin'
import {debouce} from 'common/utils'

import { mapActions } from 'vuex'

export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList
  },
  mixins:[itemImgListMixin,backTopMixin],
  data() {
    return {
      iid:null,
      topImages:[],//轮播图
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],//滚动的高度
      getThemeTopY:null,
      currentIndex:0,//滚动页面响应顶部菜单需要
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid
    // 2.请求数据
    getDetail(this.iid).then(res =>{
      let data = res.data.result;
      // 1.获取顶部轮播图
      this.topImages = data.itemInfo.topImages //轮播图
      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      // 3.创建店铺信息对象
      this.shop = new Shop(data.shopInfo)
      // 4.获取商品详细信息
      this.detailInfo = data.detailInfo
      // 获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      // 获取评价数据
      if(data.rate.cRate !== 0){
        this.commentInfo =data.rate.list[0]
      }
    })
    // 3.推荐列表数据请求
    getRecommend().then(res =>{
      this.recommends = res.data.data.list
    })
    // 4.给getThemeTopY赋值(对给this.themeTopYs赋值的操作进行防抖)
    this.getThemeTopY = debouce(()=>{
      this.themeTopYs= []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    },200)
  },
  methods:{
    ...mapActions(['addCartA']),
    imgLoad(){
      this.$refs.scroll.refresh()
      this.getThemeTopY()//图片加载完之后请求一下debouce
    },
    // 点击顶部bar获取index
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],300)
    },
    // 滚动获取高度
    contentScroll(position){
      const ScrollY = (-position.y)
      let length = this.themeTopYs.length
      for(let i = 0; i < length -1; i++){
        if(this.currentIndex !== i && (ScrollY >= this.themeTopYs[i] && ScrollY < this.themeTopYs[i + 1])){
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex
        }
      }
      // 滚动返回顶部大于1000显示
      this.backTopShow = (-position.y) > 1000
    },
    //添加到购物车
    addCart(){
      // 1.获取购物车需要展示的信息
      const product = {}
      product.img = this.topImages[0];//图片
      product.title = this.goods.title;//标题
      product.desc = this.goods.desc;//描述
      product.lowNowPrice = this.goods.lowNowPrice;//价格
      product.iid = this.iid;

      // 2.将商品添加到购物车里
      this.addCartA(product).then(res =>{
        this.$msg.inform(res)
      })
    }
    
  },
  destroyed(){
    // 1.离开之前销毁全局变量
    this.$bus.$off('ImageLoad',this.itemImgList) 
  }
}

</script>
<style scoped>
  .detail{height: 100vh;position: relative;z-index: 9;background: #fff;overflow: hidden;}
  .detail-nav-bar{position: relative;z-index: 9;background: #fff;}
  .wrapper{height: calc(100% - 44px - 49px);background: #fff;}
</style>