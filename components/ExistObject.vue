<template lang="pug">
.ExistObject__container.border-solid.rounded-2xl.p-4.flex
  img.rounded-lg(src="~/static/default-photo.png" v-if="!photo")
  .ml-3.flex.justify-between.w-full
    div
      p.ExistObject__name.my-0 {{ editUsername() }}
      p.text_13px.leading-4.mb-0(class="mt-1.5") {{ address }}
      .mt-4.flex
        .flex
          img(src="~/static/icon/water-lock.svg")
          span.ml-1.ExistObject__settings-text {{ settings.waterLocks }}
        .flex.ml-5
          img(src="~/static/icon/user.svg")
          span.ml-1.ExistObject__settings-text {{ settings.users }}
        .flex.ml-5.opacity-30(v-if="settings.alarms === 0")
          img(src="~/static/icon/fire.svg")
          span.ml-1.ExistObject__settings-text {{ settings.alarms }}
        .flex.ml-5(v-if="settings.alarms > 0")
          img(src="~/static/icon/fire.svg")
          span.ml-1.ExistObject__settings-text_red {{ settings.alarms }}
    button
      img(src="~/static/icon/menu-context_16.svg")
</template>

<script>
export default {
  name: 'ExistObject',
  props: {
    photo: {
      type: String,
    },
    name: {
      type: String,
      default: () => '',
    },
    address: {
      type: String,
      default: () => ''
    },
    settings: {
      type: Object,
      default: () => ({
        waterLocks: 0,
        users: 0,
        alarms: 0
      })
    }
  },
  methods: {
    editUsername() {
      const checkLength = this.name.length
      console.log('editUsername', checkLength)
      if (checkLength > 22) {
        return `${this.name.slice(0, 21)}...`
      } else {
        return this.name
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.ExistObject__container
  border-color $clr_arrival
  background-color $clr_amelie
.ExistObject__name
  font-size: 1rem
  line-height: 1.25rem
  font-weight: 500;
  color: $clr_titanic
.ExistObject__param-user
  color: $clr_rocky
.ExistObject__settings-text
  color: $clr_titanic
.ExistObject__settings-text_red
  color: $clr_fargo
</style>
