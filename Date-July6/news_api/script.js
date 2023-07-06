let str = '';

$.get('https://newsdata.io/api/1/news?apikey=pub_2580644f9fc165b5a6a9afb4ad8390bb95c0d&q=pegasus&language=en', function (data, status, xhr){
    console.log(data.results);
    console.log(status);
    console.log(xhr.readyState);

    for(let item of data.results){
        str += `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="${item.link}" class="btn btn-primary" target='_blank'>Read more</a>
        </div>
    </div>
        `
    }

    $('#grid-items').html(str);
}).fail(function (xhr, status, error){
    console.log(`xhr - ${xhr.status}`);
    console.log(`status - ${status}`);
    console.log('Error ' + error);
});
