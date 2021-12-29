//21
let x = "John"
let y ="Doe"
console.log(x +" <> "+ y)

//22 Create an object with properties such name, surname, email
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


//26 Create an array with 100 random numbers in it
let bigArry=[]

for(let i=0;i<100;i++){
    let randomNumber =  Math.floor(Math.random()* 500)
    bigArry.push( randomNumber)
    
}

console.log(bigArry)


// 27 Write a function to get the maximum and minimum values from the previously created array
let max=0
let min=500

let maxMin = function(){
    for(let i = 0;i<bigArry.length-1;i++){
        if (bigArry[i] > max) {
            max = bigArry[i];
          }
        if (bigArry[i] < min) {
            min = bigArry[i];
          }
    }
}

maxMin()


console.log(max+" 27 max")
console.log(min+" 27 min")


//28) Create an array of arrays, in which every array has 10 random numbers


let subArray1=[]
let subArray2=[]
let mainArray=[subArray1,subArray2]

for(let i=0;i<10;i++){
    subArray1.push(Math.floor(Math.random()*20))
}

for(let i=0;i<10;i++){
    subArray2.push(Math.floor(Math.random()*20))
}

console.log(mainArray)

// 29) Create a function that gets 2 arrays as parameters and returns the longest one

const lengthSeeker = function(arr1,arr2){
    arr1.length() < arr2.length() ? arr2 : arr1
}

//30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values
console.log("exercice 30")

let biggerSumArray = function(arr1,arr2){
    let arr1Total=0
    let arr2Total=0

    for(let i=0;i<arr1.length;i++){
        arr1Total += arr1[i] 
    }

    for(let i=0;i<arr2.length;i++){
        arr2Total += arr2[i] 
    }
    return arr1Total>arr2Total ? "number one "+arr1Total : "number two "+arr2Total
}
console.log(biggerSumArray(subArray1,subArray2))



//31 Get the element with an id of "container" from the page

const getter = function(){
    let getterNode = document.getElementById("container")
}
getter()

//32 Get every <td> element from the page 

const getterTd = function(){
    let getterNode = document.getElementsByTagName("td")
}
getterTd()

//33 Use a loop for printing the text inside of every <td> element in the page

const tdLoopie = function(){
    
    let lupNodes = document.getElementsByTagName("td")
    for (let i =0;i<lupNodes.length;i++){
        lupNodes.innerText="hello helloo ex33"
        //console.log( lupNodes[i]) its not appended to anywhere
    }
    } 
tdLoopie()

//34) Write a function to change the heading of the page

const headChange = function(){
    let changerNode = document.getElementsByTagName("h1")[0]

    changerNode.innerText = "yooooop, I'm changed!"

}
headChange()

//35 Write a function to add an extra row to the table

const xtraRow = function(){
    const xtraNode = document.getElementsByTagName("table")[0]

    const newTr = document.createElement("tr")
    
    xtraNode.appendChild(newTr)
}
xtraRow()

//36 Write a function to add a class of "test" to each row in the table

const classAdd = function(){
    let addNodes = document.getElementsByTagName("tr")
    for(let i=0;i<addNodes.length;i++){
        addNodes[i].classList.add("test")
    }
}

classAdd()

//37 Write a function to add a red background to every link in the page

const bgRed = function(){
    let bgNodes = document.getElementsByTagName("a")
    for(let bgNode of bgNodes){
        bgNode.style.background = "red"
    }
}
bgRed()

//38 Console log "Page loaded" when the page is correctly loaded

window.onload = function() {
    console.log("Page Loaded")
    
}

//39 Write a function to add new items to a unordered list

const addItems = function(){
    let addNodes = document.querySelector("ol")
        let theLi = document.createElement("li")
        theLi.innerText = "hi,Im testing"
        addNodes.appendChild(theLi)
    
}
addItems()

//40

const emptyLi = function(){
    liNode =document.getElementsByTagName("li")[0]
    liNode.innerText= ""
}
emptyLi()

//41 Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
    const clicker = function(){    
const clikiNode = document.querySelectorAll("a")
for(let i=0;i<clikiNode.length;i++){

    clikiNode[i].addEventListener("mouseover",function(){
        alert("hola")
        
    })
}
}
clicker()


// 42) Create a button that will hide every image on the page when clicked

const footie = document.getElementsByTagName("footer")[0]
const bottie = document.createElement("button")
footie.appendChild(bottie)
bottie.innerText="exercise 42"

bottie.addEventListener("click",function(){
    const imgsNode = document.getElementsByTagName("img")
    for(let i = 0;i<imgsNode.length;i++){
        imgsNode[i].classList.toggle("hidder")
    }
})

//43) Create a button that will hide or show the table on the page when clicked

const btn43 = document.createElement("button")
btn43.innerText="exercise 43"
footie.appendChild(btn43)

const tbody = document.getElementsByTagName("table")[0]

btn43.addEventListener("click",function(){
    tbody.classList.toggle("hidder")
})


//44) Write a function for calculating the sum of every number 
//    inside all the table cells (if their content is numeric)

const calculator = function(){


}



