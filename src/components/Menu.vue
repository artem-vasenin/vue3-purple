<script setup lang="ts">
import {useCategoryStore} from "@/store/category.ts";
import {onMounted} from "vue";

const catStore = useCategoryStore();

onMounted(async () => {
  await catStore.getCatList();
});
</script>

<template>
  <nav class="nav">
    <ul class="list">
      <li v-for="i in catStore.categoryList" :key="i.id" class="list__item">
        <RouterLink :to="`/categories/${i.alias}`" class="list__link">{{i.name}}</RouterLink>
      </li>
    </ul>
  </nav>
  <button class="add" @click="catStore.showForm = !catStore.showForm">+</button>
</template>

<style scoped>
.nav {
  padding-top: 40px;
}
.list__link {
  display: inline-flex;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  text-decoration: none;
  color: var(--color-dark);
  height: 50px;
  width: 100%;
  align-items: center;
  margin-bottom: 1px;
  transition: all .3s ease;

  &:hover, &.active {
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    transition: all .3s ease;
  }
}
.add {
  width: 32px;
  height: 32px;
  background: var(--color-dark);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-top: 16px;
  transition: transform .3s ease;

  &:hover {
    transform: scale(1.3);
    transition: transform .3s ease;
  }
}
</style>