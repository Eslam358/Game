
let start = document.querySelector(".start span");
let name_ = document.querySelector(".name span");
let tries = document.querySelector(".tries span");
let block =Array.from( document.querySelector(".mmory-game-blocks").children);
let blocks =( document.querySelector(".mmory-game-blocks"));
// sound
let tada =( document.querySelector("#sound-tada"));
let wrong =( document.querySelector("#sound-wrong"));
let applause =( document.querySelector("#sound-applause"));

let random =[ ...Array(block.length).keys()];

//---------------------------------------------------------------------------------

start.onclick =function () {
    start.parentElement.style.display = "none";
    let u_nam = prompt("whet your name ?");
    console.log(u_nam)
    if (u_nam ==="") {
        name_.innerHTML = "Eslam fayez"
        } else {
            name_.innerHTML = u_nam  ;    
        }
    }

//---------------------------------------------------------------------------------

        refrsh(random);
//---------------------------------------------------------------------------------

block.forEach((blo, index)=>{
    blo.style.order = random[index];
    
    blo.onclick = (() => {

        blo.classList.add("test");
        let set = document.querySelectorAll(".test")
        if (set.length == 2) {
            blocks.classList.add("off");
        console.log(set[1].dataset.technology)

        if (set[0].dataset.technology == set[1].dataset.technology) {
            set[0].classList.add("right");
            set[1].classList.add("right");
            tada.play();
            let right = document.querySelectorAll(".right")
            if (right.length == block.length) {
                start.parentElement.style.display = "flex";
                start.innerHTML="Good"
                applause.play();
            }
        }else {
            wrong.play();
            tries.innerHTML++;
        }
        
        setTimeout(() => {
            set[0].classList.remove("test");
            set[1].classList.remove("test");
            blocks.classList.remove("off");
        }, 1000);
    }
    })
});

//---------------functions------------------------------------------------------------

function refrsh (arr) {
    let cot = arr.length,
        rondom,
        tar;
    
         while (cot > 0) {
            rondom = Math.floor(Math.random() * cot);
            cot--;
            tar = arr[cot];
            arr[cot] = arr[rondom];
           arr[rondom] = tar;

         }

        }