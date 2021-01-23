<template>
  <div class="log-page page-top">
    <div class="card"  style="margin: 0 2vw;min-height: 41.5vw;">
      <div class="card-body">
        <img :src="url" style='width: 20vw;margin: 3vw auto;'>
        <h3>前面的区域以后再来探索吧</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Log',
  data () {
    return {
      url: '../static/images/12053b275dcb15707f646b4c28fa9a32.jpg'
    }
  }
}
</script>

<style scoped>

</style>
