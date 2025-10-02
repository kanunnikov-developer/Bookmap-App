<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
</script>

<template>
  <div class="auth">
    <div class="auth-form">
      <h1 class="auth-header">Bookmarkly</h1>
      <ButtonText>Вход</ButtonText>
    </div>
  </div>
</template>

<style scoped>
.auth {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

.auth-header {
  font-size: 52px;
  font-weight: 700;
}

.auth-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 52px;
}
</style>
