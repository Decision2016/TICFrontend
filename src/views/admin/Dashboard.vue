<template>
  <div class="dashboard">
    <!--Top Navbar start-->
    <div class="dashboard-navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light dashboard-bar">
        <div class="container-fluid">
          <div class="navbar-brand left-part">TIC ADMIN</div>
        </div>
      </nav>
    </div>
    <!--Top Navbar end-->
    <!--Dashboard sidebar start-->
    <div class="dashboard-sidebar">
      <aside class="sidebar">
        <div class="sidebar-div" style="position: relative; overflow: visible; width: auto; height: 100%;">
          <div class="sidebar-scrollbar" style="overflow: hidden; width: auto; height: 100%;">
            <div class="user-profile">
              <div class="profile-image">
                <img :src="url" class="profile-img"/>
              </div>
              <p class="profile-text">Decision</p>
            </div>
            <Sidebar/>
          </div>
        </div>
      </aside>
    </div>
    <!--Dashboard sidebar end-->
    <!--Dashboard container start-->
    <div class="page-wrapper" style="min-height: 363px;">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
  name: 'Dashboard',
  components: {Sidebar},
  data () {
    return {
      url: 'https://avatars0.githubusercontent.com/u/25838809?s=460&v=4'
    }
  }
}
</script>

<style scoped>
  .dashboard-bar {
    background: linear-gradient(to right,#0078bc 1%,#00beda 100%);
  }

  .left-part {
    color: white;
  }

  .sidebar {
    z-index: 10;
    position: absolute;
    width: 265px;
    margin-top: 57px;
    padding-top:2vw;
    height: 100%;
    top: 0;
    overflow-y: auto;
    background: #fff;
    border-right: 1px solid #e5ebec;
  }

  .profile-img {
    width: 7vw;
    height: 7vw;
    border-radius: 50%;
    border: solid 0.5px;
    border-color: #d6d3d3;
  }

  .profile-text {
    font-weight: bold;
    color: cornflowerblue;
    margin-top: 1vw;
  }

  .user-profile {
    margin: 1vw auto;
  }

  .page-wrapper {
    background: #f4f8f9;
    padding-bottom: 60px;
  }

  @media (min-width: 1024px){
    .page-wrapper {
      margin-left: 265px;
    }
  }
</style>
