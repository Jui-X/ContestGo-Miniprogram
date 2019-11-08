//获取应用实例
const app = getApp()
const username = app.globalData.username;
const stuId = app.globalData.stu_id;
const school = app.globalData.school;
const department = app.globalData.department;
const phoneNum = app.globalData.phone_num;
// const  = app.globalData.;

Page({
  data: {
    captain: "",
    username: username,
    stuId: stuId,
    school: school,
    department: department,
    phoneNum: phoneNum,
    resume: "",
  },
  //事件处理函数
  onLoad(options) {
    var that = this;
    var captain = options.captain;
    that.setData({
      captain: captain,
    })
  },
  sendResume(e) {
    const serverUrl = app.serverUrl;
    console.log(e.detail.value);
    var resume = e.detail.value.resume;
    console.log(resume);
    wx.request({
      url: serverUrl + "/team/sendResume",
      method: "POST",
      data: {
        captain: this.data.captain,
        username: this.data.username,
        stuId: this.data.stuId,
        school: this.data.school,
        department: this.data.department,
        phoneNum: this.data.phoneNum,
        resume: resume,
      },
      success: res => {
        wx.showToast({
          title: '发送成功~',
        })
      }
    })
  }
})
