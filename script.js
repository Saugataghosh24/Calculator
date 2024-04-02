let string= "";
let btns= document.querySelectorAll(".btn");
let input= document.querySelector("input");

let btnsArray = Array.from(btns);  // creating an array from the btns objects
for(button of btnsArray){
    button.addEventListener("click", (e)=>{
        if(e.target.id == "equal"){
            string= eval(string);
            input.value= string;
        }
        else if(e.target.innerHTML == "DEL"){
            string= string.substring(0, string.length-1);
            input.value= string;
        }
        else if(e.target.id == "clear"){
            string= "";
            input.value= string;
        }
        else if(e.target.innerHTML == "%"){
            string= string/100;
            input.value= string;
        }
        else{
        string= string+ e.target.innerHTML;
        input.value= string;
        }
    });
}

