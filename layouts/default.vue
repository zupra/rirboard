<template lang="pug">
.flex
  aside.app-main-sidebar-aside.flex_col.x_sb
    div
      h1.app-main-sidebar-aside__title Цифровое теплоснабжение
      MainAside
    img.rir-aside-logo(src="~/static/icon/rir-logo.svg")
  main.app-content-part
    <nuxt />
</template>

<script>
import MainAside from "~/components/MainAside";
export default {
  name: 'LikeAdesign',
  components: {
    MainAside
  }
}
</script>

<style scoped lang="stylus">
.rir-aside-logo
  padding-left: 32px;
  padding-right: 32px;
  width: 224px;
  height: 40px;
  display: block;
</style>
