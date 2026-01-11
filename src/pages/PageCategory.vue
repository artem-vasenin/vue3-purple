<script setup lang="ts">
import { useRoute } from 'vue-router';

import CategoryFilters from '../components/CategoryFilters.vue';
import CategoryHeader from '../components/CategoryHeader.vue';
import { useBookmarksStore } from '@/store/bookmarks';
import { watch } from 'vue';

const route = useRoute();
const store = useBookmarksStore();

watch(() => ({
  alias: route.params.alias,
  categories: store.bookmarks.categories,
}), () => {
  console.log(store.getCategory(route.params.alias));

});
</script>

<template>
  <CategoryHeader />
  <CategoryFilters />
  <div class="content">
    Content
  </div>
</template>
