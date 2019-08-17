// pages/detail/detail.js
import data from '../../msg.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg :{},
    good_id:""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let {id} = options;
    let detailmsg = data.find(item=>item.good_id==id);
   this.setData({
     msg:detailmsg,
     good_id:id
   })
  },
  addcar:function(){
   var keybox = wx.getStorageSync("keybox")||[];
   var good_id =this.data.good_id;
   var msg=this.data.msg;
   let idx = keybox.findIndex(item=>item.good_id==good_id);
   if(idx!=-1){
     keybox[idx].num+=1;
     wx.setStorageSync("keybox", keybox);
     return;
   }
   msg.num=1;
   msg.checked=true;
   keybox.push(msg);
   wx.setStorageSync("keybox",keybox);
   wx.showToast({
     title: '加入成功',
   })
   setTimeout(this.player,1000);
  },
  player(){
    wx.navigateTo({
      url: '/pages/car/car',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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