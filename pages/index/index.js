//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    currentTab: 0,

    scientific_contest: [{
      contest_id: "",
      contest_name: "",
    }],
    sport_contest: [{
      contest_id: "",
      contest_name: "",
    }],
  },
  onLoad(query) {
    var that = this;
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/contest/listContest/scientific',
      method: "GET",
      success: res => {
        that.setData ({
          scientific_contest: res.data.data
        })
      }
    }),
    wx.request({
      url: serverUrl + '/contest/listContest/sport',
      method: "GET",
      success: res => {
        that.setData({
          sport_contest: res.data.data
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
  navigateTo(e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../contest/contest?id=' + id,
    })
  }
})
