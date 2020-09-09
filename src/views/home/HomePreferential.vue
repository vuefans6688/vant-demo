<!-- 首页-优惠 -->
<template>
  <div class="home-preferential">
    <h1>幸运大转盘</h1>
    <!-- 抽奖-转盘 -->
    <lottery-turn-table :prize="prize" :probability="probability"></lottery-turn-table>
  </div>
</template>

<script>
import LotteryTurntable from '@/components/LotteryTurntable'
export default {
  name: 'HomePreferential',
  components: {
    LotteryTurntable
  },
  data() {
    return {
      prize: ['谢谢参与', '1000积分', '5元话费', 'iPhone XS', '1元话费', '100积分', '10元话费', '再来一次', '50积分', '宝马 X5'],  // 奖项
      probability: ['0.1', '0.1', '0.1', '0.1', '0.1', '0.1', '0.1', '0.1', '0.1', '0.1']  // 中奖概率
    }
  }
}
</script>

<style scoped lang="less">
.home-preferential {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, #459ef1a2, #f0f0f0, #ec4949a2);;
  h1 {
    width: 100%;
    font-size: 0.5rem;
    text-align: center;
    color: #ff002b;
  }
  /deep/ .lottery-turntable {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 0.5rem;
  }
}
</style>
