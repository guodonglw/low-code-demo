<template>
  <van-swipe class="my-swipe" :autoplay="2000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img :src="image" style="width: 100%; height: 100%"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: 'MySwipe',
  props: {
    attrs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  },
  computed: {
    images () {
      const item = this.attrs.filter(item => item.prop === 'images')[0]
      return item.value
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe {
  color: #fff;
  font-size: 20px;
  height: 200px;
  text-align: center;
  // border: 1px solid red;
}
</style>
