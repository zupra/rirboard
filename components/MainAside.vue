<template lang="pug">

nav.MainAside
  ul
    li(
      v-for="(It, idx) in links"
      :key="idx"
    )
      N-link.MainAside__link.flex(
        :to="It.link"
      )
        img(:src="require(`~/public/aside/${It.img}.svg`)")
        // TODO: отступы
        // span(style="margin-left: 13px") {{ It.name }}
        .ml-3 {{ It.name }}
    li.mt-3
      N-link.MainAside__link(
        to="sandbox"
      ) Песочница



</template>

<script>
export default {
  name: 'MainAside',
  data() {
    return {
      links: [
        {
          name: 'Дашборд',
          img: 'dashboard_16',
          link: '/dashboard',
        },
        {
          name: 'Отчеты',
          img: 'insert_16',
          link: '/otchety',
        },
        {
          name: 'База знаний',
          img: 'knowledge_16',
          link: '/baza-znanii',
        },
        {
          name: 'Оплата',
          img: 'payment-wallet_16',
          link: '/oplata',
        },
        {
          name: 'Заявки',
          img: 'application_16',
          link: '/zayavki',
        },
      ],
    }
  },
}
</script>

<style scoped lang="stylus">


.MainAside
  margin-top: 40px;

  &__link
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    opacity 0.72
    color: #FFF;
    padding-top: 12px
    padding-bottom: 12px
    padding-left 28px
    &:hover
      background: #04153E
      opacity: 0.92;


  // ACTIVE LINK
  .nuxt-link-active
    opacity 1
    background: #04153E
    position relative
  .nuxt-link-exact-active
    &:before
      content ''
      position absolute
      left 0
      top 0
      width 4px
      height 100%
      background #3D75E4
</style>
