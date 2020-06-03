<script>
import { Input, Button, Icon, Avatar, Poptip } from 'view-design'
import { mapState } from 'vuex'
export default {
  name: 'LayoutHeader',
  components: {
    Input,
    Button,
    Icon,
    Avatar,
    Poptip
  },
  data () {
    return {
      loginDatas: 'false'
    }
  },
  computed: {
    ...mapState({
      loginData: state => state.user.loginStatus
    })
  },
  methods: {
    writing () {
      this.$router.push({
        name: 'writing'
      })
    }
  },
  render () {
    return (
      <div class="layout-header">
        <div class="layout-header-logo">YOU</div>
        <div class="layout-header-list">
          <ul class="layout-header-list-content">
            <li>首页</li>
            <li>发现</li>
            <li>热点</li>
            <li class="list-content-input"><Input suffix="ios-search" class="searchInput" placeholder="搜索文章" style="width: auto" /></li>
          </ul>
        </div>
        <div class="layout-header-user">
          <Button type="primary" on-click={this.writing}>写文章</Button>
          <Poptip placement="bottom">
            <span><Icon type="md-notifications" /></span>
            <div class="api" slot="content">
              测试
            </div>
          </Poptip>
          <span><Icon type="ios-chatbubbles" /></span>
          <span><Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" icon="ios-person" size="30" /></span>
        </div>
      </div>
    )
  }
}
</script>
<style lang="less">
  ul {
    list-style: none;
  }
  .layout-header {
    width: 100%;
    line-height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    background-color: #fff;
    &-logo {
      flex:1;
      text-align: center;
    }
    &-list {
      &-content {
        display: flex;
        width: 100%;
        color: #71777c;
      }
      &-content li {
        padding:0 1em;
        cursor: pointer;
      }
      &-content li:hover {
        color: #007fff;
      }
    }
    &-user {
      flex: 1;
      text-align: left;
      align-items: center;
      font-size: 25px;
      & span {
        margin:0 .5em;
      }
    }
  }
  .list-content-input {
    flex: 1;
  }
  .searchInput {
    width: 100% !important;
  }
</style>
