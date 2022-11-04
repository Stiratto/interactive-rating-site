let numberContainer = document.querySelector(".numbers-rate");
let numberResult = document.querySelector(".thankyou-state__result");
let submitRedirect = document.querySelector(".buttonRedirect");
let ratingStart = document.querySelector(".container__section");
let ratingEnd = document.querySelector(".thankyou-state");

numberContainer.addEventListener('click', event=>{
    let numberSelected = event.target.innerText;
    numberResult.innerText = numberSelected;
    
    if(numberSelected >0 || numberSelected <=5){
        submitRedirect.addEventListener('click', ()=>{
            ratingStart.style.display = "none";
            ratingEnd.style.display = "flex";
        }) 
    }
    
});




