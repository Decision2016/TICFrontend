<template>
    <div class="article">
      <Navbar></Navbar>
      <div v-html="context"></div>
    </div>
</template>

<script>
import api from '@/utils/api'
import Navbar from '@/components/Navbar'
export default {
  name: 'detail',
  components: {Navbar},
  data () {
    return {
      context: ''
    }
  },
  mounted: async function () {
    let id = this.$route.query.id

    let res = await api.getArticle(id)
    this.context = res.data.context
  },
  beforeCreate: async function () {
    let res = api.websiteInfo()
    if (res.data.maintain) {
      this.$router.push('maintain')
    }
  }
}
</script>

<style scoped>

</style>
