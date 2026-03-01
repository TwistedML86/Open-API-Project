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

    