<template lang="pug">
.m-container
  header.m-header
    h1.m-header__title shoko-sugito.work
</template>

<style lang="scss">
@import '~/assets/style/_variables.scss';
.m-container {
  @media screen and (max-width: $bp-sp) {
    &::before {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      content: '';
      background: linear-gradient(-16.8deg, $color-fujiiro, $color-shioniro);
    }
  }
}
.m-header {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 30.3vw;
  padding: 0 50px;
  color: #fff;
  background: linear-gradient(-16.8deg, $color-fujiiro, $color-shioniro);

  @media screen and (max-width: $bp-sp) {
    height: 141.4vw;
    background: transparent;
  }
}
</style>
