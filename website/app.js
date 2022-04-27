/* Global Variables */
// BaseURL for 'Current weather data' from OpenWeatherMap
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
// Personal API Key for OpenWeatherMap API
const apiKey = '273ac0cab962762527c58f48b36712ff&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
