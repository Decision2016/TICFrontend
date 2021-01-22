<template>
  <div class="personnel-page page-top">
    <div class="personnel-alert">
      <div class="alert alert-info" role="alert" style="margin:0 2vw;">
        为了保证主页的正常显示，建议添加人数在4人及以下，如果需要添加更多人数需要微调一下前端代码。
      </div>
    </div>
    <div class="card"  style="margin: 0.5vw 2vw;min-height: 38vw;">
      <div class="card-body">
        <div class="card-title">
          <button class="btn btn-primary" style="float: right">添加新人员</button>
        </div>
        <div class="card-table">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Duties</th>
              <th scope="col">Setting</th>
              <!--todo:需要添加一个用于调整顺序的东西-->
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in personnel" :key="index">
              <th scope="row">{{index + 1}}</th>
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
  name: 'Personnel',
  data () {
    return {
      personnel: [
        {
          name: 'Decision',
          duties: '俱乐部副主席',
          avatar: 'https://avatars0.githubusercontent.com/u/25838809?s=460&v=4'
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

  .personnel-avatar {
    border-radius: 50%;
    border: solid 0.5px;
    border-color: #d6d3d3;
  }
</style>
