//THE BIG DATA BASE OMG LE TRUC DE FOU TROP LONG A FAIRE CETTE MERDE 
let listNomCharacter =   ["Albedo",     "Aloy",             "Amber",     "Ayaka",   "Ayato",    "Alhaitham","Barbara",  "Beidou",   "Bennett",  "Candace",  "Childe",   "Chongyun", "Collei",   "Cyno",     "Diluc",    "Diona",    "Dori",     "Eula",     "Faruzan",  "Ganyu",    "Gorou",    "Heizou",   "Hu Tao",   "Itto",     "Jean",     "Kaeya",    "Kazuha",   "Keqing",   "Klee",     "Kokomi",   "Kuki Shinobu", "Layla",    "Lisa",    "Mona",      "Nahida",   "Nilou",    "Ningguang","Noelle",       "Qiqi",     "Raiden",   "Razor",    "Rosaria",  "Sara",     "Sayu",     "Shenhe",   "Sucrose",  "Thoma",    "Tighnari", "Traveler", "Venti",    "Wanderer", "Xiangling","Xiao",     "Xingqiu",  "Xinyan",   "Yae Miko", "Yanfei",   "Yelan",    "Yoimiya",  "Yun Jin",  "Zhongli",  "Yaoyao",   "Fischl"];
let listGender =         ["Male",       "Female",           "Female",   "Female",   "Male",     "Male",     "Female",   "Female",   "Male",     "Female",   "Male",     "Male",     "Female",   "Male",     "Male",     "Female",   "Female",   "Female",   "Female",   "Female",   "Male",     "Male",     "Female",   "Male",     "Female",   "Male",     "Male",     "Female",   "Female",   "Female",   "Female",       "Female",   "Female",   "Female",   "Female",   "Female",   "Female",   "Female",       "Female",   "Female",   "Male",     "Female",   "Female",   "Female",   "Female",   "Female",   "Male",     "Male",     "Male",     "Male",     "Male",     "Female",   "Male",     "Male",     "Female",   "Female",   "Female",   "Female",   "Female",   "Female",   "Male",     "Female",   "Female"];
let listRegion =         ["Mondstadt",  "Horizon Zero Dawn","Mondstadt","Inazuma",  "Inazuma",  "Sumeru",   "Mondstadt","Liyue",    "Mondstadt","Sumeru",   "Snezhnaya","Liyue",    "Sumeru",   "Sumeru",   "Mondstadt","Mondstadt","Sumeru",   "Mondstadt","Sumeru",   "Liyue",    "Inazuma",  "Inazuma",  "Liyue",    "Inazuma",  "Mondstadt","Mondstadt","Inazuma",  "Mondstadt","Mondstadt","Inazuma",  "Inazuma",      "Sumeru",   "Sumeru",   "Mondstadt","Sumeru",   "Sumeru",   "Liyue",    "Mondstadt",    "Liyue",    "Inazuma",  "Mondstadt","Mondstadt","Inazuma",  "Inazuma",  "Liyue",    "Mondstadt","Inazuma",  "Sumeru",   "Space",    "Mondstadt","Inazuma",  "Mondstadt","Liyue",    "Liyue",    "Liyue",    "Inazuma",  "Liyue",    "Liyue",    "Inazuma",  "Liyue",    "Liyue",    "Sumeru",   "Mondstadt"];
let listElementalPower = ["Geo",        "Cryo",             "Pyro",     "Cryo",     "Hydro",    "Dendro",   "Hydro",    "Electro",  "Pyro",     "Hydro",    "Hydro",    "Cryo",     "Dendro",   "Electro",  "Pyro",     "Cryo",     "Electro",  "Cryo",     "Anemo",    "Cryo",     "Geo",      "Anemo",    "Pyro",     "Geo",      "Anemo",    "Cryo",     "Anemo",    "Electro",  "Pyro",     "Hydro",    "Electro",      "Cryo",     "Electro",  "Hydro",    "Dendro",   "Hydro",    "Geo",      "Geo",          "Cryo",     "Electro",  "Electro",  "Cryo",     "Electro",  "Anemo",    "Cryo",     "Anemo",    "Pyro",     "Dendro",   "?????",    "Anemo",    "Anemo",    "Pyro",     "Anemo",    "Hydro",    "Pyro",     "Electro",  "Pyro",     "Hydro",    "Pyro",     "Geo",      "Geo",      "Dendro",   "Electro"];
let listWeaponType =     ["Sword",      "Bow",              "Bow",      "Sword",    "Sword",    "Sword",    "Catalyst", "Claymore", "Sword",    "Polearm",  "Bow",      "Claymore", "Bow",      "Polearm",  "Claymore", "Bow",      "Claymore", "Claymore", "Bow",      "Bow",      "Bow",      "Catalyst", "Polearm",  "Claymore", "Sword",    "Sword",    "Sword",    "Sword",    "Catalyst", "Catalyst", "Sword",        "Sword",    "Catalyst", "Catalyst", "Catalyst", "Sword",    "Catalyst", "Claymore",     "Sword",    "Polearm",  "Claymore", "Polearm",  "Bow",      "Claymore", "Polearm",  "Catalyst", "Polearm",  "Bow",      "Sword",    "Bow",      "Catalyst", "Polearm",  "Polearm",  "Sword",    "Claymore", "Catalyst", "Catalyst", "Bow",      "Bow",      "Polearm",  "Polearm",  "Polearm",  "Bow"];
let listTeamPlacement =  ["SubDPS",     "SubDPS",           "SubDPS",   "DPS",      "DPS",      "DPS",      "Healer",   "SubDPS",   "Support",  "Support",  "DPS",      "Support",  "SubDPS",   "DPS",      "DPS",      "Support",  "Support",  "DPS",      "Support",  "DPS",      "Support",  "DPS",      "DPS",      "DPS",      "Support",  "SubDPS",   "SubDPS",   "DPS",      "DPS",      "Support",  "SubDPS",       "Support",  "Support",  "SubDPS",   "SubDPS",   "SubDPS",   "DPS",      "Support",      "Healer",   "DPS",      "DPS",      "SubDPS",   "Support",  "Support",  "Support",  "SubDPS",   "Support",  "DPS",      "SubDPS",   "Support",  "DPS",      "SubDPS",   "DPS",      "SubDPS",   "Support",  "DPS",      "DPS",      "SubDPS",   "DPS",      "Support",  "Support",  "Support",  "SubDPS"];
let listRelasePatch =    [1.2,        2.1,              1.0,      2.0,      2.6,      3.4,      1.0,      1.0,      1.0,      3.1,      1.1,      1.0,      3.0,      3.1,      1.0,      1.1,      3.0,      1.5,      3.3,      1.2,      2.0,      2.8,      1.3,      2.3,      1.0,      1.0,      1.6,      1.0,      1.1,      2.1,      2.7,          3.2,      1.0,      1.0,      3.2,      3.1,      1.0,      1.0,          1.0,      2.1,      1.0,      1.4,      2.1,      2.0,      2.4,      1.0,     2.2,      3.0,      1.0,      1.0,      3.3,      1.0,      1.3,      1.0,      1.1,      2.5,      1.5,      2.7,      2.0,      2.4,      1.1,      3.4,      1.0];
   
