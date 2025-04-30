<script setup>
import {ref, onMounted, provide} from 'vue';
import Stat from './components/Stat.vue'
import Tabs from './components/Tabs.vue';
import CitySelect from './components/CitySelect.vue';
import Details from './components/Details.vue';

const current = ref(null);
const days = ref([]);
const city = ref('Тверь');
provide('current', current);
provide('days', days);
provide('city', city);
const transformCurrent = () => {
  const val = current.value;
  return [
    { label: 'Температура', value: `${!val ? '-' : val.day.avgtemp_c}°С` },
    { label: 'Влажность', value: `${!val ? '-' : val.day.avghumidity}%` },
    { label: 'Ветер', value: `${!val ? '-' : val.day.avgvis_km} км/ч` },
  ];
};
const getCity = async (val) => {
  city.value = val;
  try {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=d793fa83e26041a699e122326252904&q=${val}&lang=ru&days=4&aqi=no&alerts=no`);
    if (res.status !== 200) {
      throw new Error('Город не найден');
    }
    const info = await res.json();
    current.value = info.forecast.forecastday[0];
    days.value = info.forecast.forecastday;
  } catch (e) {
    console.error(e);
  }
}
const selectCurrent = (val) => {
  current.value = val;
};
onMounted(() => {
  getCity(city.value);
})
</script>

<template>
  <main class="main">
    <Details />
    <div class="days">
      <Stat v-for="(i, idx) in transformCurrent()" :key="idx" v-bind="i"/>
      <Tabs @select-current="selectCurrent"/>
      <CitySelect @select-city="getCity"/>
    </div>
  </main>
</template>

<style scoped>
.main {
  background-color: var(--color-main-bg);
  width: 944px;
  border-radius: 26px;
  padding: 50px;
  display: flex;
}
.days {
  flex: 0 0 50%;
  max-width: 50%;
}
</style>
