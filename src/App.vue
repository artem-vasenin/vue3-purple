<template>
  <header>Header</header>
  <main>
    <Btn>
      <template #iconPrefix>
        <img src="./assets/map-marker.svg" alt="icon"/>
      </template>
      Изменить город
    </Btn>
  </main>
  <footer>Footer</footer>
</template>

<script setup>
import Btn from './components/Btn.vue'
</script>

<style scoped>

</style>
