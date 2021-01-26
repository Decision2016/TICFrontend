<template>
  <div class="app">
    <Navbar />
    <div class="home-swiper row" style="width: 100%">
      <div class="col-lg-1"/>
      <div class="col-lg-6 col-xs-12">
        <Swpier :carousels="carousel" />
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
            <a href="https://lexiangla.com/teams/k100021" class="footer-about-list" target="_blank">乐享平台</a>
            <a href="https://tic-uestc.github.io/" class="footer-about-list" target="_blank">博客 Blog</a>
            <div class="footer-about-list" style="color: white;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <a href="https://github.com/TIC-UESTC" target="_blank">Github</a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-line" style="border-bottom: solid 0.5px;color:white;margin: 10px auto;width: 85%"></div>
      <p class="footer-record" v-show="websiteInfo.record_switch">{{websiteInfo.record}}</p>
      <p class="footer-copyright">Copyright © 电子科技大学TIC 2021</p>
    </div>
  </div>
</template>

<script>
import Swpier from '@/components/Swiper'
import Navbar from '@/components/Navbar'
import PersonnelCard from '@/components/PersonnelCard'
import Article from '@/components/Article'
import api from '@/utils/api'
export default {
  name: 'Home',
  components: {Article, PersonnelCard, Navbar, Swpier},
  data () {
    return {
      carousel: [],
      personnel: [],
      websiteInfo: {},
      articles: []
    }
  },
  beforeCreate: async function () {
    this.carousel = (await api.getCarousel()).data
    this.personnel = (await api.getPersonnel()).data
    this.websiteInfo = (await api.websiteInfo()).data
    this.articles = (await api.getArticles()).data
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
    color:white;
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
    padding-bottom: 1vw;
    margin-bottom: 0;
  }

  .footer-record {
    font-size: 1vw;
    color: #fff;
    font-weight: 700;
    padding-bottom: 1vw;
    margin-bottom: 0;
  }
</style>
