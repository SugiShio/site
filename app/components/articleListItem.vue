<template lang="pug">
li.m-articleList__item
  router-link.m-articleList__link(to='hoge')
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
    }
  }
}
</script>
