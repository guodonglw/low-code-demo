<template>
  <div class="right-area">
    <section>
      <van-tabs v-model="active">
        <van-tab title="基础属性"></van-tab>
        <van-tab title="样式属性"></van-tab>
        <van-tab title="其他属性"></van-tab>
      </van-tabs>
    </section>

    <section class="attr-area">
      <div class="item" v-for="item in showAttrs" :key="item.label">
        <span class="label">{{item.label}}:</span>
        <span class="value" v-if="item.type === 'array'">
          <van-field
            v-model="item.value[index]"
            placeholder="请输入"
            v-for="(row, index) in item.value"
            :key="index"
            :title="item.value[index]"
            style="width: 100px; margin-bottom: 10px"/>
          <van-button style="margin-left: 10px; transform: translateY(-5px)" type="info" size='mini' @click="handleAdd(item)">添加</van-button>
        </span>
        <span class="value" v-if="item.type === 'string'">
          <van-field v-model="item.value" placeholder="请输入" />
        </span>
        <span class="value" v-if="item.type === 'number'">
          <van-field v-model="item.value" placeholder="请输入数字" oninput="value=value.replace(/[^\d]/g,'')"/>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      item: {}
    }
  },
  computed: {
    showAttrs () {
      const attrs = this.item.attrs || []
      return attrs.filter(item => item.attrType === this.active)
    }
  },
  methods: {
    handleAdd (item) {
      item.value.push('')
    },
    init () {
      this.$EventBus.$on('selectedMeterial', (item) => {
        this.item = item
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" scoped>
.right-area {
  background-color: #fff;
  height: 100%;
  overflow: auto;
}

.attr-area {
  // border: 1px solid red;

  .item {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px;

    .label {
      flex: 0 0 80px;
      // border: 1px solid blue;
      margin-right: 10px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      line-height: 40px;
    }

    .value {
      flex: 0 0 160px;
      // border: 1px solid gold;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: center;
    }
  }
}
</style>
