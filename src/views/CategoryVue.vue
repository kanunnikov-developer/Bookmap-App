<script setup lang="ts">
import CategoryHeader from '@/components/CategoryHeader.vue';
import type { Category } from '@/interfaces/category.interface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoriesStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoriesStore();
const category = ref<Category>();
const bookmarkStore = useBookmarkStore();

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (data) => {
    if (data.alias !== undefined) {
      category.value = categoryStore.getCategoryByAlias(data.alias);
      if (category.value) {
        bookmarkStore.fetchBookmarks(category.value.id);
      }
    } else {
      category.value = undefined;
    }
  },
  { immediate: true },
);
</script>
<template>
  <CategoryHeader v-if="category" :category="category" />
</template>
