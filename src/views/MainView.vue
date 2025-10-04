<script setup lang="ts">
import CategorieList from '@/components/CategorieList.vue';
import ProfileAvatar from '@/components/ProfileAvatar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar />
      <CategorieList />
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 10px;
  max-width: 1450px;
  margin: 140px auto 0 auto;
}

.nav {
  min-width: 320px;
}

main {
  width: 100%;
}
</style>
