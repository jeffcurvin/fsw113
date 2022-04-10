// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function getFromSWAPI(queryType,itemID) {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        console.log(data)
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err)
    })
}

function fetchData(){
var query=document.getElementById('queryType').value
var item=document.getElementById('itemID').value
getFromSWAPI(query,item)
}
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.
function updateInfo(data){
    var query=document.getElementById('queryType').value
var label1=document.getElementById('dataLabel1') 
var value1=document.getElementById('dataValue1')   
var label2=document.getElementById('dataLabel2')
var value2=document.getElementById('dataValue2')

if (query=="people"){console.log(data)
    label1.textContent="Name"
    label2.textContent="eye color"
    value1.textContent=data.name
    value2.textContent=data.eye_color
}
else if (query=="starships"){console.log(data)
    label1.textContent="Name"
    label2.textContent="model"
    value1.textContent=data.name
    value2.textContent=data.model
}
else {
    label1.textContent="Name"
    label2.textContent="url"
    value1.textContent=data.name
    value2.textContent=data.url

}
}
    