//获取应用实例
const app = getApp()

Page({
  data: {
    teamNumber: "",
    teamName: "",
    captain: "",
    teamInfo: "",
    recruitRequest: "",
    workload: "",
    phone_num: "",
  },
  //事件处理函数
  onLoad(options) {
    this.setData({
      captain: options.username,
    })
  },
  recruit(e) {
    wx.showModal({
      title: '确认发布组队信息？',
      content: '确认发布组队信息？',
      success: res => {
        if (res.confirm) {
          var teamName = e.detail.value.teamName;
          var captain = e.detail.value.captain;
          var teamInfo = e.detail.value.teamInfo;
          var recruitRequest = e.detail.value.recruitRequest;
          var workload = e.detail.value.workload;
          wx.request({
            url: 'http://127.0.0.1:8081/team/createTeam',
            method: "POST",
            data: {
              teamName: teamName,
              captain: captain,
              teamInfo: teamInfo,
              recruitRequest: recruitRequest,
              workload: workload,
            },
            success: function (res) {
              if (res.data.status == "200") {
                wx.showToast({
                  title: '已成功发布组队信息!',
                  icon: 'success',
                  image: '',
                  duration: 3000,
                  mask: true,
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              } else {
                wx.showToast({
                  title: res.data.msg,
                  icon: '',
                  image: '',
                  duration: 3000,
                  mask: true,
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              }
            },
            fail: function(res) {

            }
          })
        }
      }
    })
  }
})
