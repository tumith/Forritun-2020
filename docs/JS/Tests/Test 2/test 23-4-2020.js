let body = document.getElementsByTagName("body")[0];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  

const savedData = [];
function displayMatches(){
    savedData.forEach(data => {
        let data_node = document.createElement('h1');
        data_node.textContent = data.name;
        let theNames_node = document.createElement('h3');
        theNames_node.textContent = data.nameOfThing[getRandomInt(3)]
    })
}


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

savedData.push(info);