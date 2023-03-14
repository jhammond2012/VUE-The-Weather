<script setup>
import WeatherForcast from '@/components/WeatherForcast.vue'
import LocationForm from '@/components/LocationForm.vue'

import { useWeatherStore } from '@/stores/weather'
import { useLocationStore } from '@/stores/location'
const weatherStore = useWeatherStore()
const locationStore = useLocationStore()
weatherStore.getWeather()
locationStore.getLocation()
</script>

<template>
  <main class="container mx-auto">
    <div v-if="locationStore.locationZip">
      <div class="flex items-center mt-6">
        <LocationForm v-if="isEditing" />
        <h1 class="text-3xl font-bold mr-2" v-else>
          7 Day Forcast for <span class="underline">{{ weatherStore.weatherLocation }}</span>
        </h1>
        <div class="cursor-pointer" v-if="!isEditing" @click="toggleEdit">
          <svg
            fill="#000000"
            height="20px"
            width="20px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 306.637 306.637"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path
                    d="M12.809,238.52L0,306.637l68.118-12.809l184.277-184.277l-55.309-55.309L12.809,238.52z M60.79,279.943l-41.992,7.896 l7.896-41.992L197.086,75.455l34.096,34.096L60.79,279.943z"
                  ></path>
                  <path
                    d="M251.329,0l-41.507,41.507l55.308,55.308l41.507-41.507L251.329,0z M231.035,41.507l20.294-20.294l34.095,34.095 L265.13,75.602L231.035,41.507z"
                  ></path>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <p class="mt-2">Below is weather for the next five days</p>
      <WeatherForcast :weatherData="weatherStore.weatherStats.map((i) => i)" />
    </div>
    <div v-if="!locationStore.locationZip">
      <LocationForm />
    </div>
  </main>
</template>

<script>
export default {
  data: function () {
    return {
      isEditing: false
    }
  },
  methods: {
    toggleEdit() {
      this.isEditing = !this.isEditing
    }
  }
}
</script>
