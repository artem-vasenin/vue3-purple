<script setup>
import { ref, onMounted, watch, computed, provide } from 'vue';

import LeftPanel from './components/LeftPanel.vue';
import DaysCards from './components/DaysCards.vue';
import WeatherInfo from './components/WeatherInfo.vue';
import Form from './components/Form.vue';
import Error from './components/Error.vue';
import { selectedCityProvide, weatherProvide, selectedCardIdProvide, currentCardProvide } from './constants';

  const URL_EP = 'https://api.weatherapi.com/v1/forecast.json';

  const weather = ref({});
  const selectedCardId = ref(0);
  const selectedCity = ref('');
  const error = ref('');

  const currentCard = computed(() => weather?.value?.forecast?.forecastday[selectedCardId.value] || {});

  provide(currentCardProvide, currentCard);
  provide(selectedCardIdProvide, selectedCardId);
  provide(selectedCityProvide, selectedCity);
  provide(weatherProvide, weather);

  const fetchWeather = async (q) => {
  const params = new URLSearchParams({ key: 'd793fa83e26041a699e122326252904', q, days: 4, aqi: 'no', alerts: 'no', lang: 'ru' });
    const url = `${URL_EP}?${params.toString()}`;
    const res = await fetch(url);

    if (!res.ok) {
      const err = await res.json();

      if (err?.error?.message) {
        throw err.error.message;
      } else {
        throw 'URL is not correct';
      }
    }

    weather.value = await res.json();
  }

  watch(selectedCity, async (newVal) => {
    try {
      await fetchWeather(newVal);
    } catch (e) {
      error.value = e;
      setTimeout(() => {
        error.value = '';
      }, 3000);
    }
  });

  onMounted(async () => {
    selectedCity.value = 'Tver';
    try {
      await fetchWeather('Tver');
    } catch (e) {
      error.value = e;
      setTimeout(() => {
        error.value = '';
      }, 3000);
    }
  });
</script>

<template>
  <Error :info="error" />

  <div class="app">
    <LeftPanel />
    <div class="content">
      <WeatherInfo />
      <DaysCards />
      <Form />
    </div>
  </div>
</template>

<style scoped>
  .app {
    width: 1024px;
    height: 600px;
    padding: 20px 0 20px 70px;
    position: relative;
    display: flex;
    justify-content: flex-end;
  }
  .content {
    background-color: var(--color-dark);
    border-radius: 25px;
    width: 100%;
    padding: 50px 50px 50px 50%;
  }
</style>
