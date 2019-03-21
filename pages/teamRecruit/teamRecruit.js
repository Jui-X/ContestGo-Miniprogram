//获取应用实例
const app = getApp()

Page({
  data: {
    team_id: "",
    team_name: "",
    captain: "",
    team_info: "",
    recruit_requests: "",
    workload: "",
    phone_num: "",
  },
  //事件处理函数
  recruit(e) {
    wx.showToast({
      title: '发布成功~',
      duration: 3000,
    })
  }
})
