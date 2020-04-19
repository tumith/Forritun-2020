
const endpoint = 'https://raw.githubusercontent.com/tumith/Forritun-2020/master/docs/JS/verkefni 4/concert.json';

let valid_95 = true;
let erAfslatturmedBen = false;
let erAfslatturmedDis = false;
let odyrastTakki = false;

const concert = [];
fetch(endpoint).then(blob => blob.json()).then(data => {
    console.log(data);
    
    concert.push(...data.results)
});

function findMatches(wordToMatch, concert) {

    console.log('concert:',concert);
    let foundMatches = concert.filter(place => {
            // Hér er verið að ryna að finna út hvort það sem var skrifað var er eitthver staðar í json skráni
        // if (place[bensinGerd] === null) { return false }
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.eventDateName.match(regex);
    });


    // if (odyrastTakki === true) {
    //     foundMatches.sort((bensin_1, bensin_2) => bensin_1[bensinGerd] - bensin_2[bensinGerd]);
    // }

    return foundMatches;
}

/* Er ekki viss um hvað þetta gerir því hann gerir þetta ekki í videóinu
    SKOÐA !!!!!!
    þetta er bara voða flókið regex 
*/
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
/*-----------------------------------------*/

function displayMatches() {
    const matchArray = findMatches(searchInput.value, concert);
    console.log('matchArray',matchArray);
    
    while (concerts.firstChild) { concerts.removeChild(concerts.firstChild); }
    if (matchArray.length !== 0){
        let resoultNumber = document.createElement('li');
        resoultNumber.textContent = 'Fjöldi leitar niðurstaða  ' + matchArray.length;
        resoultNumber.style = `color: blue;`;
        concerts.appendChild(resoultNumber);
    }

    matchArray.forEach(tonleikar => {
        let tonleikar_node = document.createElement('li');
        tonleikar_node.textContent = tonleikar.name + ', ' + tonleikar.eventDateName;
        tonleikar_node.style = `background-image: ${tonleikar.imageSource};`;
        let verd_node = document.createElement('span');
        if (valid_95 === true){
            verd_node.textContent = tonleikar.userGroupName + '-' + tonleikar.eventHallName;
        }
        console.log('verð',valid_95);
        tonleikar_node.appendChild(verd_node);
        concerts.appendChild(tonleikar_node);
    });

    if (matchArray.length === 0) {
        let tonleikar_node = document.createElement('li');
        tonleikar_node.textContent = 'Engar niðurstöður fundust';
        tonleikar_node.style = 'color: red;';
        concerts.appendChild(tonleikar_node);
    }
}

const searchInput = document.querySelector('.search');
// const concerts = document.getElementById('concerts');

var slider = document.getElementById('rating');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
var slider = document.getElementById('size');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
