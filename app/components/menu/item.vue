<template lang="pug">
a.m-menu__link(
:href='href'
) {{item.label}}
</template>

<script>
export default {
  props: ['item'],
  computed: {
    href() {
      return this.item.path === this.$route.path ? false : this.item.path
    }
  }
}
</script>
