<template lang="pug">
.flex
  aside.app-main-sidebar-aside.flex_col.x_sb
    div
      h1.app-main-sidebar-aside__title Цифровое теплоснабжение
      nav.app-main-sidebar-aside__nav
        ul
          li(
            v-for="(It, idx) in links"
            :key="idx"
          )
            nuxt-link(
              :to="It.link"
            )
              img(:src="It.img")
              span {{ It.name }}
    img(src="~/static/icon/rir-logo.svg")
  main.app-content-part
    <nuxt />
</template>

<script>
export default {
  name: 'LikeAdesign',
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

<style scoped lang="stylus"></style>
