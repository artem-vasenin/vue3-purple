<script setup lang="ts">
    const data = defineModel<string>();
</script>

<template>
  <input v-model="data" type="text" class="input">
</template>

<style scoped>
  .input {
    border: none;
    border-bottom: 1px solid var(--color-dark);
    padding: 0 10px;
    font-weight: 400;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 2%;
    color: var(--color-dark);
    width: 100%;
    margin-bottom: 30px;
  }
  .input::placeholder {
    color: var(--color-dark-a4);
  }
</style>
