<template>
 <div id="home">
   <nav-bar class="home-bar">
     <div slot="center">购物街</div>
   </nav-bar>
   <control-bar class="control-bar" ref="controlbar1" :titles="['推荐','流行','新款']" @controlClick="controlClick" v-show="controlBar"/>
   <!-- 滚动部分 -->
    <scroll ref="scroll" class="wrapper"
                :probe-type="3"
                @scroll="contentScroll"
                :pull-up-load="true"
                @loadmore="loadMore"
    >
      <home-swiper :banners="banners" @swiperImgLoad="swiperLoad"/>
      <recommend-part :recommends="recommends"/>
      <feature-view/>
      <control-bar  ref="controlbar2"  :titles="['推荐','流行','新款']" @controlClick="controlClick"/>
      <goods-list :goods="showGood"/>
    </scroll>
   <!-- 滚动部分end -->
   <back-top v-show="backTopShow" @click.native="topClick"/>
 </div>
</template>

<script>
import HomeSwiper from './childrenCom/HomeSwiper'
import recommendPart from './childrenCom/recommendPart'
import FeatureView from './childrenCom/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import ControlBar from 'components/content/controlbar/ControlBar'
import GoodsList from 'components/content/goods/GoodsList'

import {getHome,getHomeGoods} from '@/network/home'

import {itemImgListMixin,backTopMixin} from 'common/mixin'

export default {
  name:'Home',
  components:{
    HomeSwiper,
    recommendPart,
    FeatureView,
    NavBar,
    Scroll,
    ControlBar,
    GoodsList
  },
  mixins: [itemImgListMixin,backTopMixin],
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      controlType:'pop',
      controlBar:false,
      fixedTop:0,
      saveY:0,
      // itemImgList:null   //删掉
    }
  },
  created() {
    // 请求首页数据
    this.getHome()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell') 
  },
  mounted() {
    
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    // 1.离开时候监听滚动的位置
    this.saveY = this.$refs.scroll.getScrollY()
    // 2.取消全局事件监听
    this.$bus.$off('ImageLoad',this.itemImgList)
  },
  computed:{
    showGood(){
      return this.goods[this.controlType].list
    }
  },
  methods: {
    // -------------------------------------------------------------------------------------------------------------点击事件
    controlClick(index){
      switch(index){
        case 0:
          this.controlType = 'pop'
          break
        case 1:
          this.controlType = 'new'
          break
        case 2:
          this.controlType = 'sell'
          break
      }
      this.$refs.controlbar1.indexItem = index
      this.$refs.controlbar2.indexItem = index
    },
    // 滚动大于1000返回顶部显示
    contentScroll(position){
      this.backTopShow = (-position.y) > 1000
      this.controlBar = this.fixedTop < (-position.y)
    },
    // 监听轮播图加载完固定菜单的高度
    swiperLoad(){
      this.fixedTop = this.$refs.controlbar2.$el.offsetTop;
    },
    // 上拉加载更多
    loadMore(){
      this.getHomeGoods(this.controlType)
    },
    // ---------------------------------------------------------------------------------------------------------------请求数据的方法
      // 1.首页banner数据
    getHome(){
      getHome().then(res =>{
        let msg = res.data
        this.banners = msg.data.banner.list
        this.recommends = msg.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res =>{
        let msg = res.data
        this.goods[type].list.push(...msg.data.list)
        this.goods[type].page +=1
        this.$refs.scroll.finishPullUp()
      })
    }
  },
}
</script>
<style scoped>
/* #home{height: 100vh;overflow: hidden;} */
.home-bar{background: var(--color-tint);color: #ffffff;}
.wrapper{position: absolute;top: 44px;bottom: 49px;right: 0;left: 0;overflow: hidden;}
.control-bar{background: #ffffff;position: relative;z-index: 9;}
</style>