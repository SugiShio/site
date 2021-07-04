<template lang="pug">
ul.m-workList
  work-list-item(
  v-for='(item, index) in works'
  :key='index'
  :item='item'
  )
</template>
<script>
import { getIndex } from '~/utils/firebase'
import workListItem from './item.vue'
export default {
  components: { workListItem },
  props: {
    works: Array
  }
}
</script>
