<template lang="pug">
h1 HELLO

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
