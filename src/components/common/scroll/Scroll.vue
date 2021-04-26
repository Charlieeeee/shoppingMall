<template>
 <div ref="wrapper">
   <div class="content">
     <slot></slot>
   </div>
 </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
      observeDOM:true,
      probeType:this.probeType,
      click:true,
      pullUpLoad:this.pullUpLoad
    })

    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('loadmore')
    })
  },
  methods:{
    refresh(){//重新刷新better-scroll
      this.scroll && this.scroll.refresh()
    },
    // 点击返回顶部
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    // 完成一次加载请求一次
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    // 获取距离顶部的高度
    getScrollY(){
      return this.scroll ? this.scroll.y : 0
    }
  }
}


</script>
<style>
</style>