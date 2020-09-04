<template>
  <div class="bdp">
    <div class="nav">
      <hlnav />
    </div>
    <div class="main">
      <div class="header"></div>
      <div class="content">
        <router-view />
      </div>
      <div class="footer">HLFE ©2020 HL前端团队</div>
    </div>
  </div>
</template>
<script>
import hlnav from "./../../components/nav";
export default {
  components: { hlnav },
};
</script>

<style lang="scss" scoped>
.bdp {
  position: relative;
  .nav {
    position: relative;
    width: 200px;
    height: 100vh;
  }
  .main {
    position: absolute;
    left: 200px;
    top: 0;
    bottom: 0;
    right: 0;
    background: rgba(128,133,144,.06);

    .header {
      height: 72px;
      background-color: #fff;
    }
    .content {
      padding: 12px;
    }
    .footer {
      text-align: center;
      padding: 40px 0;
    }
  }
}
</style>