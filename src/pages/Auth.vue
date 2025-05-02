<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()
</script>

<template>
<div class="auth">
  <div class="title">Закладки</div>
  <div class="action">
    <button class="btn" @click="router.push('/categories')">Вход</button>
  </div>
</div>
</template>

<style scoped>
.auth {
  height: 100vh;
  display: flex;
  gap: 52px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-weight: 700;
  font-size: 52px;
  line-height: 100%;
}
.btn {
  width: 162px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: var(--color-dark);
  color: white;
  border: none;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 4px rgba(0, 0, 0, .5);
  }
}
</style>