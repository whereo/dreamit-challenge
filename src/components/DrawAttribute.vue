<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="text-center">
    <div class="text-xs font-extrabold tracking-wider text-slate-700 uppercase">
      {{ title }}
    </div>
    <div class="mt-1 text-sm text-blue-600 leading-tight">
      <slot></slot>
    </div>
  </div>
</template>
