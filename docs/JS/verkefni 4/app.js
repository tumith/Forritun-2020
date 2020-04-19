
let SIZE = 99;
const endpoint = 'https://raw.githubusercontent.com/tumith/Forritun-2020/master/docs/JS/verkefni 4/concert.json';


const concert = [];
fetch(endpoint).then(blob => blob.json()).then(data => {
    console.log(data);
    
    concert.push(...data.results)
});

function findMatches(wordToMatch, concert) {

    console.log('concert:',concert);
    let foundMatches = concert.filter(place => {
        // Hér er verið að ryna að finna út hvort það sem var skrifað var er eitthver staðar í json skráni
        const regex = new RegExp(wordToMatch, 'gi');

        if (place.rating >= ratingListi[0] && place.rating <= ratingListi[1] && place.size <= SIZE) {
            return place.name.match(regex) || place.eventDateName.match(regex);
        }
        else{
            return false;
        }

        
        
    });

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
        // tonleikar_node.style = `background-image: url(${tonleikar.imageSource});`;
        let stadsetning_node = document.createElement('span');
        stadsetning_node.textContent = tonleikar.userGroupName + " \n " + tonleikar.eventHallName;
        
        //hér þarf að sína allt sem pasar við tölurnar sem verða í listanum %% NAFN Á LISTANUM %%
        tonleikar_node.appendChild(stadsetning_node);
        concerts.appendChild(tonleikar_node);
    });

    if (matchArray.length === 0) {
        let tonleikar_node = document.createElement('li');
        tonleikar_node.textContent = 'Engar niðurstöður fundust';
        tonleikar_node.style = 'color: red;';
        concerts.appendChild(tonleikar_node);
    }

    document.getElementById("ratingDisplay").textContent = ratingListi[0] + " - " + ratingListi[1];
    document.getElementById("sizeDisplay").textContent = SIZE;
}

const searchInput = document.querySelector('.search');
const concerts = document.getElementById('concerts');


let slider = document.getElementById('rating');

noUiSlider.create(slider, {
    start: [5, 8],
    connect: true,
    range: {
        'min': 0,
        'max': 10
    }
});

let ratingListi = [];
let marginMin = document.getElementById('rating-value-min');
let marginMax = document.getElementById('rating-value-max');

let ratingSlider = slider.noUiSlider.on('update', function (values, handle) {
    // finna tölur í bláa svæðinu og setja þær í listan ratingListi
   
    
    ratingListi[handle] = values[handle];
    if (handle) {
        console.log(values[handle]);
    } else {
        console.log(values[handle]);
    }
    console.log(handle);
    
    displayMatches();
});



let connectSlider = document.getElementById('size');

noUiSlider.create(connectSlider, {
    start: 50,
    connect: 'lower',
    range: {
        'min': 0,
        'max': 99
    }
});
let sizeSlider = connectSlider.noUiSlider.on('update', function (values, handle) {
    // finna tölur í bláa svæðinu og setja þær í listan sizeListi

    SIZE = values[handle];
    
    displayMatches()
    console.log(values[handle]);
    console.log(handle);

});




searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
