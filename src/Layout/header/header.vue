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
    // <div>
    //       <Button type="primary" on-click={this.writing}>写文章</Button>
    //       <span><Icon type="md-notifications" /></span>
    //       <span><Icon type="ios-chatbubbles" /></span>
    //       <Poptip placement="bottom">
    //         <span><Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" icon="ios-person" size="30" /></span>
    //         <div class="api" slot="content">
    //           <ul>
    //             <li>写文章</li>
    //             <li>写文章</li>
    //             <li>写文章</li>
    //             <li>写文章</li>
    //             <li>写文章</li>
    //             <li>写文章</li>
    //             <li>写文章</li>
    //           </ul>
    //         </div>
    //       </Poptip>
    //     </div>
  },
  render () {
    return (
      <div class="container">
        <div class="logo">YOU</div>
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="main-nav-list">
              <ul class="phone-hide">
                <li class="nav-item activeities">首页</li>
                <li class="nav-item">沸点</li>
                <li class="nav-item">话题</li>
                <li class="nav-item">小册</li>
                <li class="nav-item">活动</li>
              </ul>
            </li>
            <li class="nav-item search">
              <Input suffix="ios-search" placeholder="搜索文章" style="width: 70%;"/>
            </li>
            <li class="nav-item add">
              <Button class="layout-header-user-sign-button" type="info">写文章</Button>
            </li>
            <li class="nav-item notification">
              <Icon type="md-notifications"/>
            </li>
            <li class="nav-item menu">
              <Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" icon="ios-person" size="30" />
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
</script>
<style lang="less">
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  .main-header {
    width: 100%;
    .container {
      max-width: 960px;
      position: relative;
      margin: auto;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      height: 100%;
      .logo {
        min-width: 50px;
        margin-right: 2rem;
        font-size: 1.5rem;
        color: #007fff;
      }
      .main-nav {
          height: 100%;
          flex: 1 0 auto;
          .nav-list {
              display: flex;
              -webkit-box-align: center;
              align-items: center;
              justify-content: flex-end;
              position: relative;
              height: 100%;
              margin: 0;
              .main-nav-list {
                display: flex;
                .phone-hide {
                  display: flex;
                  .nav-item {
                    padding: 0 1.5rem;
                    height: 4rem;
                    color: #71777c;
                    padding: 0 1.2rem;
                    font-size: 1.33rem;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                  }
                  .nav-item:hover {
                    color: #007fff;
                  }
                  .activeities {
                    color: #007fff;
                  }
                }
              }
              .nav-item {
                color: #71777c;
                padding: 0 1.2rem;
                font-size: 1.33rem;
                margin: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
              }
              .search {
                flex: 1 1 auto;
                justify-content: flex-end;
                cursor: auto;
              }
              .notification {
                position: relative;
              }
          }
      }
    }
  }
</style>
