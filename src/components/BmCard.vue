<script setup lang="ts">
import type { IBookmark } from '@/types';
import IconDelete from './IconDelete.vue';
import IconLink from './IconLink.vue';

const props = defineProps<{data: IBookmark}>();

</script>

<template>
  <div class="wrap">
    <div class="image-block">
      <img :src="props.data.image" alt="img" class="image">
    </div>
    <div class="title">{{ props.data.title }}</div>
    <div class="actions">
      <button class="action action--del">
        <IconDelete />
      </button>
      <button class="action action--link">
        <IconLink />
      </button>
    </div>
  </div>
</template>
