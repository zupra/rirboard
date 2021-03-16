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
// import MainAside from '~/components/MainAside'
export default {
  name: 'LikeAdesign',
  // components: {
  //   MainAside,
  // },
}
</script>

<style scoped lang="stylus">
.rir-aside-logo
  padding-left: 32px;
  padding-right: 32px;
  width: 224px;
  height: 40px;
  display: block;



.app-main-sidebar-aside
  padding-top: 32px;
  padding-bottom: 32px;
  width 207px
  &__title
    padding-left: 32px;
    padding-right: 32px;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;

.app-content-part
  padding 2em
  background: #F6F9FE;
  border-radius: 48px 0px 0px 0px;
  width 100%
  min-height 100vh
</style>
