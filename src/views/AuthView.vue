<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import TextInput from '@/components/TextInput.vue';
import { useAuthStore } from '@/store/auth';
import type { ILogin } from '@/types';

  const router = useRouter();
  const store = useAuthStore();

  const form = ref<ILogin>({email: '', password: ''});

  const onSubmit = async (e: Event): Promise<void> => {
    e.preventDefault();
    if (!form.value.email || !form.value.password) return;
    try {
      await store.login(form.value);
      form.value = {email: '', password: ''};
      router.push({name: 'cat'});
    } catch (e) {
      console.error(e);
    }
  };
</script>

<template>
  <div class="wrap">
    <div class="title">Bookmarkly</div>
    <form @submit="onSubmit" class="form">
      <TextInput v-model="form.email" placeholder="Email" autocomplete="false" />
      <TextInput v-model="form.password" placeholder="Password" type="password" autocomplete="false"/>
      <button type="submit" class="action">Вход</button>
    </form>
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
  .form {
    text-align: center;
    max-width: 400px;
  }
  .action {
    height: 50px;
    width: 160px;
    border-radius: 25px;
    border: none;
    background-color: var(--color-dark);
    color: white;
    cursor: pointer;
    display: inline-flex;
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
