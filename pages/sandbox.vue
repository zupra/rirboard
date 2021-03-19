<template lang="pug">
div
  section.mt-10
    h1.text-3xl Новый пользователь
    .mt-8.grid.grid-cols-3.gap-6
      AppInput(
        type="text"
        placeholder="Фамилия"
      )
      AppInput(
        type="text"
        placeholder="Имя"
      )
      AppInput(
        type="text"
        placeholder="Отчество"
      )
      AppInput.col-span-2(
        type="text"
        placeholder="Должность"
      )
      AppInput(
        type="text"
        placeholder="Телефон"
      )
    .mt-6.grid.grid-cols-2.gap-6
      AppInput(
        type="text"
        placeholder="Объект"
      )
  section.mt-10
    h1.text-3xl Новый объект
    .mt-6.grid.grid-cols-2.gap-6
      select
        option Тип объекта потребления
      AppInput(
        type="text"
        placeholder="Название объекта потребления"
      )
      AppInput(
        type="text"
        placeholder="Адрес"
      )
      select
        option Сотрудник объекта
    .btn_blue.mt-6 Создать
  section.mt-10
    h1.text-3xl Новый объект
    h2.text-xl Общая информация
    .mt-6.grid.grid-cols-2.gap-6
      select
        option Тип объекта потребления
      AppInput(
        type="text"
        placeholder="Название объекта"
      )
      AppInput(
        type="text"
        placeholder="Контактное лицо"
      )
      AppInput(
        type="text"
        placeholder="Должность"
      )
    .mt-6.grid.grid-cols-3.gap-6
      AppInput(
        type="text"
        placeholder="Имейл"
      )
      AppInput(
        type="text"
        placeholder="Телефон"
      )
      AppInput(
        type="text"
        placeholder="Факс"
      )
    h2.text-xl.mt-6 Новое контактное лицо
    .mt-6.grid.grid-cols-2.gap-6
      AppInput(
        type="text"
        placeholder="Контактное лицо"
      )
      AppInput(
        type="text"
        placeholder="Должность"
      )
    .mt-6.grid.grid-cols-3.gap-6
      AppInput(
        type="text"
        placeholder="Имейл"
      )
      AppInput(
        type="text"
        placeholder="Телефон"
      )
      AppInput(
        type="text"
        placeholder="Факс"
      )
    .mt-6.btn_secondary Добавить дополнительное контактное лицо
    h2.text-xl.mt-6 Реквизиты организации
    .mt-6.grid.grid-cols-2.gap-6
      AppInput(
        type="text"
        placeholder="Полное наименование организации"
      )
      AppInput(
        type="text"
        placeholder="Сокращенное наименование организации"
      )
      AppInput(
        type="text"
        placeholder="Юридический адрес"
      )
      AppInput(
        type="text"
        placeholder="Почтовый адрес"
      )
    .mt-6.grid.grid-cols-3.gap-6
      AppInput(
        type="text"
        placeholder="ИНН"
      )
      AppInput(
        type="text"
        placeholder="ОГРНИП"
      )
      div
      AppInput(
        type="text"
        placeholder="Банк"
      )
      AppInput(
        type="text"
        placeholder="Расчётный счёт"
      )
      AppInput(
        type="text"
        placeholder="Корреспондентский счёт"
      )
      AppInput(
        type="text"
        placeholder="ИНН банка"
      )
      AppInput(
        type="text"
        placeholder="БИК"
      )
      AppInput(
        type="text"
        placeholder="КПП"
      )
    h2.text-xl.mt-12 Информация об объекте потребления
    .grid.grid-cols-2
      div
        p.font-normal.opacity-50.text-base.object-info-description Поля этой группы можно заполнить позже.
        p.font-normal.opacity-50.text-base.object-info-description При заполнении полей, система будет автоматически
          |рассчитывать
          |рекомендуемые лимиты, согласно
          |СНИПам Российской Федерации.
    .grid.grid-cols-2.gap-6
      AppInput(
        type="text"
        placeholder="Количество узлов регулирования (АИТП), шт.\n"
      )
      AppInput(
        type="text"
        placeholder="Количество приборов учета, шт.\n"
      )
      AppInput(
        type="text"
        placeholder="Общая площадь помещений, м2"
      )
      AppInput(
        type="text"
        placeholder="Площадь отапливаемых помещений, м2"
      )
      .flex.justify-between.checkboxes-container
        a-checkbox Есть собственный котел
        a-checkbox Есть бассейн
      div
      AppInput(
        type="text"
        placeholder="Количество учеников, чел."
      )
      AppInput(
        type="text"
        placeholder="Количество учителей, чел."
      )
      AppInput(
        type="text"
        placeholder="Количество клумб, шт."
      )
    .btn_blue.mt-6 Продолжить
</template>

<script>
export default {
  data() {
    return {
      settings: {},
    }
  },
  methods: {
    inputChangeMethod(val) {
      this.settings[val.id] = val.value
      console.log(this.settings)
    },
  },
}
</script>

<style lang="stylus">
.object-info-description
  color: $clr_titanic;
.checkboxes-container *
  color: $clr_titanic
</style>
