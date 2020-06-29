<script>
import LayoutHeader from './header/header'
import LayoutNotHeader from './header/not-header'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: {
    LayoutHeader,
    LayoutNotHeader
  },
  data () {
    return {
      moda: true,
      translate: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.view, true)
  },
  methods: {
    view (e) {
      let scrollNum = e.target.documentElement.scrollTop || e.target.body.scrollTop
      if (scrollNum >= 200) {
        console.log(1)
        this.translate = true
      } else {
        this.translate = false
        console.log(this.loginStatus)
        console.log(2)
      }
    }
  },
  computed: {
    ...mapState({
      loginStatus: state => state.user.loginStatus
    })
    // {this.loginStatus === true ? <layout-header class="you-layout-header" /> : <layout-not-header className={ this.translate ? 'you-layout-header-translate' : 'you-layout-header'} />}
  },
  render () {
    return (
      <div class="you-layout">
        {this.loginStatus === true ? <layout-header class={ ['you-layout-header', this.translate ? 'you-layout-header-translate' : '']} /> : <layout-not-header class="you-layout-header" />}
        <router-view class="you-layout-view"></router-view>
      </div>
    )
  }
}
</script>
<style lang="less">
  .you-layout {
    position:relative;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    &-header {
      position: fixed;
      top: 0;
      width: 100%;
      // height: 65px;
      z-index: 999;
      transition: top .5s;
    };
    &-header-translate {
      top: -65px;
    }
    &-view {
      margin: 0 auto;
      margin-top: 65px;
      min-height: calc(100vh - 85px);
    }
  }
  .aaa {
    margin-top: 80px;
  }
</style>
