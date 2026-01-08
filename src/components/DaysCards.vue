<script setup>
  import { inject } from 'vue';
  import { weatherProvide, selectedCardIdProvide } from '../constants';

  const selected = inject(selectedCardIdProvide);
  const weather = inject(weatherProvide);

  const setCard = (val) => {
    selected.value = val;
  };

  const getDay = (str) => {
    const date = new Date(str);
    return date.toLocaleDateString('ru-RU', { weekday: 'short' }); 
  }
</script>

<template>
  <div class="wrap">
    <div
      v-for="(i, idx) in weather?.forecast?.forecastday"
      :key="idx"
      :class="selected === idx ? 'card--active' : ''" 
      class="card" 
      @click="setCard(idx)"
    >
      <div class="card__icon"><img :src="i.day.condition.icon" alt="icon"></div>
      <div class="card__day">{{ getDay(i.date) }}</div>
      <div class="card__value">{{ i.day.avgtemp_c }}°C</div>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    display: flex;
    gap: 1px;
    width: 100%;
    margin-bottom: 70px;
  }
  .card {
    flex: 1;
    height: 140px;
    background-color: var(--color-dark-lite);
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-gray-lite);
    }

    &.card--active {
      background-color: white;
      color: black;
    }
  }
  .card__icon {
    width: 100%;
    height: 54px;
    margin-bottom: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card__day {
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    margin-bottom: 14px;
  }
  .card__value {
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
  }
</style>