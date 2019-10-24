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
    captain: "",
    username: username,
    stu_id: stu_id,
    school: school,
    department: department,
    phone_num: phone_num,
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
        stu_id: this.data.stu_id,
        school: this.data.school,
        department: this.data.department,
        phone_num: this.data.phone_num,
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
