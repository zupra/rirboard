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
        .app-main-sidebar-aside__active-link-marker(
          :class="{'app-main-sidebar-aside__active-link_blue-marker': $route.fullPath === It.link}"
          )
        div.app-main-sidebar-aside__link-item-content
          img(:src="It.img")
          span {{ It.name }}
</template>

<script>
export default {
  name: "MainAside",
  mounted() {
    console.log(this.$route.fullPath)
  },
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
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  opacity 0.72
  color: #FFFFFF;
  &:hover
    background: #04153E
    opacity: 0.92;
.app-main-sidebar-aside__link-item-content
  padding-top: 12px
  padding-bottom: 12px
  margin-left 28px
.nuxt-link-active
  opacity 1
  background: #04153E
.app-main-sidebar-aside__ul
  margin: 0
  padding: 0
.app-main-sidebar-aside__active-link-marker
  width 4px
  height 44px
.app-main-sidebar-aside__active-link_blue-marker
  background #3D75E4
</style>
