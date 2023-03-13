import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    weatherStats: [],
    currentTemp: 0,
    weatherLocation: '',
  }),
  actions: {
    getWeather() {
      const zip = localStorage.getItem('zip');
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=ce579d9ec5eb40059b6195834231303&q=${zip}&days=5&aqi=no&alerts=no`
      )
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          this.weatherLocation = data.location.name + ', ' + data.location.region;
          this.weatherStats = data.forecast.forecastday;
          this.currentTemp = data.current.temp_f;
        })
        .catch((err) => {
          console.error('Theres an error:', err)
        });
    },
  },
})
