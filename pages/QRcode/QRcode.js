//获取应用实例
const app = getApp()

Page({
  data: {
    code: ""
  },
  //事件处理函数
  scanQRcode(e) {
    const that = this;
    wx.login({
      success: function (res) {
        // 获取登录的临时凭证
        var code = res.code;
        that.setData({
          code: code
        })
      }
    })
    wx.scanCode({
      success(res) {
        wx.request({
          url: res.result,
          data: {
            code: that.data.code
          },
          method: "POST",
          success: function (result) {
            console.log(result);
            // wx.redirectTo({
            //   url: '../index/index',
            //   success: function(res) {},
            //   fail: function(res) {},
            //   complete: function(res) {},
            // })
          }
        })
      }
    })
  }
})
