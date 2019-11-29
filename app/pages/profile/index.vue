<template lang="pug">
section.m-profile
  h3.m-profile__title {{ data.title.value }}
  h2.m-profile__name {{ data.displayName.value }}
  .m-profile__content
    vue-markdown(:source='data.body.value')
</template>

<script>
import { getIndex } from '~/utils/firebase'
import VueMarkdown from 'vue-markdown'
export default {
  components: { VueMarkdown },
  async asyncData() {
    const data = await getIndex({
      collection: 'profiles',
      isObject: true,
      ignorePublishStatus: true
    })
    return { data }
  }
}
</script>
