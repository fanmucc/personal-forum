<script>
import { Button } from 'view-design'
import YouInput from '../Input/index'
import { Email, pwReg } from '../../lib/utils/Regexp'
export default {
  name: 'Login',
  components: {
    YouInput,
    Button
  },
  data () {
    return {
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
  methods: {
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
      Email.test(value) === false ? this.nameErrorText = true : this.nameErrorText = false
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
    }
  },
  render () {
    // <span on-click={ this.loginSwitch.bind(this, 'code') } class={{ loginheaderbtn: this.code === true ? true : false }}>扫码登录</span>
    return (
      <div class="login">
        <div class={{ loginheader: true }}>
          <span on-click={ this.loginSwitch.bind(this, 'password') } class={{ loginheaderbtn: this.code === true ? false : true }}>密码登录</span>
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
    )
  }
}
</script>
<style lang="less">
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
