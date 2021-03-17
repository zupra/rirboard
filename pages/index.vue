<template lang="pug">
div
  .max-w-sm.rounded.overflow-hidden.shadow-lg.mb-4
    img.w-full(src='https://tailwindcss.com/img/card-top.jpg' alt='Sunset in the mountains')
    .px-6.py-4.pb-2
      .font-bold.text-xl.mb-2 The Coldest Sunset
      p.text-gray-700.text-base
        | Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        | quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        | nihil.
    .px-6.py-4
      span.badge.mr-2 #photography
      span.badge.mr-2 #travel
      span.badge #winter

  h3.text-3xl.mt-2 Tailwind config:
  pre.bg-gray-200.p-3.rounded {{ tailwindConfig }}
</template>

<script>
import tailwindConfig from '~tailwind.config'
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
      tailwindConfig,
    }
  },
}
</script>

<style lang="postcss" scoped>
.badge {
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700;
  &:hover {
    @apply bg-gray-300;
  }
}
</style>

<style lang="stylus" scoped></style>
