//varibles and query selectors
let submit = document.querySelector('.btn').addEventListener('click',consolee)
//let input = document.querySelector('.input').value;
//document.querySelector()
///document.querySelector()
//document.querySelector()
//document.querySelector()
function consolee(event)  {
   event.preventDefault()
    
    let input = document.querySelector('.input').value;
    console.log(input)
var webApi = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=e94d3751cdac00ef20b7934919ffb413&units=imperial`

//Weather API
fetch(webApi)
.then(  (response) => { 
    return response.json()


})
.then(  (data) => {
console.log(data)
var currentDay = data.list[0]
document.querySelector('.city').innerText = data.city.name
document.querySelector('.temp').innerText = "Temp : " + currentDay.main.temp
document.querySelector('.wind').innerText = "Wind : " + currentDay.wind.speed + "mph"
document.querySelector('.humidity').innerText = "Humidity : " + currentDay.main.humidity
document.querySelector('.fiveday').innerHTML = ''
for(var i = 7; i < data.list.length; i+=8 ){

var current5day = data.list[i]
var card = document.createElement('div')
card.style.border = '1px solid black'
card.style.padding = '10px'
//card.style.width = ' 120px'

var day = document.createElement('h3')
day.innerText =  current5day.dt_txt
card.appendChild(day)


var temp = document.createElement('p')
temp.innerText = 'Temp: ' + current5day.main.temp
card.appendChild(temp)



var wind = document.createElement('p')
wind.innerText = 'Wind: ' + current5day.wind.speed + 'MPH'
card.appendChild(wind)



var Humidity = document.createElement('p')
Humidity.innerText = 'Humidity: ' + current5day.main.humidity
card.appendChild(Humidity)




document.querySelector('.fiveday').appendChild(card)

}



})
}