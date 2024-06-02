<script setup lang="ts">
import LoadingState from "@/components/LoadingState.vue";
import DrawNumber from "@/components/DrawNumber.vue";
import DrawAttribute from "@/components/DrawAttribute.vue";

import { computed } from "vue";
import { useDraw } from "@/service/useDraw";

const { data, error, loading } = useDraw();

const currencyFormatter = Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "EUR",
});

/**
 * Parse `data.value.jackput` and divide by 100 to get the correct euro value.
 * Format it afterwards.
 */
const jackpotValue = computed(() => {
  const value = data.value?.jackpot ? data.value.jackpot / 100 : 0;
  return currencyFormatter.format(value);
});
</script>

<template>
  <div
    class="h-full flex flex-col gap-12 items-center justify-center p-12 lg:p-12"
  >
    <div class="flex flex-col items-center">
      <div class="text-xs">
        <template v-if="loading">
          <LoadingState type="text" />
        </template>

        <template v-if="data">
          <span class="text-slate-700 font-semibold">{{ data.date }}</span>
        </template>
      </div>

      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        EuroJackpot
      </h2>
    </div>

    <div class="flex flex-wrap gap-3 justify-center items-center">
      <template v-if="loading">
        <LoadingState type="number" v-for="n in 4" :key="n" />
      </template>
      <template v-else-if="error">
        <div class="rounded bg-red-100 ring-1 ring-red-400 px-4 py-2">
          Unable to fetch data
        </div>
      </template>
      <template v-else-if="data">
        <DrawNumber
          v-for="(number, index) in data.numbers"
          :number="number"
          :key="index"
        />
        <div
          class="w-full sm:inline-block sm:w-auto text-xl font-semibold text-center"
        >
          +
        </div>
        <DrawNumber
          v-for="(number, index) in data.additionalNumbers"
          :number="number"
          :highlight="true"
          :key="index"
        />
      </template>
    </div>

    <template v-if="loading">
      <LoadingState type="text" />
    </template>
    <template v-if="data">
      <div class="flex flex-col sm:grid sm:grid-cols-2 gap-6">
        <DrawAttribute title="Jackpot">{{ jackpotValue }}</DrawAttribute>

        <DrawAttribute title="Principle">
          5 ouf of 50 &<br />2 out of 12
        </DrawAttribute>
      </div>
    </template>

    <div class="max-w-prose text-xs leading-snug text-gray-500">
      The EuroJackpot is a transnational European lottery launched in 2012 that
      is currently played across 19 countries. Players try to match 5 numbers
      from 1-50 and 2 additional "Euro" numbers from 1-12, with the jackpot
      starting at €10 million and rolling over up to a maximum of €120 million.
    </div>
  </div>
</template>
