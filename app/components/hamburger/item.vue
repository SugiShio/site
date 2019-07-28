<template lang="pug">
a.m-hamburger__link(
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
