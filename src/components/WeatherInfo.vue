<script setup>
  const { list } = defineProps(['list']);
</script>

<template>
  <ul class="list">
    <li v-for="(i, idx) in list" :key="idx" class="list__item">
      <span class="label">{{ i.label }}</span><span class="value">{{ i.value }}{{ i.unit }}</span>
    </li>
  </ul>
</template>

<style scoped>
  .list {
    padding: 0;
    margin: 0 0 80px 0;
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