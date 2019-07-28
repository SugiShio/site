<template lang="pug">
.m-hamburger
  .m-hamburger__trigger(
  v-if='!isOpen'
  @click='isOpen = true'
  )
    span(:class='{colored: isScrolled}')
  transition(name='fade')
    ul.m-hamburger__menu(v-if='isOpen')
      li.m-hamburger__item(v-for='item in items')
        hamburgerItem(:item='item')
      li.m-hamburger__item.mt-30
        span.m-hamburger__link.m-hamburger__link--close(@click='isOpen = false') close
</template>

<script>
import { MENU_DEFAULT } from '@/constants/menu.js'
import hamburgerItem from '@/components/hamburger/item.vue'
export default {
  components: { hamburgerItem },
  data() {
    return {
      isOpen: false,
      items: MENU_DEFAULT,
      isScrolled: false
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.isScrolled = document.documentElement.scrollTop > 100
    })
  }
}
</script>
