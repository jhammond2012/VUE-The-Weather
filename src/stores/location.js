import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', {
  state: () => ({
    locationZip: '0'
  }),
  actions: {
    getLocation() {
      this.locationZip = localStorage.getItem('zip')
    },
    updateLocation(zip) {
      localStorage.setItem('zip', zip)
      this.locationZip = zip
    }
  }
})
