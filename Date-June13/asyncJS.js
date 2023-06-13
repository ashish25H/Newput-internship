setTimeout(myFun, 3000);    //myFun is a call back function


function myFun(){
    console.log(`This is async JS`);
}           


function setTime(){
    const now = new Date();

    // console.log(now.getHours() + now.getMinutes() + now.getSeconds());
    console.log(`${now.getHours() - 12}:${now.getMinutes()}:${now.getSeconds()}`);
}

setInterval(setTime, 1000);