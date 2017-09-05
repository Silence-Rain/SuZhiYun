
Page({

  data: {
    items: [
      [
        "http://silence.heraldstudio.com/pic/6.22/01.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/02.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/03.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/04.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/05.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/06.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/07.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/08.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/09.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/010.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/011.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/012.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/013.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/014.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/015.jpg", 
        "http://silence.heraldstudio.com/pic/6.22/016.jpg",
      ],
      [
        "http://silence.heraldstudio.com/pic/6.23/01.jpg",
        "http://silence.heraldstudio.com/pic/6.23/02.jpg",
        "http://silence.heraldstudio.com/pic/6.23/03.jpg",
        "http://silence.heraldstudio.com/pic/6.23/04.jpg",
        "http://silence.heraldstudio.com/pic/6.23/05.jpg",
        "http://silence.heraldstudio.com/pic/6.23/06.jpg",
        "http://silence.heraldstudio.com/pic/6.23/07.jpg",
        "http://silence.heraldstudio.com/pic/6.23/08.jpg",
        "http://silence.heraldstudio.com/pic/6.23/09.jpg",
        "http://silence.heraldstudio.com/pic/6.23/010.jpg",
        "http://silence.heraldstudio.com/pic/6.23/011.jpg",
        "http://silence.heraldstudio.com/pic/6.23/012.jpg",
        "http://silence.heraldstudio.com/pic/6.23/013.jpg"
      ],
      [
        "http://silence.heraldstudio.com/pic/6.24/01.jpg",
        "http://silence.heraldstudio.com/pic/6.24/02.jpg",
        "http://silence.heraldstudio.com/pic/6.24/03.jpg",
        "http://silence.heraldstudio.com/pic/6.24/04.jpg",
        "http://silence.heraldstudio.com/pic/6.24/05.jpg",
        "http://silence.heraldstudio.com/pic/6.24/06.jpg",
        "http://silence.heraldstudio.com/pic/6.24/07.jpg",
        "http://silence.heraldstudio.com/pic/6.24/08.jpg",
        "http://silence.heraldstudio.com/pic/6.24/09.jpg",
        "http://silence.heraldstudio.com/pic/6.24/010.jpg",
        "http://silence.heraldstudio.com/pic/6.24/011.jpg",
        "http://silence.heraldstudio.com/pic/6.24/012.jpg",
        "http://silence.heraldstudio.com/pic/6.24/013.jpg"
      ]
    ]
  
  },

  onLoad: function (options) {
    this.setData({
      current: this.data.items[options.id]
    })
  },

})