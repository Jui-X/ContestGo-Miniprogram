//获取应用实例
const app = getApp()

Page({
  data: {
    reimbursement: {
      teamInContestId: "",
      contestId: "",
      contestName: "",
      teamNumber: "",
    }
  },
  //事件处理函数
  onLoad(options) {
    var that = this;
    var serverUrl = app.serverUrl;
    var stuId = options.stuId;
    wx.request({
      url: serverUrl + '/reimbursement/listMyReimbursementContest?stuId=' + stuId,
      method: "GET",
      success: res => {
        that.setData({
          reimbursement: res.data.data
        })
      }
    })
  },
  reimbursementRecord(e) {
    var teamInContestId = e.currentTarget.id;
    wx.navigateTo({
      url: '../reimbursement-record/reimbursement-record?teamInContestId=' + teamInContestId,
    })
  }
})
