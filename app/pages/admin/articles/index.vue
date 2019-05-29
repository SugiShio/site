<template lang="pug">
el-table(
v-loading='isLoading'
:data='data'
)
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
      data: [],
      isLoading: true
    }
  },
  async created() {
    const data = await this.$store.dispatch('getIndex', {
      collection: 'articles'
    })
    this.data = data
    this.isLoading = false
  }
}
</script>
