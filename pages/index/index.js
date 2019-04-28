var Lock = require('../../lib/lock.js');
var app = getApp();

Page({
    data: {
      title: '绘制解锁图案',
    },
    onLoad: function () {
      this.lock = new Lock(this);
    },
    resetPwd: function() {
      this.lock.updatePassword();
    },
    // 文字变化的事件，自定义
    onTitleChanged: function(newTitle) { 
      this.setData({
        title: newTitle
      });
    }
});
