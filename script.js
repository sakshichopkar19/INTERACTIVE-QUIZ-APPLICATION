function getWeather() {
    const city = document.getElementById("city").value;
    const apikey = "2bc017543dd8f80ebe606b7bb3f4490f";

    if (city ==="") {
        altert("Please enter a city name");
        return;
    }

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=2bc017543dd8f80ebe606b7bb3f4490f&units=metric"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404"){
                document.getElementById("result").innerHTML = "City not found";
            } else {

                document.getElementById("result").innerHTML = `
                <p><b>City:</b> $(data.name)</p>
                <p><b>Temperature:</b> ${data.main.temp} °C</p>
                <p><b>Weather:</b> ${data.weather[0].description}</p>

               `;

            }   

        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Error fetching data";

        });    
        }
            

