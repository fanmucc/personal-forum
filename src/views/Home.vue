<script>
import YouList from '../components/List'
import IntroductionList from '../components/IntroductionList'
export default {
  name: 'Home',
  components: {
    YouList,
    IntroductionList
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
          name: '力栋',
          nameId: 2
        },
        {
          title: '第二篇博客',
          content: '这是我的第二篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          name: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          name: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          name: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          name: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          name: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          name: '力栋',
          nameId: 2
        },
        {
          title: '第三篇博客',
          content: '这是我的第三篇博客，吾乃天帝，大胆: 大威天龙，世尊地藏, 般若诸佛，般若巴麻空',
          time: '20分钟前',
          column: '前端',
          columnId: 1,
          name: '力栋',
          nameId: 2
        }
      ]
    }
  },
  methods: {
    blogDetail (item) {
      this.$router.push({
        name: 'article'
      })
    }
  },
  render () {
    return (
      <div class="you-home">
        <div class="you-home-list">
          {this.list.map(item => {
            return <you-list nativeOn-click={this.blogDetail.bind(this, item)} data={item} class="you-home-list-content"></you-list>
          })}
        </div>
      </div>
    )
  }
}
</script>
<style lang="less">
.you-home {
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  &-list {
    width: 50%;
     &-right {
      width: 20%;
      margin-left: 20px;
    }
  }
  &-content {
    margin: 0 auto;
    width: 100%; height: 120px;
  }
}
</style>
