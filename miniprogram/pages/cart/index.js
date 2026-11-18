const { pick } = require('../../packageGoods/utils/sku')

Page({
  checkout() {
    wx.navigateTo({ url: '/packageOrder/confirm/index' })
  },
})