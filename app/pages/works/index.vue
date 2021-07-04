<template lang="pug">
section
  h2.m-main__title Works
  work-list(:works='works')
</template>

<script>
import { getIndex } from '~/utils/firebase'
import workList from '@/components/workList'
export default {
  components: { workList },
  async asyncData() {
    const works = await getIndex({ collection: 'works' })
    return { works }
  }
}
</script>
