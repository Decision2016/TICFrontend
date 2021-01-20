<template>
  <div class="swiper">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleCaptions" v-for="(item, index) in urls"  :data-bs-side-to="index" :class="index===0?'active':''" :key="index"></li>
      </ol>
      <div class="carousel-inner">
        <div v-for="(item, index) in urls" :class="index===0?'carousel-item active':'carousel-item'" :key="index">
          <img id="show-images" :src="item" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <p>{{descriptions[index]}}</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swpier',
  props: {
    urls: [],
    descriptions: [],
    auto: true,
    delay: 5000
  }
}
</script>

<style scoped>
  .swiper {
    max-height: 700px;
    width: 100%;
  }

  #show-images {
    width: 100%;
    max-height: 670px;
  }
</style>
