<template lang="pug">
article.m-work
  h2.m-work__title {{ data.title }}
  .m-work__featuredImage
    img(:src='data.featuredImage')
  table.m-work__table
    tbody
      tr(v-for='item in tableData')
        th {{ item.term}}
        td(v-html='item.description')
  vue-markdown.m-work__content(:source='data.body')

  ul.m-work__images
    li.m-work__image(v-for='image in data.images')
      img(:src='image')
</template>

<script>
import { getShow } from '~/utils/firebase'
import moment from 'moment'
import VueMarkdown from 'vue-markdown'
export default {
  components: { VueMarkdown },
  async asyncData({ route }) {
    const data = await getShow({
      collection: 'works',
      doc: route.params.title
    })
    return { data }
  },
  computed: {
    tableData() {
      let tableData = []
      if (this.data.productionTime)
        tableData.push({
          term: '制作時期',
          description: this.data.productionTime
        })
      if (this.data.tags)
        tableData.push({
          term: '使用技術',
          description: this.data.tags.join(', ')
        })
      if (this.data.positions)
        tableData.push({
          term: '担当範囲',
          description: this.data.positions.join(', ')
        })
      if (this.data.url)
        tableData.push({
          term: 'URL',
          description: `<a href="${this.data.url}" target="_blank">${this.data.url}</a>`
        })
      return tableData
    },
    title() {
      return this.$route.params.title
    }
  }
}
</script>
