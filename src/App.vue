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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(246, 246, 246);
  color: #2c3e50;
  box-sizing: border-box;
  width: 100vw;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
