<script setup lang="ts">
import { useBookmarksStore } from '@/store/bookmarks';
import { useRoute } from 'vue-router';

  const store = useBookmarksStore();
  const route = useRoute();

  const onSort = async (sort: 'title' | 'date') => {
    store.setSort(sort);
    const cat = store.getCategory(route.params.alias);
    if (cat?.id) {
      await store.getBookmarks(cat.id);
    }
  };
</script>

<template>
  <div class="filters">
    <button
      @click="onSort('date')"
      class="filter"
      :class="store.bookmarks.sort === 'date' ? 'filter--active' : ''">По дате</button>
    <button
      @click="onSort('title')"
      class="filter"
      :class="store.bookmarks.sort === 'title' ? 'filter--active' : ''">По названию</button>
  </div>
</template>

<style scoped>
  .filters {
    display: flex;
    gap: 10px;
    padding-bottom: 68px;

    .filter {
      font-weight: 700;
      font-size: 16px;
      line-height: 1;
      letter-spacing: 0%;
      border: 2px solid transparent;
      padding: 0 0 4px 0;
      background-color: transparent;
      cursor: pointer;
      color: var(--color-dark-a4);

      &:hover, &.filter--active {
        border-bottom-color: var(--color-dark);
        color: var(--color-dark);
      }
    }
  }
</style>
