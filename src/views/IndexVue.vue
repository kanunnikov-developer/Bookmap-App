<script setup lang="ts"></script>

<template>
  <div class="index">
    <h1 class="index-header">Добро пожаловать в Bookmarkly!</h1>
    <p class="index-description">
      Что бы начать пользоваться выберете категорию закладок или создайте новую
    </p>
  </div>
</template>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.index-header {
  font-size: 24px;
  font-weight: 500;
}

.index-description {
  font-size: 16px;
}
</style>
