<script setup>
import Btn from './Btn.vue';
import IconPoint from '../icons/IconMapMarker.vue';
import Input from './Input.vue';

// const emit = defineEmits({
//   selectCity: null
// });
const emit = defineEmits({
  selectCity(payload) {
    return payload !== 'petr';
  }
});

</script>

<template>
  <Btn>
    <template #iconPrefix>
      <IconPoint/>
    </template>
    Изменить город
  </Btn>
  <Input />
  <Btn @click="emit('selectCity', 'Noyabrsk')">
    Сохранить
  </Btn>
</template>

<style scoped>

</style>
