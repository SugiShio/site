<template lang="pug">
section
  article.m-article
    h2.m-article__title {{ data.title }}
    time.m-article__time {{ date }}
    div.m-article__content {{ data.body }}
</template>

<script>
import { getShow } from '~/utils/firebase'
import moment from 'moment'
export default {
  async asyncData({ route }) {
    const data = await getShow({
      collection: 'articles',
      doc: route.params.title
    })
    return { data }
  },
  computed: {
    date() {
      return moment(this.data.createdAt).format('YYYY.M.D H:mm')
    },
    title() {
      return this.$route.params.title
    }
  }
}
</script>
