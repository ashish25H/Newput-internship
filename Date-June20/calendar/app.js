const day = document.getElementById('weekDays');
const date = document.getElementById('date');
const monthText = document.getElementById('month');
const yearText = document.getElementById('year');
const monthDropdown = document.getElementById('monthDropdown');
const yearDropdown = document.getElementById('yearDropdown');
const showCurrentDate = document.getElementById('showCurrentDate');
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let nav = 0;
let selectedMonthFromDropdown = new Date().getMonth();
let selectedYearFromDropdown = new Date().getFullYear();





for (let item of weekDays) {
    let div = document.createElement('div');
    div.innerText = item;
    div.classList.add('gridItem');
    day.appendChild(div);
}


monthArray.forEach((month, i) => {
    let option = document.createElement('option');
    option.innerText = month;
    // option.value = i;
    option.value = month;
    // console.log(`${month} ${i}`);
    monthDropdown.appendChild(option);
    // console.log(option);
})

for (let i = 2010; i <= 2040; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    option.value = i;
    // console.log(`${i}`);
    yearDropdown.appendChild(option);
    // console.log(option);
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

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();


    yearText.innerText = year;
    monthText.innerText = monthArray[month];

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

    for (let i = 1; i < numberOfDaysInMonth + (firstDayOfMonth + 1); i++) {
        if (i <= firstDayOfMonth) {
            addDate(' ');
        } else {
            addDate(i - firstDayOfMonth);
        }
    }

}




function initButtons() {
    document.getElementById('nextButton').addEventListener('click', () => {
        nav++;
        createCalender();
    });

    document.getElementById('backButton').addEventListener('click', () => {
        nav--;
        createCalender();
    });
}




function selectingMonthFunction(selectedMonthFromDropdown) {
    createCalender(selectedMonthFromDropdown, selectedYearFromDropdown);
}

function selectingYearFunction(selectedYearFromDropdown) {
    createCalender(selectedMonthFromDropdown, selectedYearFromDropdown);
}


initButtons();
createCalender();

//selecting month and year from dropdown list
monthDropdown.addEventListener('change', function () {
    selectedMonthFromDropdown = monthDropdown.value;
    selectingMonthFunction(selectedMonthFromDropdown);
});

yearDropdown.addEventListener('change', function () {
    selectedYearFromDropdown = yearDropdown.value;
    selectingYearFunction(selectedYearFromDropdown);
});

//show current date
showCurrentDate.addEventListener('click', createCalender);