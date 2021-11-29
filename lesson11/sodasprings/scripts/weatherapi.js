
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=a12d75a861d9cada98d7c5f0a788010f';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const f = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(f);
        currently = jsObject.list[0].weather[0].description;
        document.getElementById('currently').textContent = currently.charAt(0).toUpperCase() + currently.slice(1);
        document.getElementById('high').textContent = jsObject.list[0].main.temp_max + ' °F';
        document.getElementById('humidity').textContent = jsObject.list[0].main.humidity + ' %';
        document.getElementById('wind-speed').textContent = jsObject.list[0].wind.speed + ' mph';

        // get temp
        let current_temp = jsObject.list[0].main.temp_max;

        // get windspeed
        let current_wind_speed = jsObject.list[0].wind.speed;


        // calc winchill
        current_temp = parseInt(current_temp);
        current_wind_speed = parseInt(current_wind_speed);

        let wind_chill = 35.74 + (0.6215 * current_temp) - (35.75 * (current_wind_speed ** 0.16)) + (0.4275 * current_temp * (current_wind_speed ** 0.16));

        wind_chill = wind_chill.toFixed(2) + ' °F';


        // display windchill 
        document.getElementById("wind-chill-value").innerText = wind_chill ;

        document.getElementById('icon1').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png');
        document.getElementById('icon1').setAttribute('alt', jsObject.list[0].weather[0].description);
        document.getElementById('degree1').innerText = jsObject.list[0].main.temp_max + ' °F';

        document.getElementById('icon2').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png');
        document.getElementById('icon2').setAttribute('alt', jsObject.list[1].weather[0].description);
        document.getElementById('degree2').innerText = jsObject.list[1].main.temp_max + ' °F';

        document.getElementById('icon3').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[2].weather[0].icon + '.png');
        document.getElementById('icon3').setAttribute('alt', jsObject.list[2].weather[0].description);
        document.getElementById('degree3').innerText = jsObject.list[2].main.temp_max + ' °F';

        document.getElementById('icon4').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[3].weather[0].icon + '.png');
        document.getElementById('icon4').setAttribute('alt', jsObject.list[3].weather[0].description);
        document.getElementById('degree4').innerText = jsObject.list[3].main.temp_max + ' °F';

        document.getElementById('icon5').setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[4].weather[0].icon + '.png');
        document.getElementById('icon5').setAttribute('alt', jsObject.list[4].weather[0].description);
        document.getElementById('degree5').innerText = jsObject.list[4].main.temp_max + ' °F';
    });