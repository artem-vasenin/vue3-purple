<script setup>
  import { ref, inject } from 'vue';
  import Button from './Button.vue';
  import { selectedCityProvide } from '../constants';

  const showForm = ref(false);
  const city = defineModel('city', { type: String, required: true });
  const selectedCity = inject(selectedCityProvide);

  const openForm = () => {
    showForm.value = !showForm.value;
  };

  const selectCity = () => {
    selectedCity.value = city.value;
    city.value = '';
    showForm.value = false;
  };

  const vFocus = {
    mounted: el => el.focus(),
  }
</script>

<template>
  <div v-if="!showForm" class="activate">
    <Button :is-block="true" @click="openForm">
      <img src="../assets/location.svg" alt="icon">
      Изменить город
    </Button>
  </div>
  <div v-else class="form">
    <input v-model="city" v-focus type="text" class="input" placeholder="Введите город" @keydown.enter="selectCity">
    <Button width="140px" @click="selectCity">Сохранить</Button>
  </div>
</template>

<style scoped>
  .form {
    display: flex;
    gap: 10px;
  }
  .input {
    flex: 1;
    background-color: var(--color-dark-lite);
    border-radius: 10px;
    box-shadow: 1px 2px 4px 0px #222831;
    border: none;
    outline: none;
    color: white;
    padding: 0 20px;
  }
  .input::placeholder {
    color: var(--color-gray-dark);
    opacity: 1;
  }
</style>
