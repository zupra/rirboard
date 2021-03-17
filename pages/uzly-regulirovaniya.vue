<template lang="pug">
div
  .cover
    select
      option Вид ресурса
    input(
      placeholder="Название"
    )
  .cover.mt-3
    AppInput(
      id="name",
      type="text"
      @change="inputChangeMethod"
      placeholder="Название"
    )
    AppInput(
      id="model",
      type="text"
      @change="inputChangeMethod"
      placeholder="Модель"
    )
  section.mt-10
    h1.text-3xl Новый пользователь
    .mt-8.grid.grid-cols-3.gap-6
      AppInput(
        id="lastName",
        type="text"
        @change="inputChangeMethod"
        placeholder="Фамилия"
      )
      AppInput(
        id="firstName",
        type="text"
        @change="inputChangeMethod"
        placeholder="Имя"
      )
      AppInput(
        id="fatherName",
        type="text"
        @change="inputChangeMethod"
        placeholder="Отчество"
      )
    .mt-6.grid.grid-cols-3.gap-6
      AppInput.col-span-2(
        id="occupation",
        type="text"
        @change="inputChangeMethod"
        placeholder="Должность"
      )
      AppInput(
        id="phone",
        type="text"
        @change="inputChangeMethod"
        placeholder="Телефон"
      )
    .mt-6.grid.grid-cols-2.gap-6
      AppInput(
        id="objectName",
        type="text"
        @change="inputChangeMethod"
        placeholder="Объект"
      )
  section.mt-10
    h1.text-3xl Новый пользователь
    .mt-6.grid.grid-cols-2.gap-6
      select
        option Тип объекта потребления
      AppInput(
        id="objectName",
        type="text"
        @change="inputChangeMethod"
        placeholder="Название объекта потребления"
      )
    .mt-6.grid.grid-cols-2.gap-6
      AppInput(
        id="objectName",
        type="text"
        @change="inputChangeMethod"
        placeholder="Адрес"
      )
      select
        option Сотрудник объекта
</template>

<script>
export default {
  data() {
    return {
      settings: {}
    }
  },
  methods: {
    inputChangeMethod(val) {
      this.settings[val.id] = val.value
      console.log(this.settings)
    }
  }
}
</script>


<style scoped>
.cover {
  @apply grid grid-cols-2 gap-6
}
</style>
