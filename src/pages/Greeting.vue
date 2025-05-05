<script setup lang="ts">

</script>

<template>
  <div class="wrap">
    <div class="title">Добро пожаловать в Bookmarkly!</div>
    <div class="subtitle">Чтобы начать пользоваться выберите категорию закладок или создайте новую.</div>
  </div>
</template>

<style scoped>
.wrap {
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
.title {
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
}
.subtitle {
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
}
</style>