//获取应用实例
const app = getApp()
const username = app.globalData.username;
const stuId = app.globalData.stu_id;
const school = app.globalData.school;
const department = app.globalData.department;
const phoneNum = app.globalData.phone_num;
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
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  }
})
