const apikey = "466f0346c828f5d08d3ca9c0b67ad15d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");



async function checkWeather(city){
     const response = await fetch(apiUrl + city + `&appid=${apikey}`);


     if(response.status == 404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
     }
     else{
          var data = await response.json();
          document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
     document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

     if(data.weather[0].main == "Clouds"){
          weathericon.src = "images/clouds.png"
     }
     else if(data.weather[0].main == "Clear"){
          weathericon.src = "images/clear.png"
     }
     else if(data.weather[0].main == "Rain"){
          weathericon.src = "images/rain.png"
     }
     else if(data.weather[0].main == "Drizzle"){
          weathericon.src = "images/drizzle.png"
     }
     else if(data.weather[0].main == "Mist"){
          weathericon.src = "images/mist.png"
     }

     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
     }
     
}
searchbtn.addEventListener("click",()=>{
     checkWeather(searchbox.value);
})

document.addEventListener('DOMContentLoaded', function() {
  var menu = document.querySelector('.menus');
  menu.style.display = 'none'; // Ensure the menu is hidden on page load
});



function addedmenu() {
  var menu = document.querySelector('.menus');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}










const quotes = document.querySelector('.quote');
const author = document.querySelector('.person');
const change = document.querySelector('.nextquote');
const enterdquote = document.getElementById('quoteInput');
const enterdname = document.getElementById('nameInput');
const change2 = document.getElementById('enterdvalues');
data = [
    {quote: "“Ask the right questions,and nature will open the doors to her secrets.”", author: "- C.V Raman"},
    {quote: "“Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.”", author: "- A.P.J Abdul Kalam"},
    {quote: "“Work performed with higher knowledge or skill, capacity or ambition, usually brings a correspondingly higher reward.”" , author: "- Mokshagundam Visvesvaraya"},
    {quote: "“Dream isn't What you see while resting something doesnt allow you to rest.”", author: "- Nambi Narayanan"},
    {quote: "“When People throw Stones at You , You turn them into Milestones.”", author: "- Sachin Tendulkar"}
];


change.addEventListener("click", ()=>{
let random = Math.floor(Math.random()*data.length);
quotes.innerHTML = data[random].quote;
author.innerHTML = data[random].author;

})
change2.addEventListener("click",()=>{
// enterdquote.value = quotes.innerHTML;
// quotes.innerHTML = enterdquote.innerText;
const enteredQuote = "“" + enterdquote.value + ".”";
    const enteredAuthor = "- " + enterdname.value;
    if (enteredQuote && enteredAuthor) {
        quotes.innerHTML = enteredQuote;
        author.innerHTML = enteredAuthor;
        data.push({ quote: enteredQuote, author: enteredAuthor });
        enterdquote.value = '';
        enterdname.value = '';
        wall.style.backgroundImage = 'url(./new-background-image.jpg)';
    } else {
        alert("Please enter both a quote and an author.");
    }
    localStorage.setItem('data', JSON.stringify(data));
})
