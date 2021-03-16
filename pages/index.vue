<template lang="pug">

div
  h1 HELLO

  //PreData
  //  pre {{$data}}

</template>

<script>
export default {
  async asyncData({ $axios }) {
    const [votingsRes] = await Promise.all([
      $axios.$get(
        'https://ag.nn.rusatom.dev/api/votings?per_page=12&sort[updated_at]=desc'
      ),
    ])
    return {
      listDATA: votingsRes.data,
    }
  },

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
