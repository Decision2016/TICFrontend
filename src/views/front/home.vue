<template>
  <div class="app">
    <div class="home-swiper">
      <Navbar></Navbar>
      <Swpier :urls="urls" :descriptions="descriptions"></Swpier>
    </div>
    <!--div class="home-articles">
    </div-->
    <div class="home-personnel">
      <h1 style="margin-top: 30px">现任成员</h1>
      <div class="home-personnel-line" style="width: 85%;height:2px;background-color: black;margin: 10px auto; "></div>
      <div class="personnel-column" >
        <div class="home-personnel-info">
          <img class="info-avator" :src="personnel[0].avator" />
          <div class="info-name"></div>
        </div>
        <div class="home-personnel-info">
          <img class="info-avator" :src="personnel[0].avator" />
          <div class="info-name"></div>
        </div>
        <div class="home-personnel-info">
          <img class="info-avator" :src="personnel[0].avator" />
          <div class="info-name"></div>
        </div>
        <div class="home-personnel-info">
          <img class="info-avator" :src="personnel[0].avator" />
          <div class="info-name"></div>
        </div>
      </div>
    </div>
    <div class="home-footer"></div>
  </div>
</template>

<script>
import Swpier from '@/components/Swiper'
import Navbar from '@/components/Navbar'
export default {
  name: 'Home',
  components: {Navbar, Swpier},
  data () {
    return {
      urls: ['./static/e15d7dc6cb065c2e74f0a2faf26f8fb0.jpg', './static/QQ图片20210113185921.png', './static/thumb-1920-1107572.png'],
      descriptions: ['1', '2', '3'],
      articles: [],
      personnel: [
        {
          name: 'Decision',
          avator: 'https://avatars0.githubusercontent.com/u/25838809?s=460&v=4'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .info-avator{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: solid 0.5px;
    border-color: #d6d3d3;
    margin: 20px 90px;
    -webkit-transition:-webkit-transform 2s;
  }

  .info-avator:hover {
    -webkit-transform: rotate(360deg);
  }

  .personnel-column {
    display: flex;
    justify-content: center;
  }
</style>
