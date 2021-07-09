const APIKEY = "638a7e7a0dfdc3b6747e7a1ce6018d77";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`;
    fetch(url).then(response=>response.json())
    .then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        
        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerHTML = data.name;
    }) 
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);