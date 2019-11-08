//获取应用实例
const app = getApp()

Page({
  data: {
    team: {
      teamName: "",
      teamNumber: "",
      teamInfo: "",
      captain: "",
      teamMembers: "",
    }
  },
  //事件处理函数
  onLoad(options) {
    var serverUrl = app.serverUrl;
    var that = this;
    var stuId = options.stuId;
    wx.request({
      url: serverUrl + '/team/getMyTeam?stuId=' + stuId,
      method: "GET",
      success: res => {
        console.log(res.data.data),
        that.setData ({
          team: res.data.data,
        })
      }
    })
  }
})
