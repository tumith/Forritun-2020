"use strict";

/*let helloworld;
helloworld = 'Hello World!!';
alert(helloworld);

 Prufa 1

const object = {a: 1, b: 2, c: 3};

for (const property in object){
  console.log(property, '=', object[property]);
}
`${property}: ${object[property]}`

*/
/*functons fyrir leik*/
let ja_nei_spurning = (texti, fun1, fun2) => {
    let try_again = true;
    let first_try = true;

    while (try_again) {
    
        if (first_try === false) {
            alert("Ég skildi ekki svarið þitt, geturðu reynt aftur.");
        }

        let svar = prompt(texti + " Já/Nei", "");
        
        if (svar === "Já") {
            try_again = false;
            fun1();
        } else if (svar === "Nei") {
            try_again = false;
            fun2();
        } else {
            first_try = false;
        }
    }
}
//ja_nei_spurning('Ætlaðir þú að skrifa "Leikur" ?', () => {Já(svar)}, () => {nei(svar)});


let morg_svor = (texti, object) => {
    let try_again = true;
    let first_try = true;

    while (try_again) {

        if (first_try === false) {
            alert("Ég skildi ekki svarið þitt, geturðu reynt aftur.");
        }

        // Þessi lykkja búr til öll mögulegu svörin í alertinu
        let oll_svor = "";
        let tel = 1;
        for (let key in object) {
            key = key.replace(/_/gi, " ");// Þetta skiptir út öllum _ fyrir bil
            oll_svor += tel + ") " + key + "\n";
            tel += 1;
        }

        svar = prompt(texti + "\n\n" + oll_svor, "");
        
        // Þessi lykkja tékkar hvað notandinn ýtti á
        tel = 1;
        for (let key in object) {
            if (svar == tel) {
                try_again = false;
                object[key]();
            }
            tel += 1;
        }
        first_try = false;
    }
}

/* morg_svor("Hvað gerir þú?", {
     Ég_skýt_drekann: () => {
         // Kóði
         document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
     },
     Ég_sting_drekann_með_sverði: () => {
         // Kóði
         document.getElementsByTagName("body")[0].style.backgroundColor = "red";
     },
     Ég_kyssi_drekann: () => {
         // Kóði
         document.getElementsByTagName("body")[0].style.backgroundColor = "pink";
     }
});*/

/*------------------leikur-----------------*/
let questionName = prompt('Hvað heitir þú ?');
let secret = prompt('Do you know the secret ?');
let anwser = confirm('Nafnið þitt er ' + questionName + ' er það ekki');

