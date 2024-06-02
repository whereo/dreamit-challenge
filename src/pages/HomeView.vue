<script setup lang="ts">
import LottoDescription from "@/components/LottoDescription.vue";
</script>

<template>
  <div class="max-w-prose mx-auto p-12 flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-bold tracking-tight">Welcome to DreamLotto</h3>

      <p class="text-lg text-slate-700">
        Feeling lucky today? Then DreamLotto is your ultimate online destination
        for playing the massive EuroJackpot lottery and checking those
        life-changing results.
      </p>

      <LottoDescription />
    </div>

    <RouterLink :to="{ name: 'draw' }" class="rounded-xl">
      <div
        class="group relative w-full bg-white rounded-xl overflow-clip shadow hover:shadow-md border bg-gradient-to-br from-neutral-50 from-40% to-blue-100/70 transition ease-in-out duration-400 hover:border-blue-200"
      >
        <div class="relative flex items-end mx-10 my-10">
          <div class="flex w-4/6 flex-col gap-3">
            <h4
              class="text-xl font-bold tracking-tight transition-colors group-hover:text-blue-600"
            >
              EuroJackpot
            </h4>
            <p
              class="text-sm leading-5 text-slate-700 sm:text-base sm:leading-6"
            >
              The transnational European lottery launched in 2012 that is
              currently played across 19 countries.
            </p>
          </div>
          <div class="flex-auto flex justify-end text-right">
            <div
              class="rounded-full p-4 ring-1 ring-blue-300 group-hover:ring-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
