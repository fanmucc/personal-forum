<script>
/**
 * name: YouInput
 * 组件作用: 简单的input
 * @type: input类型
 * @placeholder  input框输入提示文字
 * @errorPlaceholder  input框失去焦点时内容为空时的提示文字
 * @value  input框输入内容
 * @error  input框失去焦点时的内容为空的报错状态 Boolean
 * @errorValue  input框失去焦点时,内容不符合要求时的状态; Boolean
 * @errorValueText input框失去焦点时, 内容不符合要求时的提示文字
 * @code  是否开启验证码
 *
 * 返回值
 * 当type状态为 @text 或 @password 时,返回的值为输入值
 * 当type状态为 @code 时， 返回的时值为 对象, 有 target 和 value
 */
export default {
  name: 'YouInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    errorPlaceholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    errorValue: {
      type: Boolean,
      default: false
    },
    errorValueText: {
      type: String,
      default: ''
    },
    code: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      codeValue: ''
    }
  },
  computed: {
    placeholderText () {
      return `${this.error === true ? this.errorPlaceholder : this.placeholder}`
    },
    codeValueCom: {
      get () {
        this.codeValue = `${this.code === true ? this.createCode() : ''}`
      },
      set (newValue) {
        this.codeValue = newValue
      }
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    inputChange (event) {
      // 如果开启随机验证码验证时, 则只返回 布尔值
      if (this.code) {
        const status = event.target.value === this.codeValue.toLowerCase() ? true : false
        this.$emit('change', { target: event.target.value.length !== 0 ? status : null, value: event.target.value })
      } else {
        this.$emit('change', event.target.value)
      }
    },
    inputBlur (event) {
      if (this.code) {
        const status = event.target.value === this.codeValue.toLowerCase() ? true : false
        this.$emit('blur', { target: event.target.value.length !== 0 ? status : null, value: event.target.value })
      } else {
        this.$emit('blur', event.target.value)
      }
    },
    // 随机生成验证码
    createCode () {
      let code = ''
      const codeLength = 4 // 验证码的长度
      const random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] // 随机数
      for (let i = 0; i < codeLength; i++) { // 循环操作
        let index = Math.floor(Math.random() * 36) // 取得随机数的索引（0~35）
        code += random[index] // 根据索引取得随机数加到code上
      }
      return code// 把code值赋给验证码
    },
    refresh () {
      this.codeValueCom = this.createCode()
    }
  },
  render () {
    return (
      <div class="you-input">
        <input type={this.type} class={{ youInputPublic: true, errorValueStyle: this.error }} placeholder={this.placeholderText} value={this.value} on-change={this.inputChange.bind(this)} on-blur={this.inputBlur.bind(this)}/>
        <span class={{ errorValueTextStyle: true, errorBlock: this.errorValue, codeErrorTextStyle: this.code & this.errorValue === true ? true : false }}>{this.errorValueText}</span>
        {this.code === true ? <span class={{ codeValues: true }} on-click={this.refresh}>{this.codeValue}</span> : ''}
      </div>
    )
  }
}
</script>
<style lang="less">
  .you-input {
    display: inline-flex;
    box-sizing: border-box;
    width: 100%;
    position: relative;
    align-items: center;
    .youInputPublic {
      position: absolute;
      width: 100%;
      padding-left: 10px;
      padding-bottom: 5px;
      border: none;
      outline: none;
      color: #1a1a1a;
      font-size: 12px;
      height: 30px;
      line-height: 24px;
      border-bottom: 1px solid rgb(235, 235, 235);
      background-color: rgba(0,0,0,0);
    }
    .errorValueStyle::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: rgb(237, 68, 65);
       /* placeholder字体大小  */
       font-size: 12px;
    }
    .errorValueTextStyle {
      position: absolute;
      display: none;
      right: 10px;
      font-size: 12px;
      color: rgb(237, 68, 65);
      z-index: 99;
    }
    .codeErrorTextStyle {
      right: 75px;
    }
    .errorBlock {
      display: block;
    }
    .codeValues {
      position: absolute;
      width: 60px;
      height: 30px;
      text-align: center;
      right: 10px;
      top: -20px;
      font-size: 16px;
      color: #fff;
      display: inline-block;
      border: 1px solid #ccc;
      background-color: #ccc;
      line-height: 30px;
    }
  }
</style>
