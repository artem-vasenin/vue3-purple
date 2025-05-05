<script setup lang="ts">
import {useRoute, onBeforeRouteUpdate} from "vue-router";
import {ref, watch} from "vue";
import {useCategoryStore} from "@/store/category.ts";
import type {ICategory} from "@/types/category.ts";

const route = useRoute();
const store = useCategoryStore();
const category = ref<ICategory | null>(null);
watch(
  () => store.categoryList,
  () => {
    category.value = store.getCategoryByAlias(route.params.alias);
  }
);
onBeforeRouteUpdate((to) => {
  category.value = store.getCategoryByAlias(to.params.alias);
});
</script>

<template>
{{store.category?.name}}
</template>

<style scoped>

</style>