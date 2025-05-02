<script setup lang="ts">
import {useProfileStore} from "@/store/profile.ts";
import {onMounted} from "vue";
const profileStore = useProfileStore();

onMounted(async () => {
  await profileStore.getProfile();
});
</script>

<template>
  <div class="avatar">
    <RouterLink to="/">
      <img :src="profileStore?.profile?.avatar" alt="img" class="img">
    </RouterLink>
    <div class="status online"/>
  </div>
  <div class="name">Привет, <b>{{profileStore?.profile?.name}}!</b></div>
</template>

<style scoped>
.avatar {
  width: 80px;
  height: 80px;
  position: relative;
  margin-bottom: 24px;
}
.img {
  max-width: 100%;
  border-radius: 50%;
}
.status {
  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: white;
  z-index: 1;
  position: absolute;
  bottom: 5px;
  right: 5px;

  &::after {
    content: '';
    display: block;
    width: 9px;
    height: 9px;
    background: red;
    border-radius: 50%;
    z-index: 2;
  }

  &.online {
    &::after {
    background: #49D3AA;
    }
  }
}
.name {
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  b {
    font-weight: 700;
  }
}
</style>