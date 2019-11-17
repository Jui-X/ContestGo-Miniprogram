//获取应用实例
const app = getApp()
const username = app.globalData.username;
const stuId = app.globalData.stuId;
const school = app.globalData.school;
const department = app.globalData.department;
const phoneNum = app.globalData.phoneNum;
const email = app.globalData.email;

Page({
  data: {
    username: username,
    stuId: stuId,
    school: school,
    department: department,
    phoneNum: phoneNum,
    email: email,
    contestName: "",
  },
  //事件处理函数
  onLoad(options) {
    this.setData({
      contestName: options.contestName,
    })
  },
  sendResume(e) {
    data: {
      username: username;
      stuId: stuId;
      school: school;
      department: department;
      phoneNum: phoneNum;
    }
    // wx.scanCode({
    //   success(res) {
    //     console.log(res)
    //   }
    // })
    wx.showToast({
      title: '已成功报名!',
      icon: 'success',
      image: '',
      duration: 3000,
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
