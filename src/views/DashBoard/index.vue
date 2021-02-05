<template>
  <div class="container">
    <div class="head-area">
      <van-button type="info" size="mini" style="margin-right: 10px">预览</van-button>
      <van-button type="info" size="mini">保存</van-button>
    </div>

    <div class="main-area">
      <section class="left">
        <left-area :active.sync="active"></left-area>
      </section>

      <section class="left-add" v-if="active === 0">
        <left-area-add></left-area-add>
      </section>

      <section class="middle">
        <middle-area></middle-area>
      </section>

      <section class="right">
        <right-area></right-area>
      </section>
    </div>
  </div>
</template>

<script>
import LeftArea from './components/LeftArea'
import LeftAreaAdd from './components/LeftAreaAdd'
import MiddleArea from './components/MiddleArea'
import RightArea from './components/RightArea'

export default {
  components: {
    LeftArea,
    LeftAreaAdd,
    MiddleArea,
    RightArea
  },
  data () {
    return {
      active: -1
    }
  }
}
</script>

<style lang='less' scoped>
.container {
  height: 100%;
}

.head-area {
  height: 40px;
  border-bottom: 1px solid #b0c4de;
  padding-right: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
}

.main-area {
  height: calc(100% - 40px);
  display: flex;
  flex-flow: row nowrap;
}

.left,
.left-add,
.middle,
.right {
  height: 100%;
  overflow: auto;
  // border: 1px solid red;
}

.left {
  flex: 0 0 82px;
  border-right: 1px solid #b0c4de;
}

.left-add {
  flex: 0 0 160px;
  border-right: 1px solid #b0c4de;
}

.middle {
  flex: 1 0 auto;
}

.right {
  flex: 0 0 260px;
  border-left: 1px solid #b0c4de;
}
</style>
