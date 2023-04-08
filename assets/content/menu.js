const WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=e8eb0a599158303761066faf8c3c9cc6&units=metric';

const headerItems = $('ul li');

$(document).ready(function () {
    $(".small-container").append("<p>ZZZZZZZZZZZZZZZZZz</p>");
    fetchData(WEATHER)
    .then(data => loadWeather(data));

    insertContent($('ul li a'));

    $('ul li').each(function() {
        $(this).click(function(event) {
            event.preventDefault();
            insertContent($(this).find('a'));
        });
    });
});

//TEXT STUFF

function insertContent(hyperlink) {
    $.get(hyperlink.attr('href'), function(data) {
        $('.small-container').empty().append(data);
    });
}

//WEATHER STUFF

function loadWeather(data) {
    const sidebar = $('div.content');

    sidebar.find('.Ville').text(data.name);
    sidebar.find('.date').text(new Date(data.dt * 1000).toLocaleDateString());
    sidebar.find('.Temperature').text(`${data.main.temp} °C`);
    sidebar.find('.image').attr('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
      } catch (error) {
        return console.error('Error fetching data', error);
    }
}