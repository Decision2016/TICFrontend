<template>
  <div class="p-card">
    <div class="personnel-card">
      <div class="personnel-title">现任成员</div>
      <div class="title-line" style="border-bottom: solid 0.5px;color: #7e7e7e;"/>
      <div class="personnel-info" v-for="(item, index) in personnel" :key="index">
        <img class="personnel-info-avatar" :src="item.avator" />
        <div class="personnel-info-name-duties">
          <div class="info-name">{{item.name}}</div>
          <div class="info-duites">{{item.duties}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonnelCard',
  props: {
    personnel: []
  }
}
</script>

<style scoped>
  .personnel-card {
    margin: 50px 75px;
    border-radius: 15px;
    padding: 15px;
    transition: all .2s ease-in-out;
    background-color: rgb(38,40,54);
  }

  .personnel-card:hover {
    box-shadow: 0 2px 7px rgba(214, 214, 214, 0.15);
    border-color: transparent;
    position: relative;
  }

  .personnel-title {
    justify-content: left;
    display: flex;
    font-size: 25px;
    margin-left: 5px;
    width: 100%;
    border-color: #d0d0d0;
    margin-bottom: 15px;
    color: #ffffff;
  }

  .personnel-info-avatar {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    border: solid 0.5px;
    border-color: #d6d3d3;
    margin: 15px;
    -webkit-transition:-webkit-transform 2s;
  }

  .personnel-info-avatar:hover {
    -webkit-transform: rotate(360deg);
  }

  .personnel-info {
    display: flex;
  }

  .personnel-info-name-duties {
    margin-left: 30px;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .info-name {
    font-size: 30px;
    font-weight: bold;
    color: #ffffff;
  }

  .info-duites {
    font-size: 15px;
    color: #8c8c8c;
  }
</style>
