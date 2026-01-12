<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useBookmarksStore } from '@/store/bookmarks';
import type { IAddBookmark } from '@/types';
import TextInput from './TextInput.vue';

  const store = useBookmarksStore();
  const route = useRoute();

  const isModalOpen = ref(false);
  const form = ref<IAddBookmark>({
    category_id: 0,
    url: '',
  });

  const onReset = () => {
    form.value.url = '';
    isModalOpen.value = false;
  };

  const openModal = () => {
    isModalOpen.value = true;
  };

  const onSubmit = async () => {
    await store.addBookmark(form.value);
    await store.getBookmarks(form.value.category_id);
    onReset();
  };

  watch(() => [route.params.alias], async ([alias]) => {
    const cat = store.getCategory(alias);
    if (cat?.id) {
      form.value.category_id = cat.id;
    }
  }, {immediate: true});
</script>

<template>
  <div class="wrap">
    <button @click="openModal" class="action dark-round-btn"></button>
  </div>

  <div v-if="isModalOpen" class="modal">
    <div class="form">
      <div class="title">Добавление закладки</div>
      <TextInput v-model="form.url" placeholder="URL" />
      <div class="actions">
        <button @click="onReset" class="form-btn">Закрыть</button>
        <button @click="onSubmit" class="form-btn form-btn--submit">Добавить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    border: 1px dashed var(--color-dark);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 260px;
    position: relative;
  }
  .action {
    &::before, &::after {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background-color: white;
      position: absolute;
    }
    &::before {
      transform: rotate(90deg);
    }
  }

  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-dark-a4);
    z-index: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .form {
      background-color: white;
      padding: 40px;
      width: 600px;
      height: 450px;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    .title {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: 2%;
      margin-bottom: 30px;
      text-align: center;
    }
    .form-btn {
      flex: 1;
      border: none;
      border-radius: 4px;
      background-color: var(--color-dark-a4);
      height: 30px;
      text-transform: uppercase;

      &:hover {
        cursor: pointer;
        opacity: .8;
      }

      &.form-btn--submit {
        background-color: var(--color-dark);
        color: white;
      }
    }
  }
</style>
