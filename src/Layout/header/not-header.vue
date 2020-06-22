<script>
import { Input, Button, Modal } from 'view-design'
import Login from '../../components/Login'
import Registered from '../../components/Registered'
import { mapState, mapActions } from 'vuex'
import YouInput from '../../components/Input/index'
import { Email, pwReg, userNameValue } from '../../lib/utils/Regexp'
import { getUserInfo } from '../../api/users.js'

export default {
  name: 'LayoutHeader',
  components: {
    Input,
    Button,
    Modal,
    Login,
    Registered,
    YouInput
  },
  data () {
    return {
      winxincode: false,
      loginDatas: false,
      moda: false,
      signState: false,
      nameValue: '',
      passWord: '',
      nameError: false,
      nameErrorText: false,
      passWordError: false,
      passWordErrorText: false,
      code: true,
      codeValue: '',
      codeError: false,
      codeErrorText: false
    }
  },
  computed: {
    ...mapState({
      loginData: state => state.user.loginStatus
    })
  },
  methods: {
    ...mapActions('user', [
      'SIGN_UP'
    ]),
    sign (value) {
      this.moda = true
      if (value === 'in') this.signState = false
      else this.signState = true
    },
    codeSwithCode (value) {
      this.code = value
    },
    loginSwitch (val, event) {
      if (val === 'code') this.$emit('codeSwith', true)
      else this.$emit('codeSwith', false)
    },
    inputNameBlur (value) {
      if (value.length === 0) {
        this.nameError = true
        return
      } else {
        this.nameError = false
      }
      this.nameValue = value
      Email.test(value) || userNameValue.test(value) === false ? this.nameErrorText = true : this.nameErrorText = false
    },
    inputPasswordChange (value) {
      if (value.length === 0) {
        this.passWordError = true
        return
      } else {
        this.passWordError = false
      }
      this.passWord = value
      pwReg.test(value) === false ? this.passWordErrorText = true : this.passWordErrorText = false
    },
    inputCodeChange (values) {
      console.log(values, 123)
      if (values.value.length === 0) {
        this.codeError = true
        return
      } else {
        this.codeError = false
      }
      this.codeValue = values.value
      values.target === false ? this.codeErrorText = true : this.codeErrorText = false
    },

    // 用户点击登录
    youSignUp () {
      if (!this.nameErrorText && !this.passWordErrorText && !this.codeErrorText) {
        // 进行登录操作
        // getUserInfo({ userName: this.nameValue, passWord: this.passWord }).then(res => {
        //   console.log(res)
        // })
        this.SIGN_UP({ userName: this.nameValue, passWord: this.passWord })
      }
    }
  },
  render () {
    // {this.signState === false ? <login code={this.code} on-codeSwith={this.codeSwithCode.bind(this)}></login> : <registered></registered>}
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
          {this.signState === false ? <div>
            <div class="login">
              <div class={{ loginheader: true }}>
                <span on-click={ this.loginSwitch.bind(this, 'password') } class={{ loginheaderbtn: this.winxincode === true ? false : true }}>密码登录</span>
              </div>
              <div class="login-content">
                <div>
                  <div class="login-text">
                    <you-input type="text"
                      placeholder="请输入邮箱"
                      errorPlaceholder="请输入邮箱或者用户名"
                      error={this.nameError}
                      value={this.nameValue}
                      on-blur={this.inputNameBlur}
                      errorValue={this.nameErrorText}
                      errorValueText="请输入正确的邮箱或者用户名"></you-input>
                  </div>
                  <div class="login-text" style="margin-top: 20px;">
                    <you-input type="password"
                      placeholder="请输入登录密码"
                      errorPlaceholder="请输入登录密码"
                      error={this.passWordError}
                      value={this.passWord}
                      on-blur={this.inputPasswordChange}
                      errorValue={this.passWordErrorText}
                      errorValueText="请输入正确的用户密码"></you-input>
                  </div>
                  <div class="login-text" style="margin-top: 20px;">
                    <you-input type="text"
                      placeholder="验证码"
                      errorPlaceholder="请填写验证码"
                      code={this.code}
                      error={this.codeError}
                      errorValue={this.codeErrorText}
                      on-blur={this.inputCodeChange}
                      value={this.codeValue}
                      errorValueText="请输入正确的验证码:("></you-input>
                  </div>
                </div>
              </div>
            </div>
          </div> : <registered></registered>}
          <div style="margin-top: 20px;">
            {this.signState === false ? <Button style="width: 100%;" type="info" on-click={this.youSignUp}>登录</Button> : <Button style="width: 100%;" type="info">注册</Button>}
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

  .login {
  width: 100%;
  .loginheader {
    font-size: 16px;
    & span {
      cursor: pointer;
      padding: 5px 10px 15px 10px;
    }
  }
  &-content {
    margin-top: 30px;
    width: 100%;
  }
  .login-text {
    line-height: 3em;
  }
}
.loginheaderbtn {
  color: #1a1a1a;
  font-weight: 600;
  border-bottom: 3px solid #0084ff;;
}
</style>
