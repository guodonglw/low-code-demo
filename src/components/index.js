import Vue from 'vue'
const ctx = require.context('../components', true, /\.vue$/)
ctx.keys().forEach(item => {
  const component = ctx(item).default
  Vue.component(
    component.name,
    component
  )
})
