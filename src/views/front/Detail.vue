<template>
    <div class="article">
      <div v-html="context"></div>
    </div>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'detail',
  data () {
    return {
      context: ''
    }
  },
  mounted: async function () {
    let res = await api.getArticle(2)
    this.context = res.data.context
  }
}
</script>

<style scoped>

</style>
