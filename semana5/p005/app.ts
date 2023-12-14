async function getAcademicNews() {
    try {
        const response = await fetch('');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function getWeather() {
    try {
        const response = await fetch('https://api.hgbrasil.com/weather?woeid=455955');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


async function getImgs() {
    try {
        const response = await fetch('https://serpapi.com/search?engine=google_schola');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}


const noticiaDiv = document.getElementById('noticias')!;
const servicoDiv = document.getElementById('servicos')!;
const destaqueDiv = document.getElementById('destaque')!;

function addNews(news) {
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>${news.title}</h2>
    <p>${news.description}</p>
    <p>${news.date}</p>
    `;
    noticiaDiv.appendChild(div);
}


function addWeather(weather) {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Temperatura</h2>
        <p>Temperatura atual: ${weather.temp}</p>
    `;
    servicoDiv.appendChild(div);
}

function addImg(img) {
    const imgElement = document.createElement('img');
    imgElement.src = img.avatar;
    imgElement.alt = "Imagem de destaque";
    destaqueDiv.appendChild(img);
}

async function loadNews() {
    const news = await getAcademicNews();
    news.forEach(addNews);
}


async function loadWeather() {
    const weather = await getWeather();
    addWeather(weather);
}

async function loadImgs() {
    const imgs = await getImgs();
    imgs.data.forEach(addImg);
}

loadWeather();
loadNews();
loadImgs();