<template lang="pug">
section.m-container
  header.m-header
    router-link.m-header__title(to='/') shoko-sugito.work
    m-menu
    footer.m-footer(v-if='!isSp') ©︎ 2019, Shoko Sugito
  main.m-main
    nuxt
  footer.m-footer(v-if='isSp') ©︎ 2019, Shoko Sugito
</template>

<script>
import mMenu from '@/components/menu/index.vue'
export default {
  components: { mMenu },
  computed: {
    isSp() {
      return this.$store.getters.deviceType === 'sp'
    }
  },
  created() {
    if (process.browser) {
      this.$store.dispatch('updateDeviceType')
      let timer = null
      window.onresize = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          this.$store.dispatch('updateDeviceType')
        }, 300)
      }
    }
  }
}
</script>
