<template>
  <div class="item">
    <div class="item__icon">
      <slot name="icon" />
    </div>
    <div class="item__text">
      <slot name="text" />
    </div>
  </div>
</template>

<style lang="sass">
.item
  display: flex
  align-items: center

  &__icon
    margin-right: 8px

  &__text
    font-size: 14px
    line-height: 16px
    color: #FFFFFF
</style>
