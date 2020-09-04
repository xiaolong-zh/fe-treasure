<template>
  <div class="hl-nav">
    <ul class="hl-menu">
      <li class="hl-menu-title">联调平台</li>
      <li class="hl-menu-nav active">
        <a href="#/test">
          <i class="el-icon-location"></i>
          联调环境
        </a>
      </li>
      <li class="hl-menu-nav">
        <a href="#/test">
          <i class="el-icon-s-flag"></i>
          API环境
        </a>
      </li>
      <li class="hl-menu-nav">
        <a href="#/test">
          <i class="el-icon-s-tools"></i>
          前端仓库配置
        </a>
      </li>
      <li class="hl-menu-nav">
        <a href="#/test">Doge</a>
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
  height: 100%;
  .hl-menu {
    height: 100%;
    width: 100%;
    background-color: rgb(0, 21, 41);
    text-align: center;
    a {
      display: block;
      width: 100%;
      height: 100%;
      color: rgba(255, 255, 255, 0.65);
      text-decoration: none;
      padding-left: 40px;
    }

    .hl-menu-title {
      font-size: 24px;
      line-height: 72px;
      color: #ffffff;
    }
    .hl-menu-nav {
      text-align: left;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
    }
    .active {
      a {
        color: #ffffff;
        background-color: rgb(24, 144, 255);
      }
    }
  }
}
</style>