// $('#post-list').load('https://jsonplaceholder.typicode.com/posts');

// $('#pop-btn').click(function () {
//     $('#post-list').load('https://jsonplaceholder.typicode.com/posts', function (responseTxt, statusTxt, xhr) {
//         console.log(responseTxt);
//         console.log(statusTxt);
//         if (statusTxt == "success")
//             alert("External content loaded successfully!");
//         if (statusTxt == "error")
//             alert("Error: " + xhr.status + ": " + xhr.statusText);
//     })
// })

$('#fetch-btn').hide();

$('#pop-btn').click(function () {
    $.get('https://jsonplaceholder.typicode.com/posts', function (date, status) {
        if (status === 'success') {
            let li = '';
            for (let post of date) {
                li += `<li>${post.body}</li>`;
            }
            $('#post-list').html(li);
        } else {
            console.log(`some error occured`);
        }
    })
    console.log(`async code`);
})

$('#send-btn').click(function () {
    $.post('https://api.instantwebtools.net/v1/passenger',
     {
        name: "Tony Doe",
        trips: 250,
        airline: 10,
    }, function (data, status) {
        console.log(data);
        console.log(status);
    })
});
