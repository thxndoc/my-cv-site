const weather = document.getElementById("weather");

navigator.geolocation.getCurrentPosition(async position => {
    try {
        const response = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current_weather=true&units=metric`)
        if (!response.ok) {
            throw Error ("Weather data not available")
        }
        const data = await response.json();
        //console.log(data.current_weather);

        // display weather on screen
        weather.textContent = `Current weather is: ${Math.round(data.current_weather.temperature)}°C`
       
    } catch (err) {
        console.error(err);
    }
});