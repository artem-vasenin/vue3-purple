<script setup lang="ts">
  import { useProfileStore } from '@/store/profile';
  import { onMounted } from 'vue';

  const store = useProfileStore();

  onMounted(async () => {
    await store.getProfile();
  })
</script>

<template>
<div class="wrap">
  <div class="icon-block">
    <img :src="store.profile?.avatar || ''" class="icon" alt="icon">
    <div class="status" :class="store.profile?.isOnline ? 'online' : ''" />
  </div>
  <div v-if="store.profile" class="name">
    Привет, <b>{{ store.profile?.name }}</b>!
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
    margin-bottom: 40px;
  }
</style>
