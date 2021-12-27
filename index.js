//21
let x = "John"
let y ="Doe"
console.log(x +" <> "+ y)

//22
const bigGuy ={
    name: "Alejandro",
    surname: "Perrete",
    email: "alePerro@hotmail.ru",
}
console.log(bigGuy)

//23
delete bigGuy.email

console.log(bigGuy)

//24
const arry = ["hi","wassup","vamonoh","five","six","buenoooo","almost","finishin","aleluya"]

console.log(arry)


//25

for(let value of arry){
    value++
    console.log(value)
}


//26
let bigArry=[]

for(let i=0;i<100;i++){
    let randomNumber =  Math.floor(Math.random()* 500)
     bigArry.push( randomNumber)

}

console.log(bigArry)




// you need to use [i], so every generate number willl insert in the bigArray.let arrayRandom26=[]
// for(i=0; i<100; i++){
//     arrayRandom26[i]=Math.floor(Math.random()*100)+1
// } no estoy muy seguro de su respuesta

//2


/* let mainArray=[subArray1,subArray2]
let subArray1=[]
let subArray2=[] */


//2

//2


// 29

const lengthSeeker = function(arr1,arr2){
    arr1.length() < arr2.length() ? arr2 : arr1
}

//30 


//-------------


//31 

const getter = function(){
    let getterNode = document.getElementById("container")
}

//32 not sure if i have to loop

const gettertwo = function(){
    let getterNode = document.getElementsByTagName("td")
}
//33 HAVE TO FINISH. not good

const loopie = function(){
    let lupNodes = document.getElementsByTagName("td")
    for (let lupNode of lupNodes ){
        return lupNode
    }
}

//34

const headChange = function(){
    let changerNode = document.getElementsByTagName("h1")[0]

    changerNode.innerText = "yooooop, I'm changed!"
}

//35

const xtraRow = function(){
    const xtraNode = document.getElementsByTagName("table")[0]

    xtraNode.createElement("tr")
}


//36

const classAdd = function(){
    let addNodes = document.getElementsByTagName("tr")
    for(let addNode of addNodes){
        addNode.classList("test")
    }
}

//37

const bgRed = function(){
    let bgNodes = document.getElementsByTagName("a")
    for(let bgNode of bgNodes){
        bgNode.style.background = "black"
    }
}

//38

window.onload = function () {
    console.log("Page Loaded")
    hoverLink()
}

//39

const addItems = function(){
    let addNodes = document.getElementsByTagName("ul")
    for(let addALi of addNodes){
        addALi.createElement("li")
        addALi.innerText = "hi,Im testing"
    }
}
//40

const emptyLi = function(){
    liNode =document.getElementsByTagName("li")[0]
    liNode.innerText= ""
}

//41 Add an eventListener to show an alert when the cursor hovers a link, displaying its href property

const hoverLink = function(){
const hoverNode = document.getElementById("aa")
for(let i =0;i<hoverNode.length;i++){
    hoverNode.addEventListener("mouseover", function(event){
        event.target.style.color = "orange"
        })

}
}



