const { request } = require('../../utils/request')

Page({
  data: { list: [] },
  async onLoad() {
    this.setData({ list: await request('/goods') })
  },
  more() {
    wx.navigateTo({ url: '/packageGoods/list/index' })
  },
})