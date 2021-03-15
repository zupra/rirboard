<template lang="pug">
#layout
  // SIDEBAR
  a-layout-sider#layout_sidebar(
    v-model="collapsed" 
    :trigger="null" 
    collapsible
  )
    //-
      a-dropdown
        a-icon
    a-switch(
      default-checked
      checked-children="dark"
      un-checked-children="light"
      @change="changeTheme"
    )
    .logo


    a-menu(
      :mode="mode"
      :theme="theme"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
    )



      



      //-
        a-sub-menu(
          key="sub1"
        ) 
          span(
            slot="title"
          )
            a-icon(
              type="setting"
            )
            span Дерево навигаций
            a-menu-item(v-for="(_,idx) in Array(5)"
              :key='`sub1_${idx}`'
            ) {{ `Option ${idx+1}` }}

      //-
        template(v-for='item in list')
          a-menu-item(
            v-if='!item.children', 
            :key='item.key'
          )
            a-icon(type='pie-chart')
            span {{ item.title }}
          sub-menu(
            v-else, 
            :key='item.key', 
            :menu-info='item'
          )



      a-menu-divider

      a-menu-item(
        v-for='(It, idx) of NAV'
        :key='`1+${idx}`'
        to='/#'
      )
        a-icon(
          :type='It.icon'
          :style="{ fontSize: '22px' }"
        )
        span {{ It.name }}

  // HEADER
  #layout_header
    a-icon.trigger(:type="collapsed ? 'menu-unfold' : 'menu-fold'", @click='() => (collapsed = !collapsed)')
  
    
  // BODY
  #layout_body
    <nuxt />
</template>
<script>
const list = [
  {
    key: '1',
    title: 'Option 1',
  },
  {
    key: '2',
    title: 'Navigation 2',
    children: [
      {
        key: '2.1',
        title: 'Navigation 3',
        children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
      },
    ],
  },
]

const NAV = [
  {
    name: 'Наш север',
    icon: 'heart',
    link: '#',
  },
  {
    name: 'СМИ и соцсети',
    icon: 'sound',
    link: '#',
  },
  {
    name: 'Госуслуги',
    icon: 'rocket',
    link: '#',
  },
  {
    name: 'Финансы',
    icon: 'money-collect',
    link: '#',
  },
  {
    name: 'Здравоохранение',
    icon: 'medicine-box',
    link: '#',
  },
  {
    name: 'Природные ресурсы и экология',
    icon: 'bg-colors',
    link: '#',
  },

  { name: 'Культура', icon: 'bank', link: '#' },
  { name: 'Инвестиции, развитие предпринимательства', icon: 'bulb', link: '#' },
  { name: 'Спорт и молодежная политика', icon: 'skin', link: '#' },
  { name: 'Энергетика и ЖКХ', icon: 'area-chart', link: '#' },
  { name: 'Поручения губернатора', icon: 'stock', link: '#' },
  { name: 'Транспорт и дорожное хозяйство', icon: 'car', link: '#' },
  { name: 'Экономическое развитие', icon: 'bar-chart', link: '#' },
  { name: 'Строительство', icon: 'usergroup-add', link: '#' },
  { name: 'Цифровое развитие', icon: 'share-alt', link: '#' },
  { name: 'Внутренняя политика', icon: 'select', link: '#' },
  { name: 'Имущественные отношения', icon: 'key', link: '#' },
  {
    name: 'Градостроительство и благоустройство',
    icon: 'dashboard',
    link: '#',
  },
  { name: 'Образование и наука', icon: 'bulb', link: '#' },
]

export default {
  // middleware: 'api_token',
  middleware: ['login'],
  data() {
    return {
      collapsed: false,
      list,
      NAV,
      mode: 'inline',
      theme: 'dark',
    }
  },

  methods: {
    handleClick(e) {
      // console.log('click ', e)
      this.current = e.key
    },
    changeTheme(checked) {
      this.theme = checked ? 'dark' : 'light'
    },
  },
}
</script>
<style lang="stylus">



#layout
  display: grid;
  height: 100vh;
  background #E5E5E5
  overflow-x: hidden;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:  'sidebar header'\
                        'sidebar body'

  &_sidebar
    grid-area: sidebar;
    background #E5E5E5
  &_header
    grid-area: header;
    background #FFF
  &_body
    grid-area: body;
    margin 1rem

  &_sidebar,
  &_body
    scrollableArea()

  .trigger
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover
      color: #1890ff;

  .logo
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
</style>
