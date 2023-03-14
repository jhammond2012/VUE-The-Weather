<script setup>
import SingleWeatherItem from './SingleWeatherItem.vue'
</script>

<template>
  <div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-5">
      <SingleWeatherItem
        v-for="item in weatherData"
        :key="item.date"
        :date="item.date"
        :image="item.day.condition.icon"
        :high="Math.round(item.day.maxtemp_f)"
        :low="Math.round(item.day.mintemp_f)"
        :weather="item.day.condition.text"
      />
    </dl>
  </div>
</template>

<script>
export default {
  props: ['weatherData']
}
</script>
