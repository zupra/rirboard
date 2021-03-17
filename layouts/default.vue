<template lang="pug">
.flex.relative
  .relative.w-64
    aside.app-main-sidebar-aside
      div
        h1.app-main-sidebar-aside__title.px-8 Цифровое теплоснабжение
        MainAside
      img.rir-aside-logo.px-8(src="~/static/icon/rir-logo.svg")
  main.relative.app-content-part.p-8.w-full.z-20
    <nuxt />
</template>

<script>
// import MainAside from '~/components/MainAside'
export default {
  name: 'LikeAdesign',
}
</script>

<style lang="postcss" scoped>
.app-main-sidebar-aside {
  @apply py-8 flex flex-col justify-between fixed z-10 h-screen
}
</style>

<style scoped lang="stylus">
.rir-aside-logo
  width: 224px;
  height: 40px;
  display: block;

.app-main-sidebar-aside
  width 207px
  &__title
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;

.app-content-part
  background: #F6F9FE;
  border-radius: 48px 0px 0px 0px;
  min-height 100vh
</style>
