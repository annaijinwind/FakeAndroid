import { getGridData } from '../../utils/view/view.js'
Page({
  data: {
    open: false,
    mark: 0,
    newmark: 0,
    startmark: 0,
    endmark: 0,
    windowHeight: wx.getSystemInfoSync().screenHeight,
    staus: 1,
    translate: '',
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
   mainData:[],
   marginTop:'0px'
  },
  allApps(e) {
    const { name, id } = e.currentTarget.dataset
    wx.navigateTo({
      url: `../detail/detail`
    })
  },
  onReady: function () {
    this.setData(
      {
        mainData:getGridData(this.data.oldData,5),
        marginTop: wx.getSystemInfoSync().statusBarHeight + "px"
      }
    )
  },
 
})