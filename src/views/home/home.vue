<template>
  <div class="bdp">
    <div class="nav">
      <hlnav />
    </div>
    <div class="main">
      <router-view />
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
    position: absolute;
    width: 200px;
    left: 0;
  }
  .main {
    position: absolute;
    left: 200px;
    height: 100%;
  }
}
</style>