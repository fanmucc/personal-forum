<script>
import { Dropdown, DropdownMenu, DropdownItem, Button, Icon, Avatar } from 'view-design'
export default {
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Button,
    Icon,
    Avatar
  },
  data () {
    return {
      title: '', // 文章名称
      value: '', // 文章内容
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        // fullscreen: true, // 全屏编辑
        // readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        // undo: true, // 上一步
        // redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        // alignleft: true, // 左对齐
        // aligncenter: true, // 居中
        // alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      },
      visible: false
    }
  },
  methods: {
    handleOpen () {
      this.visible = true
    },
    handleClose () {
      this.visible = false
    },
    // 保存事件
    save (e) {
      let dates = {}
      dates.value = e
      dates.title = this.title
      window.sessionStorage.markdown = JSON.stringify(dates)
    }
  },
  render () {
    return (
      <div class="you-drafts">
        <div class="you-drafts-header">
          <input type="text" class="you-drafts-header-title" value={this.title} placeholder="请输入文章标题..." />
          <div class="you-drafts-header-right">
            <Dropdown trigger="click" visible={this.visible} class="you-drafts-header-right-btn you-drafts-header-right-content" style="margin-left: 20px;">
              <a href="javascript:void(0)">
                发布
                <Icon type="ios-arrow-down"></Icon>
              </a>
              <DropdownMenu slot="list" style="padding: 10px;">
                <p>常用于各种自定义下拉内容的场景。</p>
                <div style="text-align: right;margin:10px;">
                  <Button type="primary" on-click={this.handleClose.bind(this)}>发布</Button>
                </div>
              </DropdownMenu>
            </Dropdown>
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" class="you-drafts-header-right-content"/>
          </div>
        </div>
        <mavon-editor class="you-drafts-markdown" language="zh-CN" ishljs={true} toolbars={this.toolbars} transition={true} shortCut={false} value={this.value} on-save={(e) => this.save(e) }></mavon-editor>
      </div>
    )
  }
}
</script>
<style lang="less" scoped>
  .you-drafts {
    width: 100vw;
    height: 100vh;
    &-header {
      display: flex;
      width: 100%;
      height: 50px;
      &-title {
        margin: 0;
        border: none;
        width: 70%;
        padding-left: 20px;
        font-size: 20px;
        line-height: 50px;
        outline: none;
        border-bottom: 1px solid #f6f6f6;
        flex:1;
        border-right: 2px  solid #f6f6f6;
      }
      &-right {
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 0 20px;
        background: #fff;
        &-content {
          margin: 0 20px;
        }
        &-btn {
          margin: 0 !important;
          z-index: 9999;
        }
      }
    }
    &-markdown {
      border-shadow: none;
      width: 100%;
      height: calc(100% - 50px);
    }
  }
</style>
