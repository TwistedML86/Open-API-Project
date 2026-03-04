// Open API Project: Open-Meteo Weather Fetch
const url = "https://api.open-meteo.com/v1/forecast?latitude=34.05&longitude=-118.24&current_weather=true";

fetch(url)
    .then(response => response.json())
    .then(weatherData => {
        console.log("Target Alpha Data Secured:", weatherData);
    })
    .catch(error => {
        console.error("Transmission failed:", error);
    });
    // --- TARGET 2: NEW YORK WEATHER Data ---
const nyUrl = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current_weather=true&temperature_unit=fahrenheit";

fetch(nyUrl)
    .then(response => response.json())
    .then(nyData => {
        const nyContainer = document.getElementById('city2-container');
        nyContainer.innerHTML = `
            <h3>Location: New York</h3>
            <p>Temperature: ${nyData.current_weather.temperature}°F</p>
            <p>Wind Speed: ${nyData.current_weather.windspeed}</p>
        `;
    })
    .catch(error => console.error("NY signal lost:", error));


// --- TARGET 3: THE EASTER EGG
const jokeUrl = "https://official-joke-api.appspot.com/random_joke";

fetch(jokeUrl)
    .then(response => response.json())
    .then(jokeData => {
        const jokeContainer = document.getElementById('Funny-Bunny');
        
        jokeContainer.innerHTML = `
            <div style="margin-top: 50px; text-align: center; color: gray; font-size: 0.8em; font-style: italic;">
                <p>Amateur Hour: ${jokeData.setup} ... ${jokeData.punchline}</p>
            </div>
        `;
    })
    .catch(error => console.error("Joke signal lost:", error));