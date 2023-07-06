$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();
    });

    $('#submit-btn').click(function () {
        let inputVal = $('#input-text').val();
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputVal}&type=video&key=AIzaSyD16YbHRdrvgBkdyuWkPbqez5KLDVYZQoI`;
        $('#input-text').val('');
        let card = '';

        $.get(url, function (data, status) {
            console.log(data.items);
            console.log(status);
            for(let item of data.items){
                card += `<div class="card g-col-4" style="width: 18rem;">
                <img src="${item.snippet.thumbnails?.high.url}" class="card-img-top" alt="thumbnail">
                <div class="card-body">
                    <h5 class="card-title">
                    ${item.snippet.title}</h5>
                    <p class="card-text">${item.snippet.description}</p>
                    <a href="https://youtu.be/${item.id.videoId}" class="btn btn-primary" target='_black'>Go to Video</a>
                </div>
            </div>`
            }
            $('#cards').html(card);
        });
    });
});






