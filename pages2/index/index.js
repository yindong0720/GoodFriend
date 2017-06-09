//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '我们都是好朋友，呱呱呱！喜欢快乐的生活最爱说笑话。',
    message: 'Hello Friend',
    userInfo: {},

    array: ['看书', '听音乐', '看电影', '踢足球', '玩游戏', '旅游'],
    objectArray: [
      {
        id: 0,
        name: '看书'
      },
      {
        id: 1,
        name: '听音乐'
      },
      {
        id: 2,
        name: '看电影'
      },
      {
        id: 3,
        name: '踢足球'
      },
      {
        id: 4,
        name: '玩游戏'
      },
      {
        id: 5,
        name: '旅游'
      }
    ],
    index: 0,
    feelingArray: ['单身', '已婚', '恋爱'],
    feelingObjectArray: [
      {
        id: 0,
        name: '单身'
      },
      {
        id: 1,
        name: '已婚'
      },
      {
        id: 2,
        name: '恋爱'
      }
    ],
    feelingIndex:0,
    faithArray: ['基督教', '佛教', '伊斯兰教','无信仰'],
    faithObjectArray: [
      {
        id: 0,
        name: '基督教'
      },
      {
        id: 1,
        name: '佛教'
      },
      {
        id: 2,
        name: '伊斯兰教'
      },
      {
        id: 3,
        name: '无信仰'
      }
    ],
    faithIndex:3
  },
  bindfeelingViewTap: function () {
    console.log(document.getElementById('picker1'));
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindFeelingChange: function (e) {
    this.setData({
      feelingIndex: e.detail.value
    })
  },
  bindFaithChange: function (e) {
    this.setData({
      faithIndex: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
