const weather = document.getElementById("weather");
const location = document.getElementById("location");

navigator.geolocation.getCurrentPosition(async position => {
    try {
        const weatherResponse = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current_weather=true&units=metric`)
        if (!weatherResponse.ok) {
            throw Error ("Weather data not available")
        }
        const weatherData = await weatherResponse.json();
        //console.log(weatherData.current_weather);

        // display name of area
        const locationResponse = await fetch (`https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`)
        if (!locationResponse.ok) {
            throw Error ("Location data not available")
        }
        const locationData = await locationResponse.json();
        //console.log (locationData);

        // display results
        weather.textContent = 
        `Current weather is: ${Math.round(weatherData.current_weather.temperature)}°C`;

        location.textContent =
        `Location: ${locationData.address.city}`;

    } catch (err) {
        console.error(err);
    }
});