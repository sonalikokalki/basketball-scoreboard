let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");
let homeCount = 0;
let guestCount = 0;

function increaseHome1(){
    homeCount += 1;
    homeEl.innerText = homeCount;
}
function increaseHome2(){
    homeCount += 2;
    homeEl.innerText = homeCount;
}
function increaseHome3(){
    homeCount += 3;
    homeEl.innerText = homeCount;
}
function increaseGuest1(){
    guestCount += 1;
    guestEl.innerText = guestCount;
}
function increaseGuest2(){
    guestCount += 2;
    guestEl.innerText = guestCount;
}
function increaseGuest3(){
    guestCount += 3;
    guestEl.innerText = guestCount;
}
function reset(){
    homeCount = 0;
    guestCount = 0;
    homeEl.innerText = homeCount;
    guestEl.innerText = guestCount;
   
}