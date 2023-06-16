const day = document.getElementById('weekDays');
const date = document.getElementById('date');
const monthText = document.getElementById('month');
const yearText = document.getElementById('year');
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dateObj = new Date();

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

for (let item of weekDays) {
    let div = document.createElement('div');
    div.innerText = item;
    div.classList.add('gridItem');
    day.appendChild(div);
}







function createCalender(setYear, setMonth) {



    // const year = dateObj.getFullYear();
    // const month = dateObj.getMonth();

    let year = setYear;
    let month = setMonth;

    if(month > 11){
        month = 0;
        year += 1;
    }

    console.log(`Year ${year} month ${month}`);

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
        div.classList.add('dateItem');
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

createCalender(dateObj.getFullYear(), dateObj.getMonth());