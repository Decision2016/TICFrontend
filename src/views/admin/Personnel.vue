<script src="../../utils/api.js"></script>
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
          <button class="btn btn-primary" style="float: right" data-bs-toggle="modal" data-bs-target="#infoModal">添加新成员</button>
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
                <!--button class="btn btn-primary">编辑</button-->
                <button class="btn btn-danger" @click="deleteIndex=index;acceptModal.show()">删除</button>
              </td>
            </tr>
            </tbody>
          </table>
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
            <button type="button" class="btn btn-primary" @click="deletePersonnel">确定</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="infoModal" tabindex="-1" aria-labelledby="verifyModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" style="max-width: 700px">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verifyModalLabel">添加成员信息</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row personnel-upinfo">
              <div class="col-lg-6">
                <div class="cropper-content" style="height: 18vw;width: 100%;">
                  <div class="cropper" style="text-align:center;height: 18vw;width: 100%;">
                    <vueCropper ref="cropper"
                              :img="option.img"
                              :outputSize="option.size"
                              :outputType="option.outputType"
                              :info="true"
                              :full="option.full"
                              :canMove="option.canMove"
                              :canMoveBox="option.canMoveBox"
                              :original="option.original"
                              :autoCrop="option.autoCrop"
                              :fixed="option.fixed"
                              :fixedNumber="option.fixedNumber"
                              :centerBox="option.centerBox"
                              :infoTrue="option.infoTrue"
                              :fixedBox="option.fixedBox"/>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="personnel-btn">
                  <input type="file" class="form-control" id="fileField" accept=".jpg, .png, .jpge" @change="chooseFile">
                </div>
                <form style="margin-top: 3vw">
                  <div class="form-floating mb-4 mt-4">
                    <input type="text" class="form-control" id="nameInput" v-model="addInfo.name">
                    <label for="nameInput">Name</label>
                  </div>
                  <div class="form-floating mb-3 mt-4">
                    <input type="text" class="form-control" id="dutiesInput" v-model="addInfo.duties">
                    <label for="dutiesInput">Duties</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="upload">确定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'
export default {
  name: 'Personnel',
  data () {
    return {
      option: {
        img: null,
        info: true,
        outputSize: 0.8,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        fixedBox: true,
        fixed: true,
        fixedNumber: [1, 1],
        full: true,
        maxImgSize: 1500,
        canMoveBox: false,
        original: false,
        centerBox: true,
        infoTrue: true
      },
      personnel: [],
      addInfo: {
        name: '',
        duties: '',
        file_type: ''
      },
      infoModal: null,
      acceptModal: null,
      deleteIndex: -1
    }
  },
  mounted: async function () {
    this.refreshData()
    // eslint-disable-next-line no-undef
    this.infoModal = new bootstrap.Modal(document.getElementById('infoModal'))
    // eslint-disable-next-line no-undef
    this.acceptModal = new bootstrap.Modal(document.getElementById('acceptModal'))
  },
  methods: {
    chooseFile (event) {
      let file = event.target.files[0]
      this.addInfo.file_type = file.type.split('/')[1]
      const reader = new FileReader()
      let that = this
      reader.onload = function (e) {
        let data
        if (typeof e.target.result === 'object') {
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        that.option.img = data
      }
      reader.readAsArrayBuffer(file)
    },
    refreshData: async function () {
      let res = await api.getPersonnel()
      this.personnel = res.data
    },
    deletePersonnel: async function () {
      await api.delPersonnel(this.personnel[this.deleteIndex]._id)
      this.acceptModal.hide()
      this.refreshData()
    },
    upload () {
      let that = this
      this.$refs.cropper.getCropBlob(async (data) => {
        const reader = new FileReader()
        let b64code
        reader.onload = async (e) => {
          b64code = e.target.result.toString().split(',')[1]
          // eslint-disable-next-line no-use-before-define
          let md5 = jsmd5(b64code)
          let res = await api.upload(md5, that.addInfo.file_type, b64code)
          if (res.code !== 0) { return }

          let url = res.data.file_path
          res = await api.addPersonnel(that.addInfo.name, url, that.addInfo.duties)
          if (res.code !== 0) { return }
          console.log('add successful')
          this.infoModal.hide()
          this.refreshData()
        }
        reader.readAsDataURL(data)
      })
    }
  }
}

function jsmd5 (text) {
  // eslint-disable-next-line no-undef
  return md5(text)
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
