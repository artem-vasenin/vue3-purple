<script setup lang="ts">
  import { type IMenu } from '../types';

  const { list } = defineProps<{list: IMenu[]}>();
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li v-for="(i, idx) in list" :key="idx" class="nav-item">
        <a :href="i.url" class="nav-link">{{ i.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .nav-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .nav-item {
    height: 56px;
    display: flex;
    width: 100%;
    align-items: center;

    &.nav-item--active {
      .nav-link {
        font-size: 24px;
        font-weight: 700;
      }
    }
  }
  .nav-link {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 2%;
    color: var(--color-dark);
    text-decoration: none;
    transition: all .3s;

    &:hover {
      font-size: 24px;
      font-weight: 700;
      transition: all .3s;
    }
  }
</style>
