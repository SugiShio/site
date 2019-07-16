<template lang="pug">
div
  div(@click='isOpen = !isOpen')
    span(v-if='isOpen') close
    span(v-else) open
  ul(v-if='isOpen')
    li(v-for='item in items')
      hamburgerItem(:item='item')
</template>

<script>
import { MENU_DEFAULT } from '@/constants/menu.js'
import hamburgerItem from '@/components/hamburger/item.vue'
export default {
  components: { hamburgerItem },
  data() {
    return {
      isOpen: false,
      items: MENU_DEFAULT
    }
  }
}
</script>
