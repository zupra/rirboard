<template lang="pug">
// https://stackoverflow.com/questions/47862591/vuejs-error-the-client-side-rendered-virtual-dom-tree-is-not-matching-server-re
client-only
  .PreData.mb-3(
    v-show="show"
  )
    .flex.y_center
      .PreData_hide.mx-3(
        @click="show = false"
      )
        img(
          src="https://icongr.am/clarity/eye-hide.svg?size=32&color=505fd3"
        )
      // button.btn_open
      a-button.my-1(
        @click="open = !open"
      ) {{ open ? 'скрыть API' : 'показать API'}}
    .preBlock(
      v-show="open"
    )
      slot

</template>

<script>
export default {
  data() {
    return {
      open: false,
      show: true,
    }
  },
}
</script>

<style lang="stylus">

.PreData
  background-color: #FFF //#f4f6f8;

  &_hide
    cursor pointer


/*
.btn_open
  btn()
  // display: inline-block;
  // border-radius: 4px;
  // padding: 0.3em .7em;
  margin .5rem 0
  height 2rem

  border: solid 1px transparent;
  color: #FFFFFF;
  background-color: rgba(#9555AF, .5);
  &:hover
    color: #9050AA;
    border-color: currentColor;
    background-color: white;
    // box-shadow: 0 0 0 3px rgba(255, 105, 180, 0.5), 0 0 0 1.5px rgba(255, 105, 180, 0.5);
*/

.preBlock
  background: rgba(#000, .15);
  height: 40vh;
  overflow: overlay
  resize vertical
</style>
