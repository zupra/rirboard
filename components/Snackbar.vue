/**
https://dev.to/amrelmohamady/how-to-create-a-custom-global-nuxt-plugin-toast-1976
*/

<template>
  <DIV></DIV>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      color: '',
    }
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.content
        this.color = state.snackbar.color
        this.show = true
      }
    })
  },
}
</script>
