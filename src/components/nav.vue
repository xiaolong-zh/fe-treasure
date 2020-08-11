<template>
  <div class="hl-nav">
    <ul class="hl-menu">
      <li class="hl-menu-title">联调平台</li>
      <li class="hl-menu-nav active">
        <i class="el-icon-location"></i>
        联调环境
      </li>
      <li class="hl-menu-nav">
        <i class="el-icon-s-flag"></i>
        API环境
      </li>
      <li class="hl-menu-nav">
        <i class="el-icon-s-tools"></i>
        前端仓库配置
      </li>
      <li class="hl-menu-nav">
        <i class="el-icon-sunny"></i>
        Doge
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hl-nav {
  width: 200px;
  height: 100vh;
  .hl-menu {
    height: 100%;
    width: 100%;
    background-color: rgb(0, 21, 41);
    text-align: center;
    color: rgba(255, 255, 255, 0.65);

    .hl-menu-title {
      font-size: 24px;
      line-height: 72px;
      color: #ffffff;
    }
    .hl-menu-nav {
      padding-left: 40px;;
      text-align: left;
      font-size: 18px;
      line-height: 36px;
      cursor: pointer;
    }
    .active {
      color: #ffffff;
      background-color: rgb(24, 144, 255);
    }
  }
}
</style>