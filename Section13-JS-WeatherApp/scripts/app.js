const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img')



const updateUI = (cityObject) => {
    // storing a object atribute in a var
    // const city = cityObject.cityKey;
    // const weather = cityObject.weather; 

    // desctruture properties

    // po exemplo, cityKey é tanto o nome da variavel quanto o valor que vai receber de cityObject
    // que irá retornar para o cityKey var uma instancia
    const { cityKey, weather } = cityObject;


    // update details template

    details.innerHTML = `                
    <h5 class="my-3">${cityKey.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;</span>
    </div>`;

    const iconSrc = `assets/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'assets/images/day.svg' : 'assets/images/night.svg';

    time.setAttribute('src', timeSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }


    




}

const updateCity = async (city) => {

    const cityKey = await getCity(city);

    const weather = await getWeather(cityKey.Key)

    return {
        // object normal notation
        //cityKey: cityKey,
        //weather: weather

        //object shorthand notation
        cityKey,
        weather

    }

}




cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // set local storage

    localStorage.setItem('city', city);
}) 

if (localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then( data => updateUI(data))
    .catch(err => console.log(err));
}