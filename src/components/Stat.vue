<script setup>
// const { label, value } = defineProps(['label', 'value']);
const { label = '---', value = '---' } = defineProps({
  label: String,
  value: String,
});
</script>

<template>
  <div class="stat">
    <div class="label">{{label}}</div><div class="value">{{value}}</div>
  </div>
</template>

<style scoped>
.stat {
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
}
.label {
  font-weight: 700;
  text-transform: uppercase;
}
</style>
