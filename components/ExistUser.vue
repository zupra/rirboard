<template lang="pug">
.ExistUser__container.border-solid.rounded-2xl.p-4.flex
  //img.rounded-full(:src="require(`${photo}`)" v-if="photo")
  img.rounded-full(src="~/static/default-photo.png" v-if="!photo")
  .ml-3.flex.justify-between.w-full
    div
      p.ExistUser__name.my-0 {{ editUsername() }}
      p.text_13px.leading-4.mb-0(class="mt-1.5") {{ objectName }}
      .mt-3.flex
        img(src="~/static/icon/Union.svg")
        p.ml-2.my-0.text_13px.leading-4.ExistUser__param-user Параметр пользователя
    button
      img(src="~/static/icon/menu-context_16.svg")
</template>

<script>
export default {
  name: 'ExistUser',
  props: {
    photo: {
      type: String,
    },
    name: {
      type: String,
      default: () => '',
    },
    objectName: {
      type: String,
      default: () => ''
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
.ExistUser__container
  border-color $clr_arrival
  background-color $clr_amelie
.ExistUser__name
  font-size: 1rem
  line-height: 1.25rem
  font-weight: 500;
  color: $clr_titanic
.ExistUser__param-user
  color: $clr_rocky
</style>
