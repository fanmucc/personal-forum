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
      moda: true
    }
  },
  mounted () {
    window.addEventListener('scroll', this.view, true)
  },
  methods: {
    view (e) {
      let scrollNum = e.target.documentElement.scrollTop || e.target.body.scrollTop
      if (scrollNum >= 300) {
        console.log(1)
      } else {
        console.log(2)
      }
    }
  },
  computed: {
    ...mapState('user', {
      loginStatus: state => state.loginStatus
    })
  },
  render () {
    return (
      <div class="you-layout">
        {this.loginStatus === true ? <layout-header class="you-layout-header"></layout-header> : <layout-not-header class="you-layout-header"></layout-not-header>}
        <div class="aaa">123</div>
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
      height: 65px;
      z-index: 999;
    };
    &-view {
      margin: 0 auto;
      margin-top: 80px;
      min-height: calc(100vh - 85px);
    }
  }
  .aaa {
    margin-top: 80px;
  }
</style>
