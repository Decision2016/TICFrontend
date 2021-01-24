<template>
  <div class="app">
    <Navbar />
    <div class="home-swiper row" style="width: 100%">
      <div class="col-lg-1"/>
      <div class="col-lg-6 col-xs-12">
        <Swpier :urls="urls" :descriptions="descriptions" />
      </div>
      <div class="col-lg-4"><PersonnelCard :personnel="personnel"/></div>

    </div>
    <Article v-for="(item, index) in articles" :info="item" :key="index" />
    <div class="home-footer" style="margin-top: 3vw">
      <div class="row" style="width: 100%">
        <div class="col-lg-1"/>
        <div class="col-lg-2 footer-title">UESTC-TIC</div>
        <div class="col-lg-8">
          <div class="footer-about">
            <p class="footer-about-title">Others</p>
            <a href="/" class="footer-about-list">FAQs</a>
            <a href="/" class="footer-about-list">帮助 Help</a>
            <a href="/" class="footer-about-list">支持 Support</a>
            <a href="/" class="footer-about-list">博客 Blog</a>
          </div>
        </div>
      </div>
      <div class="footer-line" style="border-bottom: solid 0.5px;color:white;margin: 10px auto;width: 85%"></div>
      <p class="footer-copyright">Copyright © 电子科技大学TIC 2021</p>
    </div>
  </div>
</template>

<script>
import Swpier from '@/components/Swiper'
import Navbar from '@/components/Navbar'
import PersonnelCard from '@/components/PersonnelCard'
import Article from '@/components/Article'
export default {
  name: 'Home',
  components: {Article, PersonnelCard, Navbar, Swpier},
  data () {
    return {
      urls: ['./static/QQ图片20210113185921.png'],
      descriptions: ['1', '2', '3'],
      articles: [
        {
          title: '7位顶尖科学家跨越4大洲如约而至｜2020腾讯科学WE大会',
          author: '成电小二',
          about: '2020年，是“暗淡蓝点”照片被记录下的三十周年纪念。地球在这张照片上只有0.1像素，他让人类深刻地意识到自身的渺小，也理解了何为“休戚与共”这张照片的命名者卡尔·萨根说：“看看那个光点，那是我们的家园，我们的一切。你所爱的每一个人，你认识的每一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生。”此时此刻，全球很多地方都处于疫情隔离状态。疫情改变了很多事。不变的是，7位来自4大洲、6个国家的顶尖科学家，将跨越时差、跨越距离、跨越眼前的困难，齐聚2020腾讯科学WE大会。',
          avatar: 'https://avatars0.githubusercontent.com/u/25838809?s=460&v=4',
          datetime: '2020-11-02'
        },
        {
          title: '7位顶尖科学家跨越4大洲如约而至｜2020腾讯科学WE大会',
          author: '成电小二',
          about: '2020年，是“暗淡蓝点”照片被记录下的三十周年纪念。地球在这张照片上只有0.1像素，他让人类深刻地意识到自身的渺小，也理解了何为“休戚与共”这张照片的命名者卡尔·萨根说：“看看那个光点，那是我们的家园，我们的一切。你所爱的每一个人，你认识的每一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生。”此时此刻，全球很多地方都处于疫情隔离状态。疫情改变了很多事。不变的是，7位来自4大洲、6个国家的顶尖科学家，将跨越时差、跨越距离、跨越眼前的困难，齐聚2020腾讯科学WE大会。',
          avatar: 'https://avatars0.githubusercontent.com/u/25838809?s=460&v=4',
          datetime: '2020-11-02'
        }
      ],
      personnel: [
        {
          name: 'Decision',
          duties: '俱乐部副主席',
          avator: 'https://avatars0.githubusercontent.com/u/25838809?s=460&v=4'
        },
        {
          name: 'Decision',
          duties: '俱乐部副主席',
          avator: 'https://avatars0.githubusercontent.com/u/25838809?s=460&v=4'
        },
        {
          name: 'Decision',
          duties: '俱乐部副主席',
          avator: 'https://avatars0.githubusercontent.com/u/25838809?s=460&v=4'
        },
        {
          name: 'Decision',
          duties: '俱乐部副主席',
          avator: 'https://avatars0.githubusercontent.com/u/25838809?s=460&v=4'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .home-swiper {
    display: flex;
  }

  .app {
    background-color: rgb(35,29,42);
  }

  .footer-about-title {
    font-size: 20px;
    color: #fff;
    font-weight: 600;
  }

  .footer-about {
    display: flex;
    justify-content: space-between;
    margin: 20px 0 0 0;
  }
  .footer-title {
    display: flex;
    margin: 15px 0 0 0;
    text-align: center;
    color:white;
    font-size: 30px;
  }

  .footer-copyright {
    font-size: 1vw;
    color: #fff;
    font-weight: 700;
    padding: 2vw 0 2vw 0;
    margin-bottom: 0;
  }
</style>
