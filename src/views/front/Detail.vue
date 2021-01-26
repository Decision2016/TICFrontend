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
  }
}
</script>

<style scoped>

</style>
