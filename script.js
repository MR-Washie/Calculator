const btn = document.querySelectorAll(".number");
const result = document.getElementById("result");
const body = document.querySelector("body");

btn.forEach(function(num){
    num.addEventListener("click",function(print){
        if(print.target.id === "1"){
            result.textContent = 1;
        }
        else if(print.target.id === "2"){
            result.textContent = 2;
        }
        if(print.target.id === "3"){
            result.textContent = 3;
        }
        if(print.target.id === "4"){
            result.textContent = 4;
        }
        if(print.target.id === "5"){
            result.textContent = 5;
        }
        if(print.target.id === "6"){
            result.textContent = 6;
        }
        if(print.target.id === "7"){
            result.textContent = 7;
        }
        if(print.target.id === "8"){
            result.textContent = 8;
        }
        if(print.target.id === "9"){
            result.textContent = 9;
        }
        if(print.target.id === "0"){
            result.textContent = 0;
        }
        if(print.target.id === "."){
            result.textContent = ".";
        }
    })
})