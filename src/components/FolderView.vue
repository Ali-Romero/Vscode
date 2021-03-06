<template>
  <div class="folder" :data-deep="deep">
    <div class="folder__line" :style="{ left: `${deep}px` }" />

    <Item folder :deep="deep" :open="show" :icon="getFolderIcon(name)" :label="name" @click="show = !show" />

    <template v-if="folders.length || files.length">
      <CollapseTransition>
        <ul v-show="show" class="folder__list">
          <li v-for="(folder, index) in folders" :key="index" class="folder__child folder__child--folder">
            <FolderView
              :name="folder.name"
              :folders="folder.folders"
              :files="folder.files"
              :deep="computed_deep"
            />
          </li>

          <li v-for="(file, index) in files" :key="index" class="folder__child folder__child--file">
            <Item :deep="computed_deep" :icon="getFileIcon(file.name)" :label="file.name" />
          </li>
        </ul>
      </CollapseTransition>
    </template>
  </div>
</template>

<script>
import CollapseTransition from '@/components/CollapseTransition'
import Item from "@/components/Item";

export default {
  name: 'FolderView',
  components: {
    CollapseTransition,
    Item,
  },
  props: {
    name: String,
    folders: Array,
    files: Array,
    deep: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      show: this.name === '$',
      file_icons: {
        svg: 'svg.svg',
        jpeg: 'image.svg',
        jpg: 'image.svg',
        png: 'image.svg',
        browserslistrc: 'browserlist.svg',
        gitignore: 'git.svg',
        js: 'js.svg',
        json: 'nodejs.svg',
      },
      folder_icons: {
        assets: 'folder-resource.svg',
        icons: 'folder-images.svg',
        backgrounds: 'folder-images.svg',
      },
    }
  },
  computed: {
    computed_deep() {
      return this.deep + 10
    },
  },
  methods: {
    getFileIcon(name) {
      const ext = name.split('.').pop()

      return this.file_icons[ext] || 'file.svg'
    },
    getFolderIcon(name) {
      const icon = this.folder_icons[name] || 'folder-meta.svg'

      if (this.show) {
        const arr = icon.split('.')
        const ext = arr.pop()

        return `${arr.join('.')}-open.${ext}`
      }

      return icon
    },
  }
}
</script>

<style lang="sass">
.folder
  position: relative

  &__line
    width: 1px
    height: calc(100% - 26px)
    position: absolute
    bottom: 5px
    background-color: #FFFFFF
    opacity: 0.1
    transform: translateX(20px)

  &__list
    padding: 0
    margin: 0
    list-style: none
</style>
