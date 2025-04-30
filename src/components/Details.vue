<script setup>
import IconPoint from '../icons/IconMapMarker.vue';
import {inject} from 'vue';

const city = inject('city');
const current = inject('current');
const getDate = (dateStr) => {
  if (!dateStr) return '-';
  const date = new Date(dateStr + 'T00:00');
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return new Intl.DateTimeFormat('ru-RU', options).format(date);
}
const getWeekDay = (val) => {
  const date = new Date(val + 'T00:00'); // избегаем смещения по таймзоне
  const daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return daysRu[date.getDay()];
}
</script>

<template>
  <div class="details">
    <div class="top">
      <div class="day">{{getWeekDay(current?.date)}}</div>
      <div class="date">{{getDate(current?.date)}}</div>
      <div class="city">
        <IconPoint/> {{city}}
      </div>
    </div>
    <div class="bottom">
      <div class="icon">
        <img :src="current?.day?.condition?.icon" alt="icon"/>
      </div>
      <div class="temp">{{`${current?.day?.avgtemp_c}°С`}}</div>
      <div class="weather">{{current?.day?.condition?.text}}</div>
    </div>
  </div>
</template>

<style scoped>
.details {
  flex: 0 0 50%;
  max-width: 50%;
  margin-top: -70px;
  margin-bottom: -70px;
  border-radius: 30px;
  transform: translateX(-50px);
  background: url('../assets/bg.png') no-repeat;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}
.day {
  font-weight: 700;
  font-size: 37px;
  line-height: 100%;
  letter-spacing: 0;
  margin-bottom: 16px;
}
.date {
  font-weight: 500;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0;
  margin-bottom: 10px;
}
.city {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
}
.temp {
  font-weight: 700;
  font-size: 50px;
  line-height: 100%;
  margin-bottom: 12px;
}
.weather {
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
}
</style>
