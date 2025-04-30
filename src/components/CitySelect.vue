<script setup>
import {inject, ref} from 'vue';
import Btn from './Btn.vue';
import Input from './Input.vue';
import IconPoint from '../icons/IconMapMarker.vue';

const showInput = ref(false);
const city = inject('city');
const emit = defineEmits({ selectCity: null });
const onSelect = () => {
  showInput.value = false;
  emit('selectCity', city.value);
};
</script>

<template>
  <Btn v-if="!showInput" @click="showInput = true">
    <template #iconPrefix><IconPoint/></template>
    Изменить город
  </Btn>
  <div v-else class="form">
    <Input v-model="city" class="input" placeholder="Введите город" @keydown.enter="onSelect" />
    <Btn class="submit" @click="onSelect">Сохранить</Btn>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.input {
  flex: 1;
  height: 53px;
  border-radius: 10px;
  background-color: var(--color-card-bg);
  color: var(--color-white);
  padding: 14px 18px;
  outline: none;
  border: none;
}
.input::placeholder {
  color: var(--color-input);
  font-weight: 300;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0;
}
.submit {
  flex: 0 0 140px;
}
</style>
