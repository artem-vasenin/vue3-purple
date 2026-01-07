<script setup>
    const { info } = defineProps(['info']);
</script>

<template>
  <div v-if="!!info" class="error">{{ info }}</div>
</template>

<style scoped>
    .error {
        position: fixed;
        top: 20px;
        left: calc(50% - 300px);
        width: 600px;
        min-height: 30px;
        border-radius: 10px;
        border: 1px solid red;
        padding: 4px 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: red;
        background-color: rgba(255, 0, 0, 0.1);
    }
</style>