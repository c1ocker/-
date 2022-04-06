// app.js
import request from './service/network.js'
App({
  globalData: {
    home_list: [],
    checkLogin: false
  },
  onLaunch() {
    let that = this;
    request({
      url: 'https://api.jisuapi.com/news/get?channel=头条&start=0&num=10&appkey=0a5c7b435f098f99',
    }).then(res => {
      // console.log(res);
      that.globalData.home_list = res.data.result.list;
      // console.log(that.globalData.home_list);
    }).catch(err => {
      console.log(err);
    })
  },
 
})
