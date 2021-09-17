<template>
  <nav class="toolbar">
    <ul class="toolbar__list">
      <li class="toolbar__item">
        <img src="@/assets/icons/toolbar-file.svg" width="30" height="30" alt="icon">
      </li>
      <li class="toolbar__item">
        <img src="@/assets/icons/toolbar-search.svg" width="30" height="30" alt="icon">
      </li>
      <li class="toolbar__item">
        <img src="@/assets/icons/toolbar-extensions.svg" width="30" height="30" alt="icon">
      </li>
    </ul>
  </nav>
</template>

<style lang="sass">
.toolbar
  &__list
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    padding: 16px 0
    margin: 0

  &__item
    cursor: pointer
    margin-bottom: 28px
    list-style: none

    img
      width: 24px
      height: 24px

@media (min-width: 400px)
  .toolbar__item
    img
      width: 30px
      height: 30px
</style>
