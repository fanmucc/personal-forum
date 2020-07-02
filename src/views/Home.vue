<script>
import YouList from '../components/List'
import IntroductionList from '../components/IntroductionList'
import { Icon, Button } from 'view-design'
export default {
  name: 'Home',
  components: {
    YouList,
    IntroductionList,
    Icon,
    Button
  },
  data () {
    return {
      list: [
        {
          title: '第一篇博客',
          content: '这是我的第一篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2,
          zan: 30,
          against: 10,
          collect: 1000
        },
        {
          title: '第二篇博客',
          content: '这是我的第二篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2
        }
      ],
      articleList: [
        {
          title: '第一篇博客',
          content: '这是我的第一篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2,
          zan: 30,
          against: 10,
          collect: 1000
        },
        {
          title: '第二篇博客',
          content: '这是我的第二篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2
        },
        {
          title: '第一篇博客',
          content: '这是我的第一篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2,
          zan: 30,
          against: 10,
          collect: 1000
        },
        {
          title: '第二篇博客',
          content: '这是我的第二篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          username: '力栋',
          nameId: 2
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
    blogDetail (item) {
      this.$router.push({
        path: '/post/123'
      })
    }
    // <div class="you-home-header">
    //   <ul class="you-home-header-nav">
    //     {
    //       this.headerList.map(item => {
    //         return <li>{item.title}</li>
    //       })
    //     }
    //   </ul>
    // </div>
  },
  render () {
    return (
      <div class="you-home">
        <div class="you-home-list">
          {
            this.list.map(item => {
              return <you-list class="you-home-list-content" nativeOn-click={this.blogDetail.bind(this, item)} value={item} titleBoolean={false}></you-list>
            })
          }
        </div>
        <div class="you-home-article">
          {
            this.articleList.map(item => {
              return <you-list class="you-home-list-content" value={item} titleBoolean={true}></you-list>
            })
          }
        </div>
      </div>
    )
  }
}
</script>
<style lang="less" scoped>
.you-home {
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  &-list {
    width: 50vw;
     &-right {
      width: 20%;
      margin-left: 20px;
    }
  }
  &-article {
    width: 250px;
    margin-left: 20px;
    font-size: 16px !important;
    max-height: 400px;
  }
}
</style>
