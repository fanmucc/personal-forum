<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  render () {
    return (
      <div class="you-drafts">
        <mavon-editor class="you-drafts-markdown" value={this.value}></mavon-editor>
      </div>
    )
  }
}
</script>
<style lang="less" scoped>
  .you-drafts {
    width: 100vw;
    height: 100vh;
    &-markdown {
      width: 100%;
      height: 100%;
    }
  }
</style>
