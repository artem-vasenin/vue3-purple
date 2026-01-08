<script setup>
  import { inject } from 'vue';

  const current = inject('currentCard');
</script>

<template>
  <ul class="list">
    <li class="list__item">
      <span class="label">Влажность</span><span class="value">{{ current?.day?.avghumidity || '' }}%</span>
    </li>
    <li class="list__item">
      <span class="label">Ветер</span><span class="value">{{ current?.day?.maxwind_kph || '' }}км/ч</span>
    </li>
    <li class="list__item">
      <span class="label">{{ current?.day?.condition?.text }}</span>
    </li>
  </ul>
</template>

<style scoped>
  .list {
    padding: 0;
    margin: 0 0 40px 0;
    list-style: none;
  } 
  .list__item {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 16px;
  }
  .label {
    font-weight: 700;
    font-size: 28px;
    line-height: 100%;
    letter-spacing: 0%;
    text-transform: uppercase;
  }
  .value {
    font-weight: 500;
    font-size: 28px;
    line-height: 100%;
    letter-spacing: 0%;
  }
</style>