<script setup lang="ts">
import Profile from "@/components/Profile.vue";
import Menu from "@/components/Menu.vue";
import CatForm from "@/components/CatForm.vue";
</script>

<template>
  <div class="app">
  <aside class="aside">
    <Profile />
    <Menu />
  </aside>
  <main class="main">
    main
  </main>
  </div>
  <CatForm />
</template>

<style scoped>
.app {
  display: flex;
  max-width: 1400px;
  min-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 120px 20px 20px;
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
