import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Category } from '@/interfaces/category.interface';
import { http } from '@/api';
import { API_ROUTES } from '@/api';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);

  async function fetchCategories() {
    const { data } = await http.get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  }

  async function createCategory() {
    const { data } = await http.post<Category>(API_ROUTES.categories, {
      name: 'Новая категория',
      alias: 'new',
    });
    categories.value.push(data);
  }

  return { categories, fetchCategories, createCategory };
});
