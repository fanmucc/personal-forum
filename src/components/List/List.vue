<script>
/**
 * name: YouList
 * 组件作用: 列表组件展示
 * @value  Object 类型 list数据展示
 * @value {
 *  title: 列表名称
 *  content: 列表内容展示
 *  username: 作者姓名
 *  time: 发布时间
 *  zan: 点赞数
 *  against: 反对数
 *  collect: 收藏数
 *  column: 文章分类标签
 *  viewingCount 浏览数
 * }
 * titleBoolean: boolean 是否只显示title信息
 */
export default {
  name: 'YouList',
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    titleBoolean: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // <p class="you-list-item-user"><span class="you-list-item-userdetails">{this.value.name}</span> <span style="margin: 0 2px;">·</span> <span>{this.value.time}</span> <span style="margin: 0 2px;">·</span> <span class="you-list-item-column">{this.value.column}</span></p>
    // <h2 class="you-list-item-title">{this.value.title}</h2>
    // <div class="you-list-item-content">
    //   <p>{this.data.content}</p>
    // </div>
    // <div>
    //   <span><i class="ri-heart-3-fill"></i></span>
    //   <span><i class="ri-dislike-fill"></i></span>
    // </div>
    // <span class="you-list-item-btns-span"><i class="ri-dislike-line"></i> <span style="font-size: 12px;">123</span></span>
  },
  render () {
    const status = this.titleBoolean
    let elements
    if (status) {
      elements = <div>
        <h2 class="you-list-item-title">{this.value.title}</h2>
      </div>
    } else {
      elements = <div>
        <p class="you-list-item-user"><span class="you-list-item-userdetails">{this.value.username}</span> <span style="margin: 0 2px;">·</span> <span>{this.value.time}</span> <span style="margin: 0 2px;">·</span> <span class="you-list-item-column">{this.value.column}</span></p>
        <h2 class="you-list-item-title">{this.value.title}</h2>
        <div class="you-list-item-content">
          <p>{this.value.content}</p>
        </div>
        <div class="you-list-item-btns">
          <span class="you-list-item-btns-span"><i class="ri-heart-3-fill"></i> <span style="font-size: 12px;">123</span></span>
          <span class="you-list-item-btns-span"><i class="ri-question-answer-fill"></i> <span style="font-size: 12px;">123</span></span>
        </div>
      </div>
    }
    return (
      <div class="you-list-item">{elements}</div>
    )
  }
}
</script>
<style lang="less">
.you-list-item {
  position: relative;
  box-sizing: border-box;
  background-color: #fff;
  padding: 16px 20px;
  &-user {
    font-size: 12px;
    color: rgb(178,186,194,1)
  };
  &-title {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.6;
    color: #1a1a1a;
    margin-top: 4px;
    margin-bottom: -4px;
  }
  &-content {
    margin-top: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  &-btns {
    margin-top: 10px;
    color: rgb(178,186,194,1);
    &-span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 5px 10px;
      font-size: 14px !important;
      line-height: 14px;
      border: 1px solid #ccc;
    }
    &-span:not(:first-child) {
      border-left: none;
    }
  }
}
.you-list-item::after {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 20px;
  display: block;
  border-bottom: 1px solid #f6f6f6;
  content: "";
}
.you-list-item:hover {
  background-color: rgb(252, 252, 252);
  cursor: pointer;
}
.you-list-item-userdetails:hover , .you-list-item-column:hover {
  color: #2d8cf0;
}
</style>
