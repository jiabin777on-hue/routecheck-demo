Page({
  onLoad() {
    // Cross-package code is loaded on demand, which is allowed.
    require.async('../../packageGoods/utils/sku').then(({ pick }) => {
      this.pick = pick
    })
  },
  done() {
    wx.switchTab({ url: '/pages/cart/index' })
  },
})