//获取应用实例
const app = getApp()

Page({
  data: {
    momentsTitle: "",
    momentsPublisher: "",
    momentsContent: "",
  },
  //事件处理函数
  onLoad(options) {
    this.setData({
      momentsPublisher: options.username,
    })
  },
  postMoments(e) {
    wx.showModal({
      title: '确认发布动态？',
      content: '确认发布动态？',
      success: res => {
        if (res.confirm) {
          var momentsTitle = e.detail.value.momentsTitle;
          var momentsPublisher = e.detail.value.momentsPublisher;
          var momentsContent = e.detail.value.momentsContent;
          wx.request({
            url: 'http://127.0.0.1:8081/moments/postMoments',
            method: "POST",
            data: {
              momentsTitle: momentsTitle,
              momentsPublisher: momentsPublisher,
              momentsContent: momentsContent,
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
