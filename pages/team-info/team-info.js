//获取应用实例
const app = getApp()

Page({
  data: {
  },
  //事件处理函数
  favor(e) {
    wx.showModal({
      title: '是否一键导入？',
      content: '是否一键导入个人信息？',
      success: res => {
        wx.navigateTo({
          url: '../resume/resume',
        })
      }
    })
  }
})
