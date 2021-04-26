<template>
 <div class="comment-info" v-if="Object.keys(commentInfo).length != 0">
   <div class="comment-title">
     <div class="users">用户评价</div>
     <div class="more">更多<img src="~assets/img/common/icon_01.png" alt=""></div>
   </div>
   <div class="comment-show">
     <div class="comment-shop">
       <img :src="commentInfo.user.avatar" alt="">
       <span>{{commentInfo.user.uname}}</span>
     </div>
     <h5>{{commentInfo.content}}</h5>
     <p>
       <span>{{commentInfo.created | showDate}}</span>
       <span>{{commentInfo.style}}</span>
     </p>
   </div>
   <div class="comment-img" v-if="commentInfo.images">
     <img v-for="(item,index) in commentInfo.images" :key="index" :src="item" alt="">
   </div>
 </div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name:"DetailCommentInfo",
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate(value){//转成时间格式
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}

</script>
<style scoped>
.comment-info{padding: 0 10px 20px 10px;font-size: 14px;color: #333;border-bottom: 3px solid #ddd;}
.comment-title{display: flex;justify-content: space-between;align-items: center;height: 40px;border-bottom: 1px solid #ddd;}
.comment-title img{width: 10px;vertical-align: middle;margin-left: 3px;margin-bottom: 3px;}
.comment-shop{
  padding: 15px 0;
  display: flex;
  align-items: center;
}
.comment-shop img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.comment-shop span{
  padding-left: 5px;
}
.comment-show h5,.comment-show p{color: #737373;font-size: 13px;font-weight: normal;line-height: 20px;}
.comment-show p{margin: 5px 0;}
.comment-show p span{padding-right: 10px;color: #a7a7a7;}
.comment-img{margin-top: 10px;}
.comment-img img{width: 70px;height: 70px;margin-right: 5px;}
</style>