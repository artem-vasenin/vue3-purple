<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import {useCategoryStore} from "@/store/category.ts";
import type {ICategory} from "@/types/category.ts";

const route = useRoute();
const store = useCategoryStore();
const alias = ref(route.params.alias);
const category = ref<ICategory | null>(null);
watch(
  () => ({
    newAlias: route.params.alias,
    categories: store.categoryList,
  }),
  (value) => {
    alias.value = value.newAlias;
    category.value = value.categories.length ? store.getCategoryByAlias(value.newAlias) : null;
  }
);
</script>

<template>
{{store.category?.name || 'Нетуть'}}
</template>

<style scoped>

</style>