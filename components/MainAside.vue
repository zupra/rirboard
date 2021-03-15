<template lang="pug">
nav.app-main-sidebar-aside__nav
  ul.app-main-sidebar-aside__ul
    li.app-main-sidebar-aside__li-item(
      v-for="(It, idx) in links"
      :key="idx"
    )
      nuxt-link.app-main-sidebar-aside__link-item.flex(
        :to="It.link"
      )

        img(:src="It.img")
        span {{ It.name }}
</template>

<script>
export default {
  name: "MainAside",
  data() {
    return {
      links: [
        {
          name: 'Дашборд',
          img: '',
          link: '/dashboard',
        },
        {
          name: 'Отчеты',
          img: '',
          link: '/otchety',
        },
        {
          name: 'База знаний',
          img: '',
          link: '/baza-znanii',
        },
        {
          name: 'Оплата',
          img: '',
          link: '/oplata'
        },
        {
          name: 'Заявки',
          img: '',
          link: '/zayavki',
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus">
.app-main-sidebar-aside__link-item
  padding-top: 12px
  padding-bottom: 12px
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  opacity 0.72
  color: #FFFFFF;
  &:hover
    background: #04153E
    opacity: 0.92;
.nuxt-link-active
  opacity 1
  background: #04153E
.app-main-sidebar-aside__ul
  margin: 0
  padding: 0
.test
  width 4px
  background #3D75E4
  height 100%
  margin-right 28px
</style>
