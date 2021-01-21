<template>
  <div class="articles row" style="width: 100%">
    <div class="col-lg-1"/>
    <div class="article-item col-lg-6">
      <div class="article-title">{{info.title}}</div>
      <div class="article-author">
        <img class="author-avatar" :src="info.avatar"/>
        <div class="author-name">{{info.author}}</div>
      </div>
      <div class="article-about">
        {{info.about}}
      </div>
      <div class="article-footer">
        <div class="article-time">时间：{{info.time}}</div>
        <a class="article-readmore" :href="info.url">阅读更多</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    info: {}
  }
}
</script>

<style scoped>
  .article-title {
    color: white;
    font-size: 30px;
    text-align: left;
  }

  .article-author {
    padding: 10px;
    display: flex;
    float: right;
    align-items: center;
  }

  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .author-name {
    margin-left: 10px;
    color: #dbdbdb;
  }

  .article-about {
    padding: 10px;
    color: #d6d6d6;
    font-size: 20px;
    text-align: left;
    text-indent: 30px;
  }

  .article-time {
    float: left;
    margin-left: 10px;
    color: #a3a3a3;
  }

  .article-readmore {
    float: right;
  }
</style>
