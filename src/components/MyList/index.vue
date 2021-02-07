<template>
  <div class="list-area">
    <section v-if="obj.list.length">
      <ul>
        <li v-for="item in obj.list" :key="item.id">{{item.id}}</li>
      </ul>
    </section>

    <section v-else>
      <div>
        <my-empty>请在右侧填写数据来源</my-empty>
      </div>
    </section>
  </div>
</template>

<script>
import apis from '@/api'

export default {
  name: 'MyList',
  props: {
    attrs: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      obj: {
        list: []
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
            console.log(item)
            // this.obj[key] = item.value
            if (item.get) {
              this.getData(key, item.value)
            }
          })
        }
      }
    }
  },
  methods: {
    getData (key, path) {
      const obj = {
        list: () => {
          apis.get(path).then(res => {
            console.log(res)
            this.obj[key] = res.data.list || this.obj[key]
          })
        }
      }
      obj[key]()
    }
  }
}
</script>

<style lang="less" scoped>
.list-area {
  // border: 1px solid red;
  padding: 5px 0;
}
</style>
