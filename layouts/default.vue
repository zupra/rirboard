<template lang="pug">
.flex.relative
  .w-64
    aside.app-main-sidebar-aside
      div
        h1.LayoutDefault-sidebar-aside__title.px-8.w-52 Цифровое теплоснабжение
        MainAside
      img.LayoutDefault-rir-aside-logo.w-56.h-10.px-8(src="~/static/icon/rir-logo.svg")
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
  @apply py-8 flex flex-col justify-between fixed z-10 h-screen min-w-min
}
</style>

<style lang="stylus">
.LayoutDefault-rir-aside-logo
  display: block;
.LayoutDefault-sidebar-aside__title
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 20px;
  color: $clr_amelie
.app-content-part
  background: #F6F9FE;
  border-radius: 48px 0px 0px 0px;
  min-height 100vh
</style>
