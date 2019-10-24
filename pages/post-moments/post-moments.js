//获取应用实例
const app = getApp()

Page({
  data: {
    moments_title: "",
    moments_publisher: "",
    moments_content: "",
  },
  //事件处理函数
  onLoad(options) {
    this.setData({
      moments_publisher: options.username,
    })
  },
  postMoments(e) {
    wx.showModal({
      title: '确认发布动态？',
      content: '确认发布动态？',
      success: res => {
        if (res.confirm) {
          console.log('form发生了submit事件，携带数据为：', e.detail.value)
          var moments_title = e.detail.value.moments_title;
          var moments_publisher = e.detail.value.moments_publisher;
          var moments_content = e.detail.value.moments_content;
          wx.request({
            url: 'http://127.0.0.1:8081/moments/postMoments',
            method: "POST",
            data: {
              moments_title: moments_title,
              moments_publisher: moments_publisher,
              moments_content: moments_content,
            },
            success: function (res) {
              if (res.data.status == "200") {
                wx.showToast({
                  title: '已成功发布动态!',
                  icon: 'success',
                  image: '',
                  duration: 3000,
                  mask: true,
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              }
            }
          })
        }
      }
    })
  }
})
