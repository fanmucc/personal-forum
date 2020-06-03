<script>
import { Input, Button, Modal } from 'view-design'
import Login from '../../components/Login'
import Registered from '../../components/Registered'
import { mapState } from 'vuex'
export default {
  name: 'LayoutHeader',
  components: {
    Input,
    Button,
    Modal,
    Login,
    Registered
  },
  data () {
    return {
      loginDatas: 'false',
      moda: false,
      code: true,
      signState: false
    }
  },
  computed: {
    ...mapState({
      loginData: state => state.user.loginStatus
    })
  },
  methods: {
    sign (value) {
      console.log(value)
      this.moda = true
      if (value === 'in') this.signState = false
      else this.signState = true
    },
    codeSwithCode (value) {
      this.code = value
    }
  },
  render () {
    return (
      <div class="layout-header">
        <div class="layout-header-logo">YOU</div>
        <div class="layout-header-list">
          <ul class="layout-header-list-content">
            <li>首页</li>
            <li>热点</li>
            <li>话题</li>
            <li>活动</li>
            <li class="list-content-input"><Input suffix="ios-search" placeholder="搜索文章" style="width: auto" /></li>
          </ul>
        </div>
        <div class="layout-header-sign">
          <Button class="layout-header-sign-button" on-click={this.sign.bind(this, 'in')} type="primary" ghost>登录</Button>
          <Button type="primary" on-click={this.sign.bind(this, 'up')}>加入 YOU</Button>
        </div>
        <Modal
          width='450'
          v-model={this.moda}
          closable={true}
          mask-closable={false}
          class-name="vertical-center-modal">
          {this.signState === false ? <login code={this.code} on-codeSwith={this.codeSwithCode.bind(this)}></login> : <registered></registered>}
          <div style="margin-top: 20px;">
            {this.signState === false ? <Button style="width: 100%;" type="info">登录</Button> : <Button style="width: 100%;" type="info">注册</Button>}
          </div>
          <div slot="footer" style="display: flex; align-items: center; justify-content: space-between;">
            {this.signState === false ? <div><span class="modal-footer">还未加入YOU, 点击加入</span> <span class="modal-footer forget">忘记密码</span></div> : '欢迎加入 YOU 论坛'}
          </div>
        </Modal>
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
    }
    &-list {
      width: 40%;
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
    &-sign {
      flex: 1;
      text-align: left;
      & button {
        margin:0 1em;
      }
    }
  }
  .list-content-input {
    flex: 1;
    text-align: right;
    padding-right: 4em !important;
  }
  .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;
        .ivu-modal{
            top: 0;
        }
  }
  .modal-footer {
    cursor: pointer;
    font-size: 12px;
    color: #0084ff;
    &:hover {
      color: #57c5f7;
    }
  }
  .forget {
    color: grey;
  }
</style>
