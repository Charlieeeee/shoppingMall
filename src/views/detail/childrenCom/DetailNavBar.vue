<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div class="title-item" v-for="(item,index) in titles" :key="index" :class="{aceive:currentIndex === index}" @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index
      // 给父组件发送方法
      this.$emit('titleClick',index)
    },
    // 点击返回上一页
    backClick(){
      this.$router.back()
    }
  }
}

</script>
<style scoped>
.left img{margin-top: 10px;}
.title{display: flex;font-size: 14px;}
.title-item{flex: 1;}
.aceive{color: var(--color-high-text);}
</style>