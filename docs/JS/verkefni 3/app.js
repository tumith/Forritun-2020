/*video numer 6*/
const endpoint = 'https://apis.is/petrol';

const petrolStations = [];
fetch(endpoint).then(blob => blob.json()).then(data => {
    console.log(data);
    
    petrolStations.push(...data.results)
});

function findMatches(wordToMatch, petrolStations) {
    console.log("petrolStations:",petrolStations);
    return petrolStations.filter(place => {
        // Hér er verið að ryna að finna út hvort það sem var skrifað var er eitthver staðar í json skráni
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.company.match(regex);
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
    console.log("matchArray",matchArray);
    
    while (bensinstodvar.firstChild) { bensinstodvar.removeChild(bensinstodvar.firstChild); }

    matchArray.forEach(bensinstod => {
        let bensinstod_node = document.createElement("li");
        bensinstod_node.textContent = bensinstod.name + ', ' + bensinstod.company;
        let verd_node = document.createElement("span");
        if (valid_95 === true){
            verd_node.textContent = bensinstod.bensin95 + "kr";
        }else{
            verd_node.textContent = bensinstod.diesel + "kr";
        }
        console.log("verð",verd_node);
        bensinstod_node.appendChild(verd_node);
        bensinstodvar.appendChild(bensinstod_node);
    });

    if (matchArray.length === 0) {
        let bensinstod_node = document.createElement("li");
        bensinstod_node.textContent = "Engar niðurstöður fundust";
        bensinstodvar.appendChild(bensinstod_node);
    }
}

const searchInput = document.querySelector('.search');
const bensinstodvar = document.getElementById('bensinstodvar');
let  valid_95 = true;

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);