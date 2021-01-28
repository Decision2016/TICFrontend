<template>
  <div class="404">
    <!-- Preloader -->
    <div class="preloader">
      <div class="cssload-speeding-wheel"></div>
    </div>
    <section id="wrapper" class="error-page">
      <div class="error-box">
        <div class="error-body text-center">
          <h3 class="text-uppercase mt-5 mb-5">维护中</h3>
          <p class="text-muted mt-5 mb-5">网站正在进行维护，请稍后进行访问</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Maintain'
}
</script>

<style scoped>
  .error-body {
    padding-top: 5%;
  }

  .text-center {
    text-align: center;
  }

  .error-body h1 {
    font-size: 210px;
    font-weight: 900;
    line-height: 210px;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  .text-muted {
    color: #8d9498!important;
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
