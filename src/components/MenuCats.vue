<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import { useBookmarksStore } from '@/store/bookmarks';
  import IconAdd from './IconAdd.vue';
  import type { ICaregory } from '@/types';


  const store = useBookmarksStore();

  const isModalOpen = ref(false);
  const form = ref<ICaregory>({
    name: '',
    alias: '',
  });

  const onReset = () => {
    form.value.name = '';
    form.value.alias = '';
    isModalOpen.value = false;
  };

  const onSubmit = async (): Promise<void> => {
    if (form.value.name.trim().length < 3 || form.value.alias.trim().length < 3) return;
    await store.addCategory({
      name: form.value.name,
      alias: form.value.alias,
    });
    onReset();
  }

  onMounted(async () => {
    await store.getCategories();
  })
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li v-for="(i, idx) in store.bookmarks.categories" :key="idx" class="nav-item">
        <RouterLink
         :to="`/category/${i.alias}`"
         exact-active-class="active"
         class="nav-link"
        >{{ i.name }}</RouterLink>
      </li>
    </ul>
  </nav>
  <div class="actions">
    <button @click="isModalOpen = !isModalOpen" class="action dark-round-btn">
      <IconAdd />
    </button>
  </div>

  <div class="modal-wrap" v-if="isModalOpen">
    <div class="modal-content">
      <div class="form-title">Создать категорию</div>
      <div class="form">
        <label class="label" for="name">Название</label>
        <input v-model="form.name" type="text" class="input" id="name">
        <label class="label" for="alias">Алиас</label>
        <input v-model="form.alias" type="text" class="input" id="alias">
        <div class="actions">
          <button @click="onReset" class="form-btn">Закрыть</button>
          <button @click="onSubmit" class="form-btn form-btn--submit">Добавить</button>
        </div>
      </div>
    </div>
  </div>
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
  }
  .nav-link {
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 2%;
    color: var(--color-dark);
    text-decoration: none;
    transition: all .3s;

    &:hover, &.active {
      font-size: 24px;
      font-weight: 700;
      transition: all .3s;
      cursor: pointer;
    }
  }
  .actions {
    margin-top: 17px;
  }
  .modal-wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: var(--color-dark-a4);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    width: 400px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    padding: 40px;

    .form-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      letter-spacing: 2%;
      margin-bottom: 30px;
      text-align: center;
    }
    .label {
      display: block;
      font-weight: 500;
      font-size: 18px;
      line-height: 100%;
      letter-spacing: 2%;
      margin-bottom: 10px;
    }
    .input {
      margin-bottom: 10px;
      width: 100%;
      height: 30px;
      border-radius: 4px;
      border: 1px solid var(--color-dark-a4);
      outline: none;
      padding: 2px 10px;
    }
    .actions {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
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
