<template>
  <div class="list-page">
    <Navbar></Navbar>
    <div class="list-articles" v-for="(item, index) in articles" :key="index">
      <div class="item-title">{{item.title}}</div>
      <div class="item-desc">{{item.description}}</div>
      <div class="article-footer" style="margin-top: 1vw">
        <div class="article-author">
          <!--img class="author-avatar" :src="info.avatar"/-->
          <div class="author-name">{{item.author}}</div>
        </div>
        <div class="article-time">时间：{{item.date}}</div>
        <a class="article-readmore" @click="jumpToArticle(index)">阅读更多</a>
      </div>
    </div>
    <Page :total="total" show-elevator :onchange="changePage"></Page>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import api from '@/utils/api'
export default {
  name: 'List',
  components: { Navbar },
  data () {
    return {
      articles: [],
      total: -1
    }
  },
  mounted: async function () {
    let res = await api.getArticles(1)
    this.articles = res.data
    this.total = res.total
  },
  methods: {
    jumpToArticle (index) {
      this.$router.push({
        path: '/detail',
        query: {
          id: this.articles[index]._id
        }
      })
    },
    changePage: async function (index) {
      let res = await api.getArticles(index)
      this.articles = res.data
    }
  },
  beforeCreate: async function () {
    let res = api.websiteInfo()
    if (res.data.maintain) {
      this.$router.push('maintain')
    }
  }
}
</script>

<style scoped>
  .list-articles {
    width: 60%;
    margin: 1vw auto;
    border-top: solid 0.5px;
    border-bottom: solid 0.5px;
    border-color: #bebebe;
    /* border-bottom: solid 0.5px; */
    padding: 1vw;
  }

  .item-title {
    text-align: left;
    font-size: 2vw;
  }
  .item-desc {
    max-height: 12vw;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    text-indent: 1.2vw;
    padding-top: 1vw;
    font-size: 20px;
    color: #6d6d6d;
  }

  .article-footer {
    margin-top: 1vw;
    display: flex;
    align-items: center;
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
</style>
