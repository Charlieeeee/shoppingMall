<template>
  <scroll class="wrapper" ref="scroll">
    <div class="category-info">
      <div class="category-item" v-for="(item,index) in categoryInfo" :key="index">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import  { getCategoryInfo } from 'network/category'

export default {
  name:'CategoryRight',
  components:{
    Scroll
  },
  data(){
    return {
      categoryInfo:[]
    }
  },
  created(){
      this.$bus.$on('menuClick',(data)=>{
        getCategoryInfo(data.maitKey).then((res)=>{
          const msg = res.data
          this.categoryInfo = msg.data.list
          // 切换菜单之后右侧内容回到顶部
          this.$refs.scroll.scrollTo(0,0,0)
        })
      })
   }
}

</script>
<style scoped>
.wrapper{
  position: absolute;top: 44px;bottom: 49px;right: 0;overflow: hidden;
  width: 75%;
  background: #ffffff;
}
.category-info{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 20px;
}
.category-item{
  width: 33.33%;
  text-align: center;
  margin-top: 10px;
}
.category-item img{
  width: 80%;
}
.wrapper p {
  text-align: center;
  font-size: 14px;
}
</style>