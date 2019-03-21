//获取应用实例
const app = getApp()

Page({
  data: {
    contest_name: "计算机科学与软件工程学院创新创业大赛",
  },
  //事件处理函数
  signUp(e) {
    wx.showModal({
      title: '是否一键导入？',
      content: '是否一键导入个人信息？',
      success: res => {
        wx.navigateTo({
          url: '../signUp/signUp?contest_name=' + this.data.contest_name,
        })
      }
    })
  }
})
