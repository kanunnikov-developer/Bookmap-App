<script setup lang="ts">
import type { Category } from '@/interfaces/category.interface';
import ButtonIcon from './ButtonIcon.vue';
import IconEdit from '../icons/IconEdit.vue';
import { ref } from 'vue';
import InputString from './InputString.vue';
import { useCategoriesStore } from '@/stores/categories.store';

const { category } = defineProps<{ category: Category }>();
const isEdited = ref<boolean>();
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoriesStore();

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
</script>

<template>
  <div class="category-header">
    <h1 v-if="!isEdited">{{ category.name }}</h1>
    <div v-if="isEdited">
      <InputString v-model="newCategoryName" />
      <ButtonIcon><IconEdit @click="updateCategory" /></ButtonIcon>
    </div>

    <ButtonIcon v-if="!isEdited" @click="toogleEdit"><IconEdit /></ButtonIcon>
  </div>
</template>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
