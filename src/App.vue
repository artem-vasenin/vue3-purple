<script setup>
import LeftPanel from './components/LeftPanel.vue';
import DaysCards from './components/DaysCards.vue';
import WeatherInfo from './components/WeatherInfo.vue';
import Form from './components/Form.vue';

  const info = [{label: 'Влажность', value: '90%'}, {label: 'Осадки', value: '0%'}, {label: 'Ветер', value: '3м/с'}];
  const cards = [
    {icon: 'info', day: 'Вт', value: '30 °C'},
    {icon: 'info', day: 'Ср', value: '30 °C'},
    {icon: 'info', day: 'Чт', value: '30 °C'},
    {icon: 'info', day: 'Пт', value: '30 °C'},
  ];
</script>

<template>
  <div class="app">
    <LeftPanel />
    <div class="content">
      <WeatherInfo :list="info" />
      <DaysCards :list="cards" />
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
