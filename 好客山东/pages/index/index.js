// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    flag:true
  },
  item1:function(){
      this.setData({
        flag:false
      });
  },
  item2:function(){
    this.setData({
      flag:false
    });
  },
  item3:function(){
   this.setData({
     flag:false
    });
 },
  item4:function(){
    this.setData({
      flag:false
    });
 }
})

