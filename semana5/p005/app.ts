async function getAcademicNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/everything?q=education&apiKey=51c3957101c14611849218cf649251f4');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getWeather() {
    try {
        const response = await fetch('https://api.hgbrasil.com/weather?woeid=455955&format=json-cors');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


async function getImgs() {
    try {
        const response = await fetch('https://api.unsplash.com/photos/random?query=education&client_id=KPVxmXt08scEj6jbpvYLX9MnwBKiFs6yHzxYHOYinc8');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


const noticiaDiv = document.getElementById('noticias')!;
const servicoDiv = document.getElementById('servicos')!;
const imagemDiv = document.getElementById('imagens')!;

function addNews(news) {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="noticia">
    <h3>${news.title}</h3>
    <p>${news.description}</p>
    <a href="${news.url}">Leia mais</a>
    </div>
    `;
    noticiaDiv.appendChild(div);
}


function addWeather(weather) {
    const div = document.createElement('div');
    div.innerHTML = `
        <p>Temperatura atual: ${weather.results.temp}</p>
    `;
    servicoDiv.appendChild(div);
}

function addImg(img) {
    const imgElement = document.createElement('img');
    imgElement.src = img.urls.regular;
    imgElement.alt = img.alt_description;
    imagemDiv.appendChild(imgElement);
}

async function loadNews() {
    const news = await getAcademicNews();
    for(var i = 0; i < 2; i++) {
        addNews(news['articles'][i]);
    }
}


async function loadWeather() {
    const weather = await getWeather();
    addWeather(weather);
}

async function loadImgs() {
    var i = 0;
    for (i = 0; i < 3; i++) {
        const img = await getImgs();
        addImg(img);
    }
}

loadWeather();
loadNews();
loadImgs();