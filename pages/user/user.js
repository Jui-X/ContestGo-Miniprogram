//获取应用实例
const app = getApp()

Page({
  data: {
    faceUrl: 'https://developers.weixin.qq.com/miniprogram/dev/image/cat/0.jpg?t=19031520',
    mode: 'scaleToFill',
    username: '橘子'
  },
  //事件处理函数
  uploadUserInfo(e) {
    wx.navigateTo({
      url: '../userInfo/userInfo',
    })
  },
  growthRecord(e) {
    wx.navigateTo({
      url: '../growthRecord/growthRecord',
    })
  }
})
