let array=[1,2,3,4,5,6,7,8,9];
let sum=0
let div=document.getElementById("first")

function sumArr(array){
    for(i in array){
    sum+=array[i]
}return sum}

for(i=0;i<array.length;i++){
    div.innerHTML+=`<ul><li>${array[i]}</li></ul>`
}

div.innerHTML+=`The sum is: ${array[0]}`
for(i=1;i<array.length;i++){
    div.innerHTML+=` + ${array[i]}`
}

div.innerHTML+=` = ${sumArr(array)}`
