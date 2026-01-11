<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

import CategoryFilters from '../components/CategoryFilters.vue';
import CategoryHeader from '../components/CategoryHeader.vue';
import { useBookmarksStore } from '@/store/bookmarks';
import BmCard from '@/components/BmCard.vue';

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
    </div>
  </div>
</template>
