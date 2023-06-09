try {
    if (greet) {
        greet();
    } else {
        throw 'Greent is not a function';
    }
} catch (err) {
    console.log(err);
}


var greet = function () {
    console.log(`Hello Sir/Ma'am`);
}

