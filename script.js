//request data from NASA API 
async function getData() {
    var key = "nQcayroSffBurdwiaRx3VXiu6VMGbAnCFwy2uCBi"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
    let data = await response.json()
    console.log(data)
    createPage(data)
}

//fill html elements with data
function createPage(data) {
    document.getElementById('title').innerHTML += data.title;
    document.getElementById('daily-image').src = data.hdurl;
    document.getElementById('copyright').innerHTML += "By "+data.copyright;
    document.getElementById('explanation').innerHTML += data.explanation;
}

getData()