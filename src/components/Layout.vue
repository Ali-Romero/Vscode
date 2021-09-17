<template>
  <div class="layout">
    <header class="layout__header">
      <div class="layout__logo">
        <img src="@/assets/icons/vscode.svg" alt="logo" width="24" height="24" />
      </div>

      <slot name="menu" />
    </header>

    <div class="layout__wrapper">
      <aside class="layout__toolbar">
        <slot name="toolbar" />
      </aside>
      <aside class="layout__explorer" :style="explorer_styles">
        <div class="layout__title">explorer</div>
        <div class="layout__resize" @mousedown="mousedown" />
        <div class="layout__explorer-inner" :class="explorer_classes">
          
          <slot name="explorer" />
        </div>
      </aside>
      <main class="layout__main">
        <slot name="main" />
      </main>
    </div>

    <footer class="layout__footer">
      <div class="footer">
        <div class="footer__item">
          <div class="footer__icon">
            <img src="@/assets/icons/footer-icon.svg" alt="footer-icon" width="16" height="16" />
          </div>
          <div class="footer__description">Visual Studio Code*
          </div>
        </div>
      </div>
    </footer>
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
    height: 40px
    display: flex
    background: linear-gradient(90deg, rgba(40,44,52,1) 0%, rgba(0,212,255,0) 26%)
    padding: 0 15px
    box-shadow: 1px 10px 13px -1px rgba(72, 82, 109, 0.2)

  &__wrapper
    display: flex
    height: calc(100% - 67px) // header height

  &__toolbar
    width: 58px

  &__title
    padding: 16px 24px
    text-transform: uppercase

  &__logo
    align-self: center
    margin-right: 21px

  &__explorer
    flex: 1
    position: relative
    background-color: #21252B

  &__explorer-inner
    max-height: 100%
    user-select: none

    &--inactive
      pointer-events: none

  &__resize
    display: none
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
    display: none
    flex: 1

.footer
  padding-left: 16px
  height: 27px
  background-color: #21252B
  display: flex
  align-items: center

  &__item
    display: flex
    align-items: center
    font-size: 13px
    color: #9AA5B8
    cursor: context-menu

    &:hover
      text-shadow: 0px 0px 6px rgba(144,160,163,0.97)

  &__icon
    margin-right: 6px

@media (min-width: 600px)
  .layout
    &__explorer
      flex: none

    &__main
      display: block

    &__resize
      display: block
</style>
