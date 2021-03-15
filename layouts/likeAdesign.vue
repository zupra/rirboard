<template lang="pug">
.flex
  aside.app-main-sidebar-aside
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
          link: 'new/dashboard',
        },
        {
          name: 'Отчеты',
          img: '',
          link: 'new/otchety',
        },
        {
          name: 'База знаний',
          img: '',
          link: 'new/baza-znanii',
        },
        {
          name: 'Оплата',
          img: '',
          link: 'new/'
        },
        {
          name: 'Заявки',
          img: '',
          link: 'new/zayavki',
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus"></style>
