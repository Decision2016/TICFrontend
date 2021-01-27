<template>
  <div class="404">
    <!-- Preloader -->
    <div class="preloader">
      <div class="cssload-speeding-wheel"></div>
    </div>
    <section id="wrapper" class="error-page">
      <div class="error-box">
        <div class="error-body text-center">
          <h1>404</h1>
          <h3 class="text-uppercase mt-5 mb-5">Page Not Found !</h3>
          <p class="text-muted mt-5 mb-5">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>
          <a href="/" class="btn btn-info btn-rounded waves-effect waves-light mb-5" style="color: white;">Back to home</a> </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
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

  .waves-effect {
    position: relative;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .btn-rounded {
    border-radius: 60px;
  }

  .btn-info, .btn-info.disabled {
    background: #00bbd9;
    border: 2px solid #00bbd9;
  }

  .text-uppercase {
    text-transform: uppercase;
  }
</style>
