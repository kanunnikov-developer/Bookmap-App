<script setup lang="ts">
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import IconPlus from '@/icons/IconPlus.vue';
import { RouterLink } from 'vue-router';

const store = useCategoriesStore();

onMounted(() => {
  store.fetchCategories();
});
</script>

<template>
  <ul class="categorie-list">
    <li v-for="category in store.categories" :key="category.id" class="categorie-list__item">
      <RouterLink active-class="active-link" :to="`/main/${category.alias}`">{{
        category.name
      }}</RouterLink>
    </li>
    <li>
      <ButtonIcon @click="store.createCategory()">
        <IconPlus />
      </ButtonIcon>
    </li>
  </ul>
</template>

<style scoped>
.categorie-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
}

.categorie-list li {
  list-style: none;
}

.categorie-list__item {
  list-style: none;
}

.categorie-list__item a {
  text-decoration: none;
  font-size: 14px;
  transition: font-size 0.3s ease-in-out;
  color: var(--color-fg);
}

.categorie-list__item a:hover,
.categorie-list__item a.active-link {
  font-size: 24px;
  font-weight: 700;
}
</style>
