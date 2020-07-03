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
      <div class="you container">
        <div class="you-main-header-box">
          <header class="main-header main-header visible">
            <layout-header class={ ['you-layout-header', this.translate ? 'you-layout-header-translate' : '']} />
          </header>
        </div>
        <main class="container main-container with-view-nav">
          <router-view></router-view>
        </main>
      </div>
    )
  }
}
</script>
<style lang="less">
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
        .visible {
          transform: translateZ(0);
        }
        .main-header {
          position: fixed;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          transition: all .2s;
          // transform: translate3d(0,-100%,0);
        }
        .main-header {
            background: #fff;
            border-bottom: 1px solid #f1f1f1;
            color: #909090;
            height: 4rem;
            z-index: 250;
        }
      }
      .container {
        position: relative;
        margin: 0 auto;
        width: 100%;
        max-width: 960px;
      }
      .container::after {
        display: table;
        content: "";
        clear: both;
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
