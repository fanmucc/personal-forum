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
        <div class="layout-header-user">
          <div class="layout-header-user-logo">YOU</div>
          <div class="layout-header-user-list">
            <ul class="layout-header-user-list-content">
              <li>首页</li>
              <li>发现</li>
              <li>热点</li>
              <li class="list-content-input"><Input suffix="ios-search" class="searchInput" placeholder="搜索文章" style="width: auto" /></li>
            </ul>
          </div>
          <div class="layout-header-user-users">
            <Button type="primary" on-click={this.writing}>写文章</Button>
            <span><Icon type="md-notifications" /></span>
            <span><Icon type="ios-chatbubbles" /></span>
            <Poptip placement="bottom">
              <span><Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" icon="ios-person" size="30" /></span>
              <div class="api" slot="content">
                <ul>
                  <li>写文章</li>
                  <li>写文章</li>
                  <li>写文章</li>
                  <li>写文章</li>
                  <li>写文章</li>
                  <li>写文章</li>
                  <li>写文章</li>
                </ul>
              </div>
            </Poptip>
          </div>
        </div>
        <div class="layout-header-label">
          <ul class="layout-header-label-list">
            <li>推荐</li>
            <li>关注</li>
            <li>后端</li>
            <li>前端</li>
            <li>Android</li>
            <li>IOS</li>
            <li>人工智能</li>
            <li>推荐</li>
            <li>关注</li>
            <li>后端</li>
            <li>前端</li>
            <li>Android</li>
            <li>IOS</li>
            <li>人工智能</li>
          </ul>
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
    width: 100vw;
    display: flex;
    flex-direction: column;
    line-height: 60px;
    background: #fff;
    &-user {
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      background-color: #fff;
      border-bottom: 1px solid #f6f6f6;
      &-logo {
        flex: 20%;
        text-align: right;
        padding-right: 30px;
        font-size: 26px;
      }
      &-list {
        width: 50%;
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
      &-users {
        width: 30%;
        text-align: left;
        align-items: center;
        font-size: 25px;
        & span {
          margin:0 .5em;
        }
      }
    }
    &-label {
      max-width: 100vw;
      // overflow: scroll;
      font-size: 16px;
      line-height: 50px;
      padding-left: calc(20% - 76px);
      color: #909090;
      border-bottom: 1px solid #f6f6f6;
      &-list {
        display: flex;
        & li {
          padding: 0 10px 0 10px;
        }
        & li:nth-child(1) {
          padding-left: 0;
        }
        & li:hover {
          color: #007fff;
        }
      }
    }
  }
  // .layout-header {
  //   width: 100%;
  //   line-height: 4em;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-size: 16px;
  //   background-color: #fff;
  //   &-logo {
  //     flex:1;
  //     text-align: center;
  //   }
  //   &-list {
  //     &-content {
  //       display: flex;
  //       width: 100%;
  //       color: #71777c;
  //     }
  //     &-content li {
  //       padding:0 1em;
  //       cursor: pointer;
  //     }
  //     &-content li:hover {
  //       color: #007fff;
  //     }
  //   }
  //   &-user {
  //     flex: 1;
  //     text-align: left;
  //     align-items: center;
  //     font-size: 25px;
  //     & span {
  //       margin:0 .5em;
  //     }
  //   }
  // }
  .list-content-input {
    flex: 1;
  }
  .searchInput {
    width: 100% !important;
  }
</style>
