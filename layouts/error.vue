<template lang="pug">
.container.flex
  .m_auto.center
    //-
      pre.bold {{error.statusCode}}
      pre {{error.message}}

    pre {{error}}

    pre.my-5 {{error.message}}
    N-link.btn_blue.mb-5(
      to="/"
    ) На главную
  
</template>

<script>
export default {
  props: ['error'],
  asyncData() {
    throw new Error(':(')
  },
  mounted() {
    console.error('ERROR:', this.error.statusCode, this.error.message)
    console.table(this.error)
  },
}
</script>

<style lang="stylus">

pre
  max-width 60vw
  overflow: hidden;
  background: #EEE;

</style>