//Contient les types du personnage à trouver
let MystnomCharacter ;
let Mystgender ;
let Mystregion ;
let MystelementalPower ;
let MystweaponType ;
let MystteamPlacement ;
let MystrelasePatch ;

//Contient les types du personnage qu'on a choisi
let nomCharacter ;
let gender ;
let region ;
let elementalPower ;
let weaponType ;
let teamPlacement ;
let relasePatch ;


function choixPerso(){//permet de choisir un personnage 
    function getRandomInt(max) {return Math.floor(Math.random() * max);}
    let randomElement = getRandomInt(listNomCharacter.length);
    
    MystnomCharacter = listNomCharacter[randomElement];
    Mystgender = listGender[randomElement];
    Mystregion = listRegion[randomElement];
    MystelementalPower = listElementalPower[randomElement];
    MystweaponType = listWeaponType[randomElement];
    MystteamPlacement = listTeamPlacement[randomElement];
    MystrelasePatch = listRelasePatch[randomElement];
    
}

let hasGiveUp = false;
function GiveUp(){//pour afficher le nom à trouver
  if(document.querySelector("#GiveUpid").lastElementChild == null){
    hasGiveUp = true;//do not add 1 to the data base
    let newDivGiveUp = document.createElement("div");
    let newh2GiveUp = document.createElement("h2");
    let newNomPerso = document.createTextNode(MystnomCharacter);
    let itwas = document.createTextNode(" It was ");
    newh2GiveUp.appendChild(itwas);
    newh2GiveUp.appendChild(newNomPerso);
    newDivGiveUp.appendChild(newh2GiveUp);
    GiveUpid.appendChild(newDivGiveUp);
  }
}

function ResetClearButton(){
  ClearGuess();
  ClearGiveUp();
  choixPerso();
}


function ClearGuess(){
    var e = document.querySelector("#ListeGuess");
    var child = e.lastElementChild; 
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

function ClearGiveUp(){
  var e = document.querySelector("#GiveUpid");
  var child = e.lastElementChild; 
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
  }
}

function createBox(TypeChara,MystChara){//ça crée un boite mdr 
    let currentDiv = document.querySelector("#ListeGuess").firstChild;//choix de la div dont on vas ajouté les boites
    //la boite en elle même 
    let newDiv = document.createElement("div");
    let newh2 = document.createElement("h2");
    let newContent = document.createTextNode(TypeChara);
    newh2.appendChild(newContent);
    newDiv.appendChild(newh2);//on met les enfants
    newDiv.classList.add("box");//la boite est une boite 

    //pour la couleur
    if (TypeChara == MystChara){
        newDiv.style.backgroundColor = "green";
    }
    else{
        newDiv.style.backgroundColor = "red";
    }
    currentDiv.parentNode.insertBefore(newDiv, currentDiv);//on met la boite newDiv avant la currentDiv
}


