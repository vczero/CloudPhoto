const app = getApp()

Page({
  data: {},
  onLoad: function() {},
  goToCategory(event){
    wx.navigateTo({
      url: '/pages/category/index?type=' + event.currentTarget.dataset.type
    })
  }
})
