<template>
  <div class="container-meng" v-if="show">
    <div class="preview-dialog" @click.stop="">
      <section class="title">
        <my-title>预览</my-title>
      </section>

      <section class="content">
        <img :src="imgPreviewSrc" class="postImage" />
      </section>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import html2canvas from 'html2canvas'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      imgPreviewSrc: ''
    }
  },
  watch: {
    show () {
      if (this.show) {
        this.getCanvas()
      }
    }
  },
  methods: {
    close () {
      this.$emit('update:show', false)
    },
    getCanvas () {
      const itemListElement = document.getElementById('material')
      html2canvas(itemListElement, {
        dpi: window.devicePixelRatio,
        useCORS: true, // 开启跨域配置
        scale: 1
      }).then((canvas) => {
        const url = canvas.toDataURL('image/png')
        this.imgPreviewSrc = url
      })
      this.init()
    },
    init () {
      setTimeout(() => {
        const el = document.querySelector('.container-meng')
        el.addEventListener('click', () => {
          this.close()
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container-meng {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(105,105,105, 0.3);
  // border: 2px solid red;
  padding: 10px;
}

.preview-dialog {
  z-index: 3;
  width: 500px;
  height: 100%;
  // border: 1px solid red;
  background-color: #fff;
  padding: 5px 10px;
  // overflow: auto;
  display: flex;
  flex-flow: column nowrap;
}

.title {
  flex: 0 0 50px;
  // border: 1px solid red;
}

.content {
  overflow: auto;
}

.down {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
