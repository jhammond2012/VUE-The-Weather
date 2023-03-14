<template>
  <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 flex flex-col">
    <div class="truncate text-sm font-medium text-gray-500">{{ formatDate(date) }}</div>
    <div class="flex flex-col text-center items-center justify-between">
      <div
        class="text-xs font-semibold tracking-tight text-gray-900 flex flex-col justify-center items-center"
      >
        <img v-bind:src="image" />
        {{ weather }}
      </div>
      <div class="flex flex-col items-end">
        <div class="mt-1 text-sm font-semibold tracking-tight text-gray-900">
          High: {{ high }} &#8457;
        </div>
        <div class="mt-1 text-sm font-semibold tracking-tight text-gray-900">
          Low: {{ low }} &#8457;
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props: ['date', 'image', 'high', 'low', 'weather'],
  methods: {
    formatDate(date) {
      return moment(date).format('dddd, MMMM Do')
    }
  }
}
</script>
