<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

import CategoryFilters from '../components/CategoryFilters.vue';
import CategoryHeader from '../components/CategoryHeader.vue';
import { useBookmarksStore } from '@/store/bookmarks';
import BmCard from '@/components/BmCard.vue';
import BmForm from '@/components/BmForm.vue';

  const route = useRoute();
  const store = useBookmarksStore();

  watch(() => [route.params.alias], async ([alias]) => {
    const cat = store.getCategory(alias);
    if (cat?.id) {
      await store.getBookmarks(cat.id);
    }
  }, {immediate: true});
</script>

<template>
  <CategoryHeader />
  <CategoryFilters />
  <div class="content">
    <div class="list">
      <div v-for="i in store.bookmarks.bookmarks" :key="i.id" class="item">
        <BmCard :data="i"/>
      </div>
      <div class="item">
        <BmForm />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 30px;
  }
  .item {
    flex: 0 0 100%;
    width: 100%;

    @media screen and (min-width: 860px) {
      width: initial;
      flex: 0 0 calc(50% - 15px);
      max-width: calc(50% - 15px);
    }

    @media screen and (min-width: 1400px) {
      flex: 0 0 calc(33.33% - 20px);
      max-width: calc(33.33% - 20px);
    }
  }
</style>
