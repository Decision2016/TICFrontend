<template>
  <div class="articles-page page-top">
    <div class="card"  style="margin: 0 2vw;min-height: 41.5vw;">
      <div class="card-body">
        <div class="card-title">
          <button class="btn btn-primary" style="float: right">添加新文章</button>
          <button class="btn btn-primary" style="float: right; margin-right: 1vw">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
          </button>
        </div>
        <div class="card-table">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">Author</th>
              <th scope="col">Title</th>
              <th scope="col">Setting</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in personnel" :key="index">
              <td><img :src="item.avatar" style="width: 3vw;height: 3vw" class="personnel-avatar"></td>
              <td>{{item.name}}</td>
              <td>{{item.duties}}</td>
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
  name: 'Articles',
  data () {
    return {
      articles: []
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

  .author-avatar {
    border-radius: 50%;
    border: solid 0.5px;
    border-color: #d6d3d3;
  }
</style>
