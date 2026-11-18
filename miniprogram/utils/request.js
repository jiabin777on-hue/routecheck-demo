const config = require('./config')

function request(path) {
  return new Promise((resolve, reject) => {
    wx.request({ url: config.base + path, success: resolve, fail: reject })
  })
}

module.exports = { request }