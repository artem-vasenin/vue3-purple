<script setup>
  import { ref } from 'vue';
  import Button from './Button.vue';

  const showForm = ref(false);
  const city = ref('');

  const openForm = () => {
    showForm.value = !showForm.value;
  };

  // const emit = defineEmits(['setCity']); // Простой вариант без валидации
  const emit = defineEmits({
    setCity(payload) {
      return !!payload;
    },
  });

  const selectCity = () => {
    emit('setCity', city.value);
    city.value = '';
    showForm.value = false;
  };
</script>

<template>
  <div v-if="!showForm" class="activate">
    <Button :is-block="true" @click="openForm">
      <img src="../assets/location.svg" alt="icon" />
      Изменить город
    </Button>
  </div>
  <div v-else class="form">
    <input v-model="city" type="text" class="input" placeholder="Введите город">
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
