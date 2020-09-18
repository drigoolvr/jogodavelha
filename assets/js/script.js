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
    let player = document.querySelector('.player');
    if(player.innerHTML == "O") {
        quad.innerHTML = "O";
        player.innerHTML = "X";
    }
    else {
        quad.innerHTML = "X";
        player.innerHTML = "O";
    }
    quad.style.backgroundColor = "#EEE";
    quad.disabled = true;

    endgame();
}

function endgame(){
    let velha = 0;
    let win = false;
    let jogo = [
        "Jogadas",
        document.querySelector('.quadrado1'),
        document.querySelector('.quadrado2'),
        document.querySelector('.quadrado3'),
        document.querySelector('.quadrado4'),
        document.querySelector('.quadrado5'),
        document.querySelector('.quadrado6'),
        document.querySelector('.quadrado7'),
        document.querySelector('.quadrado8'),
        document.querySelector('.quadrado9')
    ]

    if(jogo[1].innerHTML == jogo[2].innerHTML && jogo[2].innerHTML == jogo[3].innerHTML && jogo[3].innerHTML != "") {
        victory(jogo[1], jogo[2], jogo[3]);
        win = true;
    }

    else if(jogo[1].innerHTML == jogo[4].innerHTML && jogo[4].innerHTML == jogo[7].innerHTML && jogo[7].innerHTML != "") {
        victory(jogo[1], jogo[4], jogo[7]);
        win = true;
    }

    else if(jogo[1].innerHTML == jogo[5].innerHTML && jogo[5].innerHTML == jogo[9].innerHTML && jogo[9].innerHTML != "") {
        victory(jogo[1], jogo[5], jogo[9]);
        win = true;
    }

    else if(jogo[2].innerHTML == jogo[5].innerHTML && jogo[5].innerHTML == jogo[8].innerHTML && jogo[8].innerHTML != "") {
        victory(jogo[2], jogo[5], jogo[8]);
        win = true;
    }

    else if(jogo[3].innerHTML == jogo[5].innerHTML && jogo[5].innerHTML == jogo[7].innerHTML && jogo[7].innerHTML != "") {
        victory(jogo[3], jogo[5], jogo[7]);
        win = true;
    }

    else if(jogo[3].innerHTML == jogo[6].innerHTML && jogo[6].innerHTML == jogo[9].innerHTML && jogo[9].innerHTML != "") {
        victory(jogo[3], jogo[6], jogo[9]);
        win = true;
    }

    else if(jogo[4].innerHTML == jogo[5].innerHTML && jogo[5].innerHTML == jogo[6].innerHTML && jogo[6].innerHTML != "") {
        victory(jogo[4], jogo[5], jogo[6]);
        win = true;
    }

    else if(jogo[7].innerHTML == jogo[8].innerHTML && jogo[8].innerHTML == jogo[9].innerHTML && jogo[9].innerHTML != "") {
        victory(jogo[7], jogo[8], jogo[9]);
        win = true;
    } 

    for(let i = 1; i <= 9; i++) {
        if(jogo[i].innerHTML != "") {
            velha++;
        }
    }

    if(velha == 9 && win == false) {
        document.querySelector('.vez').style.visibility = "hidden";
        document.querySelector('.player').style.color = "Red";
        document.querySelector('.player').innerHTML = "Velha!";
    }   
}


function victory(quad1, quad2, quad3) {
    let score;

    quad1.style.color = "Red";
    quad2.style.color = "Red";
    quad3.style.color = "Red";

    quad1.style.backgroundColor = "Yellow";
    quad2.style.backgroundColor = "Yellow";
    quad3.style.backgroundColor = "Yellow";

    document.querySelector('.vez').style.visibility = "hidden";
    document.querySelector('.player').style.color = "Red";
    document.querySelector('.player').innerHTML = quad1.innerHTML + " Venceu!";

    document.querySelector('.quadrado1').disabled = true;
    document.querySelector('.quadrado2').disabled = true;
    document.querySelector('.quadrado3').disabled = true;
    document.querySelector('.quadrado4').disabled = true;
    document.querySelector('.quadrado5').disabled = true;
    document.querySelector('.quadrado6').disabled = true;
    document.querySelector('.quadrado7').disabled = true;
    document.querySelector('.quadrado8').disabled = true;
    document.querySelector('.quadrado9').disabled = true;

    if(quad1.innerHTML == "O"){
        score = parseInt(document.querySelector('.score-o').innerHTML);
        score++;
        document.querySelector('.score-o').innerHTML = score;
    } 
    else {
        score = parseInt(document.querySelector('.score-x').innerHTML);
        score++;
        document.querySelector('.score-x').innerHTML = score;
    }
}

//Replay Game
document.querySelector('.botao-replay').addEventListener("click", function(){

    document.querySelector('.quadrado1').disabled = false;
    document.querySelector('.quadrado2').disabled = false;
    document.querySelector('.quadrado3').disabled = false;
    document.querySelector('.quadrado4').disabled = false;
    document.querySelector('.quadrado5').disabled = false;
    document.querySelector('.quadrado6').disabled = false;
    document.querySelector('.quadrado7').disabled = false;
    document.querySelector('.quadrado8').disabled = false;
    document.querySelector('.quadrado9').disabled = false;

    document.querySelector('.quadrado1').style.color = "black";
    document.querySelector('.quadrado2').style.color = "black";
    document.querySelector('.quadrado3').style.color = "black";
    document.querySelector('.quadrado4').style.color = "black";
    document.querySelector('.quadrado5').style.color = "black";
    document.querySelector('.quadrado6').style.color = "black";
    document.querySelector('.quadrado7').style.color = "black";
    document.querySelector('.quadrado8').style.color = "black";
    document.querySelector('.quadrado9').style.color = "black";

    document.querySelector('.quadrado1').style.backgroundColor = "white";
    document.querySelector('.quadrado2').style.backgroundColor = "white";
    document.querySelector('.quadrado3').style.backgroundColor = "white";
    document.querySelector('.quadrado4').style.backgroundColor = "white";
    document.querySelector('.quadrado5').style.backgroundColor = "white";
    document.querySelector('.quadrado6').style.backgroundColor = "white";
    document.querySelector('.quadrado7').style.backgroundColor = "white";
    document.querySelector('.quadrado8').style.backgroundColor = "white";
    document.querySelector('.quadrado9').style.backgroundColor = "white";

    document.querySelector('.quadrado1').innerHTML = "";
    document.querySelector('.quadrado2').innerHTML = "";
    document.querySelector('.quadrado3').innerHTML = "";
    document.querySelector('.quadrado4').innerHTML = "";
    document.querySelector('.quadrado5').innerHTML = "";
    document.querySelector('.quadrado6').innerHTML = "";
    document.querySelector('.quadrado7').innerHTML = "";
    document.querySelector('.quadrado8').innerHTML = "";
    document.querySelector('.quadrado9').innerHTML = "";

    document.querySelector('.vez').style.visibility = "visible";
    document.querySelector('.player').style.color = "black";
    document.querySelector('.player').innerHTML = "O";
});


