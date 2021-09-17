<template>
  <nav class="menu">
    <ul class="menu__list">
      <li class="menu__item">File</li>
      <li class="menu__item">Edit</li>
      <li class="menu__item">Selection</li>
      <li class="menu__item">View</li>
      <li class="menu__item">Go</li>
      <li class="menu__item">Run</li>
      <li class="menu__item">Terminal</li>
      <li class="menu__item">Help</li>
    </ul>
  </nav>
</template>

<style lang="sass">
.menu
  display: none

  &__list
    padding: 0
    margin: 0
    display: flex
    height: 100%

  &__item
    display: flex
    align-items: center
    padding: 0 10px
    color: #949cab
    list-style: none
    cursor: context-menu

    &:hover
      background-color: #3E4249

@media (min-width: 600px)
  .menu
    display: block
</style>
