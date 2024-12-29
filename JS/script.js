document.getElementById("style-btn").onclick = function(){
    document.getElementById("heading").innerText ="I have learning JS" 
    document.getElementById("heading").style.backgroundColor ="red"
    document.getElementById("heading").style.color ="white"
}

document.getElementById("reset-style-btn").onclick = function(){
    document.getElementById("heading").innerText ="learning Java-Script" 
    document.getElementById("heading").style.backgroundColor ="transparent"
    document.getElementById("heading").style.color ="black"
}

document.getElementById("bulb-on").onclick = function(){
    document.getElementById("bulb-img").src ="https://www.w3schools.com/js/pic_bulbon.gif"
    // document.body.style.backgroundColor ="white"

}

document.getElementById("bulb-off").onclick = function(){
    document.getElementById("bulb-img").src ="https://www.w3schools.com/js/pic_bulboff.gif"
    // document.body.style.backgroundColor ="black"
    
}

// window.alert('I am an alert')

// document.getElementById("heading").innerText ="<i>Hafiz_Zuhaib_Azaad</i>"
// document.getElementById("heading").innerHTML ="<i>Hafiz_Zuhaib_Azaad</i>"


console.log("log")


