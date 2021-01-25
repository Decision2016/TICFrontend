import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.withCredentials = true

export default{
  login_require (mark, timestamp, nonce) {
    return ajax('/api/login_require', 'get', {
      params: {
        mark_info: mark,
        timestamp: timestamp,
        nonce: nonce
      }
    })
  },

  login (markinfo, ciphertext) {
    return ajax('/api/login', 'post', {
      data: {
        mark_info: markinfo,
        crypto: ciphertext
      }
    })
  },

  info () {
    return ajax('/api/info', 'get', {})
  },

  websiteInfo () {
    return ajax('/api/website', 'get', {})
  },

  changeWebsiteInfo (title, record) {
    return ajax('/api/website', 'post', {
      data: {
        title: title,
        record: record
      }
    })
  },

  changeUserInfo (username, password, email, verifycode) {
    return ajax('/api/verify_change', 'post', {
      data: {
        username: username,
        password: password,
        email: email,
        code: verifycode
      }
    })
  },

  generateSecret () {
    return ajax('/api/change_verify', 'get', {})
  },

  changeSecret (origin, newSec, newCode) {
    return ajax('/api/change_verify', 'post', {
      data: {
        origin: origin,
        new_sec: newSec,
        new_code: newCode
      }
    })
  },

  upload (md5, type, data) {
    return ajax('/api/upload', 'post', {
      data: {
        md5: md5,
        type: type,
        encode_data: data
      }
    })
  },

  getCarousel () {
    return ajax('/api/carousel', 'get', {})
  },

  addCarousel (url, desc) {
    return ajax('/api/carousel', 'post', {
      data: {
        url: url,
        desc: desc
      }
    })
  },

  editCarousel (id, url, desc) {
    return ajax('/api/carousel', 'put', {
      data: {
        id: id,
        url: url,
        desc: desc
      }
    })
  },

  delCarousel (id) {
    return ajax('/api/carousel', 'delete', {
      data: {
        id: id
      }
    })
  },

  getPersonnel () {
    return ajax('/api/personnel', 'get', {})
  },

  addPersonnel (name, avatar, duties) {
    return ajax('/api/personnel', 'post', {
      data: {
        name: name,
        avatar: avatar,
        duties: duties
      }
    })
  },

  editPersonnel (id, name, avatar, duties) {
    return ajax('/api/personnel', 'put', {
      data: {
        id: id,
        name: name,
        avatar: avatar,
        duties: duties
      }
    })
  },

  delPersonnel (id) {
    return ajax('/api/personnel', 'delete', {
      data: {
        id: id
      }
    })
  },

  getHomeArticles () {
    return ajax('/api/articles', 'get', {})
  },

  getArticles () {
    return ajax('/api/articles_manage', 'get', {})
  },

  addArticle (url) {
    return ajax('/api/articles_manage', 'post', {
      data: {
        vx_url: url
      }
    })
  },

  editArticle (id, desc) {
    return ajax('/api/articles_manage', 'put', {
      data: {
        id: id,
        desc: desc
      }
    })
  },

  delArticle (id) {
    return ajax('/api/articles_manage', 'delete', {
      data: {
        id: id
      }
    })
  },

  switch (itemName) {
    return ajax('/api/switch', 'get', {
      params: {
        switch: itemName
      }
    })
  },

  getArticle (id) {
    return ajax('/api/detail', 'get', {
      params: {
        id: id
      }
    })
  }
}

function ajax (url, method, options) {
  if (options !== undefined) {
    var {params = {}, data = {}} = options
  } else {
    params = data = {}
  }

  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data
    }).then(res => {
      resolve(res.data)
    }, res => {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({
        errMsg: -1,
        info: 'Connect failed'
      })
    })
  })
}
