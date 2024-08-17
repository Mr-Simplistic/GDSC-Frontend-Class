// home section 
let counter = document.getElementById("counter")
let plusOne = document.getElementById("plus-one")
let plusTwo = document.getElementById("plus-two")
let plusThree = document.getElementById("plus-three")

var currentNumber=parseInt(counter.textContent);

plusOne.addEventListener('click',function(){
    var currentNumber=parseInt(counter.textContent);
    counter.textContent = currentNumber + 1;
})

plusTwo.addEventListener('click',function(){
    var currentNumber=parseInt(counter.textContent);
    counter.textContent = currentNumber + 2;
})
plusThree.addEventListener('click',function(){
    var currentNumber=parseInt(counter.textContent);
    counter.textContent = currentNumber + 3;
})

// guest section 'G' stands for Guest

let G_counter = document.getElementById("g-counter")
let G_plusOne = document.getElementById("g-plus-one")
let G_plusTwo = document.getElementById("g-plus-two")
let G_plusThree = document.getElementById("g-plus-three")

var G_currentNumber=parseInt(G_counter.textContent);

G_plusOne.addEventListener('click',function(){
    var G_currentNumber=parseInt(G_counter.textContent);
    G_counter.textContent = G_currentNumber + 1;
})

G_plusTwo.addEventListener('click',function(){
    var G_currentNumber=parseInt(G_counter.textContent);
    G_counter.textContent = G_currentNumber + 2;
})
G_plusThree.addEventListener('click',function(){
    var G_currentNumber=parseInt(G_counter.textContent);
    G_counter.textContent = G_currentNumber + 3;
})

let Reset = document.getElementById("reset")
Reset.addEventListener('click',function(){
    G_counter.textContent = 0;
    counter.textContent = 0 ;
})

