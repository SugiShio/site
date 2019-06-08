<template lang="pug">
li.m-articleList__item
  router-link.m-articleList__link(:to='to')
    time.m-articleList__date {{ date }}
    .m-articleList__title {{ item.title }}
</template>

<script>
import moment from 'moment'
export default {
  props: ['item'],
  computed: {
    date() {
      return moment(this.item.createdAt).format('YYYY.M.D')
    },
    to() {
      return {
        name: 'articles-title',
        params: { title: this.item.title }
      }
    }
  }
}
</script>
