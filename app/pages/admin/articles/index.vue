<template lang="pug">
el-table(:data='data')
  el-table-column(
  prop='title'
  label='タイトル'
  )
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  layout: 'admin',
  data() {
    return {
      data: []
    }
  },
  async created() {
    const data = await this.$store.dispatch('getIndex', {
      collection: 'articles'
    })
    this.data = data
  }
}
</script>
