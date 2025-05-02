<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

const route = useRoute();
const alias = ref(route.params.alias);
watch(
  () => route.params.alias,
  (newAlias) => {
    alias.value = newAlias;
    console.log(newAlias);
  }
);
</script>

<template>
{{alias}}
</template>

<style scoped>

</style>