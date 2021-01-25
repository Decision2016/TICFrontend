<template>
  <div class="carousel-set page-top">
    <div class="card"  style="margin: 0 2vw;min-height: 41.5vw;">
      <div class="card-body">
        <div class="card-title">
          <button class="btn btn-primary" style="float: right" data-bs-toggle="modal" data-bs-target="#carouselModal">添加新的图片</button>
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
            <button type="button" class="btn btn-primary" @click="deleteCarousel">确定</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="carouselModal" tabindex="-1" aria-labelledby="carouselModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" style="max-width: 700px">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="verifyModalLabel" data-bs-toggle="modal" data-bs-target="#carouselModal">添加轮播图</h5>
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
                    <input type="text" class="form-control" id="nameInput" v-model="addCarousel.desc">
                    <label for="nameInput">Description</label>
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
  name: 'Carousel',
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
        fixedNumber: [16, 9],
        full: true,
        maxImgSize: 1500,
        canMoveBox: false,
        original: false,
        centerBox: true,
        infoTrue: true
      },
      carousels: [],
      addCarousel: {
        desc: '',
        file_type: ''
      },
      deleteIndex: -1
    }
  },
  mounted () {
    this.refreshData()
    // eslint-disable-next-line no-undef
    this.carouselModal = new bootstrap.Modal(document.getElementById('carouselModal'))
    // eslint-disable-next-line no-undef
    this.acceptModal = new bootstrap.Modal(document.getElementById('acceptModal'))
  },
  methods: {
    refreshData: async function () {
      let res = await api.getCarousel()
      this.carousels = res.data
    },
    deleteCarousel: async function () {
      await api.delCarousel(this.carousels[this.deleteIndex]._id)
      this.acceptModal.hide()
      this.refreshData()
    },
    chooseFile (event) {
      let file = event.target.files[0]
      this.addCarousel.file_type = file.type.split('/')[1]
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
    upload () {
      let that = this
      this.$refs.cropper.getCropBlob(async (data) => {
        const reader = new FileReader()
        let b64code
        reader.onload = async (e) => {
          b64code = e.target.result.toString().split(',')[1]
          // eslint-disable-next-line no-use-before-define
          let md5 = jsmd5(b64code)
          let res = await api.upload(md5, that.addCarousel.file_type, b64code)
          if (res.code !== 0) { return }

          let url = res.data.file_path
          res = await api.addCarousel(url, that.addCarousel.desc)
          if (res.code !== 0) { return }
          this.carouselModal.hide()
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
</style>
