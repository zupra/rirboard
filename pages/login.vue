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

</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  layout: 'blank',
  data() {
    return {
      User: {
        username: '',
        password: '',
      },
    }
  },
  computed: {
    // ...mapGetters(['isAdmin', 'isPublic']),
  },
  methods: {
    logIn() {
      this.$store.commit('logIn', this.User)

      /*
      if (this.isAdmin || this.isPublic) {
        this.$router.push('/')
      } else {
        this.$toast.error('Ошибка', { duration: 2500 })
      }
      */
    },
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
