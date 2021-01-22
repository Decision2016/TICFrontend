<template>
  <div class="setting-page">
    <div class="card" style="margin:1.5vw 2vw;">
      <div class="card-body">
        <div class="card-title">
          <h5 style="float: left">网站基本信息设置</h5>
        </div>
        <form>
          <div class="card-form">
            <label class="form-label">网站标题</label>
            <input type="text" class="form-control">
            <div class="form-text">在这里设置网站主页显示标题名</div>
          </div>
        </form>
      </div>
    </div>
    <div class="card" style="margin:1vw 2vw;">
      <div class="card-body">
        <div class="card-title">
          <h5 style="float: left">敏感信息配置</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Setting'
  }
</script>

<style scoped>

</style>
