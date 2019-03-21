//获取应用实例
const app = getApp()
const username = app.globalData.username;
const stu_id = app.globalData.stu_id;
const school = app.globalData.school;
const department = app.globalData.department;
const phone_num = app.globalData.phone_num;
// const  = app.globalData.;

Page({
  data: {
    username: username,
    stu_id: stu_id,
    school: school,
    department: department,
    phone_num: phone_num,
  },
  //事件处理函数
  sendResume(e) {
    wx.request({
      url: 'http://127.0.0.1:8081/nothing',
      success: res => {
        wx.showToast({
          title: '发送成功~',
        })
      }
    })
  }
})
