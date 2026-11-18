Page({
  toCart() {
    wx.navigateTo({ url: '/pages/cart/index' })
  },
  toDetail() {
    wx.switchTab({ url: '/packageGoods/detail/index' })
  },
})