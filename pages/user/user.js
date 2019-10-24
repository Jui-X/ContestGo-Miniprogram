//获取应用实例
const app = getApp();
const username = app.globalData.username;
const stu_id = app.globalData.stu_id;

Page({
  data: {
    faceUrl: '',
    mode: 'scaleToFill',
    username: '橘子'
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
      url: '../my-team/my-team',
    })
  },
  getReimbursement(e) {
    wx.navigateTo({
      url: '../reimbursement/reimbursement',
    })
  }
})
