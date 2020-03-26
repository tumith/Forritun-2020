/*video numer 6*/
const endpoint = 'https://apis.is/petrol';

let valid_95 = true;
let erAfslatturmedBen = false;
let erAfslatturmedDis = false;

const petrolStations = [];
fetch(endpoint).then(blob => blob.json()).then(data => {
    console.log(data);
    
    petrolStations.push(...data.results)
});

function findMatches(wordToMatch, petrolStations) {
    console.log('petrolStations:',petrolStations);
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
    const matchArray = findMatches(searchInput.value, petrolStations);
    console.log('matchArray',matchArray);
    
    while (bensinstodvar.firstChild) { bensinstodvar.removeChild(bensinstodvar.firstChild); }
    if (matchArray.length !== 0){
        let resoultNumber = document.createElement('li');
        resoultNumber.textContent = 'Fjöldi leitar niðurstaða  ' + matchArray.length;
        resoultNumber.style = 'color: blue;';
        bensinstodvar.appendChild(resoultNumber);
    }

    matchArray.forEach(bensinstod => {
        let bensinstod_node = document.createElement('li');
        bensinstod_node.textContent = bensinstod.name + ', ' + bensinstod.company;
        let verd_node = document.createElement('span');
        if (valid_95 === true){
            verd_node.textContent = bensinstod.bensin95 + 'kr';
            if (erAfslatturmedBen === true){
                verd_node.textContent = bensinstod.bensin95_discount + 'kr';
                document.getElementById('leita').placeholder = 'Leita af Bensíni með afslætti';
            }
        }else{
            verd_node.textContent = bensinstod.diesel + 'kr';
            if (erAfslatturmedDis === true){
                verd_node.textContent = bensinstod.diesel_discount + 'kr';
                document.getElementById('leita').placeholder = 'Leita af Dísel með afslætti';
            }
        }
        console.log('verð',valid_95);
        bensinstod_node.appendChild(verd_node);
        bensinstodvar.appendChild(bensinstod_node);
    });

    if (matchArray.length === 0) {
        let bensinstod_node = document.createElement('li');
        bensinstod_node.textContent = 'Engar niðurstöður fundust';
        bensinstod_node.style = 'color: red;';
        bensinstodvar.appendChild(bensinstod_node);
    }
}

const searchInput = document.querySelector('.search');
const bensinstodvar = document.getElementById('bensinstodvar');
const buttonBen = document.getElementById('bensín95Id');
const buttonDisl = document.getElementById('díselId');

buttonBen.addEventListener('click', evt => {
    valid_95 = true;
    erAfslatturmedDis = false;
    erAfslatturmedBen = false;
    displayMatches();
    document.getElementById('leita').placeholder = 'Leita af Bensíni';
});
buttonDisl.addEventListener('click', evt => {
    valid_95 = false;
    erAfslatturmedDis = false;
    erAfslatturmedBen = false;
    displayMatches();
    document.getElementById('leita').placeholder = 'Leita af Dísel';
});
const resoult = document.getElementById('searchResoult');
const aflatt = document.getElementById('medLykil');
aflatt.addEventListener('click', evt => {
    erAfslatturmedBen = true;
    erAfslatturmedDis = true;
    displayMatches();
})


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

/*Credit to Hrólfur Gylfason*/