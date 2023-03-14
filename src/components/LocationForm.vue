<script setup>
import { useLocationStore } from '@/stores/location'
import { useWeatherStore } from '@/stores/weather'
const weatherStore = useWeatherStore()
const locationStore = useLocationStore()
</script>

<template>
  <input
    type="text"
    v-model="zipInput"
    placeholder="enter your zip"
    class="border p-3 rounded-md mt-1"
  />
  <button class="border ml-2 p-3 rounded-md" @click="locationStore.updateLocation(zipInput); weatherStore.getWeather(); $emit('toggle')">
    Search
  </button>
</template>
