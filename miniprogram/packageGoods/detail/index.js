const { pick } = require('../utils/sku')
const { request } = require('../../utils/request')
const drawChart = require('../../utils/chart')

Page({
  async onLoad(query) {
    const goods = await request(`/goods/${query.id}`)
    this.setData({ goods, sku: pick(goods.skus, goods.defaultSku) })
  },
  buy() {
    wx.navigateTo({ url: '/packageOrder/confirm/index?from=detail' })
  },
})