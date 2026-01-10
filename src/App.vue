<script setup lang="ts">
  import { onMounted, provide, ref } from 'vue';

  import { profileProvide } from './constants';
  import MenuHead from './components/MenuHead.vue';
  import MenuCats from './components/MenuCats.vue';
  import IconDelete from './components/IconDelete.vue';
  import IconEdit from './components/IconEdit.vue';
  import { type IMenu, type IProfile, type IProfileAPI } from './types';
import { API_ROUTES } from './api';

  const profile = ref<IProfile>({
    avatar: 'https://placehold.co/100x100?text=G&color=gray',
    name: 'Гость',
    isOnline: false,
  });
  const menu = ref<IMenu[]>([
    { name: 'Спорт', url: 'sport' },
    { name: 'Программирование', url: 'dev' },
    { name: 'Семья', url: 'family' },
    { name: 'Работа', url: 'job' },
    { name: 'Развлечения', url: 'trulala' },
    { name: 'Отдых', url: 'rest' },
  ]);

  provide(profileProvide, profile);

  const getProfileName = async (): Promise<string> => {
    const data: IProfileAPI = await (await fetch(API_ROUTES.profile)).json();
    return data.name;
  };

  onMounted(async () => {
    const name = await getProfileName();
    profile.value.name = name;
  })
</script>

<template>
  <div class="app">
    <aside class="aside">
      <MenuHead />
      <MenuCats :list="menu" />
    </aside>
    <main class="main">
      <header class="header">
        <div class="title">Разработка</div>
        <div class="actions">
          <button class="action delete-action">
            <IconDelete />
          </button>
          <button class="action edit-action">
            <IconEdit />
          </button>
        </div>
      </header>
      <div class="filters">
        <button class="filter filter--active">По дате</button>
        <button class="filter">По названию</button>
      </div>
      <div class="content">
        Content
      </div>
    </main>
  </div>
</template>

<style scoped>
  .app {
    display: flex;
    min-height: 100vh;
    min-width: 600px;
    max-width: 1400px;
    margin: 0 auto;
  }
  .aside {
    flex: 0 0 280px;
    max-width: 280px;
    padding: 80px 40px 20px;
    @media screen and (min-width: 1200px) {
      flex: 0 0 380px;
      max-width: 380px;
      padding: 140px 120px 20px;
    }
  }
  .main {
    flex: 1;
    padding: 80px 40px 20px;
    @media screen and (min-width: 1200px) {
      padding: 140px 120px 20px;
    }
  }
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
    .action {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-dark);
      border: none;
      border-radius: 50%;
      &:hover {
        opacity: .7;
        cursor: pointer;
      }
    }
  }
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
