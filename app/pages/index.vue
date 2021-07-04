<template lang="pug">
.m-index
  header.m-index__head
    h1.m-index__siteTitle shoko-sugito.work
    nav.m-index__menu
      ul
        li.m-index__menu-item(v-for='item in menuItems')
          a.m-index__menu-link(:href='item.path') {{ item.label }}
  main.m-index__body
    section.m-index__section
      work-list(:works='works')

    section.m-index__section
      h2.m-index__title Articles
      ul.m-articleList.m-articleList--index
        article-list-item(
        v-for='(item, index) in articles'
        :key='index'
        :item='item'
        )
  footer.m-index__footer ©︎ 2019, Shoko Sugito
</template>

<script>
import { getIndex } from '~/utils/firebase'
import { MENU_TOP } from '@/constants/menu.js'
import articleListItem from '@/components/articleListItem.vue'
import workList from '@/components/workList'

export default {
  layout: 'index',
  components: { articleListItem, workList },
  computed: {
    menuItems() {
      return MENU_TOP
    }
  },
  async asyncData() {
    const articles = await getIndex({ collection: 'articles' })
    const works = await getIndex({ collection: 'works' })
    return { articles, works }
  }
}
</script>
