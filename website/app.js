/* Global Variables */
// BaseURL for 'Current weather data' from OpenWeatherMap
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
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
    const zipCode = document.querySelector('#zip').value;
    // const zipCode = '14167';
    getWeatherData(baseURL, zipCode, apiKey);
}

/* Function to GET Web API Data*/
const getWeatherData = async (baseURL, zipCode, apiKey) => {
    // 1.
    const res = await fetch(baseURL + zipCode + '&appid=' + apiKey);
    try {
        const data = await res.json();
        console.log(data);
        // 1. We can do something with our returned data here-- like chain promises!
        // Erhaltene Daten DANACH nach ProjectData schreiben
        // .then(function(data) {
        const feelings = document.querySelector('#feelings').value;
        const newEntry = postData('/addEntry', {
            date: newDate,
            feel: feelings,
            temp: data.main.temp
        });
        retrieveData();
    } catch (error) {
        // appropriately handle the error
        console.log('Ein Fehler:', error);
    }
};

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    console.log(data);
    const res = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        // Body data type must match "Content-Type" header
        body: JSON.stringify(data)
    });

    try {
        const newData = await res.json();
        console.log('akt daten:');
        console.log(newData);
        return newData; //! WOFÜR ?
    } catch (error) {
        console.log('error', error);
    }
};

/* Function to GET Project Data */
const getData = async (url = '') => {
    // 1.
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
        // 1. We can do something with our returned data here-- like chain promises!

        // 2.
    } catch (error) {
        // appropriately handle the error
        console.log('error', error);
    }
};

const retrieveData = async () => {
    const res = await fetch('/getProjectData');
    try {
        // Transform into JSON
        const allData = await res.json();
        console.log('bin hier');
        console.log(allData);
        // Write updated data to DOM elements
        const last = allData.length - 1;
        document.getElementById('temp').innerHTML =
            Math.round(allData[last].TEMP) + '°';
        document.getElementById('content').innerHTML = allData[last].FEEL;
        document.getElementById('date').innerHTML = allData[last].DATE;
    } catch (error) {
        // appropriately handle the error
        console.log('error', error);
    }
};
