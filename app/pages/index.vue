<template lang="pug">
.m-index
  header.m-index__head
    h1.m-index__title shoko-sugito.work
  main.m-index__body
    ul
      li(v-for='item in data')
        | {{ item.title }}
</template>

<script>
export default {
  async asyncData({ store }) {
    const data = await store.dispatch('getIndex', {
      collection: 'articles'
    })

    return { data }
  }
}
</script>
