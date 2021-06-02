<template>
  <div class="commentInfo" v-if="Object.keys(commentInfo).length !== 0">
    <div class="commentTitle">
      <span class="user">用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="commmentDetail">
      <div class="userInfo" v-if="commentInfo.user">
        <img :src="commentInfo.user.avatar" alt="" class="userPhoto" />
        <p>{{ commentInfo.user.uname }}</p>
      </div>
      <div class="comment">
        <p>{{ commentInfo.content }}</p>
        <div class="params">
          <span class="date">{{ commentInfo.created | showDate }}</span>
          <span class="color">{{ commentInfo.style }}</span>
        </div>
      </div>
      <div class="comment-img">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate: function (value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped>
.commentInfo {
  padding: 20px 10px 20px;
  border-bottom: 4px solid #ddd;
}
.commentTitle {
  height: 40px;
  font-size: 16px;
  color: black;
  border-bottom: 2px solid #eee;
}
.commentTitle .user {
  float: left;
}
.commentTitle .more {
  float: right;
}
.commmentDetail {
  padding-top: 10px;
}
.userInfo {
  height: 60px;
}
.userInfo img {
  margin-right: 15px;
  float: left;
}
.userInfo p {
  line-height: 45px;
  float: left;
}
.userPhoto {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.comment {
  padding: 3px 8px 0 8px;
}
.params {
  height: 25px;
  line-height: 25px;
  margin: 10px 0;
  font-size: 12px;
}
.params .date,
.params .color {
  display: block;
  float: left;
}
.params .date {
  margin-right: 10px;
}
.comment-img {
  padding-left: 8px;
}
.comment-img img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>