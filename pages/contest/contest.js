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
    contest_id: 1,
    username: username,
    stu_id: stu_id,
    school: school,
    department: department,
    phone_num: phone_num,
    email: email,
    contest_detail: {
      contest_name: "",
      contest_detail: "",
      apply_deadline: "",
      submit_deadline: "",
      contest_contact: "",
      email_address: "",
      cover_img: "",
    }
  },
  //事件处理函数
  onLoad(options) {
    var contest_id = options.id;
    var that = this;
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/contest/getContestDetail',
      method: "GET",
      data: {
        contest_id: contest_id
      },
      success: res => {
        that.setData({
          contest_detail: res.data.data
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
            url: '../signUp/signUp?contest_name=' + this.data.contest_detail.contest_name,
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
            contest_id: this.data.contest_id,
            email_address: this.data.email
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
