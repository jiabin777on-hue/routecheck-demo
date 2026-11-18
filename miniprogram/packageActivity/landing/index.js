const { request } = require('../../utils/request')

Page({ onLoad() { request('/activity') } })