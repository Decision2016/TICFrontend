<template>
  <div class="login-page" style="min-height: 47vw;padding-top: 10vw;background: #fbfbfb;">
    <!--div class="login-bg"></div-->
    <div class="card login-card" >
      <div class="card-body">
        <div class="card-title">
          <h5 style="text-align: left;margin: 1vw 0;">管理员登录</h5>
        </div>
        <form>
          <div class="form-floating mb-4">
            <input type="text" class="form-control" id="usernameInput">
            <label for="usernameInput">Username</label>
          </div>
          <div class="form-floating mb-4">
            <input type="text" class="form-control" id="passwordInput">
            <label for="passwordInput">Password</label>
          </div>
          <button class="btn btn-primary" style="float: right">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.login-bg {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #fbfbfb;
}

  .login-card {
    margin: 0vw 37vw;
    position: relative;
    z-index: 1000;
  }
</style>
