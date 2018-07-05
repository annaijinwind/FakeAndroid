// page/one/index.js
Page({
  data:{
    open : false,
    mark: 0,
    newmark: 0,
    startmark: 0,
    endmark: 0,
    windowHeight:  wx.getSystemInfoSync().screenHeight,
    staus: 1,
    translate: ''
  },
  tap_ch: function(e){
    if(this.data.open){
      this.setData({
        translate: 'transform: translateY('+this.data.windowHeight +'px)'
      })
      this.data.open = false;
    }else{
      this.setData({
        translate: 'transform: translateY(0px)'
      })
      this.data.open = true;
    }
  },
  tap_start:function(e){
    this.data.mark = this.data.newmark = e.touches[0].pageY;
    if(this.data.staus == 1){
      // staus = 1指默认状态
      this.data.startmark = e.touches[0].pageY;
    }else{
      // staus = 2指屏幕滑动到右边的状态
      this.data.startmark = e.touches[0].pageY;
    }
    
  },
  tap_drag: function(e){
    /*
     * 手指从左向右移动
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
     */
    this.data.newmark = e.touches[0].pageY;
    console.log(this.data.newmark)
    if(this.data.mark < this.data.newmark ){
      if(this.data.staus == 1){
        if (this.data.windowHeight > Math.abs(this.data.newmark - this.data.startmark)){
          this.setData({
            translate: 'transform: translateY(' + '-'+(this.data.newmark - this.data.startmark)+'px)'
          }) 
        }
      }
      
    }
    /*
     * 手指从右向左移动
     * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
     */
    if(this.data.mark > this.data.newmark  ){
        if(this.data.staus == 1 && (this.data.newmark - this.data.startmark) > 0){
          this.setData({
            translate: 'transform: translateY(' + '-' +(this.data.newmark - this.data.startmark)+'px)'
          }) 
        } else if (this.data.staus == 2 && this.data.startmark - this.data.newmark < this.data.windowHeight){
          this.setData({
            translate: 'transform: translateY('+'-'+(this.data.newmark + this.data.windowHeight  - this.data.startmark)+'px)'
          })
        }
        
    }

    this.data.mark = this.data.newmark;
  
  },
  tap_end: function(e){
    if(this.data.staus == 1 && this.data.startmark < this.data.newmark){
      if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowHeight*0.2)){
        this.setData({
            translate: 'transform: translateY(0px)'
        })
        this.data.staus = 1;
      }else{
        this.setData({
          translate: 'transform: translateY(' + this.data.windowHeight+'px)'
        })
        this.data.staus = 2;
      }
    }else{
      if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowHeight*0.2)){
        this.setData({
          translate: 'transform: translateY(' + this.data.windowHeight+'px)'
        })
        this.data.staus = 2;
      }else{
        this.setData({
          translate: 'transform: translateY(0px)'
        })
        this.data.staus = 1;
      }      
    }

    this.data.mark = 0;
    this.data.newmark = 0;
  }
})