<template>
    <svg :class="svgClass" aria-hidden="true" :style="svgStyle">
        <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    svgStyle: {
      type: String
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      return `svg-icon svg-class-${this.iconClass}`
    }
  }
}
</script>
<style>
    .svg-icon{
        width:1em;
        height:1em;
        vertical-align:-0.15em;
        fill:currentColor;
        overflow:hidden;
    }
</style>
