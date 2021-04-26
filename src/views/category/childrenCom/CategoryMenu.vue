<template>
  <scroll class="wrapper">
   <div class="category-item" :class="{active:currentIndex === index}" v-for="(item,index) in menuList" :key="index" @click="menuClick(index)">
     <span>{{item.title}}</span>
   </div>
 </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

import {getCategory} from 'network/category.js'

export default {
  name:"CategoryMenu",
  components:{
    Scroll
  },
  data(){
    return{
      currentIndex:0,
      menuList:[]
    }
  },
  created() {
    getCategory().then(res =>{
      const msg = res.data;
      this.menuList = msg.data.category.list
      this.$bus.$emit('menuClick',this.menuList[this.currentIndex]) 
    })
  },
  methods:{
    menuClick(index){
      this.currentIndex = index
      this.$bus.$emit('menuClick',this.menuList[index])
    }
  }
}

</script>
<style scoped>
.wrapper{
  position: absolute;top: 44px;bottom: 49px;left: 0;overflow: hidden;
  width: 25%;
  background: #f9f9f9;
}
.category-item{
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 14px;
}
.active{
  background: #ffffff;
  color: var(--color-high-text);
  border-left: 3px solid#ff5777;
}
</style>