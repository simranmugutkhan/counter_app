const counterDisplay = document.querySelector(".count_display");
const increaseBtn = document.querySelector(".increase_btn");
const decreaseBtn = document.querySelector(".decrease_btn");
const resetBtn = document.querySelector(".reset_btn");
let countStatus = document.querySelector(".count_status");
let count = 0;
let stepValue = document.querySelector("#step");

// steps = Number(prompt("Enter the steps:"));

increaseBtn.addEventListener("click",()=>{
    let step = Number(stepValue.value);
    count = count + step;
    counterDisplay.textContent = count;
    updateStatus();
})
decreaseBtn.addEventListener("click",()=>{
    let step = Number(stepValue.value);
    count = count - step;
    counterDisplay.textContent = count;
    updateStatus();
})
resetBtn.addEventListener("click",()=>{
    count = 0;
    counterDisplay.textContent = count;
    updateStatus();
})

let updateStatus = ()=>{
    if(count>0){
        countStatus.textContent = "Count is Positive";
        countStatus.style.color = "green";
    }
    else if(count<0){
        countStatus.textContent = "Count is Negative";
        countStatus.style.color = "red";

    }else{
        countStatus.textContent = "Count is Zero";
        countStatus.style.color = "grey";

    }
}