<script setup>
import Btn from './components/Btn.vue'
import Stat from './components/Stat.vue'
import IconPoint from './icons/IconMapMarker.vue'

const data = [
    { label: 'Влажность', value: '90%' },
    { label: 'Осадки', value: '0%' },
    { label: 'Ветер', value: '3 м/ч' },
];
</script>

<template>
  <main class="main">
    <Btn>
      <template #iconPrefix>
        <IconPoint/>
      </template>
      Изменить город
    </Btn>
    <Stat v-for="(i, idx) in data" :key="idx" v-bind="i"/>
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
