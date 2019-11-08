//获取应用实例
const app = getApp()

Page({
  data: {
    team: {
      teamNumber: "",
      teamName: "",
      captain: "",
      teamInfo: "",
      recruitRequest: "",
      workload: "",
    }
  },
  //事件处理函数
  onLoad(options) {
    const teamNumber = options.teamNumber;
    var that = this;
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/team/getTeamInfo?teamNumber=' + teamNumber,
      method: "GET",
      success: res => {
        if (res.data.status == 200) {
          that.setData({
            team: res.data.data
          })
        }
      }
    })
  },
  favor(e) {
    wx.showModal({
      title: '是否一键导入？',
      content: '是否一键导入个人信息？',
      success: res => {
        wx.navigateTo({
          url: '../resume/resume?captain=' + this.data.team.captain,
        })
      }
    })
  }
})
