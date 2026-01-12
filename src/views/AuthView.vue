<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import TextInput from '@/components/TextInput.vue';

  const router = useRouter();

  const email = ref<string>('');
  const passwd = ref<string>('');
</script>

<template>
  <div class="wrap">
    <div class="title">Bookmarkly</div>
    <div class="form">
      <TextInput v-model="email" placeholder="Email" />
      <TextInput v-model="passwd" placeholder="Password" />
    </div>
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
    margin-top: 20px;

    &:hover {
      opacity: .8;
    }
  }
</style>
