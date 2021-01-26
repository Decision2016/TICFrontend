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
                <input type="text" class="form-control" v-model="websiteInfo.title">
                <div class="form-text card-left">在这里设置网站主页显示标题名</div>
              </div>
              <div class="mb-5">
                <label class="form-label card-left">备案信息</label>
                <input type="text" class="form-control" v-model="websiteInfo.record">
                <div class="form-text card-left">备案信息填写，如果没有留空</div>
              </div>
              <button type="button" class="btn btn-primary" style="float: right" @click="changeWebsiteInfo">保存修改</button>
            </form>
          </div>
          <div class="col-lg-1"/>
          <div class="col-lg-2">
            <div class="form-check form-switch mb-4">
              <input class="form-check-input" type="checkbox" id="recordSwitch" :checked="websiteInfo.record_switch" @click="websiteSwitch('record')">
              <label class="form-check-label" for="recordSwitch">备案信息展示</label>
            </div>
            <div class="form-check form-switch mb-4">
              <input class="form-check-input" type="checkbox" id="maintainSwitch" :checked="websiteInfo.maintain" @click="websiteSwitch('maintain')">
              <label class="form-check-label" for="recordSwitch">开启维护</label>
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
                <input type="text" class="form-control" v-model="userInfo.username">
                <div class="form-text card-left">修改管理员用户名</div>
              </div>
              <div class="mb-5">
                <label class="form-label card-left">管理员邮箱</label>
                <input type="text" class="form-control" v-model="userInfo.email">
                <div class="form-text card-left">修改管理员邮箱，用于显示头像，找回密码等</div>
              </div>
              <div class="mb-5">
                <label class="form-label card-left">管理员密码</label>
                <input type="password" class="form-control" v-model="password">
                <div class="form-text card-left">修改管理员密码</div>
              </div>
              <button type="button" class="btn btn-danger" style="float: right" data-bs-toggle="modal" data-bs-target="#verifyModal" @click="isChangeUser=true">保存修改</button>
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
                <label class="form-label card-left" >新密钥</label>
                <input type="text" class="form-control" disabled v-model="new_sec">
                <div class="form-text card-left">请在手机上导入密钥信息，或扫描二维码</div>
              </div>
              <div class="mb-5">
                <label class="form-label card-left">验证码New</label>
                <input type="text" class="form-control" v-model="new_code">
                <div class="form-text card-left">输入当前同步的新二次验证信息</div>
              </div>
              <button type="button" class="btn btn-primary" style="float: right; margin-left: 1vw" data-bs-toggle="modal" data-bs-target="#verifyModal" @click="isChangeVerify = true">保存修改</button>
              <button type="button" class="btn btn-info" style="float: right" @click="generateSec">生成新密钥</button>
            </form>
          </div>
          <div class="col-lg-1"/>
          <div class="col-lg-3">
            <div ref="qrcode" class="mt-4"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="verifyModal" tabindex="-1" aria-labelledby="verifyModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verifyModalLabel">二次验证</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-5">
                <label class="form-label" style="float:left;">输入当前的Google验证码:</label>
                <input type="text" class="form-control" v-model="code">
                <div class="form-text" style="float: left">注意：在30min内，只有5次输入机会。</div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="accept">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import QRCode from 'qrcodejs2'
import Vue from 'vue'
export default {
  name: 'Setting',
  data () {
    return {
      userInfo: {},
      websiteInfo: {},
      password: '',
      new_sec: '',
      new_code: '',
      code: '',
      qrcode_url: '',
      isChangeUser: false,
      isChangeVerify: false
    }
  },
  mounted () {
    this.refreshData()
    // eslint-disable-next-line no-undef
    this.verifyModal = new bootstrap.Modal(document.getElementById('verifyModal'))
  },
  methods: {
    refreshData: async function () {
      let res = await api.info()
      this.userInfo = res.data

      res = await api.websiteInfo()
      this.websiteInfo = res.data
    },
    generateSec: async function () {
      let res = await api.generateSecret()
      this.new_sec = res.data.sec
      this.qrcode_url = 'otpauth://totp/' + this.userInfo.username + ':' + this.userInfo.email + '?secret=' + res.data.sec + '&issuer=TIC-Website'
      this.$refs.qrcode.innerHTML = ''
      // eslint-disable-next-line no-unused-vars
      const qrcode = new QRCode(this.$refs.qrcode, {
        text: this.qrcode_url,
        width: 150,
        height: 150,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    },
    changeVerify: async function () {
      let res = await api.changeSecret(this.code, this.new_sec, this.new_code)
      if (res.code === -1) {
        Vue.prototype.$error('验证信息错误')
        return
      } else if (res.code === 5) {
        Vue.prototype.$error('尝试次数太多')
        return
      }
      this.refreshData()
      Vue.prototype.$success('修改成功')
    },
    // todo: 优化重复代码
    changeUser: async function () {
      let res = await api.changeUserInfo(this.userInfo.username, this.password, this.userInfo.email, this.code)
      if (res.code === -1) {
        Vue.prototype.$error('验证信息错误')
        return
      } else if (res.code === 5) {
        Vue.prototype.$error('尝试次数太多')
        return
      }
      this.refreshData()
      Vue.prototype.$success('修改成功')
    },
    accept () {
      if (this.isChangeVerify) {
        this.changeVerify()
        this.verifyModal.hide()
        this.isChangeVerify = false
      }
      if (this.isChangeUser) {
        this.changeUser()
        this.verifyModal.hide()
        this.isChangeUser = false
      }
    },
    changeWebsiteInfo: async function () {
      let res = await api.changeWebsiteInfo(this.websiteInfo.title, this.websiteInfo.record)
      if (res.code !== 0) {
        Vue.prototype.$error('发生错误')
        return
      }
      Vue.prototype.$success('修改成功')
    },
    websiteSwitch: async function (item) {
      let res = await api.switch(item)
      if (res.code === 0) {
        res = await api.websiteInfo()
        this.websiteInfo = res.data
      }
      Vue.prototype.$success('切换成功')
    }
  }
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
