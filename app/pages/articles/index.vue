<template lang="pug">
section
  h2.m-main__title Articles
  ul.m-articleList
    article-list-item(
    v-for='(item, index) in data'
    :key='index'
    :item='item'
    )
</template>

<script>
import { getIndex } from '~/utils/firebase'
import articleListItem from '@/components/articleListItem.vue'
export default {
  components: { articleListItem },
  async asyncData() {
    const data = await getIndex({ collection: 'articles' })
    return { data }
  }
}
</script>
