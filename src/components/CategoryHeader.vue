<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import ButtonIcon from './ButtonIcon.vue';
import IconEdit from '../icons/IconEdit.vue';
import { ref } from 'vue';
import InputString from './InputString.vue';
import { useCategoriesStore } from '@/stores/categories.store';
import { useRouter } from 'vue-router';

const { category } = defineProps<{ category: Category }>();
const isEdited = ref<boolean>();
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoriesStore();
const router = useRouter();

function toogleEdit() {
  isEdited.value = !isEdited.value;
}

function updateCategory() {
  if (!newCategoryName.value) {
    return;
  }
  categoryStore.updateCategory(newCategoryName.value, category.alias, category.id);
  toogleEdit();
}

function deleteCategory() {
  categoryStore.deleteCategory(category.id);
  router.push({ name: 'main' });
}
</script>

<template>
  <div class="category-header">
    <h1 v-if="!isEdited">{{ category.name }}</h1>
    <div v-if="isEdited" style="display: flex; gap: 10px; align-items: center">
      <InputString v-model="newCategoryName" />
      <ButtonIcon><IconEdit @click="updateCategory" /></ButtonIcon>
    </div>
    <div style="display: flex; gap: 10px">
      <ButtonIcon v-if="!isEdited" @click="toogleEdit"><IconEdit /></ButtonIcon>
      <ButtonIcon style="color: white; min-width: 150px" @click="deleteCategory"
        >Удалить</ButtonIcon
      >
    </div>
  </div>
</template>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
