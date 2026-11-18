const { request } = require('./utils/request')

App({
  onLaunch() {
    request('/session')
  },
})