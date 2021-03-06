// swiper6.js
export default {
  data () {
    return {
      index: 0,
      url: 'http://images.uileader.com/20171103/5c7dfdc3-c6ed-4968-82f7-4d55c191dead.jpg',
      items: [{
        src: 'http://images.uileader.com/20171103/5906a28c-0f12-4b71-8df2-98791d8716f6.jpg',
        title: '放肆玩乐，轻巧办公'
      },
      {
        src: 'http://images.uileader.com/20171103/34795a1c-1365-4256-b9c1-6fb4af1de3da.jpg',
        title: '高温保护，一路驰骋'
      },
      {
        src: 'http://images.uileader.com/20171103/926a6fdc-80f6-4244-8354-860627c88115.jpg',
        title: '七夕好货，独家礼赠'
      }],
      items2: [{
        title: 'Glow',
        score: 9.7,
        src: 'http://images.uileader.com/20171103/5c7dfdc3-c6ed-4968-82f7-4d55c191dead.jpg'
      },
      {
        title: 'Got ',
        score: 7.8,
        src: 'http://images.uileader.com/20171103/dd760606-ab0f-45b2-a030-bab65e0b2a56.jpg'
      },
      {
        title: 'MISS SLOANE',
        score: 8.9,
        src: 'http://images.uileader.com/20171103/14feebf0-3061-4681-bb45-fa27d76af891.jpg'

      },
      {
        title: 'gifted',
        score: 8.8,
        src: 'http://images.uileader.com/20171103/7d89142f-b88d-4001-8196-7fd6834c2630.jpg'
      },
      {
        title: 'BORN LEADER',
        score: 9.2,
        src: 'http://images.uileader.com/20171103/5fce28ba-fd02-48cb-a1c2-ce0ff3801844.jpg'
      },
      {
        title: 'Big Little Lies',
        score: 7.1,
        src: 'http://images.uileader.com/20171103/2cdb945d-349d-4d19-8347-629675adde76.jpg'
      },
      {
        title: 'MANCHESTER SEA',
        score: 9.7,
        src: 'http://images.uileader.com/20171103/727a3953-fafb-44e7-8fd8-92e84e11442f.jpg'
      },
      {
        title: '金刚',
        score: 8.8,
        src: 'http://images.uileader.com/20171103/4ac53f4c-1e62-40ce-87d9-2b7638cf00be.jpg'
      },
      {
        title: 'THE CIRCLE',
        score: 8.3,
        src: 'http://images.uileader.com/20171103/b13d8fbd-bb0e-4510-b680-4a559b79407c.jpg'
      },
      {
        title: 'UNITED KINDOM',
        score: 8.6,
        src: 'http://images.uileader.com/20171103/f5d59af6-c4af-4faa-b36a-3473b78a7612.jpg'
      }
      ]
    }
  },
  methods: {
    handleSwiperChange (index) {
      this.index = index
      this.url = this.items2[index].src
    },
    handleChangeSlide (index) {
      if (index >= 0) {
        this.index = index
      }
    },
    changestart (e) {
      console.log('changestart', e)
    },
    change (e) {
      console.log('change', e)
    },
    changeend (e) {
      console.log('changeend', e)
    },
    init (e) {
      console.log('init', e)
    }
  }
}
