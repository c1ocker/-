// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: ['通知公告','学院新闻','江科要闻','江科动态'],
    indexChecked: 0,
  },
  handleText(e){
    const index = e.currentTarget.dataset.index;
    this.setData({
      indexChecked: index
    })
  }
})