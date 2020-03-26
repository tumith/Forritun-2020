/*video numer 6*/
const endpoint = 'https://apis.is/petrol';

const petrolStations = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => petrolStations.push(...data));

function findMatches(wordToMatch, petrolStations) {
    return petrolStations.filter(place => {
        // Hér er verið að ryna að finna út hvort það sem var skrifað var er eitthver staðar í json skráni
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.company.match(regex)
    });
}

/* Er ekki viss um hvað þetta gerir því hann gerir þetta ekki í videóinu
    SKOÐA !!!!!!    
*/
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
/*-----------------------------------------*/

function displayMatches() {
    const matchArray = findMatches(this.value, petrolStations);
    const html = matchArray.map(place =>{
        const regex = new RegExp(this.value, 'gi');
        const petrolName = place.name.replace(regex, `<span class ="h1">${this.value}</span>`);
        const petrolCompany = place.company.replace(regex, `<sapn class="h1">${this.value}</span>`);
        return `
            <li>
                <span class = "name"> ${petrolName}, ${petrolCompany}</span>
                <span class = "population">${numberWithCommas(place.diesel)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHtml = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);