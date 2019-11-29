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

<style lang="scss" scoped>
@import '@/assets/style/_variables';
.m-workList {
  &__item {
    margin: 20px;
    width: 300px;
    height: 300px;
    box-shadow: 0 0 5px #ccc;
    background-size: cover;
    background-position: center;
    background-color: $color-fujiiro;
  }
  &__title {
    text-align: center;
    background-color: rgba(#fff, 0.95);
    opacity: 0.7;
    padding: 10px;
    height: 100%;
    align-items: center;
    transition: 0.3s;
    display: flex;

    &.withBg {
      opacity: 0;
    }

    span {
      width: 100%;
      text-align: center;
    }

    &:hover {
      opacity: 1;
    }
  }
}
</style>
