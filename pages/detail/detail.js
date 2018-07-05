// pages/detail/detail.js
import { getGridData } from '../../utils/view/view.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldData: [{ "image": "../assets/image/message.png", "text": "信息" },
    { "image": "../assets/image/photo.png", "text": "相册" },
    { "image": "../assets/image/camera.png", "text": "相机" },
    { "image": "../assets/image/chrome.png", "text": "chrome" },
    { "image": "../assets/image/message.png", "text": "信息" },
    { "image": "../assets/image/phone.png", "text": "电话" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用7" },
    { "image": "../assets/image/photo.png", "text": "应用8" },
    { "image": "../assets/image/photo.png", "text": "应用9" },
    { "image": "../assets/image/photo.png", "text": "应用10" }],
    mainData: [],
    marginTop: '0px'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData(
      {
        mainData: getGridData(this.data.oldData, 5),
        marginTop: wx.getSystemInfoSync().statusBarHeight + "px"
      }
    )
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})