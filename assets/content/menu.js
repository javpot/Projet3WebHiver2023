const WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q=Montreal&appid=e8eb0a599158303761066faf8c3c9cc6&units=metric';

const headerItems = $('#header li');

$(document).ready(function () {
    $(".small-container").append("<p>ZZZZZZZZZZZZZZZZZz</p>");
    fetchData(WEATHER)
    .then(data => behavior(loadWeather));
    
    headerItems.each(function() { setOnClick($(this)) });
    setSearch();
});

function setSearch() {
    $('#search_form').submit(function(event) {
        event.preventDefault();
        search($('.search').val().toLowerCase());
    });
}

function setOnClick(element) {
    element.click(function(event) {
        event.preventDefault();

        setSelection(element);
        insertContent(element.find('a'));
    });
}

function insertContent(hyperlink) {
    $.get(hyperlink.attr('href'), function(data) {
        $('#small-container').empty().append(data);
    });
}

function loadWeather(data) {
    const sidebar = $('.meteo-container');

    sidebar.find('h3').first.text(data.name);
    sidebar.find('h5').text(new Date(data.dt * 1000).toLocaleDateString());
    sidebar.find('p').last().text(`${data.main.temp} °C`);
    sidebar.find('img').attr('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
}

async function fetchData(url) {
    try {
        const response = await fetch(url);

        return await response.json();
      } catch (error) {
        return console.error('Error fetching data', error);
    }
}