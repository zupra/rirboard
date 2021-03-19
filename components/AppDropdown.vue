<template lang="pug">
.AppDropdown__container
  a-dropdown.w-full(:trigger="['click']")
    a-menu(slot="overlay")
      a-menu-item( key="1") 1st menu item
      a-menu-item( key="2") 2nd menu item
      a-menu-item( key="3") 3rd item
    a-button {{ dropDownPlaceholder }}
</template>

<script>
export default {
  name: 'AppDropdown',
  props: {
    dropDownPlaceholder: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.AppDropdown__container
  & .ant-btn
    margin-left: 0
    text-align left
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    color: rgba(4,21,62,0.72);
    padding: 0 1rem;
    height: 40px;
    padding: 0 1rem;
    border none
    border-radius: 8px;
    background: rgba(61,117,228,0.08) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='38' height='24' viewBox='0 0 24 24' fill='none' stroke='cornflowerblue' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9' /></svg>") 100% no-repeat
  & .ant-btn:hover
    background: rgba(61,117,228,0.08) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='38' height='24' viewBox='0 0 24 24' fill='none' stroke='cornflowerblue' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9' /></svg>") 100% no-repeat
    color: rgba(4,21,62,0.72);
.AppDropdown__container
  & .ant-btn:focus, .ant-btn:active, .ant-btn.active
    background: rgba(61,117,228,0.08) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='38' height='24' viewBox='0 0 24 24' fill='none' stroke='cornflowerblue' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9' /></svg>") 100% no-repeat
    color: rgba(4,21,62,0.72);
</style>
