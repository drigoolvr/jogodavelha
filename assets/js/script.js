//Quadrado 1
document.querySelector('.quadrado1').addEventListener("click", function(){
    let quad = document.querySelector('.quadrado1');    
    jogada(quad);       
});

//Quadrado 2
document.querySelector('.quadrado2').addEventListener("click", function(){
    let quad = document.querySelector('.quadrado2');
    jogada(quad); 
});

//Quadrado 3
document.querySelector('.quadrado3').addEventListener("click", function(){   
    let quad = document.querySelector('.quadrado3');
    jogada(quad); 
});

//Quadrado 4
document.querySelector('.quadrado4').addEventListener("click", function(){
    let quad = document.querySelector('.quadrado4');
    jogada(quad); 
});

//Quadrado 5
document.querySelector('.quadrado5').addEventListener("click", function(){
    let quad = document.querySelector('.quadrado5');
    jogada(quad); 
});

//Quadrado 6
document.querySelector('.quadrado6').addEventListener("click", function(){
    let quad = document.querySelector('.quadrado6');
    jogada(quad); 
});

//Quadrado 7
document.querySelector('.quadrado7').addEventListener("click", function(){
    let quad = document.querySelector('.quadrado7');
    jogada(quad); 
});

//Quadrado 8
document.querySelector('.quadrado8').addEventListener("click", function(){
    let quad = document.querySelector('.quadrado8');
    jogada(quad); 
});

//Quadrado 9
document.querySelector('.quadrado9').addEventListener("click", function(){
    let quad = document.querySelector('.quadrado9');
    jogada(quad); 
});

function jogada(quad){
    let player = document.querySelector('.jogador');
    if(player.innerHTML == "O") {
        quad.innerHTML = "O";
        player.innerHTML = "X";
    }
    else {
        quad.innerHTML = "X";
        player.innerHTML = "O";
    }
}


