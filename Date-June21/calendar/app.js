const day = document.getElementById('weekDays');
const date = document.getElementById('date');
const monthText = document.getElementById('month');
const yearText = document.getElementById('year');
const monthDropdown = document.getElementById('monthDropdown');
const yearDropdown = document.getElementById('yearDropdown');
const showCurrentDate = document.getElementById('showCurrentDate');
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let NAV = 0;
let selectedMonthFromDropdown = new Date().getMonth();
let selectedYearFromDropdown = new Date().getFullYear();





for (let item of weekDays) {
    let div = document.createElement('div');
    div.innerText = item;
    div.classList.add('gridItem');
    day.appendChild(div);
}


monthArray.forEach((month) => {
    let option = document.createElement('option');
    option.innerText = month;
    option.value = month;
    monthDropdown.appendChild(option);
})

for (let i = 2010; i <= 2040; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    option.value = i;
    yearDropdown.appendChild(option);
}


function createCalender(selectedMonth = null, selectedYear = null) {

    date.innerHTML = '';

    let dt = new Date();

    if (selectedMonth !== null && selectedYear !== null) {
        dt = new Date(`${selectedMonth} 1, ${selectedYear}`);
    }

    monthDropdown.selectedIndex = dt.getMonth();
    const defaultValue = dt.getFullYear();
    yearDropdown.value = defaultValue;

    if (NAV !== 0) {
        dt.setMonth(new Date().getMonth() + NAV);
    }


    // const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    // console.log(`Month index ${month}`);

    yearText.innerText = year;
    monthText.innerText = monthArray[month];

    //calculates the number of days in a month based on the provided year and month values
    const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();

    const dateObj = new Date(year, month, 1);
    dateObj.setDate(1);

    const firstDayOfMonth = dateObj.getDay();
    // console.log(firstDayOfMonth);
    // console.log(numberOfDaysInMonth);

    function addDate(dateText) {
        let div = document.createElement('div');
        div.innerText = dateText;

        if (dateText === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()) {
            div.classList.add('currentDate');
        } else {
            div.classList.add('dateItem');
        }

        date.appendChild(div);
    }

    function addInactiveDate(dateText) {
        let div = document.createElement('div');
        div.innerText = dateText;
        div.classList.add('inactiveDate');
        date.appendChild(div);
    }

    function addSunday(dateText){
        let div = document.createElement('div');
        div.innerText = dateText;
        div.classList.add('sunday');
        date.appendChild(div);
    }


    let x = 1;
    let sunday = 1;
    for (let i = 1; i <= 42; i++) {
        if (i <= firstDayOfMonth) {
            let lastDayOfPreviousMonth = new Date(year, month, 0).getDate();
            // let diff = lastDayOfPreviousMonth - firstDayOfMonth;
            addInactiveDate((lastDayOfPreviousMonth - firstDayOfMonth) + i);
        } else if (i > numberOfDaysInMonth + firstDayOfMonth) {
            addInactiveDate(x);
            x++;
        } else if(i - sunday === 7 || i === 1){
            addSunday(i - firstDayOfMonth);
            sunday = i;
        }else{
            addDate(i - firstDayOfMonth);
        }
    }

}




function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        NAV++;
        createCalender();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        NAV--;
        createCalender();
    });
}




function selectingMonthFunction(selectedMonthFromDropdown) {
    NAV = 0;
    createCalender(selectedMonthFromDropdown, selectedYearFromDropdown);
}

function selectingYearFunction(selectedYearFromDropdown) {
    NAV = 0;
    createCalender(selectedMonthFromDropdown, selectedYearFromDropdown);
}


initButtons();
createCalender();

//show current date
showCurrentDate.addEventListener('click', function(){
    console.log(`Create function called`);
    NAV = 0;
    createCalender();
});

//selecting month and year from dropdown list
monthDropdown.addEventListener('change', function () {
    selectedMonthFromDropdown = monthDropdown.value;
    selectingMonthFunction(selectedMonthFromDropdown);
});

yearDropdown.addEventListener('change', function () {
    selectedYearFromDropdown = yearDropdown.value;
    selectingYearFunction(selectedYearFromDropdown);
});



