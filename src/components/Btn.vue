<template>
  <button class="btn">
    <span v-if="hasPrefixSlot" class="prefix">
      <slot name="iconPrefix"/>
    </span>
    <span v-if="hasDefaultSlot" class="default">
      <slot/>
    </span>
    <span v-else class="default">
      Button
    </span>
    <span v-if="hasPostfixSlot" class="postfix">
      <slot name="iconPostfix"/>
    </span>
  </button>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots();
const hasDefaultSlot = !!slots.default;
const hasPrefixSlot = !!slots.iconPrefix;
const hasPostfixSlot = !!slots.iconPostfix;
</script>

<style scoped>
.btn {
  border: none;
  width: 100%;
  height: 53px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--grad);
  color: var(--color-white);
  transition: background .3s ease;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0;

  &:hover {
    background: var(--grad-invert);
    transition: background .3s ease;
  }
}
.prefix {
  width: 32px;
  height: 32px;
}
</style>
