<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirecttoMain() {
  router.push('/');
}
</script>

<template>
  <div class="not-found">
    <div class="not-found-form">
      <h1 class="not-found-header">404</h1>
      <ButtonText @click="redirecttoMain">На главную</ButtonText>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.not-found-header {
  font-size: 128px;
  font-weight: 700;
}

.not-found-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 52px;
}
</style>
