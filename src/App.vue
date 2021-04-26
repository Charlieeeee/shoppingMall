<template>
  <div id="app">
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
    <main-tabbar/>
  </div>
</template>

<script>
import mainTabbar from '@/components/content/mainbar/mainTabbar'
export default {
  name: 'App',
  components: {
    mainTabbar
  }
}
</script>

<style scoped>
  @import url('./assets/css/base.css');
</style>
