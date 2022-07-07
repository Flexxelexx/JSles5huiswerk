import axios from "axios";

const API_KEY = 'https://restcountries.com/v2/all';

async function fetchCountries () {

const countryList = document.getElementById('countries-container')

    try {
        const response = await axios.get(API_KEY)
        countryList.innerHTML += `
            <li class="${response.data[0].region}">
            ${response.data[0].name} has a population of ${response.data[0].population} people.</li>
            <img src="${response.data[0].flags.png}">
        `
        console.log(response.data)
    }

    catch (e) {
        console.log(e)
    }
}

fetchCountries()
