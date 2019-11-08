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
    contestInfo: {
      contestId: "",
      contestName: "",
      contestDetail: "",
      applyDeadline: "",
      submitDeadline: "",
      contestContact: "",
      emailAddress: "",
      coverImg: "",
    }
  },
  //事件处理函数
  onLoad(options) {
    var contestId = options.id;
    var that = this;
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/contest/getContestDetail?contestId=' + contestId,
      method: "GET",
      success: res => {
        that.setData({
          contestInfo: res.data.data
        })
      }
    })
  },
  signUp(e) {
    wx.showModal({
      title: '是否一键导入？',
      content: '是否一键导入个人信息？',
      success: res => {
        if(res.confirm) {
          wx.navigateTo({
            url: '../signUp/signUp?contestName=' + this.data.contestInfo.contestName,
          })
        } else if(res.cancel) {
        }
      }
    })
  },
  sendEmail(e) {
    const serverUrl = app.serverUrl;
    wx.showModal({
      title: '是否发送附件至您邮箱？',
      content: '是否发送附件至邮箱:' + this.data.email + '？',
      success: res => {
        wx.request({
          url: serverUrl + "/contest/sendAttachment",
          method: "POST",
          data: {
            contestId: this.data.contestId,
            emailAddress: this.data.email
          },
          success: function (res) {
            wx.showToast({
              title: '附件已成功发送!',
              icon: 'success',
              image: '',
              duration: 5000,
              mask: true,
              success: function (res) { },
              fail: function (res) { },
              complete: function (res) { },
            })
          }
        })
      }
    })
  }
})
