<script setup lang="ts">
  import MenuHead from '../components/MenuHead.vue';
  import MenuCats from '../components/MenuCats.vue';
</script>

<template>
  <div class="app">
    <aside class="aside">
      <MenuHead />
      <MenuCats />
    </aside>
    <main class="main">
     <RouterView />
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
    flex: 0 0 280px;
    max-width: 280px;
    padding: 80px 40px 20px;
    @media screen and (min-width: 1200px) {
      flex: 0 0 380px;
      max-width: 380px;
      padding: 140px 120px 20px;
    }
  }
  .main {
    flex: 1;
    padding: 80px 40px 20px;
    @media screen and (min-width: 1200px) {
      padding: 140px 120px 20px;
    }
  }
</style>
