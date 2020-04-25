let body = document.getElementsByTagName("body")[0];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function findMatch(){
    console.log("savedData:", savedData);
    let found = savedData.filter(place =>{
        return place.name && place.nameOfThing;
    })
}

const savedData = [];
function displayMatches(){
    savedData.forEach(data => {
        let data_node = document.createElement('h1');
        data_node.textContent = data.name;
        let theNames_node = document.createElement('h3');
        theNames_node.textContent = data.nameOfThing[getRandomInt(3)]

        data_node.appendChild(theNames_node);
        savedData.appendChild(data_node);
    })
}
body.appendChild(displayMatches());


const info = [
    {
        name: "some names",
        parts: {
            1: {
                nameOfThing: "bob"
            },
            2: {
                nameOfThing: "happy"
            }
        }
    }
]
