<script setup>

</script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped>
  .btn {
    border: none;
    background: var(--gradient);
    color: white;
    border-radius: 10px;
    height: 52px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 14px;
    font-size: 20px;
    line-height: 1;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background: var(--gradient-invert);
    }
  }
</style>
