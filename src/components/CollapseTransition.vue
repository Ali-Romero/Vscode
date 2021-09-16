<template>
  <transition
    :key="Date.now() + Math.random()"
    name="collapse"
    v-bind="$attrs"
    @beforeEnter="beforeEnter"
    @enter="enter"
    @afterEnter="afterEnter"
    @beforeLeave="beforeLeave"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  methods: {
    beforeEnter(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = '0px'
        }

        element.style.display = null
      })
    },
    enter(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = `${element.scrollHeight}px`
        })
      })
    },
    afterEnter(element) {
      element.style.height = null
    },
    beforeLeave(element) {
      requestAnimationFrame(() => {
        if (!element.style.height) {
          element.style.height = `${element.offsetHeight}px`
        }
      })
    },
    leave(element) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.style.height = '0px'
        })
      })
    },
    afterLeave(element) {
      element.style.height = null
    },
  },
}
</script>

<style lang="sass" scoped>
.collapse-enter-active,
.collapse-leave-active
  transition: 0.2s ease-out
  will-change: height
  overflow: hidden
</style>