if (questionName === 'Siggi'){
  let hiSiggi = confirm('Hæ Siggi, bíddu ert þetta virkilega þú Siggi tæknó');
  if (hiSiggi === true){
    let langtSidanSidast = prompt('Hvering hefur þú það ?');
    if (langtSidanSidast === 'Gott'){
      let siggiSegirGott = confirm('Það er gott, langar þér að tala meira ?');
      if (siggiSegirGott === true){
        alert('Tja greigið þú því þú þarft að halda árfam að læra');
      }
      else if (siggiSegirGott === false){
        alert('Alltí lægi það er í lagi ég veit að þú ert upptekinn');
      }
    }
    else if (langtSidanSidast === 'Ekki gott'){
      let langarTherAdTala = confirm('Það er ekki gott langar þér að tala um það');
      if (langarTherAdTala === true){
        let questionOnWellBeing = confirm('Þá getur þú talað við alvöru Tuma(Close) eða Tölvu Tuma(Ok)');
        if (questionOnWellBeing === true){
          let proplums = prompt('Ég get bara leift þér að skrifa vanda mállin þín hér !!');
          alert('Það er leiðin legt að heyra vona að það batnar fljótt');
        }
        else if (questionOnWellBeing === false){
          alert('Ok þá getur þú talað við eitthvern annan');
        }
      }
      else if (langatTherAdTala === false){
        alert('ok þá er það bara komið að þér að vilja tala við eitthvern');
      }
    }
  }
  else if (hiSiggi === false){
    let ertuViss = confirm('Ertu alveg viss um að þú ert ekki Siggi tæknó þú veist Siggi leðurjakki?');
    if (ertuViss === false){
        alert('Ok ég skil þú ert upptekinn');
    }
    if (ertuViss === true){
      let langtSidanSidast = prompt('Hvering hefur þú það ?');
      if (langtSidanSidast === 'Gott'){
        let siggiSegirGott = confirm('Það er gott, langar þér að tala meira ?');
        if (siggiSegirGott === true){
          alert('Tja greigið þú því þú þarft að halda árfam að læra');
        }
        else if (siggiSegirGott === false){
          alert('Alltí lægi það er í lagi ég veit að þú ert upptekinn');
        }
      }
      else if (langtSidanSidast === 'Ekki gott'){
        let langarTherAdTala = confirm('Það er ekki gott langar þér að tala um það');
        if (langarTherAdTala === true){
          let questionOnWellBeing = confirm('Þá getur þú talað við alvöru Tuma(Close) eða Tölvu Tuma(Ok)');
          if (questionOnWellBeing == true){
            let proplums = prompt('Ég get bara leift þér að skrifa vanda mállin þín hér !!');
            alert('Það er leiðin legt að heyra vona að það batnar fljótt');
          }
          else if (questionOnWellBeing === false){
            alert('Ok þá getur þú talað við eitthvern annan');
          }
        }
        else if (langatTherAdTala === false){
          alert('ok þá er það bara komið að þér að vilja tala við eitthvern');
        }
      }
    }
    else if (ertuViss === false){
      alert('Ok bara að vera viss.\nBæ bæ');
    }
  }
}
else if (secret.toLowerCase() === 'leikur' || 'game')
{
    ja_nei_spurning('Ætlaðir þú að skrifa "Leikur" ?', () => {
        //ja svar
        ja_nei_spurning(`${questionName} ert eitt af fáum sem fá að vitta af þessum leinni leik\nen þú mátt ekki segja neinum frá honnum.\nErtu viss að þú vilt halda áfram`, () => {
            //ja svar
            alert(`${questionName} vildu halda áfram`);
            let startOfStory = prompt('The story begins in a mental hospital located far away from civilization\nWhen you walk in to the hospital a nurse greets you and takes you to a cell where you here a person scream what do you do\n\t1) Walk in to the cell\n\t2) Punch the nurse and run\n\t3) Aske the nures why you are here');
            if (startOfStory === '1'){
                //Anwser 1
                alert('[You chose to walk in to the cell]');
                alert('When you are in site the cell you see a man leing on a bed straped down and with wires in to his head');
                let storyPartOne = prompt('A man tells you to lie down on a bed close to the other man sudenly people walk in and start puting wires in your head (What will you do?)\n1)Scream "You gay LOL"\n2)Run\n3)Stay calm');
                if (storyPartOne === '1'){
                    //Anwser 1.1
                    alert('[You said (You gay LOL)]');
                    let storyPart1of1 = prompt('Every on stopped and looked at you, you started laughing and could not stop so the people on hooked me and throw me in to a cell and locked me in ther (What willl you do?)\n1)Scream "I Love you all thank you"\n2)Start thinking of a plan on geting out of here you did it ones before\n3)Talk to the people to let you out');
                    if (storyPart1of1 === '1'){
                        alert('[You screamed "I Love you all thank you"]');
                        let storyPart1of1of1 = prompt('You stand up and look through the window on the door and see a man winke at me and coming closer.\nHe opens the cell door and walks in (what will you do?)\n1)Make him think you are interested in him to\n2)Tell him you are interested in him\n3)Kill him and run');
                        if (storyPart1of1of1 === '1'){
                          //Anwser 1.1.1
                            alert('[You make him think you are interested in him too]');
                            let interestedInMan = prompt('You run to the man and knock him down like one punch man so you obliterated him in to a blood puddle, you run out and pee yourself');
                                if (interestedInMan = '1'){
                                    alert('[You chose right]');
                                    alert('You ran so in to a wall and broke every bone in your body!!\n\nYOU ARE DEAD\NLEIKE IF U CRI\NDONATE TOO ME PATREON ONLI IFE YOU BELEF IN GUD');
                                }
                                else if (interestedInMan = '2'){
                                    alert('[You chose left]');
                                    let gudsChoseYou = prompt('You use your one punch man power to run very fast so you don´t see the wall in front of you, you hitt the wall so hard that you create a wormhole in to another dimension.\n You wake up and see a man floating in front of you (what do you do/say ?)\n1)Say "hey what is up dowg"\n2)Punch the man\n3)pretend you are dead');
                                    if (gudsChoseYou === '1'){
                                      alert(`[${questionName} says to the man "hey what is up dowg"]`);
                                      let beging = prompt('Gud is not heppy and tells you he is going to throw you down to hell\n1)');
                                    }
                                    else if (gudsChoseYou === '2'){
                                      alert(`[${questionName} punched the man]`);
                                    }
                                    else if (gudsChoseYou === '3'){
                                      alert(`[${questionName} pretented he was dead]`)
                                    }
                                    else{
                                      alert('I dont understand!! restarting page!!');
                                      window.location.reload();
                                  }
                                }
                                else if (interestedInMan = '3') {
                                    alert('[]');
                                }
                                else{
                                  alert('I dont understand!! restarting page!!');
                                  window.location.reload();
                              }
                        }
                        else if (storyPart1of1of1 === '2'){
                            alert('[You tell him you are interested in him]');
                            alert('He stoppes in the door way and says "I cant do this you are a patient the doctors would kill me" so he putes his hand in his pucked and brings out a gun and shoots you\n\nYOU ARE DEAD');
                            window.location.reload();
                        }
                        else if (storyPart1of1of1 === '3'){
                            alert('[Kill him and run]');
                            let whatWay = prompt('You kill the man and run passed him there are two ways you can go\n1) Right\n2) Left');
                            if (whatWay === '1'){
                                alert('You ran to the right when you have been runing for a while you spot a man standing in front of you, you see that he is a patient and you keep runing.\nThe man starts runing towards you and screaming before you know it he has already stabed you in the face!!\n\nYOU ARE DEAD');
                                window.location.reload();
                            }
                            else if (whatWay === '2'){
                                alert('You ran to the left with out knowing that all of the doctors are there, they stop you and start eating you alive!!\n\nYOU ARE DEAD');
                                window.location.reload();
                            }
                            else{
                                alert('I dont understand!! restarting page!!');
                                window.location.reload();
                            }
                        }
                        else{
                            alert('I dont understand!! restarting page!!');
                            window.location.reload();
                        }
                    }
                    else if (storyPart1of1 === '2'){
                        alert('[You start thinking of a plan on geting out of here you did it ones before]');
                    }
                    else if (storyPart1of1 === '3'){
                        alert('[You talk to the people to let you out]');
                    }
                    else{
                        alert('I dont understand!! restarting page!!');
                        window.location.reload();
                    }
                }
                else if(storyPartOne === '2'){
                    //Anwser 1.2
                    alert('[You ran away]');
                    alert('But the people already stuck the wires in to your head so when the wires could not go any further thay ribbed your head right off\n\nYOU ARE DEAD!!!')
                    document.body.innerHTML = "";
                }
                else if (storyPartOne === '3'){
                    //Anwser 1.3
                    alert('[You stayed calm]');
                }
                else{
                    alert('I dont understand!! restarting page!!');
                    window.location.reload();
                }
            }
            else if (startOfStory === '2'){
                alert('[You chose to Punch the nurse and run out]');
            }
            else if (startOfStory === '3'){
                alert('[You chose to ask the nurse why you are here]');
            }
            else{
                alert('I dont understand!! restarting page!!');
                window.location.reload();
            }
        }, () => {
            //nei svar
            window.location.reload();
        });
        
    }, () => {
        //nei svar
        window.location.reload();
    }); 
}