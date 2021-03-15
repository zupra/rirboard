export const state = () => ({
  // username: ''
  // password: ''
  user: null,
})

export const mutations = {
  logIn(state, user) {
    state.user = user
    this.$router.push('/')
  },
  logOut(state, $router) {
    state.user = null
    this.$router.push('/login')
    // console.log($nuxt.$router)
    // $nuxt.$router.push('/login')
  },
}
