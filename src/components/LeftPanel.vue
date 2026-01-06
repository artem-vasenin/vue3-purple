<script setup>

</script>

<template>
  <div class="wrap">
    <div class="top">
      <div class="top__title">Вторник</div>
      <div class="top__date">20 июня 2025</div>
      <div class="top__city">
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M8.15628 11.25C8.15628 8.29873 10.5488 5.90625 13.5 5.90625C16.4513 5.90625 18.8438 8.29873 18.8438 11.25C18.8438 14.2013 16.4513 16.5938 13.5 16.5938C10.5488 16.5938 8.15628 14.2013 8.15628 11.25ZM13.5 7.59375C11.4807 7.59375 9.84378 9.23071 9.84378 11.25C9.84378 13.2693 11.4807 14.9062 13.5 14.9062C15.5193 14.9062 17.1563 13.2693 17.1563 11.25C17.1563 9.23071 15.5193 7.59375 13.5 7.59375Z" 
            fill="white"
          />
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M3.96494 9.96396C4.36356 5.12802 8.40473 1.40625 13.2571 1.40625H13.743C18.5953 1.40625 22.6365 5.12802 23.0351 9.96396C23.2493 12.5617 22.4468 15.1413 20.7968 17.1591L15.4046 23.7537C14.4203 24.9575 12.5798 24.9575 11.5954 23.7537L6.20324 17.1591C4.55325 15.1413 3.75081 12.5617 3.96494 9.96396ZM13.2571 3.09375C9.28296 3.09375 5.97321 6.14191 5.64673 10.1026C5.46852 12.2647 6.13637 14.4115 7.50961 16.091L12.9018 22.6855C13.211 23.0636 13.7891 23.0636 14.0983 22.6855L19.4904 16.091C20.8637 14.4115 21.5315 12.2647 21.3533 10.1026C21.0269 6.14191 17.7171 3.09375 13.743 3.09375H13.2571Z" 
            fill="white"
          />
        </svg>

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