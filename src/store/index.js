import Vue from 'vue'
import Vuex from 'vuex'
import types from '@/utils/types'
import storage from '@/utils/storage'
import api from '@/utils/api'

Vue.use(Vuex)

const state = {
  profile: {}
}

const getters = {
  profile: state => state.profile,
  isAuthenticated: (state, getters) => {
    return !!getters.profile.username
  }
}

const mutations = {
  [types.CHANGE_PROFILE] (state, {profile}) {
    state.profile = profile
    console.log(profile)
    storage.set('authed', !!profile)
  }
}

const actions = {
  getProfile ({commit}) {
    api.info().then(res => {
      commit(types.CHANGE_PROFILE, {
        profile: res.data
      })
    })
  },
  clearProfile ({commit}) {
    commit(types.CHANGE_PROFILE, {
      profile: {}
    })
    storage.clear()
  }
}

const store = new Vuex.Store(
  {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
  }
)

export default store
