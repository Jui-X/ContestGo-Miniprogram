//获取应用实例
const app = getApp()

Page({
  data: {
    index: 0,
    type: ["交通", "办公用品", "电脑配件", "图书", "打印", "耗材"],
    teamInContestId: 0,
    reimbursementItem: "",
    reimbursementAmount: "",
    reimbursementType: 0,
    reimbursementAttachment: "",
  },
  //事件处理函数
  onLoad(options) {
    var teamInContestId = options.teamInContestId;
    this.setData({
      teamInContestId: this.data.teamInContestId
    })
  },
  chooseAReimbursementType(e) {
    this.setData({
      index: e.detail.value,
      reimbursementType: parseInt(e.detail.value) + 1,
    })
  },
  addRecord(e) {
    var reimbursementItem = e.detail.value.reimbursementItem;
    var reimbursementAmount = e.detail.value.reimbursementAmount;
    var reimbursementAttachment = e.detail.value.reimbursementAttachment;
    var that = this;
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/reimbursement/addReimbursementRecord',
      method: "POST",
      data: {
        teamInContestId: this.data.teamInContestId,
        reimbursementItem: reimbursementItem,
        reimbursementAmount: reimbursementAmount,
        reimbursementType: this.data.teamInContestId,
        reimbursementAttachment: reimbursementAttachment,
      },
      success: res => {
        if(res.data.status == 200) {
          wx.showToast({
            title: '已成功添加报销记录!',
            icon: 'success',
            image: '',
            duration: 3000,
            mask: true,
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      }
    })
  }
})
