<template lang="pug">
div
  section.mt-10
    h1.text-3xl Новый прибор учета
    .mt-10.grid.grid-cols-2.gap-6
      select
        option Вид ресурса
      AppInput(
        type="text"
        placeholder="Название"
      )
      AppInput(
        type="text"
        placeholder="Номер"
      )
      AppInput(
        type="text"
        placeholder="Модель"
      )
    .mt-10.grid.grid-cols-2.gap-6
      AppInput(
        type="datetime-local"
        placeholder="Дата установки"
      )
      AppInput(
        type="datetime-local"
        placeholder="Дата последней поверки"
      )
    .mt-10.grid.grid-cols-2.gap-6
      AppDropdown(dropDownPlaceholder="Класс эффективности")
      AppDropdown(dropDownPlaceholder="Лимит потребления")
      AppDropdown(dropDownPlaceholder="Критерий качества 1")
      AppDropdown(dropDownPlaceholder="Критерий качества 2")
    .mt-10
      .grid.grid-cols-2.gap-6
        div
          p.my-0.text_13px.leading-4 Ресурсоснабжающая организация
          p.my-0.text-base.text_black Не выбрана
          .mt-4.btn_secondary Добавить
        div
          p.my-0.text_13px.leading-4 Обслуживающая организация
          p.my-0.text-base.text_black Не выбрана
          .mt-4.btn_secondary Добавить

    .mt-10
      .uploader.border.rounded-lg.border-dashed.py-6.w-full.flex.flex-col
        .flex
          img(src="~/static/icon/attach_16.svg")
          p.ml-2.my-0.text_black.text-base Выбрать фото
        p.my-0.text_black.text_13px.opacity-50 или перетяните сюда до 5 фотографий, общим объёмом не более 50 МБайт
  hr.mt-10
  section.mt-10
    h1.text-3xl Объекты
    .mt-10.grid.grid-cols-2.gap-6
      select
        option Все типы
      select
        option Сортировать по Названию
      AppInput(
        type="text"
        placeholder="Поиск"
      )
    .mt-6.grid.grid-cols-2.gap-1
      ExistObject(
        name="Отдел полиции №1"
        address="Ул. Дзержинского, 64с2"
        :settings="{waterLocks: 5, users: 6, alarms: 0}"
      )
      ExistObject(
        name="Отдел полиции №2"
        address="Ул. Ленина, 2а"
        :settings="{waterLocks: 10, users: 60, alarms: 1}"
      )
      ExistObject(
        name="Участковый пункт №8"
        address="Ул. Дзержинского, 6"
        :settings="{waterLocks: 1, users: 600, alarms: 0}"
      )
      ExistObject(
        name="Участковый пункт №7"
        address="Пр-кт Маршала Жукова, 87к2"
        :settings="{waterLocks: 1000, users: 60000, alarms: 5}"
      )
    .mt-6.btn_secondary Добавить объект
  hr.mt-10
  section.mt-10
    h1.text-3xl Пользователи
    .mt-10.grid.grid-cols-2.gap-6
      select
        option Все типы
      select
        option Сортировать по Названию
      AppInput(
        type="text"
        placeholder="Поиск"
      )
    .mt-6.grid.grid-cols-2.gap-1
      ExistUser(
        name="Слава Романцов"
        objectName="ДЮСШ № 12"
      )
      ExistUser(
        name="Романцов Вячеслав Евгеньевич"
        objectName="СОШ №120 им. А. С. Пушкина"
      )
      ExistUser(
        name="Романцова Юлия Александровна"
        objectName="ООО «ТоргСбыт»"
      )
    .mt-6.btn_secondary Добавить пользователя
  hr.mt-10
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
  hr.mt-10
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
  hr.mt-10
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


<style scoped lang="stylus">
.object-info-description
  color: $clr_titanic;
.checkboxes-container *
  color: $clr_titanic
.uploader
  border-color #03153A
  & > *
    margin auto
hr
  height 5px
  background-color $clr_fargo
</style>
