//获取应用实例
const app = getApp();
const username = app.globalData.username;

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentTab: 0,
    username: username,

    team: [{
      team_number: "",
      team_name: "",
      team_info: "",
    }],
    moments: [{
      moments_id: "",
      moments_title: "",
      moments_publisher: "",
    }]
  },
  //事件处理函数
  onShow(query) {
    var that = this;
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/team/getTeam',
      method: "GET",
      success: res => {
        that.setData({
          team: res.data.data
        })
      }
    }),
    wx.request({
      url: serverUrl + '/moments/getMoments',
      method: "GET",
      success: res => {
        that.setData({
          moments: res.data.data
        })
      }
    })
  },
  changeTab(e) {
    const that = this;
    that.setData({
      currentTab: e.detail.current
    })
  },
  checkCurrentTab(e) {
    const that = this;
    if (that.data.checkCurrentTab == e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  teamRecruit(e) {
    wx.navigateTo({
      url: '../team-recruit/team-recruit?username=' + this.data.username,
    })
  },
  postMoments(e) {
    wx.navigateTo({
      url: '../post-moments/post-moments?username=' + this.data.username,
    })
  },
  teamInfo(e) {
    var team_number = e.currentTarget.id;
    wx.navigateTo({
      url: '../team-info/team-info?team_number=' + team_number,
    })
  },
  moments(e) {
    var moments_id = e.currentTarget.id;
  }
})
