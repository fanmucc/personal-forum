<script>
/**
 * name: IntroductionList
 * 组件作用: 页面右侧 文章推荐或作者信息展示列表
 * @type: 列表类型 article文章  or  author作者
 */
import SvgIconfont from '../SvgIconfont'
export default {
  name: 'IntroductionList',
  props: {
    type: {
      type: String,
      default: 'article'
    },
    text: {
      type: String,
      default: ''
    }
  },
  components: {
    SvgIconfont
  },
  render () {
    return (
      <div class="you-introduction-list">
        {this.type === 'article' ?
          <div>
            <p class="you-introduction-list-author-text">{this.text}</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          : <div class="you-introduction-list-author">
            <p class="you-introduction-list-author-text">{this.text}</p>
            <p class="you-introduction-list-author-user">
              王力栋
            </p>
            <div class="you-introduction-list-author-content">
              <div class="you-introduction-list-author-content-zan">
                <svg-iconfont style="width: 30px; height: 30px;" icon="dianzan"></svg-iconfont>
                <p style="font-size: 12px;">点赞: 1234</p>
              </div>
              <div class="you-introduction-list-author-content-browse">
                <svg-iconfont style="width: 30px; height: 30px;" icon="yanjing-"></svg-iconfont>
                <p style="font-size: 12px;">阅读量: 1234</p></div>
            </div>
          </div>}
      </div>
    )
  }
}
</script>
<style lang="less">
.you-introduction-list {
  width: 100%;
  background: #fff;
  &-author {
    color: #333;
    &-text {
      border-bottom: 1px solid hsla(0,0%,58.8%,.1);
      padding: 10px;
    }
    &-user {
      padding: 10px;
      font-size: 20px;
      font-weight: 600;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: pre-wrap;
      text-align: center;

    }
    &-content {
      display: flex;
      margin-top: 10px;
      text-align: center;
      & > div {
        flex: 1;
        height: 65px;
      }
    }
  }
}
</style>
