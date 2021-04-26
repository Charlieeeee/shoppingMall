<template>
   <div class="tab-bar-item" @click="itemClick">
     <div v-if="!isActive">
       <slot name="item-img"></slot>
     </div>
      <div v-else>
        <slot name="item-img-active"></slot>
      </div>
      <!-- <div :class="{active:isActive}">
        <slot name="item-text"></slot>
      </div> -->
      <div :style="styleClor">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    name:String,
    itemColor:{
     type:String,
     default:'red'
    }
  },
  data() {
    return {
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    styleClor(){
      return this.isActive ? {color:this.itemColor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path);
    }
  },
}

</script>
<style>
.tab-bar-item{flex: 1;font-size: 14px;text-align: center;}
.tab-bar-item img{vertical-align: middle;width: 20px;height: 20px;margin: 5px 0 3px 0;}
</style>