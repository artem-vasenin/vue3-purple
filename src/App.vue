<script setup>
import {ref, onMounted} from 'vue';
import Stat from './components/Stat.vue'
import CitySelect from './components/CitySelect.vue';

const data = ref(null);
const city = ref('Тверь');
const transform = (val) => {
  return [
    { label: 'Температура', value: `${!val ? '-' : val.current.temp_c}°С` },
    { label: 'Влажность', value: `${!val ? '-' : val.current.humidity}%` },
    { label: 'Облачность', value: `${!val ? '-' : val.current.cloud}%` },
    { label: 'Осадки', value: `${!val ? '-' : val.current.pressure_in}%` },
    { label: 'Ветер', value: `${!val ? '-' : val.current.gust_kph} км/ч` },
  ];
};
const getCity = async (val) => {
  city.value = val;
  try {
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=d793fa83e26041a699e122326252904&q=${val}&days=3&lang=ru&aqi=yes`);
    if (res.status !== 200) {
      throw new Error('Город не найден');
    }
    data.value = transform(await res.json());
  } catch (e) {
    console.error(e);
    data.value = transform(null);
  }
}
onMounted(() => {
  getCity(city.value);
})
</script>

<template>
  <main class="main">
    {{city}}
    <Stat v-for="(i, idx) in data" :key="idx" v-bind="i"/>
    <CitySelect :value="city" @select-city="getCity"/>
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