function createBoxImage(NomChara){//ça crée un boite ave une image 
    let currentDiv = document.querySelector("#ListeGuess").firstChild;//choix de la div dont on vas ajouté les boites
    //la boite en elle même 
    let newDiv = document.createElement("div");
    let newImg = document.createElement("img");
    let URLimage = "img/perso/" +  NomChara.toLowerCase() + ".webp";//trouve URL de l'image 
    newImg.src = URLimage;
    let newContent = document.createTextNode(NomChara);

    newImg.appendChild(newContent);//on met les enfants
    newDiv.appendChild(newImg);
    newDiv.classList.add("box");//la boite est encore une fois une boite 
    currentDiv.parentNode.insertBefore(newDiv, currentDiv);//on met la boite newDiv avant la currentDiv
}


function createBoxVer(relasePatch,MystrelasePatch){//ça crée un boite des version
  let currentDiv = document.querySelector("#ListeGuess").firstChild;//choix de la div dont on vas ajouté les boites
  //la boite en elle même 
  let newDiv = document.createElement("div");
  let newImg = document.createElement("img");
  newDiv.classList.add("versionimg");
  if(relasePatch > MystrelasePatch){
    let URLimage = "img/Arrow_bot.png";//trouve URL de l'image 
    newImg.src = URLimage;
    newDiv.style.backgroundColor = "red";
    /*let newP = document.createElement("p");
    newP.classList.add("version");
    let newContent = document.createTextNode(relasePatch);
    newP.appendChild(newContent);
    newDiv.appendChild(newP);*/
  }
  else if(relasePatch < MystrelasePatch){
    let URLimage = "img/Arrow_top.png";//trouve URL de l'image 
    newImg.src = URLimage;
    newDiv.style.backgroundColor = "red";
    /*let newP = document.createElement("p");
    let newContent = document.createTextNode(relasePatch);
    newP.appendChild(newContent);
    newP.classList.add("version");
    newDiv.appendChild(newP);*/
  }
  else{
    let URLimage = "img/Arrow_valid.png";//trouve URL de l'image 
    newImg.src = URLimage;
    newDiv.style.backgroundColor = "green";
  }
  newDiv.appendChild(newImg);
  //on met les enfants
  newDiv.classList.add("box");//la boite est encore une fois une boite 
  currentDiv.parentNode.insertBefore(newDiv, currentDiv);//on met la boite newDiv avant la currentDiv
}

function addPointWin(nomCharacter,MystnomCharacter){
  if(nomCharacter == MystnomCharacter){
    if(hasGiveUp == false){
      window.location.href = "http://www.genshinguess.com:8080/php/addWin.php";
    }else{
      window.location.replace("http://www.genshinguess.com:8080/genshinguess.php");
    }
  }
}

function createLine(){//ça crée une ligne de boite 
    let GuessPersoNom = document.getElementById('form').value;//get le nom entrée dans la textbox 
    let idPerso = -1;
    for(let i = 0; i < listNomCharacter.length; i++){//trouve l'id du perso dans la textbox 
        if(listNomCharacter[i] == GuessPersoNom){
            idPerso = i;
        }
    }
    if(idPerso != -1){//si il a trouver l'id et quel existe on crée les boites 
        nomCharacter = listNomCharacter[idPerso];
        gender = listGender[idPerso];
        region = listRegion[idPerso];
        elementalPower = listElementalPower[idPerso];
        weaponType = listWeaponType[idPerso];
        teamPlacement = listTeamPlacement[idPerso];
        relasePatch = listRelasePatch[idPerso];

        addPointWin(nomCharacter,MystnomCharacter);
        createBoxVer(relasePatch,MystrelasePatch);
        createBox(teamPlacement,MystteamPlacement);
        createBox(weaponType,MystweaponType);
        createBox(elementalPower,MystelementalPower);
        createBox(region,Mystregion);
        createBox(gender,Mystgender);
        createBox(nomCharacter,MystnomCharacter);
        createBoxImage(nomCharacter);
    }
}


const nums = [ 1, 3, 5, 7];
function verifInput(id, idSubmit) {//Ça fait un truc. Quoi jsp mais c'est important je crois :/
    if( (document.getElementById(id).value != " ") && ( nums.includes(1) ) )
    document.getElementById(idSubmit).disabled = "";
}


function autocomplete(inp, arr) {//j'ai rien rien compris ce n'est pas mon code c'est à Arthur et même lui il l'a pris à un mec sur internet donc dsl je n'ai pas la source. mais sa marche donc tout va bien :)
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {closeAllLists(e.target);});
}

function getTheAnimation(){
  let leaderboard = document.querySelector("#slide-in-left").getAttribute("class");
  if(leaderboard == "slide-in-left"){
    document.querySelector("#slide-in-left").setAttribute("class", "slide-in-leftreturn")
    document.querySelector("#plus").setAttribute("class", "plus")
  }else{
    document.querySelector("#slide-in-left").setAttribute("class", "slide-in-left")
    document.querySelector("#plus").setAttribute("class", "mult")
  }
}