<template>
  <div class="layout">
    <header class="layout__header">
      <img src="@/assets/icons/vscode.svg" alt="logo" width="24" height="24">
    </header>
    <div class="layout__wrapper">
      <aside class="layout__toolbar">
        <slot name="toolbar" />
      </aside>
      <aside class="layout__explorer">
        <slot name="explorer" />
      </aside>
      <main class="layout__main">
        <slot name="main" />
      </main>
    </div>
  </div>
</template>

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
    width: 250px
    padding: 5px 0
    background-color: #21252b

  &__explorer,
  &__main
    overflow: auto

  &__main
    flex: 1
</style>
