<script setup>
import Stat from './components/Stat.vue'
import CitySelect from './components/CitySelect.vue';

const data = [
    { label: 'Влажность', value: '90%' },
    { label: 'Осадки', value: '0%' },
    { label: 'Ветер', value: '3 м/ч' },
];
const getCity = (city) => console.log(city);
</script>

<template>
  <main class="main">
    <Stat v-for="(i, idx) in data" :key="idx" v-bind="i"/>
    <CitySelect @select-city="getCity" />
  </main>
</template>

<style scoped>
.main {
  background-color: var(--color-main-bg);
  width: 944px;
  height: 644px;
  border-radius: 26px;
  padding: 50px;
}
</style>
