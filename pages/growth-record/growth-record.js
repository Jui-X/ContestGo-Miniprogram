//获取应用实例
const app = getApp()
const stuId = app.globalData.stuId;

Page({
  data: {
    stuId: stuId,
    contestTimeline: {
      contestName: "",
      startTime: "",
      endTime: "",
    }
  },
  //事件处理函数
  onLoad() {
    var that = this;
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/contest/getMyContest?stuId=' + this.data.stuId,
      method: "GET",
      success: res => {
        that.setData({
          contestTimeline: res.data.data
        })
      }
    })
  }
})
