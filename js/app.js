//Donot show your API KEY

const API_KEY = `68535624ade7be18495702c279268b48`

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = data => {
    // console.log(data.main.temp)
    setInnerTextBy('temperature', data.main.temp)
    setInnerTextBy('clouds', data.weather[0].main)
        // const tempareture = document.getElementById('temperature');
        // tempareture.innerText = data.main.temp;
}

const setInnerTextBy = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('searce-btn').addEventListener('click', function() {

    const searceField = document.getElementById('searce-field');
    searceField.innerText = '';
    const capital = searceField.value;
    const setCityName = document.getElementById('city');
    setCityName.innerText = capital;
    loadTemperature(capital)

})

loadTemperature('dhaka');