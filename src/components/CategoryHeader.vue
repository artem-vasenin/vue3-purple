<script setup lang="ts">
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';

  import IconDelete from './IconDelete.vue';
  import IconEdit from './IconEdit.vue';
  import { useBookmarksStore } from '@/store/bookmarks';

  const route = useRoute();
  const store = useBookmarksStore();

  const category = computed(() =>
    store.getCategory(route.params.alias),
  );
</script>

<template>
  <header class="header">
    <div class="title">{{ category?.name }}</div>
    <div class="actions">
      <button class="action dark-round-btn delete-action">
        <IconDelete />
      </button>
      <button class="action dark-round-btn edit-action">
        <IconEdit />
      </button>
    </div>
  </header>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    .title {
      font-weight: 500;
      font-size: 24px;
      line-height: 1;
      letter-spacing: 2%;
    }
    .actions {
      display: flex;
      gap: 10px;
    }
  }
</style>
