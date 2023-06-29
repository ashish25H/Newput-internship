const day = document.getElementById('week-days');
const date = document.getElementById('month-date');
const monthText = document.getElementById('month');
const yearText = document.getElementById('year');
const monthDropdown = document.getElementById('month-dropdown');
const yearDropdown = document.getElementById('year-dropdown');
const showCurrentDate = document.getElementById('show-current-date');
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const body = document.querySelector('body');

let startDate = '';
let endDate = '';
let incrementDecrementFlag = 0; //when you click on right arrow button it will increase and it will decrease when you click on left arrow button.
let selectedMonth = new Date().getMonth();
let selectedYear = new Date().getFullYear();
let monthString = '';
let checkFunctionCall = false;

body.addEventListener('click', () => {
    location.reload();
    console.log(`reload`);
});

function addWeekDays() {
    let str = '';
    for (let item of weekDays) {
        str += `<div class='grid-item'>${item}</div>`
    }
    day.innerHTML = str;
}
addWeekDays();

function setMonthsInDropdown() {
    let str = '';
    monthArray.forEach((month) => {
        str += `<option value=${month}>${month}</option>`;
    });
    monthDropdown.innerHTML = str;
}
setMonthsInDropdown();

let setYearsInDropdown = () => {
    let str = '';
    for (let i = 2010; i <= 2040; i++) {
        str += `<option value=${i}>${i}</option>`;
    }
    yearDropdown.innerHTML = str;
}
setYearsInDropdown();

function addSunday(dateText, month, year) {
    if (dateText === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        monthString += `<div class='current-date month-date sunday' id=${dateText}>${dateText}</div>`;
    } else {
        monthString += `<div class='month-date sunday' id=${dateText}>${dateText}</div>`;
    }

    date.innerHTML = monthString;
}

function addInactiveDate(dateText) {
    monthString += `<div class='inactive-date'>${dateText}</div>`;
    date.innerHTML = monthString;
}

function addDate(dateText, month, year) {
    if (dateText === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
        monthString += `<div class='current-date month-date' id=${dateText}>${dateText}</div>`;
    } else {
        monthString += `<div class='date-item month-date' id=${dateText}>${dateText}</div>`;
    }

    date.innerHTML = monthString;
}

function addDateRangeClass(startDate, endDate) {
    // console.log(`Start Date ${startDate} / End Date : ${endDate} in addDateRangeClass function`);
    checkFunctionCall = true;
    let min = +startDate < +endDate ? +startDate : +endDate;
    let max = +startDate > +endDate ? +startDate : +endDate;
    for (let i = min; i <= max; i++) {
        const item = document.getElementById(`${i}`);
        item.classList.remove('date-item');
        item.classList.remove('current-date');
        item.classList.add('date-range');
    }
}

function addDateRangeFeature() {

    let monthDate = document.querySelectorAll('.month-date');
    monthDate.forEach((dateItem) => {
        dateItem.addEventListener('click', function (event) {
            if (startDate === '' && endDate === '') {
                startDate = this.id;
            } else if (endDate === '') {
                endDate = this.id;
            }

            if (startDate !== '' && endDate !== '') {
                addDateRangeClass(startDate, endDate);
            }
            console.log(`click works`);
            console.log(`Start Date : ${startDate} / End date : ${endDate}`);
            if (checkFunctionCall) {
                startDate = '';
                endDate = '';

                checkFunctionCall = false;
            }

            event.stopPropagation();
            console.log(`Start Date : ${startDate} / End date : ${endDate}`);
        });
    });
}

function createCalender(selectedMonth = null, selectedYear = null) {
    monthString = '';
    // date.innerHTML = '';
    startDate = '';
    endDate = '';
    let dt = new Date();

    if (selectedMonth !== null && selectedYear !== null) {
        // startDate = '';
        // endDate = '';
        if (isNaN(selectedMonth)) {
            dt = new Date(`${selectedMonth} 01, ${selectedYear}`);
        } else {
            dt = new Date(`${monthArray[selectedMonth]} 01, ${selectedYear}`);
        }
    }

    monthDropdown.selectedIndex = dt.getMonth();
    yearDropdown.value = dt.getFullYear();

    if (incrementDecrementFlag !== 0) {
        dt.setMonth(new Date().getMonth() + incrementDecrementFlag);
    }

    const month = dt.getMonth();
    const year = dt.getFullYear();
    yearText.innerText = year;
    monthText.innerText = monthArray[month];

    //calculates the number of days in a month based on the provided year and month values
    const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();

    const dateObj = new Date(year, month, 1);
    const firstDayOfMonth = dateObj.getDay();

    let x = 1;
    let sunday = 1;
    for (let i = 1; i <= 42; i++) {
        if (i <= firstDayOfMonth) {
            let lastDayOfPreviousMonth = new Date(year, month, 0).getDate('', month, year);
            addInactiveDate((lastDayOfPreviousMonth - firstDayOfMonth) + i);
        } else if (i > numberOfDaysInMonth + firstDayOfMonth) {
            addInactiveDate(x);
            x++;
        } else if (i - sunday === 7 || i === 1) {
            addSunday(i - firstDayOfMonth, month, year);
            sunday = i;
        } else {
            addDate(i - firstDayOfMonth, month, year);
        }
    }

    // monthDate = document.querySelectorAll('.month-date');
    addDateRangeFeature();

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

function selectingMonthFunction(selectedMonth) {
    // incrementDecrementFlag = 0;
    // startDate = '';
    // endDate = '';
    createCalender(selectedMonth, selectedYear);
}

function selectingYearFunction(selectedYear) {
    // incrementDecrementFlag = 0;
    // startDate = '';
    // endDate = '';
    createCalender(selectedMonth, selectedYear);
}

initButtons();
createCalender();

//show current date
showCurrentDate.addEventListener('click', function (event) {
    event.stopPropagation();
    incrementDecrementFlag = 0;
    selectedMonth = new Date().getMonth();
    selectedYear = new Date().getFullYear();
    createCalender();
});

//selecting month and year from dropdown list
monthDropdown.addEventListener('change', function (event) {
    event.stopImmediatePropagation();
    selectedMonth = monthDropdown.value;
    selectingMonthFunction(selectedMonth);
});

yearDropdown.addEventListener('change', function (event) {
    event.stopImmediatePropagation();
    selectedYear = yearDropdown.value;
    selectingYearFunction(selectedYear);
});


// function handleChange(event) {
//     // Your code here
//     event.stopPropagation();
//     selectedMonth = monthDropdown.value;
//     selectingMonthFunction(selectedMonth);
//     // Remove the event listener
//     event.currentTarget.removeEventListener('change', handleChange);
// }

// function handleYearChange(event) {
//     // Your code here
//     event.stopPropagation();
//     selectedYear = yearDropdown.value;
//     selectingYearFunction(selectedYear);
//     // Remove the event listener
//     event.currentTarget.removeEventListener('change', handleChange);
// }

// monthDropdown.addEventListener('change', handleChange);
// monthDropdown.addEventListener('change', handleYearChange);



