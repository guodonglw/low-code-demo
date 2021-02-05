<template>
  <div class="left-area-add">
    <section
      class="item"
      v-for="(item, index) in materials"
      :key="index"
      draggable="true"
      :id="item.name"
      @dragend="endMove($event)"
    >
      <div class="icon">
        <van-icon :name="item.icon" size="1.5rem" color="#1E90FF" />
      </div>
      <div class="name">
        {{ item.label }}
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import materials from '../config/materials'

export default {
  data () {
    return {
      materials
    }
  },
  methods: {
    // 结束拖拽
    endMove (e) {
      const srcElement = e.srcElement
      const dragElX = e.clientX
      const el = $('#material')
      const left = el.position().left
      if (dragElX > left && dragElX < left + 375) {
        const id = srcElement.id
        const material = materials.filter(item => item.name === id)[0]
        this.$EventBus.$emit('material', JSON.parse(JSON.stringify(material)))
      }
    }
  }
}
</script>

<style lang="less" scoped>
.left-area-add {
  height: 100%;
  // border: 1px solid red;
  background-color: #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: flex-start;
}

.item {
  flex: 0 0 70px;
  // border: 1px solid red;
  height: auto;
  margin-top: 20px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  cursor: pointer;

  .name {
    font-size: 0.8rem;
    margin-top: 10px;
  }
}
</style>
