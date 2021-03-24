<template lang="pug">
div

  //- .text-xl Получить Токен
  div
    input(
      v-model="login.username"
      size="28"
    )
    input.mx-3(
      v-model="login.password"
    )

    .flex.mt-3
      button.btn_blue(
        @click="logIn"
      ) logIn()

      button.btn_blue.ml-3(
        @click="userLogin"
      ) WTF auth/login

  //- pre token:{{$storage.getUniversal('api_token') }}
  
  pre {{$auth.loggedIn}}
  pre {{$auth.user}}
  pre {{auth}}


  .font-bold.text-xl.mb-2 DATA
  pre {{DATA}}

  .flex
  // 'tenant/assetInfos'
  .btn_blue(
    @click="get_DATA('asset/types')"
  ) get_DATA



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
      },
    }
  },
  // created() {
  //   this.$storage.removeUniversal('api_token')
  // },
  methods: {
    async logIn() {
      // this.$toast.success('toast')
      try {
        const response = await this.$auth
          .loginWith('local', {
            data: this.login,
          })
          .then(() => this.$toast.success('Logged In!'))
          .catch(() => this.$toast.success('НЕ Logged In!'))
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
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
        // params: {...this.getParams},
      })
      this.DATA = data
    },
  },
}
</script>

<style></style>
