<template>
  <div v-bind="$attrs" class="item" :class="classes">
    <div :style="styles" class="item__wrapper">
      <div v-if="folder" class="item__arrow">
        <img src="@/assets/icons/arrow-down.svg" alt="arrow" width="10" height="10" />
      </div>
      <div class="item__icon">
        <img :src="require(`@/assets/icons/${icon}`)" alt="icon" width="18" height="18" />
      </div>
      <div class="item__text">
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    folder: {
      type: Boolean,
      default: false,
    },
    open: {
      type: Boolean,
      default: false,
    },
    deep: {
      type: Number,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        'item--open': this.open,
      }
    },
    file_padding() {
      return `${this.deep + 18}px`
    },
    folder_padding() {
      return `${this.deep}px`
    },
    styles() {
      const padding = this.folder ? this.folder_padding : this.file_padding

      return {
        'padding-left': padding
      }
    }
  },
}
</script>

<style lang="sass">
.item
  $parent: &

  padding: 3px 17px
  transition: all 0.2s

  &:hover
    background-color: rgba(56, 61, 75, 0.7)

  &__wrapper
    display: flex
    align-items: center
    cursor: pointer

  &--open
    #{$parent}__arrow img
      transform: rotate(0)

  &__arrow
    margin-right: 8px

    img
      transform: rotate(-90deg)
      display: block
      transition: all 0.2s

  &__icon
    margin-right: 8px

    img
      display: block

  &__text
    font-size: 14px
    line-height: 20px
    color: #FFFFFF
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
</style>
