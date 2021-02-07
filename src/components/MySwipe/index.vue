<template>
  <van-swipe class="my-swipe" :autoplay="2000">
    <van-swipe-item v-for="(image, index) in obj.images" :key="index">
      <img :src="image" style="width: 100%; height: 100%" @click="handleClick('link', obj.links[index])"/>
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
    return {
      obj: {
        images: [''],
        links: []
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
  },
  methods: {
    handleClick (type, ...args) {
      args = [...args]
      switch (type) {
        case 'link':
          args[0] && window.open(args[0])
          break
      }
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
