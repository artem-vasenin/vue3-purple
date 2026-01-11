<script setup lang="ts">
import { useRouter } from 'vue-router';

  const router = useRouter();
</script>

<template>
  <div class="wrap">
    <div class="title">Bookmarkly</div>
    <button @click="router.push('/category')" class="action">Вход</button>
  </div>
</template>

<style scoped>
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
  .title {
    font-weight: 700;
    font-size: 52px;
    line-height: 100%;
    letter-spacing: 2%;
    margin-bottom: 50px;
  }
  .action {
    height: 50px;
    width: 160px;
    border-radius: 25px;
    border: none;
    background-color: var(--color-dark);
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 2%;

    &:hover {
      opacity: .8;
    }
  }
</style>
