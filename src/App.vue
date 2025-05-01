<script setup lang="ts">
import Profile from "@/components/Profile.vue";
</script>

<template>
  <div class="app">
  <aside class="aside">
    <Profile />
  </aside>
  <main class="main">
    main
  </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  max-width: 1400px;
  min-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-top: 140px;
}
.aside {
  height: 100vh;
  flex: 0 0 400px;
  max-width: 400px;
}
.main {
  flex: 1;
}
</style>
