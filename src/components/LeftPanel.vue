<script setup>

</script>

<template>
  <div class="wrap">
    <div class="top">
      <div class="top__title">Вторник</div>
      <div class="top__date">20 июня 2025</div>
      <div class="top__city">
        <img src="../assets/location.svg" alt="icon" />
        Москва
      </div>
    </div>

    <div class="bottom">
      <div class="bottom__icon">icon</div>
      <div class="bottom__degreese">29 °C</div>
      <div class="bottom__weather">Солнечно</div>
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