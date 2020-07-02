<script>
import hljs from 'highlight.js'
import { mavonEditor } from 'mavon-editor'
mavonEditor.mixins[0].data().markdownIt.set({
  html: true,
  xhtmlOut: true,
  langPrefix: 'language-',
  linkify: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>'
      } catch (__) {}
    }

    return '<pre class="hljs" style="background: rgb(248, 248, 248); padding: 10px; overflow: auto;"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})
const md = mavonEditor.mixins[0].data().markdownIt
export default {
  data () {
    return {
      value: ''
    }
  },
  mounted () {
    this.value = JSON.parse(window.sessionStorage.markdown).value
    //  <div domPropsInnerHTML={md.render(this.value)}></div>
  },
  render () {
    return (
      <div class="you-drafts">
        <div class="you-drafts-content" domPropsInnerHTML={md.render(this.value)}></div>
      </div>
    )
  }
}
</script>
<style lang="less" scoped>
  .you-drafts {
    height: 100%;
    &-content {
      width: 50%;
      margin: 0 auto;
      background: #fff;
      padding: 20px;
    }
  }
</style>
