<template lang="pug">
input(
  v-model="inputValue"
  :type="inputType"
  :placeholder="placeholder"
)
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    inputType: {
      type: String,
      default: () => 'text'
    },
    inputID: {
      type: String,
      default: () => 'id'
    },
    placeholder: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  watch: {
    inputValue() {
      this.$emit('change', {id: this.inputID, value: this.inputValue})
    }
  }
}
</script>

<style scoped></style>
