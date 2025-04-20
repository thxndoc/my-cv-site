const weather = document.getElementById("weather");

navigator.geolocation.getCurrentPosition(async position => {
    try {
        const response = await fetch (`https://api.open-meteo.com/v1/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
        if (!response.ok) {
            throw Error ("Weather data not available")
        }
        const data = await response.json()
       
    } catch (err) {
        console.error(err)
    }
});