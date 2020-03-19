let body = document.getElementsByTagName("body")[0];

let correctCounter = 0;
let inCorrectCounter = 0;

/*making stuffs and things*/

let stig = document.createElement("h3");
stig.textContent = correctCounter;
body.appendChild(stig);

let minusStig = document.createElement("h3");
minusStig.textContent = inCorrectCounter;
body.appendChild(minusStig);

let spurningOne = document.createElement("h1");
spurningOne.textContent = "1. Hver er liturinn á Lip Medex Blistex umbúðunum ?";
body.appendChild(spurningOne);

/*-----------------------------------------*/

/*making queztion 1*/

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
            naestaSpurning.id = "nextSpurning";
            naestaSpurning.onclick = function(){
                spurningOne.style = "visibility: hidden;";
                spurningTwo.style = "visibility: visible;";
            }
            button.style.backgroundColor = "green";
            body.appendChild(naestaSpurning);
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
/*-------------------------------------*/

/*making queztion 2*/
let spurningTwo = document.createElement("h1");
spurningTwo.style = "visibility: hidden;"
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
            reload.textContent = "Byrja up á nýtt";
            reload.onclick = function(){
                location.reload();
            }
            document.getElementById("nextSpurning").onclick = function(){
                spurningOne.style = "visibility: visible;";
                spurningTwo.style = "visibility: hidden;";
            }
            button.style.backgroundColor = "green";
            body.appendChild(reload);
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
/*-----------------------------------------------*/