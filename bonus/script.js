
let header=document.getElementById("header")
let recipeName=prompt(`Enter the name of the recipe`)
let inputNumIng = parseInt(prompt("Enter the number of ingredients:"))
let ingredientNames =[];
let body=document.getElementById("body")
header.innerHTML=`Recipe name: ${recipeName}`
for(i=0; i<inputNumIng; i++){
    ingredientNames.push(prompt(`Enter the name of ingredient number ${i+1}:`));
    body.innerHTML +=`<ul><li>${ingredientNames[i]}</li></ul>`
}
