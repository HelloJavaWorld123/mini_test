<template>
  <div>
    <h1 style="text-align: center">{{name}}</h1>
    <div style="margin-top: 40px">
      <swiper indicator-dots="true" indicator-active-color="#010101" autoplay="true" interval="5000" duration="500">
        <block v-for="(item,index) in imgUrls" :index="index" :key="key">
          <swiper-item style="align-content: center;justify-content: center;text-align: center">
            <image :src="item"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <h1 style="margin-top: 30px;text-align: center">一公里，你生活的好助手</h1>
    <div style="display: flex;justify-content: space-around;margin-top: 80px">
      <i-button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">我是房客</i-button>
      <i-button type="primary" open-type="getUserInfo" @getuserinfo="getUserInfo">我是房东</i-button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '一公里',
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        ]
      }
    },
    methods: {
      getUserInfo: function (e) {
        console.log('开始处理用户的授权', e)
        if (e.mp.detail.userInfo) {
          // 调用wx的登陆接口
          wx.login({
            success: res => {
              console.log('请求微信的登陆接口成功 返回的结果是：', res, res.code)
              // 调用成功时 会返回code 有效期五分钟
              if (res.code) {
                // 请求后台
                console.log('开始请求后台获取信息')
                this.$post('/api/mini/login', {
                  'code': res.code,
                  'iv': e.mp.detail.iv,
                  'encryptedData': e.mp.detail.encryptedData,
                  'signature':e.mp.detail.signature
                }).then(result => {
                  console.log('请求后台登陆接口成功过返回的结果是：', result)
                  if (result.code === 20000) {
                    console.log('请求后台成功')
                  }
                })
              } else {
                console.log('获取code失败')
              }
            }
          })
        } else {
          wx.showModal({
            title: '亲爱的小主人',
            content: '为了更好的服务您，请让我更深入的了解您',
            cancelColor: '#ff1517',
            confirmColor: '#69ff35',
            success (res) {
              if (res.confirm) {
                this.getUserInfo()
              }
            }
          })
        }
      }
    }
  }
</script>
<style scoped>

</style>
