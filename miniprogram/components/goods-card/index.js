Component({
  properties: { goods: Object },
  methods: {
    open() {
      wx.navigateTo({ url: `/packageGoods/detail/index?id=${this.data.goods.id}` })
    },
  },
})