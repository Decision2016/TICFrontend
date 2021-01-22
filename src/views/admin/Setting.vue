<template>
  <div class="setting-page page-top">
    <div class="card" style="margin:0 2vw;">
      <div class="card-body">
        <div class="card-title">
          <h5 style="float: left">网站基本信息设置</h5>
        </div>
        <div class="row card-padding" style="padding-top: 1vw">
          <div class="col-lg-8">
            <form>
              <div class="mb-5">
                <label class="form-label card-left">网站标题</label>
                <input type="text" class="form-control">
                <div class="form-text card-left">在这里设置网站主页显示标题名</div>
              </div>
              <div class="mb-5">
                <label class="form-label card-left">备案信息</label>
                <input type="text" class="form-control">
                <div class="form-text card-left">备案信息填写，如果没有留空</div>
              </div>
              <button class="btn btn-primary" style="float: right">保存修改</button>
            </form>
          </div>
          <div class="col-lg-1"/>
          <div class="col-lg-2">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="recordSwitch" checked>
              <label class="form-check-label" for="recordSwitch">备案信息展示</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="margin:1vw 2vw;">
      <div class="card-body">
        <div class="card-title">
          <h5 style="float: left">敏感信息配置</h5>
        </div>
        <div class="row card-padding" style="padding-top: 1vw">
          <div class="col-lg-8">
            <form>
              <div class="mb-5">
                <label class="form-label card-left">管理员用户名</label>
                <input type="text" class="form-control">
                <div class="form-text card-left">修改管理员用户名</div>
              </div>
              <div class="mb-5">
                <label class="form-label card-left">管理员邮箱</label>
                <input type="text" class="form-control">
                <div class="form-text card-left">修改管理员邮箱，用于显示头像，找回密码等</div>
              </div>
              <div class="mb-5">
                <label class="form-label card-left">管理员密码</label>
                <input type="password" class="form-control">
                <div class="form-text card-left">修改管理员密码</div>
              </div>
              <button class="btn btn-danger" style="float: right">保存修改</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="margin:0 2vw;">
      <div class="card-body">
        <div class="card-title">
          <h5 style="float: left">二次验证信息修改</h5>
        </div>
        <div class="row card-padding" style="padding-top: 1vw">
          <div class="col-lg-8">
            <form>
              <div class="mb-5">
                <label class="form-label card-left">验证码</label>
                <input type="text" class="form-control">
                <div class="form-text card-left">输入当前二次验证信息</div>
              </div>
              <div class="mb-5">
                <label class="form-label card-left" >新密钥</label>
                <input type="text" class="form-control" disabled>
                <div class="form-text card-left">请在手机上导入密钥信息，或扫描二维码</div>
              </div>
              <div class="mb-5">
                <label class="form-label card-left">验证码New</label>
                <input type="text" class="form-control">
                <div class="form-text card-left">输入当前同步的新二次验证信息</div>
              </div>
              <button class="btn btn-primary" style="float: right; margin-left: 1vw">保存修改</button>
              <button class="btn btn-info" style="float: right">生成新密钥</button>
            </form>
          </div>
          <div class="col-lg-1"/>
          <div class="col-lg-3"></div>
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
  .card-left {
    float: left;
  }

  .card-padding {
    padding-left: 4vw;
  }
</style>
