fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countryDiv');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
            <h2 class="country-name">${country.name}</h2>
            <p class="capital-name">${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name}')">Details</button>
            `
        countryDiv.innerHTML = countryInfo;

        countriesDiv.appendChild(countryDiv);

    });
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countryDetails = document.getElementById('countryDetails');
    countryDetails.innerHTML = `
    <h1>Name: ${country.name}</h1>
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area}</p>
    <img src="${country.flag}"></img>
    `
}