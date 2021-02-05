<template>
  <van-divider :style="{ color: obj.color, borderColor: obj.borderColor, padding: '0 16px' }">{{obj.text}}</van-divider>
</template>

<script>
export default {
  name: 'MyDivider',
  props: {
    attrs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      obj: {
        text: '',
        color: '',
        borderColor: ''
      }
    }
  },
  watch: {
    attrs: {
      deep: true,
      handler () {
        if (this.attrs.length) {
          Object.keys(this.obj).forEach(key => {
            const item = this.attrs.filter(item => item.prop === key)[0]
            this.obj[key] = item.value
          })
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
