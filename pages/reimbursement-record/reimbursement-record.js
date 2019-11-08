//获取应用实例
const app = getApp()

Page({
  data: {
    teamInContestId: "",
    reimbursementRecord: {
      reimbursementItem: "",
      reimbursementAmount: "",
      reimbursementType: "",
      reimbursementAttachment: "",
    }
  },
  //事件处理函数
  onLoad(options) {
    var teamInContestId = options.teamInContestId;
    this.setData({
      teamInContestId: teamInContestId
    })
    var that = this;
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/reimbursement/getMyReimbursementRecord?teamInContestId=' + teamInContestId,
      method: "GET",
      success: res => {
        that.setData({
          reimbursementRecord: res.data.data
        })
      }
    })
  },
  addRecord(e) {
    wx.navigateTo({
      url: '../addRecord/addRecord?teamInContestId=' + this.data.teamInContestId,
    })
  }
})
