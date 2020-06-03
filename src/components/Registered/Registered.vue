<script>
import { Button } from 'view-design'
import YouInput from '../Input/index'
export default {
  name: 'Registered',
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
      codeError: false,
      codeErrorText: false
    }
  },
  methods: {
    loginSwitch (val, event) {
      console.log(val)
      if (val === 'code') this.$emit('codeSwith', true)
      else this.$emit('codeSwith', false)
    },
    inputNameBlur (value) {
      if (value.length === 0) {
        console.log(123)
        this.nameError = true
      }
      this.nameValue = value
    },
    inputPasswordChange (value) {
      this.passWord = value
    }
  },
  render () {
    return (
      <div class="signup">
        <div class="loginheader">
          <span class="loginheaderbtn">注册</span>
        </div>
        <div class="signup-content">
          <div>
            <div class="signup-text">
              <you-input type="text"
                placeholder="用户名"
                errorPlaceholder="请输入用户名"
                error={this.nameError}
                value={this.nameValue}
                on-blur={this.inputNameBlur}
                errorValue={this.nameErrorText}
                errorValueText="请输入正确的用户名"></you-input>
            </div>
            <div class="signup-text" style="margin-top: 20px;">
              <you-input type="text"
                placeholder="邮箱"
                errorPlaceholder="请输入邮箱"
                error={this.nameError}
                value={this.nameValue}
                on-blur={this.inputNameBlur}
                errorValue={this.nameErrorText}
                errorValueText="请输入正确的邮箱"></you-input>
            </div>
            <div class="signup-text" style="margin-top: 20px;">
              <you-input type="password"
                placeholder="登录密码"
                errorPlaceholder="请输入登录密码"
                error={this.passWordError}
                value={this.passWord}
                on-change={this.inputPasswordChange}
                errorValue={this.passWordErrorText}
                errorValueText="请输入正确的登录密码"></you-input>
            </div>
            <div class="signup-text" style="margin-top: 20px;">
              <you-input type="password"
                placeholder="再次确认密码"
                errorPlaceholder="请再次输入密码"
                error={this.passWordError}
                value={this.passWord}
                on-change={this.inputPasswordChange}
                errorValue={this.passWordErrorText}
                errorValueText="与上次密码一致, 请进行修改"></you-input>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
</script>
<style lang="less">
.signup {
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
  .signup-text {
    line-height: 3em;
  }
}
.loginheaderbtn {
  color: #1a1a1a;
  font-weight: 600;
  border-bottom: 3px solid #0084ff;;
}
</style>
