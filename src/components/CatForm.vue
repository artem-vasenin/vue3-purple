<script setup lang="ts">
import {useCategoryStore} from "@/store/category.ts";

const catStore = useCategoryStore();

const setData = (e: any, field: 'name' | 'alias') => {
  catStore.form[field] = e.target.value;
};
const onSave = () => {
  catStore.setCategory();
};
const onCancel = () => {
  catStore.resetForm();
};
</script>

<template>
  <div v-if="catStore.showForm" class="modal">
    <div class="form">
      <div class="title">Создать категорию</div>
      <div class="inputBlock">
        <input class="input" @input="setData($event, 'name')"/>
      </div>
      <div class="inputBlock">
        <input class="input" @input="setData($event, 'alias')"/>
      </div>
      <div class="action">
        <button class="btn" @click="onCancel">Закрыть</button>
        <button class="btn save" @click="onSave">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  min-width: 400px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  background: white;
  border-radius: 20px;
}
.title {
  font-size: 26px;
}
.inputBlock, .input, .action {
  width: 100%;
}
.input {
  border: 0;
  border-bottom: 1px solid var(--color-gray);
  outline: none;
}
.action {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;
  height: 32px;
  width: 200px;
  border: none;
  background: var(--color-gray);
  color: var(--color-light);

  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  }

  &.save {
    background: var(--color-dark);
  }
}
</style>