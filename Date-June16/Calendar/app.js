const day = document.getElementById('weekDays');
const date = document.getElementById('date');
const monthText = document.getElementById('month');
const yearText = document.getElementById('year');

let nav = 0;


const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for (let item of weekDays) {
    let div = document.createElement('div');
    div.innerText = item;
    div.classList.add('gridItem');
    day.appendChild(div);
}







function createCalender() {

    date.innerHTML = '';

    const dt = new Date();

    if (nav !== 0) {
        dt.setMonth(new Date().getMonth() + nav);
    }

    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    console.log(`Year ${year} month ${month}`);

    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    yearText.innerText = year;
    monthText.innerText = monthArray[month];

    const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();

    const dateObj = new Date(year, month, 1);
    dateObj.setDate(1);

    const firstDayOfMonth = dateObj.getDay();
    console.log(firstDayOfMonth);
    console.log(numberOfDaysInMonth);

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

initButtons();
createCalender();
