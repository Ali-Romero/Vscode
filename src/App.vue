<template>
  <Layout>
    <template #explorer>
      <FolderView name="$" :folders="folders" :files="files" />
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout' 
import FolderView from './components/FolderView.vue'
import data from './data/list';

export default {
  name: 'App',
  components: {
    FolderView,
    Layout,
  },
  data: () => data
}
</script>
