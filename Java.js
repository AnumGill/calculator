let isDOBOpen =  false;
let dateofbirth;
const settingIconEl = document.getElementById("s-icon");
const settingContentEl = document.getElementById("s-content");
const initialTextEl = document.getElementById("initialText");
const afterDOBBtnTxtEl = document.getElementById("afterDOBBtnTxt");
const dobButtonEl = document.getElementById("dobButton");
const dobInputEl = document.getElementById("dobInput");

const yearsEl = document.getElementById("years");
const monthsEl = document.getElementById("months");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const makeTwoDigitNumber = (number) =>
{
    return number > 9 ? number: `0${number}`
}; 

const toggleDataofBirthSelector = () => {
    if (isDOBOpen) {
        settingContentEl.classList.add("hide");
    }
    else {
        settingContentEl.classList.remove("hide");
    }

    isDOBOpen = !isDOBOpen;

    console.log("Toggle", isDOBOpen);

};

const updateAge = () => {

    const currentDate = new Date();
    const dateDiff = currentDate - dateofbirth;
    const years = Math.floor(dateDiff/(1000*60*60*24*365));
    const months = Math.floor((dateDiff/(1000*60*60*24*365))%12);
    const days = Math.floor((dateDiff/(1000*60*60*24))%30);
    const hours = Math.floor((dateDiff/(1000*60*60))%24);
    const minutes = Math.floor((dateDiff/(1000*60))%60);
    const seconds = Math.floor((dateDiff/1000)%60);
    
    yearsEl.innerHTML = makeTwoDigitNumber(years);
    monthsEl.innerHTML = makeTwoDigitNumber(months);
    daysEl.innerHTML = makeTwoDigitNumber(days);
    hoursEl.innerHTML = makeTwoDigitNumber(hours);
    minutesEl.innerHTML = makeTwoDigitNumber(minutes);
    secondsEl.innerHTML = makeTwoDigitNumber(seconds);

};


const setDOBHandler = () => {
    const dateString = dobInputEl.value;

    dateofbirth = dateString ? new Date(dateString) : null;

    if (dateofbirth){
        initialTextEl.classList.add("hide");
        afterDOBBtnTxtEl.classList.remove("hide");

        setInterval(()=> updateAge(),1000);
    }

    else{
        afterDOBBtnTxtEl.classList.add("hide");
        initialTextEl.classList.remove("hide");
    }
    
}


setDOBHandler();

settingIconEl.addEventListener("click", toggleDataofBirthSelector);
dobButtonEl.addEventListener("click",setDOBHandler);
