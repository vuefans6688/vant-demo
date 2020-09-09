<!-- 底部标签栏 -->
<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#ff6700" :z-index="999">
      <van-tabbar-item icon="home-o" to="/home/home-hot">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/categories">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/account">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="less">
.tabbar {
  /deep/ .van-tabbar {
    height: 0.5rem;
    background-color: #fdfdfd;
    box-shadow: 0 2px 20px 0 rgba(120, 120, 120, 0.1);
    .van-tabbar-item {
      .van-tabbar-item__icon {
        font-size: 0.18rem;
      }
      .van-tabbar-item__text {
        font-size: 0.12rem;
      }
    }
  }
}
</style>
