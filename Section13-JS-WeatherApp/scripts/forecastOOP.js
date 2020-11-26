class ForecastOOP{
    constructor(){
        this.key = 'CQYG300dAlu5aR3oUHnLPE7nnzgeprYk' 
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }


    async updateCity(city){
        const cityKey = await this.getCity(city);
        const weather = await this.getWeather(cityKey.Key);
    
        return {cityKey, weather};
    }


    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
    
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
    
        return data[0];
    
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;
    
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }

}


