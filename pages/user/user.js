//获取应用实例
const app = getApp();
const username = app.globalData.username;
const stuId = app.globalData.stuId;

Page({
  data: {
    faceUrl: '../resource/images/icon_boy1.png',
    mode: 'scaleToFill',
    username: '橘子',
    stuId: stuId,
  },
  //事件处理函数
  uploadUserInfo(e) {
    wx.navigateTo({
      url: '../user-info/user-info',
    })
  },
  growthRecord(e) {
    wx.navigateTo({
      url: '../growth-record/growth-record',
    })
  },
  getTeamInfo(e) {
    wx.navigateTo({
      url: '../my-team/my-team?stuId=' + this.data.stuId,
    })
  },
  getReimbursement(e) {
    wx.navigateTo({
      url: '../reimbursement/reimbursement?stuId=' + this.data.stuId,
    })
  }
})
