<template>
  <div class="swiper">
    <div id="carousel" class="carousel slide carousel" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselExampleCaptions" v-for="(item, index) in carousels"  :data-bs-side-to="index" :class="index===0?'active':''" :key="index"></li>
      </ol>
      <div class="carousel-inner full">
        <div v-for="(item, index) in carousels" :class="index===0?'carousel-item active':'carousel-item'" :key="index" style="position: relative">
          <!-- div class="blur" :style="{'background': 'url('+item+')'}" ></div=-->
          <img id="show-images" class="img-fluid" :src="item.url" alt="..."/>
          <div class="carousel-caption d-none d-md-block" >
            <p>{{item.description}}</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swpier',
  props: ['carousels', 'auto', 'delay']
}
</script>

<style scoped>

  #show-images{
    overflow: hidden;
    background-size:cover;
    border-radius: 15px;
  }

  .blur {
    width: 100%;
    height: 600px;
    filter: blur(100px);
  }

  .swiper {
    margin-top: 50px;
  }

  .full {
    width: 100%;
    height: 100%;
  }

  .carousel-item {
    border-radius: 15px;
  }
</style>
