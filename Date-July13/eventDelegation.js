document.querySelector('#container-list').addEventListener('click', (event) => {
    console.log(event.target);

    switch (event.target.id) {
        case 'laptop': window.location.href = '/' + event.target.id;
            break;
        case 'mobile': window.location.href = '/' + event.target.id;
            break;
        case 'camera': window.location.href = '/' + event.target.id;
            break;

        default: console.log(`Enter a valid request`);
            break;
    }
});

document.querySelector('#form').addEventListener('keyup', (event) => {
    console.log(event);
    if(event.target.dataset.uppercase != undefined){
        event.target.value = event.target.value.toUpperCase();
    }
});
