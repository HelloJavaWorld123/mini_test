const host = process.env.API_BASE_HOST

export default function request(method, url, body) {
  console.log('开始发起请求，请求的信息是：', method, url, body)
  method = method.toUpperCase()
  if (method === 'GET') {
    body = undefined
  } else {
    body = body && JSON.stringify(body)
  }

  wx.showLoading({
    title: '数据加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${host}` + url,
      method,
      data: body,
      header: {
        'Content-type': 'application/json'
      },
      success: function (res) {
        wx.hideLoading()
        console.log('请求成功，返回的数据是：', res.data)
        resolve(res)
      },
      fail: function (error, res) {
        console.log('请求失败，错误信息是：', error)
        wx.hideLoading()
        wx.showToast({
          title: res.msg
        })
        reject(error)
      },
      complete: function () {
        console.log('请求完成进入complete')
        wx.hideLoading()
      }
    })
      .then(data => ({ data }))
      .catch(error => ({ error }))
  })
}

export const get = url => request('get', url, null)
export const post = (url, body) => request('post', url, body)
