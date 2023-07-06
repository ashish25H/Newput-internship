console.log(`Ajax`);
let fetchBtn = document.getElementById('fetch-btn');
let sendBtn = document.getElementById('send-btn');
let popBtn = document.getElementById('pop-btn');
// let postList = document.getElementById('post-list');

function buttonClickHandler() {
    console.log(`xml request called`);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    xhr.onprogress = function () {
        console.log(`on progress`);
    }

    xhr.onreadystatechange = function () {
        console.log(`Ready state - ${this.readyState}`);
    }

    xhr.onload = function () {
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        } else {
            console.log(`some error occured`);
        }
    }

    xhr.send();

    console.log(`we are done!`);
}

function sendDate() {
    let xhr = new XMLHttpRequest();

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.open("POST", "https://api.instantwebtools.net/v1/passenger", true);
    xhr.setRequestHeader("Content-type", "application/json");

    xhr.onprogress = function () {
        console.log(`on progress`);
    }

    xhr.onreadystatechange = function () {
        console.log(`Ready state - ${this.readyState}`);
    }

    xhr.onload = function () {
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        } else {
            console.log(`some error occured`);
        }
    }

    params = `{
        "name": "John Doe",
        "trips": 250,
        "airline": 5
    }`;
    xhr.send(params);
}

function getPosts(){
    let li = '';
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onprogress = function (){
        console.log(`on progress`);
    }

    xhr.onreadystatechange = function (){
        console.log(`Ready state - ${this.readyState}`);
    }

    xhr.onload = function (){
        if (this.status === 200 && this.readyState === 4){
            // console.log(this.responseText);
            let arr = JSON.parse(this.responseText);
            console.log(arr);
                for(let post of arr){
                    li += `<li>${post.body}</li>`;
                }
                console.log(li);
                document.getElementById('post-list').innerHTML = li;
        }else {
            console.log(`some error occured`);
        }
    }

    xhr.send();
}

fetchBtn.addEventListener('click', buttonClickHandler);
sendBtn.addEventListener('click', sendDate);
popBtn.addEventListener('click', getPosts);
//https://jsonplaceholder.typicode.com/posts