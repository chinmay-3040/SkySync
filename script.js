const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

const cities = ['Mumbai', 'Antarctica', 'London', 'Tokyo', 'Shanghai', 'Mexico'];
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b14c1f1f7amsh01b1dd70c1021cfp1625e4jsncdd066930060',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
};

// Function to update weather data for a city
async function updateWeatherData(city){
    try {
        const response = await fetch(`${url}?city=${city}`, options);
        if (response.ok) {
            const data = await response.json();

            // Update HTML elements with data from the API response
            document.getElementById(`${city}_temp`).textContent = data.temp;
            document.getElementById(`${city}_Feels_like`).textContent = data.feels_like;
            document.getElementById(`${city}_Humidity`).textContent = data.humidity;
            document.getElementById(`${city}_Min_temp`).textContent = data.min_temp;
            document.getElementById(`${city}_Max_temp`).textContent = data.max_temp;
            document.getElementById(`${city}_Wind_speed`).textContent = data.wind_speed;
            document.getElementById(`${city}_Wind_degree`).textContent = data.wind_degrees;
            document.getElementById(`${city}_Sunrise`).textContent = data.sunrise;
            document.getElementById(`${city}_Sunset`).textContent = data.sunset;
        } else {
            console.error(`Failed to fetch data for ${city}`);
        }
    } catch (error) {
        console.error(error);
    }
}

// Loop through the cities and update their weather data
for (const city of cities) {
    updateWeatherData(city);
}

// Handle form submission (if needed)


async function getWeather(city) {
    cityName.innerHTML=city
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b14c1f1f7amsh01b1dd70c1021cfp1625e4jsncdd066930060',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options);
        const data = await response.json(); // Parse the response as JSON

        // Access and update HTML elements
        const temp = document.getElementById('temp');
        const temp2 = document.getElementById('temp2');
        const feels_like = document.getElementById('feels_like');
        const humidity = document.getElementById('humidity');
        const humidity2 = document.getElementById('humidity2');
        const min_temp = document.getElementById('min_temp');
        const max_temp = document.getElementById('max_temp');
        const wind_speed = document.getElementById('wind_speed');
        const wind_speed2 = document.getElementById('wind_speed2');
        const wind_degrees = document.getElementById('wind_degrees');
        const sunrise = document.getElementById('sunrise');
        const sunset = document.getElementById('sunset');

        // Update HTML elements with data from the API response
        temp.innerHTML = data.temp;
        temp2.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        humidity2.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_speed2.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;
    } catch (error) {
        console.error(error);
    }
}



submit.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission
    getWeather(city.value);
});
// Call the async function with a specific city (e.g., 'Delhi')
getWeather("Mumbai");



