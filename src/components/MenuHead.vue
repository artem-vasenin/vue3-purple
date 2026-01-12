<script setup lang="ts">
  import { useAuthStore } from '@/store/auth';
import { useProfileStore } from '@/store/profile';
  import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

  const profileStore = useProfileStore();
  const authStore = useAuthStore();
  const router = useRouter();

  const logout = () => {
    authStore.clearToken();
    router.push({name: 'auth'});
  };

  onMounted(async () => {
    await profileStore.getProfile();
  })
</script>

<template>
<div class="wrap">
  <div class="icon-block">
    <img :src="profileStore.profile?.avatar || ''" class="icon" alt="icon">
    <div class="status" :class="profileStore.profile?.isOnline ? 'online' : ''" />
  </div>
  <div v-if="profileStore.profile" class="name">
    Привет, <b>{{ profileStore.profile?.name }}</b>!
  </div>
  <div class="logout">
    <button @click="logout" class="logout-btn">Выход</button>
  </div>
</div>
</template>

<style scoped>
  .icon-block {
    width: 80px;
    height: 80px;
    font-size: 0;
    line-height: 0;
    position: relative;
    margin-bottom: 24px;
  }
  .icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .status {
    width: 14px;
    height: 14px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 70%;

    &::after {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: gray;
    }

    &.online {
      &::after {
        background-color: var(--color-green);
      }
    }
  }
  .name {
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
    letter-spacing: 2%;
    margin-bottom: 20px;
  }
  .logout-btn {
    margin-bottom: 40px;
    border: 1px solid var(--color-dark);
    background-color: none;
    width: 100%;
    border-radius: 4px;
    height: 26px;
    background-color: transparent;
    text-transform: uppercase;

    &:hover {
      background-color: var(--color-dark);
      color: white;
      cursor: pointer;
    }
  }
</style>
