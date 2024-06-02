<script setup lang="ts">
import LottoDescription from "@/components/LottoDescription.vue";
</script>

<template>
  <header
    class="bg-blue-100 bg-gradient-to-br from-neutral-50 from-40% to-blue-100/70 ring-1 ring-slate-200 p-8 flex flex-col justify-center items-center"
  >
    <div class="lg:max-w-prose flex flex-col items-center gap-4">
      <div class="mx-auto max-w-2xl text-center">
        <p class="text-base font-semibold leading-7 text-blue-600">
          Make your dreams come true
        </p>
        <RouterLink :to="{ name: 'home' }">
          <h2
            class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl transition-all hover:text-blue-600"
          >
            DreamLotto
          </h2>
        </RouterLink>
      </div>

      <div class="text-center">
        <LottoDescription :hide-on-mobile="true" />
      </div>
    </div>
  </header>

  <main class="isolate relative flex flex-col justify-center">
    <div class="lg:max-w-prose">
      <RouterView />
    </div>
  </main>
</template>
