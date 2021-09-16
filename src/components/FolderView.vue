<template>
  <div class="folder">
    <div class="folder__item" :class="{ 'folder__item--open': show }" @click="show = !show">
      <div class="folder__arrow">
        <img src="@/assets/icons/arrow-down.svg" alt="folder" width="10" height="10" />
      </div>
      <Item>
        <template #icon>
          <img :src="require(`@/assets/icons/${getFolderIcon(name)}`)" alt="folder" width="18" height="18" />
        </template>
        <template #text>
          {{ name }}
        </template>
      </Item>
    </div>

    <div v-if="show">
      <FolderView
        v-for="(folder, index) in folders"
        :key="index"
        :name="folder.name"
        :folders="folder.folders"
        :files="folder.files"
      />

      <div class="folder__files">
        <Item v-for="(file, index) in files" :key="index">
          <template #icon>
            <img :src="require(`@/assets/icons/${getFileIcon(file.name)}`)" alt="folder" width="18" height="18" />
          </template>
          <template #text>
            {{ file.name }}
          </template>
        </Item>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: 'FolderView',
  components: {
    Item,
  },
  props: {
    name: String,
    folders: Array,
    files: Array
  },
  data() {
    return {
      // show: this.name === '$',
      show: true,
      file_icons: {
        svg: 'svg.svg',
        jpeg: 'image.svg',
        jpg: 'image.svg',
        png: 'image.svg',
        // browserslistrc: 'browserslistrc.svg',
        gitignore: 'git.svg',
        js: 'js.svg',
        json: 'nodejs.svg',
      },
      folder_icons: {
        // assets: 'folder-assets.svg',
        icons: 'folder-images.svg',
        backgrounds: 'folder-images.svg',
      }
    }
  },
  methods: {
    getFileIcon(name) {
      const ext = name.split('.').pop()

      return this.file_icons[ext] || 'vue.svg'
    },
    getFolderIcon(name) {
      return this.folder_icons[name] || 'folder-vue.svg'
    },
  }
}
</script>

<style lang="sass">
.folder
  position: relative
  padding-left: 10px

  &::before
    content: ""
    width: 1px
    height: calc(100% - 30px)
    position: absolute
    bottom: 0
    left: 13px
    background-color: #FFFFFF
    opacity: 0.1

  &__files
    padding-left: 25px

  &__item
    display: flex
    align-items: center
    cursor: pointer
  
  &__arrow
    margin-right: 8px
</style>
