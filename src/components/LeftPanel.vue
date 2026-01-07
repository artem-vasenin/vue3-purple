<script setup>
  const { city, current } = defineProps(['city', 'current']);

  const getDay = (str) => {
    if (!str) return '';
    const date = new Date(str);
    return date.toLocaleDateString('ru-RU', { weekday: 'long' }); 
  }

  const getDate = (str) => {
    if (!str) return '';
    const date = new Date(str);
    return date.toLocaleDateString('ru-RU'); 
  }
</script>

<template>
  <div class="wrap">
    <div class="top">
      <div class="top__title">{{ getDay(current?.date) }}</div>
      <div class="top__date">{{ getDate(current?.date) }}</div>
      <div class="top__city">
        <img src="../assets/location.svg" alt="icon">
        {{ city }}
      </div>
    </div>

    <div class="bottom">
      <div class="bottom__icon">
        <img :src="current?.day?.condition?.icon" alt="icon">
      </div>
      <div class="bottom__degreese">{{ current?.day?.avgtemp_c }} °C</div>
      <div class="bottom__weather">{{ current?.day?.condition?.text }}</div>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 430px;
    border-radius: 25px;
    background: var(--gradient-invert);
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top {

  }
  .top__title {
    font-weight: 700;
    font-size: 37px;
    line-height: 100%;
    letter-spacing: 0%;
    padding-bottom: 16px;
  }
  .top__date {
    font-weight: 500;
    font-size: 22px;
    line-height: 100%;
    letter-spacing: 0%;
    padding-bottom: 16px;
  }
  .top__city {
    display: inline-flex;
    align-items: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;

    svg {
      margin-right: 10px;
    }
  }
  .bottom {

  }
  .bottom__icon {
    height: 95px;
    width: 95px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bottom__degreese {
    font-weight: 700;
    font-size: 50px;
    line-height: 100%;
    letter-spacing: 0%;
    padding-bottom: 16px;
  }
  .bottom__weather {
    font-weight: 700;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: 0%;
  }
</style>