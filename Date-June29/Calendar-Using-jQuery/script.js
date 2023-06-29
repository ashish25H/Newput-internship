const jq = $.noConflict();
const weekDays = jq('#week-days');
const monthDropdown = jq('#month-dropdown');
const yearDropdown = jq('#year-dropdown');
const monthText = jq('#month');
const yearText = jq('#year');
const monthRow1 = jq('#month-row-1');
const monthRow2 = jq('#month-row-2');
const monthRow3 = jq('#month-row-3');
const monthRow4 = jq('#month-row-4');
const monthRow5 = jq('#month-row-5');
const monthRow6 = jq('#month-row-6');
const weekDaysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let monthString = '';
let startDate = '';
let endDate = '';
let incrementDecrementFlag = 0; //when you click on right arrow button it will increase and it will decrease when you click on left arrow button.
let selectedMonth = new Date().getMonth();
let selectedYear = new Date().getFullYear();
let checkFunctionCall = false;
let firstRowStr = '';
let secondRowStr = '';
let thiredRowStr = '';
let fourthRowStr = '';
let fifthRowStr = '';
let sixthRowStr = '';

const addWeekDays = () => {
    let str = '';
    for (let item of weekDaysArray) {
        str += `<div class='grid-item'>${item}</div>`;
    }
    weekDays.html(str);
}
addWeekDays();

const setMonthsInDropdown = () => {
    let str = '';
    monthArray.forEach((month) => {
        str += `<option value=${month}>${month}</option>`;
    });
    monthDropdown.html(str);
}
setMonthsInDropdown();

let setYearsInDropdown = () => {
    let str = '';
    for (let i = 2010; i <= 2040; i++) {
        str += `<option value=${i}>${i}</option>`;
    }
    yearDropdown.html(str);
}
setYearsInDropdown();

const addDateString = (i, str) => {
    if (i >= 1 && i <= 7) {
        firstRowStr += str;
        monthRow1.html(firstRowStr);
    } else if (i > 7 && i <= 14) {
        secondRowStr += str;
        monthRow2.html(secondRowStr);
    } else if (i > 14 && i <= 21) {
        thiredRowStr += str;
        monthRow3.html(thiredRowStr);
    } else if (i > 21 && i <= 28) {
        fourthRowStr += str;
        monthRow4.html(fourthRowStr);
    } else if (i > 28 && i <= 35) {
        fifthRowStr += str;
        monthRow5.html(fifthRowStr);
    } else if (i > 35 && i <= 42) {
        sixthRowStr += str;
        monthRow6.html(sixthRowStr);
    }
}

function addSunday(dateText, month, year, i) {
    let str = '';
    if (dateText === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        str += `<div class='current-date month-date sunday' id=${dateText}>${dateText}</div>`;
    } else {
        str += `<div class='month-date sunday' id=${dateText}>${dateText}</div>`;
    }
    addDateString(i, str);
    // date.innerHTML = monthString;
}

function addInactiveDate(dateText, i) {
    let str = '';
    str += `<div class='inactive-date'>${dateText}</div>`;
    // date.innerHTML = monthString;

    addDateString(i, str);
}

function addDate(dateText, month, year, i) {
    let str = '';
    if (dateText === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        str += `<div class='current-date month-date' id=${dateText}>${dateText}</div>`;
    } else {
        str += `<div class='date-item month-date' id=${dateText}>${dateText}</div>`;
    }

    addDateString(i, str);
    // date.innerHTML = monthString;
}

function createCalender(selectedMonth = null, selectedYear = null) {
    firstRowStr = '';
    secondRowStr = '';
    thiredRowStr = '';
    fourthRowStr = '';
    fifthRowStr = '';
    sixthRowStr = '';
    startDate = '';
    endDate = '';
    let dt = new Date();

    if (selectedMonth !== null && selectedYear !== null) {
        if (isNaN(selectedMonth)) {
            dt = new Date(`${selectedMonth} 01, ${selectedYear}`);
        } else {
            dt = new Date(`${monthArray[selectedMonth]} 01, ${selectedYear}`);
        }
    }

    monthDropdown.selectedIndex = dt.getMonth();
    yearDropdown.value = dt.getFullYear();
    monthDropdown.val(monthArray[dt.getMonth()]);
    yearDropdown.val(dt.getFullYear());
    //testing
    console.log(`${dt.getMonth()} ${dt.getFullYear()}`);

    if (incrementDecrementFlag !== 0) {
        dt.setMonth(new Date().getMonth() + incrementDecrementFlag);
    }

    const month = dt.getMonth();
    const year = dt.getFullYear();
    // yearText.innerText = year;
    // monthText.innerText = monthArray[month];
    yearText.text(year);
    monthText.text(monthArray[month]);


    //calculates the number of days in a month based on the provided year and month values
    const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();

    const dateObj = new Date(year, month, 1);
    const firstDayOfMonth = dateObj.getDay();

    let x = 1;
    let sunday = 1;
    for (let i = 1; i <= 42; i++) {
        if (i <= firstDayOfMonth) {
            let lastDayOfPreviousMonth = new Date(year, month, 0).getDate('', month, year);
            addInactiveDate((lastDayOfPreviousMonth - firstDayOfMonth) + i, i);
        } else if (i > numberOfDaysInMonth + firstDayOfMonth) {
            addInactiveDate(x, i);
            x++;
        } else if (i - sunday === 7 || i === 1) {
            addSunday(i - firstDayOfMonth, month, year, i);
            sunday = i;
        } else {
            addDate(i - firstDayOfMonth, month, year, i);
        }
    }

    // monthDate = document.querySelectorAll('.month-date');
    // addDateRangeFeature();

}

function initButtons() {
    document.getElementById('next-button').addEventListener('click', (event) => {
        event.stopPropagation();
        incrementDecrementFlag++;
        createCalender();
    });

    document.getElementById('back-button').addEventListener('click', (event) => {
        event.stopPropagation();
        incrementDecrementFlag--;
        createCalender();
    });
}


createCalender();
initButtons();