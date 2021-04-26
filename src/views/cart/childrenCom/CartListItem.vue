<template>
  <div class="list-item">
    <!-- 选中按钮 -->
    <div class="item-check">
      <check-button :is-check="itemInfo.check" @click.native="checkBttn"/>
    </div>
    <!-- 图片列表展示 -->
    <div class="item-img">
      <img :src="itemInfo.img" alt="">
    </div>
    <!-- 内容 -->
    <div class="item-con">
      <h3>{{itemInfo.title}}</h3>
      <p>{{itemInfo.desc}}</p>
      <div class="item-bottom">
        <span class="price">￥{{itemInfo.lowNowPrice}}</span>
        <span class="count">x {{itemInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'

export default {
  name:'CartListItem',
  components:{
    CheckButton
  },
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    // 点击选中或者取消商品列表
    checkBttn(){
      this.itemInfo.check = !this.itemInfo.check
    }
  }
}
</script>

<style scoped>
.list-item{
  padding: 5px;
  border-bottom: 1px solid #ddd;
  display: flex;
}

.item-check{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-img img{
  width: 80px;
  height: 100px;
  border-radius: 3px;
  margin: 0 15px 0 8px;
}

.item-con{
  flex: 1;
  font-size: 14px;
  color: #333;
  position: relative;
  overflow: hidden;
}

.item-con h3{
  font-weight: normal;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  margin-top: 10px;
}

.item-con p{
  font-size: 13px;
  color: #504f4f;
  margin-top: 15px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.item-bottom{
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
}

.item-bottom span.price{
  color: var(--color-high-text);
  font-size: 16px;
}
</style>
