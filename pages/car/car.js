// pages/car/car.js
var num =wx.getStorageSync('keybox')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    num:0,
    allselect:false,
    zongjia:''
  },
  newlist(){
    wx.setStorageSync("keybox", num)
    this.setData({
      list: num
    })
  },
  delet:function(e){
    let id = e.currentTarget.dataset.id;
    num.splice(id,1);
      this.newlist();
      this.computeds();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    num = wx.getStorageSync("keybox");
    this.setData({
      list:num
    })
  },
  jian:function(e){
    let id = e.currentTarget.dataset.id;
    num[id].num -= 1;
    if(num[id].num<=0){
      num[id].num=0;
    }
    this.newlist();
    this.computeds();
  },
  add:function(e){
    //获取的点击对象的ID
    let id = e.currentTarget.dataset.id;
    num[id].num+=1;
    this.newlist();
    this.computeds();
    
  },
  changesingo(e){
    let index = e.currentTarget.dataset.index;
    num[index].checked=!num[index].checked;
    this.newlist();
    this.changebox();
    this.computeds();
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
    num = wx.getStorageSync("keybox");
    this.setData({
      list:num
    })
    this.changebox();
    this.computeds();
  },
  changebox(){
    let allselect = true;
    let all = num.every((item)=>{
      return item.checked;
    })
    if(all){
      allselect=true;
    }else{
      allselect=false;
    }
    this.setData({
      allselect,
    })
  },
  checkall(){
    num.find((item)=>{
      item.checked=!this.data.allselect;
    })
    wx.setStorageSync("keybox", num);
    this.setData({
      allselect: !this.data.allselect,
      list:num
    })
    this.computeds();
  },
  computeds(){
    var zongjia=0;
    num.map((item)=>{
      if(item.checked){
        zongjia += item.num * item.goods_price
      }
    })
    this.setData({
      zongjia: zongjia
    })
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