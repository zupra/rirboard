<template lang="pug">
div

  .text-xl Получить Токен
  form.mb-6(
    @submit.prevent="userLogin"
  )
    input(
      v-model="login.username"
      size="28"
    )
    input.mx-3(
      v-model="login.password"
    )
    button.btn_blue.mt-3(
      type="submit"
    ) Получить токен

  pre token:{{$storage.getUniversal('api_token') }}
  pre {{auth}}


  .font-bold.text-xl.mb-2 DATA
  pre {{DATA}}

  .flex
  .btn_blue(
    @click="get_DATA('tenant/assetInfos')"
  ) tenant/assetInfos



</template>

<script>





export default {
  /*
  async asyncData({ $axios }) {
    const [assetTypesRes] = await Promise.all([$axios.$get('asset/types')])
    return {
      DATA: assetTypesRes,
    }
  },
  */

  data() {
    return {
      auth: null,
      DATA: null,
      login: {
        username: 'superadmin@rosatom.dev',
        password: 'superadmin',
      },

      getParams: {
        pageSize: 10,
        page: 0,
        sortProperty: 'createdTime',
        sortOrder: 'DESC',
        // type=
      }
    }
  },
  // created() {
  //   this.$storage.removeUniversal('api_token')
  // },
  methods: {
    async userLogin() {
      /*
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login,
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
      */
      // this.$storage.removeUniversal('api_token')
      const data = await this.$axios.$post('auth/login', {
        ...this.login,
      })
      this.auth = data
      // this.$storage.setUniversal('api_token', data.token)
    },
    async get_DATA(It = 'asset/types') {
      // const data = await this.$axios.$get(`${this.$config.URL_WHOAMI}`,
      const data = await this.$axios.$get(It, {
        params: {...this.getParams},
      })
      this.DATA = data
    },
  },
}
</script>

<style></style>
