/* Global Variables */
// BaseURL for 'Current weather data' from OpenWeatherMap
const baseURL = 'http://api.openweathermap.org/geo/1.0/zip?zip=';
// Personal API Key for OpenWeatherMap API
const apiKey = '273ac0cab962762527c58f48b36712ff&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e) {
    // Get ZIP from HTML
    // const zipCode = document.querySelector('#zip').value;
    const zipCode = '90210';
    // const zipCode = 'lat=34.0901&lon=-118.4065';
    getWeatherData(baseURL, zipCode, apiKey);
    // console.info(zipCode);
}

/* Function to GET Web API Data*/
const getWeatherData = async (baseURL, zipCode, apiKey) => {
    // 1.
    const res = await fetch(baseURL + zipCode + '&appid=' + apiKey);
    try {
        const data = await res.json();
        console.log(data);
        // 1. We can do something with our returned data here-- like chain promises!

        // 2.
        // postData('/addAnimal', data)
    } catch (error) {
        // appropriately handle the error
        console.log('error', error);
    }
};
/* Function to POST data */

/* Function to GET Project Data */
