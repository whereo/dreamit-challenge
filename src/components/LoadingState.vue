<script setup lang="ts">
defineProps<{
  type: "text" | "number";
}>();
</script>

<template>
  <template v-if="type === 'text'">
    <div class="animate-pulse rounded-full bg-slate-300 h-2 w-14"></div>
  </template>
  <template v-else>
    <div class="animate-pulse rounded-full bg-slate-300 h-10 w-10"></div>
  </template>
</template>
