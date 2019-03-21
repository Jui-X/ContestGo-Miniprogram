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
    contest_name: "计算机科学与软件工程学院创新创业大赛",
    username: username,
    stu_id: stu_id,
    school: school,
    department: department,
    phone_num: phone_num,
    email: email,
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
  },
  sendEmail(e) {
    wx.showModal({
      title: '是否发送附件至您邮箱？',
      content: '是否发送附件至邮箱:' + this.data.email + '？',
      success: res => {
        wx.request({
          url: 'http://127.0.0.1:8081/sendMail',
          method: "POST",
          data: {
            contest_name: this.data.contest_name,
            email_address: this.data.email
          }
        }),
        wx.showToast({
          title: '附件已成功发送!',
          icon: 'success',
          image: '',
          duration: 5000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    })
  }
})
