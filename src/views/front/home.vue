<template>
  <div class="app">
    <div class="home-swiper">
      <Navbar></Navbar>
      <Swpier :urls="urls" :descriptions="descriptions"></Swpier>
    </div>
    <div class="home-articles">
      <div class="home-article" v-for="(item, index) in articles" :key="index">
        <div :class="index%2===0?'home-article-right':'home-article-left'">
          
        </div>
      </div>
    </div>
    <div class="home-personnel"></div>
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
      articles: []
    }
  }
}
</script>

<style scoped>

</style>
