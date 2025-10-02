<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import InputString from '@/components/InputString.vue';
import { ref } from 'vue';

const form = ref<{ email?: string; password?: string }>({});

function onSubmit(event: Event) {
  event.preventDefault();
}
</script>

<template>
  <div class="auth">
    <div class="auth-form">
      <h1 class="auth-header">Bookmarkly</h1>
      <form class="auth-form" @submit="onSubmit">
        <InputString v-model="form.email" placeholder="email" />
        <InputString v-model="form.password" placeholder="Пароль" type="password" />
        <ButtonText type="submit">Вход</ButtonText>
      </form>
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
