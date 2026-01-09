<script setup lang="ts">
  import { provide, ref } from 'vue';

  import { profileProvide } from './constants';
  import MenuHead from './components/MenuHead.vue';
  import MenuCats from './components/MenuCats.vue';

  const profile = ref({
    avatar: 'https://placehold.co/100x100?text=G&color=gray',
    name: 'Гость',
    isOnline: true,
  });

  provide(profileProvide, profile);
</script>

<template>
  <div class="app">
    <aside class="aside">
      <MenuHead />
      <MenuCats />
    </aside>
    <main class="main">
      <header class="header">
        Header
      </header>
      <div class="filters">
        Filters
      </div>
      <div class="content">
        Content
      </div>
    </main>
  </div>
</template>

<style scoped>
  .app {
    display: flex;
    min-height: 100vh;
    min-width: 600px;
    max-width: 1400px;
    margin: 0 auto;
  }
  .aside {
    flex: 0 0 380px;
    max-width: 380px;
    padding: 140px 120px 20px;
  }
  .main {
    flex: 1;
    padding: 140px 120px 20px;
  }
</style>
