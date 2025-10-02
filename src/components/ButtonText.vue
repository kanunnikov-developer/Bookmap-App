<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-fg);
  cursor: pointer;
  border-radius: 50px;
  border: none;
  transition: background 0.2s ease-in-out;
  height: 50px;
  padding: 12px 24px;
  color: var(--color-bg);
  font-size: 18px;
}

.button:hover {
  background: var(--color-fg-hover);
}
</style>
