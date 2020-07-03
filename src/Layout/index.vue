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
  props: {
    default: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      moda: true,
      translate: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.view, true)
    console.log(this.default)
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
    // <div class="you-layout">
    //     {this.loginStatus === true ? <layout-header class={ ['you-layout-header', this.translate ? 'you-layout-header-translate' : '']} /> : <layout-not-header class="you-layout-header" />}
    //     <router-view class="you-layout-view"></router-view>
    //   </div>
  },
  render () {
    return (
      <div class="you">
        <div class="you-main-header-box">
          <header class="main-header">
            <layout-header class={ ['you-layout-header', this.translate ? 'you-layout-header-translate' : '']} />
          </header>
        </div>
        <div class="you-mian-container"></div>
      </div>
    )
  }
}
</script>
<style lang="less" scoped>
  .you {
      overflow-x: initial;
      width: 100vw;
      margin: 0;
      padding: 0;
      &-main-header-box {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        height: 4rem;
        background: #fff;
        .main-header {
          transform: translateZ(0);
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          transition: all .2s;
        }
      }
  }
  // .you {
  //   position:relative;
  //   width: 100%;
  //   margin: 0;
  //   padding: 0;
  //   overflow: hidden;
  //   &-header {
  //     position: fixed;
  //     top: 0;
  //     width: 100%;
  //     // height: 65px;
  //     z-index: 999;
  //     transition: top .5s;
  //   };
  //   &-header-translate {
  //     top: -65px;
  //   }
  //   &-view {
  //     margin: 0 auto;
  //     margin-top: 112px;
  //     padding: 20px;
  //     min-height: calc(100vh - 112px);
  //   }
  // }
</style>
