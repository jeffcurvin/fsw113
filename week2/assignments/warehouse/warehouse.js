const parts = [ 
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12},
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12},
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3},
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1},
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5},
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2},
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2},
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16},
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12},
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12},
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7},
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4},
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty:3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1},
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2},
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12},
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24},
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7},
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1}

]

// list of each part number and qty for check-off in the "detailsList" element
var details=document.getElementById("detailsList")
for (let i = 0; i < parts.length; i++) {
    console.log(parts[i]);
    var part=document.createElement("div")
    details.append(part)
var checkbox=document.createElement("input")
checkbox.type="checkbox"
part.append(checkbox)
console.log(parts[i].partDescr)
console.log(parts[i].partNbr)
console.log(parts[i].qty)
part.innerHTML+=`${parts[i].qty} (${parts[i].partNbr}) - ${parts[i].partDescr}`
}
// if parts requiring special handling exist (in aisle B3), list of items needing 
// special packaging in the "specialPackaging" element, else remove element
var packaging=document.getElementById("specialPackaging")
const sp=parts.filter((item)=>{
    return (item.aisle==="B3")
})
    
    //if (sp>0){
        var sp1=sp.map((item)=>{
            var part=document.createElement("div")
            part.innerHTML= (`Item: ${item.partNbr} / Qty: ${item.qty} `)
            packaging.append(part)
        })
        //packaging.innerHTML+=sp1//}
    
   // else (packaging.remove())

// if hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"
// element and remind them to get gloves, else remove element
var hazardous=document.getElementById('hazardousMaterials')
// for (let i = 0; i < parts.length; i++) {
//     console.log(parts[i]);
//     if (parts[i].aisle==='J4'){
//         hazardous.innerHTML+=`</br>${parts[i].qty} (${parts[i].partNbr}) - ${parts[i].partDescr}</br>`
//     }
//    // else (hazardous.remove())
// }
const h=parts.filter((item)=>{
    return (item.aisle==="J4")
})
    
    //if (sp>0){
        var h1=h.map((item)=>{
            var part=document.createElement("div")
            part.innerHTML= (`Item: ${item.partNbr} / Qty: ${item.qty} `)
            hazardous.append(part)
        })
        hazardous.innerHTML+="get gloves"
// if all items in the order are small parts (aisle H1), then let employee know that they should take 
// a basket and go dirctly to aisle H1
var small=document.getElementById('smallItemsOnly')
const small1=parts.every((item)=>{
    return item.aisle==='H1'
})
console.log(small1)
    if (small1){
        small.innerHTML+=`<br>grab a basket and go directly to aisle H1</br>`
    }
    else (small.remove())

// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded"
// element that they will need to reserve a forklift, else remove the element
var large=document.getElementById('forkiftNeeded')
const large1=parts.some((item)=>{
    return (item.aisle==='S'||item.aisle==='T'||item.aisle==='U')
})
console.log(large1)
    if (large1){
        large.innerHTML=`reserve a forklift</br>`
    }
    else (large.remove())
// sum up the total number of parts and append that number to the text already in "totalItems" element
const total=parts.reduce((currentTotal,item)=>{
    return (item.qty+currentTotal)
},0)
document.getElementById('totalItems').innerHTML="Total number of parts in order: "+total