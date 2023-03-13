<script setup>
import { Disclosure } from '@headlessui/vue'
import { useWeatherStore } from '@/stores/weather'
const store = useWeatherStore();
store.getWeather();
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow">
    <div class="mx-auto container">
      <div class="relative flex h-16 justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            VUE The Weather
          </div>
        </div>
        <div class="flex items-center">
          {{ store.currentTemp }} &#8457;
        </div>
      </div>
    </div>
  </Disclosure>
</template>