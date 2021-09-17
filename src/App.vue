<template>
  <Layout>
    <template #menu>
      <Menu />
    </template>
    
    <template #toolbar>
      <Toolbar />
    </template>

    <template #explorer>
      <FolderView name="$" :folders="folders" :files="files" />
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout' 
import FolderView from './components/FolderView.vue'
import Toolbar from './components/Toolbar.vue'
import Menu from './components/Menu.vue'
import data from './data/list';

export default {
  name: 'App',
  components: {
    FolderView,
    Layout,
    Toolbar,
    Menu,
  },
  data: () => data
}
</script>
