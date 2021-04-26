<template>
  <div class="category">
     <nav-bar class="category-bar">
       <div slot="center">商品分类</div>
     </nav-bar>
      <category-menu/>
      <!-- 右侧 -->
      <category-right/>
  </div>
 
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CategoryMenu from './childrenCom/CategoryMenu'
import CategoryRight from './childrenCom/CategoryRight'

export default {
  name:'Category',
  components:{
    NavBar,
    CategoryMenu,
    CategoryRight
  },
  data() {
    return {
    }
  },
}

</script>
<style scoped>
.category-bar{
  background: var(--color-tint);color: #ffffff;
}
</style>