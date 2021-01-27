<template>
  <div class="articles-page page-top">
    <div class="card"  style="margin: 0 2vw;min-height: 41.5vw;">
      <div class="card-body">
        <div class="card-title">
          <button class="btn btn-primary" style="float: right" data-bs-toggle="modal" data-bs-target="#articlesModal">添加新文章</button>
          <button class="btn btn-primary" style="float: right; margin-right: 1vw" @click="refresh">
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
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Description</th>
              <th scope="col">Datetime</th>
              <th scope="col">Setting</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item, index) in articles" :key="index">
              <!--td><img :src="item.avatar" style="width: 3vw;height: 3vw" class="personnel-avatar"></td-->
              <td>{{index + 1}}</td>
              <td>
                <div class="item-title">
                  {{item.title}}
                </div>
              </td>
              <td>{{item.author}}</td>
              <td>
                <div class="item-context">
                  {{item.description}}
                </div>
              </td>
              <td>{{item.date}}</td>
              <td>
                <!--button class="btn btn-primary">编辑</button-->
                <button class="btn btn-danger" @click="deleteIndex=index;acceptModal.show()">删除</button>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
      </div>
      <Page :total="total" show-elevator :onchange="changePage" class="mb-4"></Page>
    </div>
    <div class="modal fade" id="articlesModal" tabindex="-1" aria-labelledby="articlesModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="max-width: 700px">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="articlesModalLabel">添加文章</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-floating mb-3 mt-3">
                <input type="text" class="form-control" placeholder="请输入URL" id="urlInput" v-model="addUrl">
                <label for="urlInput">URL</label>
              </div>
              <div class="form-floating mb-3 mt-3" >
                <textarea class="form-control" v-model="addDesc" placeholder="在此处填写文章摘要" id="descInput" style="min-height: 15vw"></textarea>
                <label for="descInput" >Description</label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="submit">确定</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="acceptModal" tabindex="-1" aria-labelledby="acceptModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="max-width: 700px">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="acceptModalLabel">确认删除</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5 style="float: left">确认删除该条记录？</h5>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="deleteArticle">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'
import Vue from 'vue'
export default {
  name: 'Articles',
  data () {
    return {
      articles: [],
      addUrl: '',
      addDesc: '',
      articleModal: null,
      deleteIndex: -1,
      total: -1
    }
  },
  mounted () {
    this.refresh()
    // eslint-disable-next-line no-undef
    this.articleModal = new bootstrap.Modal(document.getElementById('articlesModal'))
    // eslint-disable-next-line no-undef
    this.acceptModal = new bootstrap.Modal(document.getElementById('acceptModal'))
  },
  methods: {
    refresh: async function () {
      let res = await api.getArticles()
      this.articles = res.data
      this.total = res.total
      this.deleteIndex = -1
    },
    submit: async function () {
      let res = await api.addArticle(this.addUrl, this.addDesc)
      if (res !== 0) {
        Vue.prototype.$error('添加出现错误')
        return
      }

      Vue.prototype.$success('添加成功')
      this.articleModal.hide()
      this.refresh()
      this.addUrl = ''
      this.addDesc = ''
    },
    deleteArticle: async function () {
      console.log(this.articles[this.deleteIndex]._id)
      await api.delArticle(this.articles[this.deleteIndex]._id)
      this.acceptModal.hide()
      this.refresh()
      Vue.prototype.$success('删除成功')
    },
    changePage: async function (index) {
      let res = await api.getArticles(index)
      this.articles = res.data
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

  .item-context {
    width: 25vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }

  .item-title {
    width: 20vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

  }
</style>
