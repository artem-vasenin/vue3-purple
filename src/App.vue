<script setup>
import { ref, onMounted, watch } from 'vue';

import LeftPanel from './components/LeftPanel.vue';
import DaysCards from './components/DaysCards.vue';
import WeatherInfo from './components/WeatherInfo.vue';
import Form from './components/Form.vue';

  const weather = ref({});
  const selectedCard = ref(0);
  const selectedCity = ref('');

  const setCity = (val) => {
    selectedCity.value = val;
  };

  const setSelected = (val) => {
    selectedCard.value = val;
  };

  const fetchWeather = async (city) => {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=d793fa83e26041a699e122326252904&q=${city}&days=4&aqi=no&alerts=no&lang=ru`;
    const res = await fetch(url);
    weather.value = await res.json();
  }

  watch(selectedCity, (newVal) => {
    fetchWeather(newVal);
  });

  onMounted(() => {
    selectedCity.value = 'Moscow';
    fetchWeather('Moscow');
  });
</script>

<template>
  <div class="app">
    <LeftPanel :city="selectedCity" :current="weather?.forecast?.forecastday[selectedCard] || {}" />
    <div class="content">
      <WeatherInfo :current="weather?.forecast?.forecastday[selectedCard] || {}" />
      <DaysCards :info="weather" :selected="selectedCard" @set-selected="setSelected" />
      <Form @set-city="setCity" />
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
