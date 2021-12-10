let x = "John"
let y ="Doe"
console.log(x +" <> "+ y)




const bigGuy ={
    name: "Alejandro",
    surname: "Perrete",
    email: "alePerro@hotmail.ru",
}
console.log(bigGuy)




delete bigGuy.email

console.log(bigGuy)




const arry = ["hi","wassup","vamonoh","five","six","buenoooo","almost","finishin","aleluya"]

console.log(arry)



let bigArry=[]

for(let i=0;i<100;i++){
    let randomNumber =  Math.floor(Math.random()* 500)
    return bigArry += randomNumber

}
console.log(bigArry)

// you need to use [i], so every generate number willl insert in the bigArray.let arrayRandom26=[]
// for(i=0; i<100; i++){
//     arrayRandom26[i]=Math.floor(Math.random()*100)+1
// }




let mainArray=[subArray1,subArray2]
let subArray1=[]
let subArray2=[]




// 29

const lengthSeeker = function(arr1,arr2){
    arr1.length() < arr2.length() ? arr2 : arr1
}


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
    for (lupNode of lupNodes ){
        return lupNode
    }
}

//34

const headChange = function(){
    const changerNode = document.getElementsByTagName("h1")[0]

    changerNode.innerText = "yooooop, I'm changed!"
}

//35

const xtraRow = function(){
    xtraNode = document.getElementsByTagName("table")[0]

    xtraNode.createElement("tr")
}


//36

const classAdd = function(){
    addNodes = document.getElementsByTagName("tr")
    for(addNode of addNodes){
        addNode.classList("test")
    }
}

//37

