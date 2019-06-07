<template lang="pug">
.m-index
  header.m-index__head
    h1.m-index__siteTitle shoko-sugito.work
  main.m-index__body
    h2.m-index__title Articles
    ul.m-articleList
      li.m-articleList__item(v-for='item in data')
        a.m-articleList__link
          time.m-articleList__date {{ date(item.createdAt) }}
          .m-articleList__title {{ item.title }}
</template>

<script>
import { getIndex } from '~/utils/firebase'
import moment from 'moment'

export default {
  async asyncData() {
    const data = await getIndex({ collection: 'articles' })
    return { data }
  },
  methods: {
    date(timestamp) {
      return moment(timestamp).format('YYYY.M.D')
    }
  }
}
</script>
