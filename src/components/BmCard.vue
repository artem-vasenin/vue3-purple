<script setup lang="ts">
import type { IBookmark } from '@/types';
import IconDelete from './IconDelete.vue';
import IconLink from './IconLink.vue';
import { useBookmarksStore } from '@/store/bookmarks';

const props = defineProps<{data: IBookmark}>();
const store = useBookmarksStore();

const delBm = async (): Promise<void> => {
  await store.delBookmark(props.data.id);
  await store.getBookmarks(props.data.category_id);
}
</script>

<template>
  <div class="wrap">
    <div class="image-block">
      <img :src="props.data.image" alt="img" class="image">
    </div>
    <div class="title">{{ props.data.title }}</div>
    <div class="actions">
      <button @click="delBm" class="action action--del">
        <IconDelete />
      </button>
      <a :href="data.url" target="_blank" class="action action--link">
        <IconLink />
      </a>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    padding: 20px;
    border-radius: 30px;
    background-color: var(--color-dark);
    height: 100%;
    min-height: 260px;
  }
  .image-block {
    width: 100%;                 /* 100% от wrap уже с учётом padding */
    aspect-ratio: 10 / 6;        /* 70% от ширины */
    position: relative;
    overflow: hidden;            /* чтобы img не вылезала */
    border-radius: 20px;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;           /* да, это “модно” и правильно */
    display: block;              /* убираем inline-зазоры */
  }

  .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -1.5%;
    color: white;
    padding: 10px 0;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .action {
    border: 4px solid white;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    background-color: var(--color-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      opacity: .8;
    }
  }
</style>
