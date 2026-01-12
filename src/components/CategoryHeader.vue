<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  import IconDelete from './IconDelete.vue';
  import IconEdit from './IconEdit.vue';
  import { useBookmarksStore } from '@/store/bookmarks';
  import PopupConfirm from '@/components/PopupConfirm.vue';

  const route = useRoute();
  const router = useRouter();
  const store = useBookmarksStore();

  const isEdit = ref(false);
  const isConfirm = ref(false);
  const title = ref('');

  const category = computed(() => store.getCategory(route.params.alias));

  const onDel = async () => {
    if (!category?.value?.id) return;
    await store.delCategory(category.value.id);
    await store.getCategories();

    router.push({ name: 'cat' })
  };

  const onClear = () => {
    title.value = '';
    isEdit.value = false;
  };

  const onEdit = () => {
    if (!category?.value?.id) return;
    title.value = category.value?.name || '';
    isEdit.value = true;
  };

  const onSave = async () => {
    if (title.value?.length > 3 && category?.value?.id) {
      if (title.value === category.value.name) {
        onClear();
        return;
      }
      await store.editCategory({
        id: category.value.id,
        name: title.value,
        alias: category.value.alias,
      });
      await store.getCategories();
    }
    onClear();
  };
</script>

<template>
  <header class="header">
    <div v-if="isEdit" class="title title-edit">
      <input v-model="title" type="text" class="input">
    </div>
    <div v-else class="title">{{ category?.name }}</div>
    <div class="actions">
      <button v-if="!isEdit" @click="onEdit" class="action dark-round-btn edit-action">
        <IconEdit />
      </button>
      <button v-else @click="onSave" class="action dark-text-btn save-action">
        Сохранить
      </button>
      <button @click="isConfirm = !isConfirm" class="action dark-round-btn delete-action">
        <IconDelete />
      </button>
    </div>

    <PopupConfirm
      text="Точно удаляем?"
      :is-open="isConfirm"
      @cancel="isConfirm = !isConfirm"
      @confirm="onDel"
    />
  </header>
</template>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    gap: 10px;

    .title {
      font-weight: 500;
      font-size: 24px;
      line-height: 1;
      letter-spacing: 2%;
      flex: 1;
    }
    .input {
      width: 100%;
      height: 32px;
      border-top: none;
      border-left: none;
      border-right: none;
      outline: none;
      font-weight: 500;
      font-size: 24px;
      padding: 0 10px;
    }
    .actions {
      display: flex;
      gap: 10px;
    }
  }
</style>
