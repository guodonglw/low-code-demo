<template>
  <div class="middle-container">
    <section id="material" class="layout-space" @click="clickSpace">
      <draggable :list="materials">
        <transition-group class="item-list" id="item-list">
          <div
            v-for="(item, index) in materials"
            :key="index + item.name"
            @click.stop="activeItem(item, index)"
            @contextmenu.prevent="onContextmenu(item, index)"
            :class="{'active' : selected === index, 'item': true}">
            <component :is="item.name" :attrs="item.attrs"></component>
          </div>
        </transition-group>
      </draggable>
    </section>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  data () {
    return {
      materials: [],
      selected: ''
    }
  },
  methods: {
    onContextmenu (item, index) {
      const obj = {
        onTop: (index) => {
          const item = this.materials.splice(index, 1)[0]
          this.materials.unshift(item)
        },
        onBack: (index) => {
          const item = this.materials.splice(index, 1)[0]
          this.materials.push(item)
        },
        onDelete: (index) => {
          this.materials.splice(index, 1)
        }
      }
      this.$contextmenu({
        items: [
          {
            label: '置顶',
            onClick: () => obj.onTop(index)
          },
          {
            label: '置后',
            onClick: () => obj.onBack(index)
          },
          {
            label: '删除',
            onClick: () => obj.onDelete(index)
          }
        ],
        event,
        customClass: 'class-a',
        minWidth: 230,
        zIndex: 9999
      })
      return false
    },
    activeItem (item, index) {
      this.selected = index
      this.$EventBus.$emit('selectedMeterial', item)
    },
    clickSpace () {
      this.selected = -1
    },
    init () {
      this.$EventBus.$on('material', (material) => {
        material && this.materials.push(material)
      })
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less" scoped>
.middle-container {
  // border: 1px solid blue;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  overflow: auto;
}

.layout-space {
  width: 375px;
  background-color: #fff;
}

.item {
  margin-bottom: 10px;
}

.active {
  box-shadow: 1px 1px 2px 1px rgba(0,0,0,.4);
}
</style>
