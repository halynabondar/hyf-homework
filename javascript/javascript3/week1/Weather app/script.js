let apiKey = "9380dd2ab47018447083c22d9985a598";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=${apiKey}&units=metric`;
const btn = document.getElementById('btn');
const cityValue = document.getElementById('city-value');
fetch(apiUrl)
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok' + response.statusText);
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });