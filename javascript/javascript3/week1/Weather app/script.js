let apiKey = "9380dd2ab47018447083c22d9985a598";
const btn = document.getElementById('btn');
const cityValueInput = document.getElementById('city-value');


const handleWeatherInfo = (event) => {
    event.preventDefault();

    const ul = document.getElementById('weather');
    ul.innerHTML = '';
    const cityValue = cityValueInput.value;

    if (cityValue) {
        const cityName = document.createElement('li');
        cityName.innerHTML = `<b>${cityValue}</b>`;
        cityName.id = "city-name";

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                const temperature = document.createElement('li');
                temperature.innerHTML = `<b>Temperature:</b> ${data.main.temp}°C`;

                const weatherIcon = document.createElement('li')
                weatherIcon.innerHTML = `<b>Description:</b> ${data.weather[0].description}`;
                console.log(data);

                const wind = document.createElement('li');
                wind.innerHTML = `<b>Wind:</b> ${data.wind.speed} m/s`;

                const cloudy = document.createElement('li');
                cloudy.innerHTML = `<b>Cloudy:</b> ${data.clouds.all}%`;

                const whenSunrise = document.createElement('li');
                whenSunrise.innerHTML = `<b>Sunrise:</b> ${new Date(data.sys.sunrise * 1000).toLocaleString('default', { timezone: data.timezone }).slice(11, -3)}`;

                const whenSunset = document.createElement('li');
                whenSunset.innerHTML = `<b>Sunset:</b> ${new Date(data.sys.sunset * 1000).toLocaleString('default', { timezone: data.timezone }).slice(11, -3)}`;

                ul.appendChild(cityName);
                ul.appendChild(temperature);
                ul.appendChild(weatherIcon);
                ul.appendChild(wind);
                ul.appendChild(cloudy);
                ul.appendChild(whenSunrise);
                ul.appendChild(whenSunset);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });

    } else {
        alert("You should write a city name!");
    }

    return ul;
};

btn.addEventListener('click', handleWeatherInfo);