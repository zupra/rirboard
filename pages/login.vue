<template lang="pug">
.LoginPage
  .Card.toCenter
    a-input(
      v-model="User.username"
      size="large"
      placeholder="username"
    )

    a-input.my-3(
      type="password"
      v-model="User.password"
      size="large"
      placeholder="password"
    )

    a-button(
      block
      :disabled="!(User.username && User.password)"
      size="large"
      type="primary"
      @click="logIn()"
    ) Войти

  //-
      a-button(
        block
        size="large"
        type="primary"
        @click="showMessage"
      ) Войти


    Snackbar

</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      User: {
        username: 'superadmin@rosatom.dev',
        password: 'superadmin',
      },
    }
  },
  methods: {
    async logIn() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.User,
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
  showMessage() {
    this.$notifier.showMessage({
      content: 'YAY Our Plugin worked Successfully!',
      color: 'success',
    })
  },
}
</script>
<style lang="stylus">
.LoginPage
  height: 100vh;
  display: flex
  background #E5E5E5
.toCenter
  margin auto
  width 300px
</style>
