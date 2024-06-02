<script setup lang="ts">
const props = defineProps<{
  number: string | null;
  highlight?: Boolean;
}>();
</script>

<template>
  <div
    class="bg-blue-100 rounded-full w-10 h-10 ring-1 ring-blue-500 text-center text-xl leading-loose font-semibold"
    :class="{ 'bg-yellow-100 ring-yellow-500': props.highlight }"
  >
    {{ props.number }}
  </div>
</template>
