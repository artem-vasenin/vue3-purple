<script setup>
const props = defineProps(['days', 'current']);
const emit = defineEmits({ selectCurrent: null });
const getDay = (val) => {
  const date = new Date(val + 'T00:00'); // избегаем смещения по таймзоне
  const daysRu = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  return daysRu[date.getDay()];
}
</script>

<template>
<div v-if="props.days?.length" class="tabs">
  <div
      v-for="(d, idx) in props.days"
      :key="idx"
      :class="{tab: true, active: props.current.date === d.date}"
      @click="emit('selectCurrent', d)"
  >
    <div class="top">
      <img :src="d.day.condition.icon" alt="img" class="img">
    </div>
    <div class="middle">{{getDay(d.date)}}</div>
    <div class="bottom">{{`${d.day.avgtemp_c}°С`}}</div>
  </div>
</div>
</template>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 1px;
  margin-bottom: 70px;
  margin-top: 80px;
}
.tab {
  padding: 14px 24px;
  background-color: #272E37;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color .3s ease;
  &.active {
    background-color: #FFF;
    color: #000;
  }
  &:hover {
    background-color: #3A434F;
    transition: background-color .3s ease;
  }
}
.top {
  margin-bottom: 18px;
}
.middle {
  margin-bottom: 14px;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
}
.bottom {
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;
  text-align: center;
}
</style>
