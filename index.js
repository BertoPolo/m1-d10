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


//25 Print in the console every string from the previous array

for(let i=0;i<arry.length;i++){
    console.log(arry[i])
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

const tdCalculator = function(){

const tdNodes= document.getElementsByClassName("td")
let totalSum=0
for(let i = 0;i<tdNodes.length;i++){
    const toNumber = parseInt(td.innerText)
    const isNotNumeric = isNaN(toNumber);
          if (!isNotNumeric) {
            totalSum += toNumber;
          }
}
}
tdCalculator()

//45) Delete the last letter from the heading each time the user clicks on it

/* const h1Node = document.getElementsByTagName("h1")[0]
const btn45 = document.createElement("button")
btn45.innerText="exercise 45"
footie.appendChild(btn45)


btn45.addEventListener("click",function(){
let splitter = h1Node.split("")
let removeTheLast = splitter.pop()
let rejoiner = removeTheLast.join()
}) */

//46) Change the background color of a <td> if the user clicks on it

const tdBackChange = function(){
    const tdNodes = document.getElementsByTagName("td")
    for(let i=0;i<tdNodes.length;i++){
        tdNodes[i].addEventListener("click",function(e){
            let selected = e.target
            selected.style.background= "black"
        })
    }
}
tdBackChange()

//47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>

const tableNode = document.getElementById("theTable")
const btn47 =  document.createElement("button")
tableNode.appendChild(btn47)
btn47.innerText="btn47"
const tdNodes = document.getElementsByTagName("td")

btn47.addEventListener("click",function(){
    randomIndex = Math.floor(Math.random()*tdNodes.length)
    tdNodes[randomIndex].remove()
})

//48) Add automatically a pink border to a cell when the mouse hovers it

const pinkBorder = function(){
    const tdNodes = document.getElementsByTagName("td")

    for(let i=0;i<tdNodes.length;i++){
        tdNodes[i].addEventListener("mouseover",function(e){
            tdNodes[i].classList.toggle("pinkBorder")
        })
    }
}
pinkBorder()

//49) Write a function to create a table with 4 rows and 3 columns programmatically 
      //and add it to the bottom of the page


const table4x3Creation = function(){
    const buttonToCall = document.createElement("button")
    buttonToCall.innerText="table cration"
    const placeToBe = document.getElementById("newTables")
    placeToBe.appendChild(buttonToCall)

        buttonToCall.addEventListener("click",function(){
        const newTable = document.createElement("table")
        placeToBe.appendChild(newTable)
    
        for (let i = 0; i < 4; i++) {
            const tRow = document.createElement("tr") 
            newTable.appendChild(tRow)
            
            for(let i=0;i<3;i++){
            const tCol = document.createElement("td")
            tRow.appendChild(tCol)
            tCol.innerText = "hello"
            }
        }
    })
}
table4x3Creation()

//50) Write a function to remove the last table from the page

const tableRemover = function(){
   const lastTableNode= document.getElementsByTagName("table")
   lastTableNode[lastTableNode.length-1].remove()
}