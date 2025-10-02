import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Category } from '@/interfaces/category.interface';
import { http } from '@/api';
import { API_ROUTES } from '@/api';
import { v4 as uuidv4 } from 'uuid';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);

  async function fetchCategories() {
    const { data } = await http.get<Category[]>(API_ROUTES.categories);
    categories.value = data;
  }

  async function createCategory() {
    const { data } = await http.post<Category>(API_ROUTES.categories, {
      name: 'Интересное',
      alias: uuidv4(),
    });
    categories.value.push(data);
  }

  function getCategoryByAlias(alias: string | string[]): Category | undefined {
    if (typeof alias == 'string') {
      return categories.value.find((c) => c.alias == alias);
    }
    return;
  }

  return { categories, fetchCategories, createCategory, getCategoryByAlias };
});
