<script>
export default {
  name: 'YouList',
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  render () {
    return (
      <div class="you-list-item">
        <p class="you-list-item-user"><span class="you-list-item-userdetails">{this.data.name}</span> <span style="margin: 0 2px;">·</span> <span>{this.data.time}</span> <span style="margin: 0 2px;">·</span> <span class="you-list-item-column">{this.data.column}</span></p>
        <h2 class="you-list-item-title">{this.data.title}</h2>
        <div class="you-list-item-content">
          <p>{this.data.content}</p>
        </div>
        <div></div>
      </div>
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
