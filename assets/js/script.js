var submit = document.getElementById("submit");
var key = "56ecd52b5acc2a2b436104dd13ab2470";
var userCity;
var lat;
var lon;

// fetching city data from API
function currentWeather(userCity) {
 console.log(userCity);

fetch ("https://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&appid=" + key + "&units=imperial")
.then(function(response) {
  return response.json();
}).then(function(response) {
  // console.log(response)
  // response = response
  todayStats(response, userCity);
});

}

// clicking submit button for city search
submit.addEventListener("click", function(event) {
  event.preventDefault();
  var userCity = document.getElementById("input").value.trim();
  
  currentWeather(userCity);
});

// clicking the city in history runs this function
function cityClicked() {
  // var itis = $(".name");
  // console.log(itis);
  var currentCity = $(event.target).text();
  // console.log(currentCity);
  userCity = currentCity;
  // console.log(userCity);
  currentWeather(userCity);
}

// change top display to today's information
function todayStats(response, userCity) {
  // console.log(response);
  // console.log(response.main.temp);
  var lat = response.coord.lat;
  var lon = response.coord.lon;
  console.log(lon);
  console.log(lat);
  var city = document.getElementById("city");
  var temp = document.getElementById("temp");
  var humidity = document.getElementById("humidity");
  var windSpeed = document.getElementById("windSpeed");
  city.innerHTML = response.name + " (" + moment().format('l') + ")";
  temp.innerHTML = response.main.temp + " degrees";
  humidity.innerHTML = response.main.humidity + "% humidity";
  windSpeed.innerHTML = "Wind speed: " + response.wind.speed + " mph";
  newList(userCity, lat, lon);
}

// add to first city in search history
function newList(userCity, lat, lon) {
  var list = document.getElementById("city1");
  list.textContent = userCity;
  // console.log(list);
  // console.log(userCity);

  UVdisplay(lat, lon);
}

function getWeather(event) {
  event.preventDefault();
  var userCity = document.getElementById("input").value.trim();
  
  currentWeather(userCity);
}

function UVdisplay(lat, lon) {
  console.log(userCity);
  console.log(lon);
  console.log(lat);
  var UVurl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat +"&lon=" + lon + "&appid=" + key;
  fetch(UVurl).then(function(response) {
  return response.json()
  })
  .then(function(response) {
    // console.log(response);
  indexDisplay(response);

  })
};

  function indexDisplay(response) {
    var index = response.value;
    console.log(index);
    var uv = document.getElementById("uv");
    uv.innerHTML = index;
  }