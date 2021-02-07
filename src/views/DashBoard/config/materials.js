export default [
  {
    icon: 'star-o',
    label: '轮播图',
    name: 'my-swipe',
    attrs: [
      {
        label: '图片链接',
        value: [''],
        type: 'array',
        attrType: 0,
        prop: 'images'
      },
      {
        label: '跳转链接',
        value: [''],
        type: 'array',
        attrType: 0,
        prop: 'links'
      }
    ]
  },
  {
    icon: 'setting-o',
    label: '环形进度条',
    name: 'my-circle',
    attrs: [
      {
        label: '环形占比',
        value: '',
        type: 'number',
        attrType: 0,
        prop: 'currentRate'
      }
    ]
  },
  {
    icon: 'fire-o',
    label: '分割线',
    name: 'my-divider',
    attrs: [
      {
        label: '文字',
        value: '',
        type: 'string',
        attrType: 0,
        prop: 'text'
      },
      {
        label: '线体颜色',
        value: '',
        type: 'string',
        attrType: 1,
        prop: 'borderColor'
      },
      {
        label: '文本颜色',
        value: '',
        type: 'string',
        attrType: 1,
        prop: 'color'
      }
    ]
  },
  {
    icon: 'replay',
    label: '加载',
    name: 'van-loading'
  },
  {
    icon: 'coupon-o',
    label: '列表',
    name: 'my-list',
    attrs: [
      {
        label: '数据来源',
        value: '',
        type: 'string',
        attrType: 0,
        prop: 'list',
        get: true,
        placeholder: '如 /list'
      }
    ]
  }
]
