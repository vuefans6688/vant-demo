<!-- 首页 -->
<template>
  <div class="main-home">
    <!-- 标题栏 -->
    <header
      :isTitle="false"
      :placeholder="placeholder"
      :isScan="true"
      :isBack="false"
      :rightBtn="rightBtn"
      @handleIcon="handleIcon">
    </header>
    <!-- 顶部tab -->
    <tab></tab>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tab from '@/components/Tab'
export default {
  name: 'Home',
  components: {
    Tab,
    Header
  },
  data() {
    return {
      placeholder: '请输入内容',  // 搜索框提示
      rightBtn: {  // header 右侧按钮
        number: 1,  // 按钮数量
        iconName: ['chat-o']
      }
    }
  },
  methods: {
    // 右侧按钮
    handleIcon() {
      console.log('消息中心')
    }
  }
}
</script>

<style scoped lang="less">
.main-home {
  width: 100%;
  height: 100%;
  padding-top: 0.42rem;
}
</style>
