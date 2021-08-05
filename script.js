// 'use strict';
let boxTop = 200;
let boxLeft = 200;


document.addEventListener('keydown', (event) => {
    const keyName = event.key;

    if(keyName === "ArrowDown"){
        boxTop += 30
        document.getElementById("box").style.top = boxTop + "px";
    }

    if(keyName === "ArrowUp"){
        boxTop -= 30
        document.getElementById("box").style.top = boxTop + "px";

    }

    if(keyName === "ArrowRight"){
        boxLeft += 30
        document.getElementById("box").style.left = boxLeft + "px";

    }

    if(keyName === "ArrowLeft"){
        boxLeft -= 30
        document.getElementById("box").style.left = boxLeft + "px";


    }



});

