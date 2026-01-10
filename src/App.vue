<script setup lang="ts">
  import MenuHead from './components/MenuHead.vue';
  import MenuCats from './components/MenuCats.vue';
  import IconDelete from './components/IconDelete.vue';
  import IconEdit from './components/IconEdit.vue';
</script>

<template>
  <div class="app">
    <aside class="aside">
      <MenuHead />
      <MenuCats />
    </aside>
    <main class="main">
      <header class="header">
        <div class="title">Разработка</div>
        <div class="actions">
          <button class="action dark-round-btn delete-action">
            <IconDelete />
          </button>
          <button class="action dark-round-btn edit-action">
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
