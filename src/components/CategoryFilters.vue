<template>
  <div class="filters">
    <button class="filter filter--active">По дате</button>
    <button class="filter">По названию</button>
  </div>
</template>

<style scoped>
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
