let h1=document.getElementById("myTitle");
setTimeout(function(){  
        h1.innerHTML="Really! Not Cool!!"},(2000))
let p1=document.querySelector(".paragraph");
    p1.innerText += " (Not that easy)"
let firstDiv=document.querySelector(".anotherDiv")
    let p2=firstDiv.firstElementChild;
        p2.innerText = "No really, It's hard!!"
let lastDiv=document.getElementsByTagName("div")[2];
    let lastH1=lastDiv.firstElementChild;
        lastH1.innerHTML="Don't worry it's changed"
    let h3=lastDiv.lastElementChild;
        h3.innerText += " It's changed too!!"

console.log("I'm sorry for the darkness of the changes")