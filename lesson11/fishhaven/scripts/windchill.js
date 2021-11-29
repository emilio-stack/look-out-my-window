// get temp
let current_temp = document.getElementById("current-temperature").innerText;

// get windspeed
let current_wind_speed = document.getElementById("current-wind-speed").innerText;


// calc winchill
current_temp = parseInt(current_temp);
current_wind_speed = parseInt(current_wind_speed);

let wind_chill = 35.74 + (0.6215 * current_temp) - (35.75 * (current_wind_speed ** 0.16)) + (0.4275 * current_temp * (current_wind_speed ** 0.16));

wind_chill = wind_chill.toFixed(2);


// display windchill 
document.getElementById("wind-chill-value").innerText = wind_chill ;