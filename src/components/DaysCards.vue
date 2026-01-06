<script setup>
  const { list, selected } = defineProps(['list', 'selected']);
  const emit = defineEmits(['setSelected']);

  const setCard = (val) => {
    emit('setSelected', val);
  };
</script>

<template>
  <div class="wrap">
    <div
      v-for="(i, idx) in list"
      :key="idx"
      :class="selected === idx ? 'card--active' : ''" 
      class="card" 
      @click="setCard(idx)"
    >
      <div class="card__icon">{{ i.icon }}</div>
      <div class="card__day">{{ i.day }}</div>
      <div class="card__value">{{ i.value }}</div>
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
    width: 54px;
    height: 54px;
    margin-bottom: 16px;
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