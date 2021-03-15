<template lang="pug">

div
  h1 HELLO

  PreData
    pre {{$data}}

</template>

<script>
export default {
  data() {
    return {
      postParams: {
        // ...makeBaseParams(),
        ...(this.$route.query ? this.$route.query : {}),
      },
    }
  },
}
</script>
<style lang="stylus" scoped></style>
