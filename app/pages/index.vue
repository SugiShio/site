<template lang="pug">
.m-index
  header.m-index__head
    h1.m-index__siteTitle shoko-sugito.work
    nav.m-index__menu
      ul
        li.m-index__menu-item(v-for='item in menuItems')
          a.m-index__menu-link(:href='item.path') {{ item.label }}
  main.m-index__body
    h2.m-index__title Articles
    ul.m-articleList.m-articleList--index
      article-list-item(
      v-for='(item, index) in data'
      :key='index'
      :item='item'
      )
  footer.m-index__footer ©︎ 2019, Shoko Sugito
</template>

<script>
import { getIndex } from '~/utils/firebase'
import { MENU_TOP } from '@/constants/menu.js'
import articleListItem from '@/components/articleListItem.vue'

export default {
  layout: 'index',
  components: { articleListItem },
  computed: {
    menuItems() {
      return MENU_TOP
    }
  },
  async asyncData() {
    const data = await getIndex({ collection: 'articles' })
    return { data }
  }
}
</script>
