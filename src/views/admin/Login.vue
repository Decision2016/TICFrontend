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
            <input type="text" class="form-control" placeholder="输入用户名" id="usernameInput" v-model="username">
            <label for="usernameInput">Username</label>
          </div>
          <div class="form-floating mb-4">
            <input type="password" class="form-control" placeholder="请输入密码" id="passwordInput" v-model="password">
            <label for="passwordInput">Password</label>
          </div>
          <button type="button" class="btn btn-primary" style="float: right" @click="login">登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import { JSEncrypt } from 'jsencrypt'
import { mapActions } from 'vuex'
import Vue from 'vue'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      mark_info: '',
      public: '',
      timestamp: null,
      nonce: null
    }
  },
  methods: {
    ...mapActions(['getProfile']),
    generateMark () {
      this.timestamp = Math.round(new Date().getTime() / 1000)
      this.nonce = Math.round(Math.random() * 1e15)

      let nonceStr = this.nonce.toString()
      let timeStr = this.timestamp.toString()
      let length = parseInt(nonceStr.length / 2)
      let mixed = nonceStr.substring(0, length) + timeStr + nonceStr.substring(length, nonceStr.length)
      // eslint-disable-next-line no-undef
      this.mark_info = md5(mixed)
    },
    login: async function () {
      this.generateMark()
      let res = await api.login_require(this.mark_info, this.timestamp, this.nonce)
      this.public = res.data['pub_key']

      if (res.code === -10) {
        this.mark_info = res.data['mark_info']
      }

      let jse = new JSEncrypt()
      jse.setPublicKey(this.public)

      let plaintext = '{"username": "' + this.username + '","password": "' + this.password + '"}'
      let ciphertext = jse.encrypt(plaintext)
      res = await api.login(this.mark_info, ciphertext)
      if (res.code === 0) {
        this.getProfile()
        let that = this
        setTimeout(function () {
          that.$router.push('/admin')
          Vue.prototype.$success('登录成功')
        }, 200)
      } else if (res.code === 5) {
        Vue.prototype.$success('登录请求太频繁')
      }
      Vue.prototype.$success('密码错误或用户不存在')
    }
  }
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
