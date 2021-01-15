// var newCity = document.createElement("div");
var citiesList = [];

// var hi = function() {
//     var city = document.getElementById("input").value;
//     console.log(city);
//     var newCity = document.createElement("<p>");
//     newCity.setAttribute("text", "yesssss");
//     var newName = document.getElementById("theNames");
//     newName.appendChild(newCity);
// };

function hi() {
    var cityList = document.getElementById("theNames");
    var userCity = document.getElementById("input").value;
    citiesList.push(userCity);
  var newCity = document.createElement("input");
  newCity.setAttribute("value", citiesList[0]);
  cityList.appendChild(newCity);
}