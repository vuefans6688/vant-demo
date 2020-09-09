<!-- 主页 -->
<template>
  <div class="main">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'
export default {
  name: 'Main',
  components: {
    Tabbar
  }
}
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
}
</style>