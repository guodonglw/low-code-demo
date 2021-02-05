<template>
  <div class="left-container">
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item title="基础物料" />
    </van-sidebar>
  </div>
</template>

<script>
export default {
  props: ['active'],
  data () {
    return {
      activeKey: -1
    }
  },
  methods: {
    onChange (index) {
      this.$emit('update:active', index)
    }
  }
}
</script>

<style lang="less" scoped>
.left-container {
  height: 100%;
  // border: 1px solid red;
  background-color: #fff;
}
</style>
