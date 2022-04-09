// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 
var months=document.getElementById("months")
var array=["january","febuary","march","april","may","june","july","august","september","october","november","december"]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
var option=`<option value=${i}>${array[i]}</option>`
months.innerHTML+=option
}
var year=document.getElementById("year")
var button=document.getElementById("btn")
button.addEventListener("click",function(){
    console.log (months.value+1,year.value)
    printCalendar(`${months.value+1}/1/${year.value}`)
})
printCalendar('5/1/2021')


function printCalendar(date){
    const today = new Date(date)
const month = today.getMonth()
let days
switch (month) {
    case 1:
        days = 28
        break
    case 3:
    case 5:
    case 8: 
    case 10:
        days = 30
        break
    default:
        days = 31
}
    
let x
const weekday = today.getDay()
for (x = 0; x < weekday; x++){
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}

let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while ( dt < days)

const monthName = today.toLocaleDateString('default', {month:'long'})
const year = today.getFullYear()
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

const remainder = (7 - ((x + dt) % 7))
let y = 0
while ( y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}}