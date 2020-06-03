<script>
export default {
  name: 'SvgIconfont',
  props: {
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 12
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.icon}`
    },
    style () {
      return {
        fontSize: `${this.size}px !important`
      }
    }
  },
  render () {
    return (
      <svg class="icon symbols" aria-hidden="true" style={ this.style }>
        <use xlinkHref={ this.iconName }></use>
      </svg>
    )
  }
}
</script>
