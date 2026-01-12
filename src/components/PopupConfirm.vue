<script setup lang="ts">
  const props = defineProps<{
    isOpen: boolean,
    text: string,
  }>();

  const emit = defineEmits<{
    (e: 'confirm'): void,
    (e: 'cancel'): void,
  }>();
</script>

<template>
  <div v-if="props.isOpen" class="overlay">
    <div class="popup">
      <div class="title">{{ props.text }}</div>
      <div class="actions">
        <button @click="emit('cancel')" class="action action--cancel">Нет</button>
        <button @click="emit('confirm')" class="action action-confirm">Да</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--color-dark-a4);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .popup {
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    min-width: 300px;
    min-height: 100px;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }
  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 26px;
  }
  .action {
    border: 1px solid var(--color-dark);
    border-radius: 4px;
    background-color: transparent;
    height: 26px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;

    &:hover {
      cursor: pointer;
      opacity: .8;
    }

    &.action--confirm {
      background-color: var(--color-dark);
      color: white;
    }
  }
</style>
