<template>
  <div class="articles row" style="width: 100%; margin: 1.5vw 0;">
    <div class="col-lg-1"/>
    <div class="article-item col-lg-6">
      <div class="article-title">{{info.title}}</div>
      <div class="article-about">
        {{info.description}}
      </div>
      <div class="article-footer" style="margin-top: 1vw">
        <div class="article-author">
          <!--img class="author-avatar" :src="info.avatar"/-->
          <div class="author-name">{{info.author}}</div>
        </div>
        <div class="article-time">时间：{{info.date}}</div>
        <a class="article-readmore" @click="jumpToArticle">阅读更多</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    info: {}
  },
  methods: {
    jumpToArticle () {
      this.$router.push({
        path: '/detail',
        query: {
          id: this.info._id
        }
      })
    }
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
    display: flex;
    float: left;
    align-items: center;
  }

  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .author-name {
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
    flex: 1;
    text-align: right;
  }

  .article-footer {
    margin-top: 1vw;
    display: flex;
    align-items: center;
  }
</style>
