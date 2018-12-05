import Vue from 'vue'
import App from './App'
import { get, post } from './utils/HttpUtils'

Vue.prototype.$get = get
Vue.prototype.$post = post

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      '^pages/index/main',
      'pages/user/main',
      'pages/house/main',
      'pages/user/detail/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '无忧',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#52FFDA',
      borderStyle: 'white',
      list: [{
        pagePath: 'pages/index/main',
        text: '找房',
        iconPath: '/static/images/index.png',
        selectedIconPath: '/static/images/index_active.png'
      }, {
        pagePath: 'pages/house/main',
        text: '房屋管理',
        iconPath: '/static/images/article.png',
        selectedIconPath: '/static/images/article_active.png'
      }, {
        pagePath: 'pages/user/main',
        text: '我的',
        iconPath: '/static/images/my.png',
        selectedIconPath: '/static/images/my_active.png'
      }]
    }
  },
  networkTimeout: {
    request: 10000,
    uploadFile: 10000,
    downloadFile: 10000
  },
  debug: true
}
