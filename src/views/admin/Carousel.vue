<template>
  <div class="carousel-set page-top">
    <div class="card"  style="margin: 0 2vw;min-height: 41.5vw;">
      <div class="card-body">
        <div class="card-title">
          <button class="btn btn-primary" style="float: right">添加新的图片</button>
        </div>
        <div class="card-table">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">缩略图</th>
              <th scope="col">描述</th>
              <th scope="col">管理</th>
            </tr>
            </thead>
          <tbody>
            <tr v-for="(item, index) in carousels" :key="index">
              <th scope="row">{{index + 1}}</th>
              <td><img :src="item.url" style="width: 6vw;height: 4vw"></td>
              <td>{{item.description}}</td>
              <td>
                <button class="btn btn-primary">编辑</button>
                <button class="btn btn-danger">删除</button>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      carousels: [
        {
          url: './static/QQ图片20210113185921.png',
          description: '1'
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-table {
  padding-top: 3vw;
}

.table th, .table td {
  text-align: center;
  vertical-align: middle!important;
}
</style>
