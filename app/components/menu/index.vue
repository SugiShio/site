<template lang="pug">
nav.m-menu
  ul
    li.m-menu__item(v-for='item in items')
      menuItem(:item='item')
</template>

<script>
import { MENU_DEFAULT } from '@/constants/menu.js'
import menuItem from '@/components/menu/item.vue'
export default {
  components: { menuItem },
  data() {
    return {
      items: MENU_DEFAULT
    }
  }
}
</script>
