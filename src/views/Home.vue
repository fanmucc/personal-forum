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
    // <div class="you-home-list">
    //       {
    //         this.list.map(item => {
    //           return <you-list class="you-home-list-content" nativeOn-click={this.blogDetail.bind(this, item)} value={item} titleBoolean={false}></you-list>
    //         })
    //       }
    //     </div>
    //     <div class="you-home-article">
    //       {
    //         this.articleList.map(item => {
    //           return <you-list class="you-home-list-content" value={item} titleBoolean={true}></you-list>
    //         })
    //       }
    //     </div>
  },
  render () {
    return (
      <div class="view timeline-index-view">
        <nav class="view-nav">
          <ul class="nav-list left">
            <li class="nav-item active">推荐</li>
            <li class="nav-item">关注</li>
            <li class="nav-item">后端</li>
            <li class="nav-item">前端</li>
            <li class="nav-item">Android</li>
            <li class="nav-item">IOS</li>
            <li class="nav-item">人工智能</li>
            <li class="nav-item">推荐</li>
            <li class="nav-item right">标签管理</li>
          </ul>
        </nav>
        <div class="timeline-container">
          <div class="timeline-content">
            <div class="timeline-entry-list">
              {
                this.list.map(item => {
                  return <you-list class="you-home-list-content" nativeOn-click={this.blogDetail.bind(this, item)} value={item} titleBoolean={false}></you-list>
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
</script>
<style lang="less">
.view.timeline-index-view {
    margin-top: 3.5rem;
}
.view {
  .view-nav, .view-nav:before {
    left: 0;
    background-color: #fff;
  }
  .view-nav {
    position: fixed;
    top: 4rem;
    width: 100%;
    height: 2.833rem;
    z-index: 100;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    transform: translateZ(0);
    .nav-list {
      position: relative;
    }
    .nav-list {
      max-width: 960px;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      line-height: 1;
      .nav-item {
          height: 100%;
          align-items: center;
          display: flex;
          flex-shrink: 0;
          font-size: 1rem;
          color: #71777c;
          padding: 0 1rem;
      }
      .nav-item:first-child {
          padding: 0 1rem 0 0;
      }
      .nav-item.right {
          position: absolute;
          top: 0;
          right: 0;
      }
      .active {
        color: #007fff;
      }
    }
  }
  .view-nav.top {
    transform: translate3d(0,-5rem,0);
  }
  .view-nav:before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      height: 200%;
      z-index: -1;
  }
  .timeline-container {
    margin-top: 0;
    .timeline-content {
      position: relative;
      margin-top: .33rem;
      .timeline-entry-list {
          margin-right: 21.667rem;
          border-radius: 2px;
          width: 700px;
      }
    }
  }
}
.you-home {
  // max-width: 100vw;
  // height: 100%;
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // &-list {
  //   width: 50vw;
  //    &-right {
  //     width: 20%;
  //     margin-left: 20px;
  //   }
  // }
  // &-article {
  //   width: 250px;
  //   margin-left: 20px;
  //   font-size: 16px !important;
  //   max-height: 400px;
  // }
}
</style>
