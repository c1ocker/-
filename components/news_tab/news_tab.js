// components/news_tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    news: ['通知公告','学院新闻','江科要闻','江科动态'],
    indexChecked: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleText(e){
      const index = e.currentTarget.dataset.index;
      this.setData({
        indexChecked: index
      })
    }
  }
})
