<template>
  <van-circle v-model="currentRate" :rate="0" :speed="100" layer-color="#ebedf0" />
</template>

<script>
export default {
  name: 'MyCircle',
  props: {
    attrs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      currentRate: 0
    }
  },
  watch: {
    attrs: {
      deep: true,
      handler () {
        if (this.attrs.length) {
          const item = this.attrs.filter(item => item.prop === 'currentRate')[0]
          this.currentRate = Number(item.value) || 0
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
