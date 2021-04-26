<template>
 <div class="control-bar">
   <div class="control-bar-item" v-for="(item,index) in titles" :key="index" :class="{active: indexItem==index}" @click="controlClick(index)">
     <span >{{item}}</span>
   </div>
 </div>
</template>

<script>
export default {
  name:'ControlBar',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      indexItem:0
    }
  },
  methods:{
    controlClick(index){
      this.indexItem = index
      this.$emit('controlClick',index)
    }
  }
}

</script>
<style scoped>
.control-bar{display:flex;text-align: center;font-size: 14px;line-height: 40px;}
.control-bar-item{flex: 1;font-size: 14px;}
.control-bar-item span{padding: 5px;}
.active span{border-bottom: 2px solid var(--color-high-text);color: var(--color-high-text);}
</style>