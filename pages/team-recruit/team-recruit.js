//获取应用实例
const app = getApp()

Page({
  data: {
    team_number: "",
    team_name: "",
    captain: "",
    team_info: "",
    recruit_requests: "",
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
          console.log('form发生了submit事件，携带数据为：', e.detail.value)
          var team_name = e.detail.value.team_name;
          var captain = e.detail.value.captain;
          var team_info = e.detail.value.team_info;
          var recruit_request = e.detail.value.recruit_request;
          var workload = e.detail.value.workload;
          wx.request({
            url: 'http://127.0.0.1:8081/team/createTeam',
            method: "POST",
            data: {
              team_name: team_name,
              captain: captain,
              team_info: team_info,
              recruit_request: recruit_request,
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
              }
            }
          })
        }
      }
    })
  }
})
