<template>
  <div class="layout">
    <header class="layout__header">
      <img src="@/assets/icons/vscode.svg" alt="logo" width="24" height="24">
    </header>
    <div class="layout__wrapper">
      <aside class="layout__toolbar">
        <slot name="toolbar" />
      </aside>
      <aside class="layout__explorer" :style="explorer_styles">
        <div class="layout__resize" @mousedown="mousedown" />

        <div class="layout__explorer-inner" :class="explorer_classes">
          
          <slot name="explorer" />
        </div>
      </aside>
      <main class="layout__main">
        <slot name="main" />
      </main>
    </div>
  </div>
</template>

<script>
const MIN_WIDTH = 150
const MAX_WIDTH = 600

export default {
  data() {
    return {
      inactive: false,
      explorer_width: 250
    }
  },
  computed: {
    explorer_styles() {
      return {
        point: 0,
        point_width: 0,
        width: `${this.explorer_width}px`
      }
    },
    explorer_classes() {
      return {
        'layout__explorer-inner--inactive': this.inactive
      }
    }
  },
  methods: {
    mousemove(event) {
      const width = this.point_width + (event.clientX - this.point)

      this.explorer_width = Math.max(Math.min(width, MAX_WIDTH), MIN_WIDTH)
    },
    mouseup() {
      this.inactive = false

      document.removeEventListener('mousemove', this.mousemove)
      document.removeEventListener('mouseup', this.mouseup)
    },
    mousedown(event) {
      event.preventDefault()

      this.inactive = true
      this.point = event.clientX
      this.point_width = this.explorer_width

      document.addEventListener('mousemove', this.mousemove)

      document.addEventListener('mouseup', this.mouseup)
    },
  }
}
</script>

<style lang="sass">
.layout
  height: 100vh
  background-color: #2f333d
  color: #FFFFFF

  &__header
    background-color: #282c34
    padding: 5px 15px

  &__wrapper
    display: flex
    height: calc(100% - 38px) // header height

  &__toolbar
    width: 47px

  &__explorer
    position: relative
    padding: 5px 0
    background-color: #21252b
  
  &__explorer-inner
    max-height: 100%
    user-select: none

    &--inactive
      pointer-events: none

  &__resize
    width: 5px
    height: 100%
    position: absolute
    top: 0
    right: -2px
    background-color: #007FD4
    cursor: e-resize
    opacity: 0
    transition: opacity 0.2s
    z-index: 1

    &:hover,
    &:active
      opacity: 1

  &__explorer-inner,
  &__main
    overflow: auto

  &__main
    flex: 1
</style>
