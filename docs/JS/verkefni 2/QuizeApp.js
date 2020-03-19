let body = document.getElementsByTagName("body")[0];

let correctCounter = 0;
let inCorrectCounter = 0;

let stig = document.createElement("h3");
stig.textContent = correctCounter;
body.appendChild(stig);

let minusStig = document.createElement("h3");
minusStig.textContent = inCorrectCounter;
body.appendChild(minusStig);

let spurningOne = document.createElement("h1");
spurningOne.textContent = "1. Hver er liturinn á Lip Medex Blistex umbúðunum ?";
body.appendChild(spurningOne);

let unorderedList = document.createElement("ul");
let ary = ["Blár","Græn","Rauður","Gulur"];
for (let index = 0; index < ary.length; index++) {
    let list = document.createElement("li");
    let button = document.createElement("button");
    button.textContent = ary[index];
    if (index === 0){
        button.onclick = function(){
            correctCounter++;
            stig.textContent = correctCounter;
            let naestaSpurning = document.createElement("button");
            naestaSpurning.textContent = "Næsta spurning";
            naestaSpurning.onclick = function(){
                spurningOne.style = "display: none;";
                spurningTwo.style = "display: inline;"
            }
            button.style.backgroundColor = "green";
        }
    }
    else if (index === 2 || 3 || 4){
        button.onclick = function(){
            inCorrectCounter--;
            minusStig.textContent = inCorrectCounter;
            button.style.backgroundColor = "red";
        }
    }
    list.appendChild(button);
    unorderedList.appendChild(list);
}

spurningOne.appendChild(unorderedList);


let spurningTwo = document.createElement("h1");
spurningTwo.style = "display: none;"
spurningTwo.textContent = "2. Er vatn blaut ?";

let unorderedListNumberTwo = document.createElement("ul");
ary = ["True","False"];
for (let index = 0; index < ary.length; index++) {
    let list = document.createElement("li");
    let button = document.createElement("button");
    button.textContent = ary[index];
    if (index === 1){
        button.onclick = function(){
            correctCounter++;
            stig.textContent = correctCounter;
            let reload = document.createElement("button");
            reload.textContent = "Næsta spurning";
            reload.onclick = function(){
                location.reload();
            }
            button.style.backgroundColor = "green";

        }
    }
    if (index === 0){
        button.onclick = function(){
            inCorrectCounter--;
            minusStig.textContent = inCorrectCounter;
            button.style.backgroundColor = "red";
        }
    }
    list.appendChild(button);
    unorderedListNumberTwo.appendChild(list);
}
spurningTwo.appendChild(unorderedListNumberTwo);
body.appendChild(spurningTwo);
