<script>
export default {
  name: 'App',
  render () {
    return (
      <div id="app">
        <router-view />
      </div>
    )
  }
}
</script>
<style lang="less">
#app {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(246, 246, 246);
  // color: #2c3e50;
  box-sizing: border-box;
  max-width: 100vw;
  font-size: 12px;
  line-height: normal;
  overflow-x: initial;
}
* {
  margin: 0;
  padding: 0;
}
</style>
