<script setup lang="ts">
  import IconDelete from './IconDelete.vue';
  import IconEdit from './IconEdit.vue';
</script>

<template>
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
