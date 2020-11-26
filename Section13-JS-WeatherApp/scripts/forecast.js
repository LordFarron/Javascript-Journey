const key = 'CQYG300dAlu5aR3oUHnLPE7nnzgeprYk';

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];

}

// the Get method was GET /locations/v1/cities/search?apikey=dg5rVzd9vG7JnCSjDMUe8a8qrqDVGvb5&q=salvador HTTP/1.1
// all the query var goes after search?
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}

// getCity('manchester')
//     .then(data => getWeather(data.Key))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
    
