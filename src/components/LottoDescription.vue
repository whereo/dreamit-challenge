<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  hideOnMobile?: boolean;
}>();

const classes = computed(() =>
  props.hideOnMobile ? "hidden lg:block" : "block lg:hidden"
);
</script>

<template>
  <p class="text-lg text-slate-700" :class="classes">
    At DreamLotto, we bring you the latest EuroJackpot draw results faster than
    anywhere else online. As soon as the numbers are drawn, they are instantly
    published on our website. No more waiting - find out if you're an instant
    multi-millionaire prize winner right away!
  </p>
</template>
