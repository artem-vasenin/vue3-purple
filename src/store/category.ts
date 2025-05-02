import {ref} from "vue";
import {defineStore} from "pinia";

import {http} from "@/http/http.ts";
import type {ICategory} from "@/types/category.ts";

export const useCategoryStore = defineStore('category', () => {
    const category = ref<ICategory | null>(null);
    const categoryList = ref<ICategory[]>([]);
    const showForm = ref(false);
    const form = ref<Omit<ICategory, 'id'>>({name: '', alias: ''});

    const getCatList = async () => {
      categoryList.value = await http.getCatList();
    }

    const resetForm = () => {
        form.value = {name: '', alias: ''};
        showForm.value = false;
    }

    const setCategory = async () => {
        if (!form.value) return;
        categoryList.value = await http.setCategory(form.value);
        resetForm();
        await getCatList();
    }

    return { category, categoryList, showForm, form, resetForm, getCatList, setCategory };
});
