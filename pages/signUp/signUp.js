//获取应用实例
const app = getApp()
const username = app.globalData.username;
const stu_id = app.globalData.stu_id;
const school = app.globalData.school;
const department = app.globalData.department;
const phone_num = app.globalData.phone_num;
const email = app.globalData.email;

Page({
  data: {
    username: username,
    stu_id: stu_id,
    school: school,
    department: department,
    phone_num: phone_num,
    email: email,
    contest_name: "",
  },
  //事件处理函数
  onLoad(options) {
    this.setData({
      contest_name: options.contest_name,
    })
  },
  sendResume(e) {
    data: {
      username: username;
      stu_id: stu_id;
      school: school;
      department: department;
      phone_num: phone_num;
    }
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
  }
})
