<script setup>
const model = defineModel({ type: String });
const vFocus = {
  mounted: el =>el.focus(),
}
</script>

<template>
  <input v-model="model" v-focus type="text">
</template>

<style scoped>

</style>
