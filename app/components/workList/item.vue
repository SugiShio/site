<template lang="pug">
li.m-workList__item(:style='backgroundImage')
  router-link.m-workList__link(:to='to')
    .m-workList__title(:class='{ withBg: hasBackgroundImage }')
      span {{ item.title }}
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
        name: 'works-title',
        params: { title: this.item.title }
      }
    },
    hasBackgroundImage() {
      return !!this.item.featuredImage
    },
    backgroundImage() {
      return this.hasBackgroundImage
        ? { 'background-image': `url("${this.item.featuredImage}")` }
        : {}
    }
  }
}
</script>
