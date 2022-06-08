//Dice Work
var dice = 0;

var lowNum;

lowNum = 1000;

function statRoll() {
var total = 0;
for (var i = 0; i < 4; i++) {
  dice = randomNumber(1,6);
  if(dice < lowNum){//If the diceroll is smaller then the lowest number then the lowest number is equal to diceroll
    lowNum = dice;
  }
  total = total + dice;//Add it all up
}
 total = total - lowNum;//Subtract smallest number
 
 return total;
}
//-------------------------------------------------------------------------------------------------------------------------
//Stats
var stats;

stats = [ 0 + statRoll(), 0 + statRoll(), 0 + statRoll(), 0 + statRoll(), 0 + statRoll(), 0 + statRoll()];
//Note
// strength is stats[0];
// dexterity is stats[1];
// constituion is stats[2];
// intelligence is stats[3];
// wisdom is stats[4];
// charisma is stats[5];

var halfElf1 = -1;
var halfElf2 = -1;

halfElf1 = randomNumber(0,4);
halfElf2 = randomNumber(0,4);
function chooseStats() {
  clzz = getText("clzz");//gets class from dropdown
  var sorted = [];//Empty list
  //copies stats onto sorted
  for(var i =0; i<stats.length;i++){
    insertItem(sorted,i,stats[i]);
    console.log("sorted list " + sorted);
  }
  console.log("sorted list " + sorted);
  sorted.sort();//Sorts sorted's values lowest to highest
  var highestStat = sorted[5];
  var secondHighestStat = sorted[4];
  console.log("Highest Stat " + highestStat);
  console.log("Second Highest Stat " + secondHighestStat);
  var highestRemoved = false;
  var secondHighestRemoved = false;
  //Make sure each value is not deleted more than once
  for(i=0; i<sorted.length; i++){
    if(stats[i]==highestStat&&!highestRemoved){
      removeItem(stats,i);
      highestRemoved = true;
      i--;
    }else if(stats[i]==secondHighestStat&&!secondHighestRemoved){
      removeItem(stats,i);
      secondHighestRemoved = true;
      i--;
      console.log("In second highest stats = " + stats + "second highest Stat = " + secondHighestStat + "Highest removed = " +secondHighestRemoved);
    }
  }

  console.log("After Removed " + stats);

//Inserts the highest and second highest values into specific cells based on class
  if (clzz == "Barbarian") {
    insertItem(stats, 0, highestStat);
    insertItem(stats, 2, secondHighestStat);
    setScreen("barbarianEquipment");
    console.log(stats);
  } else if (clzz == "Bard") {
    insertItem(stats, 5, highestStat);
    insertItem(stats, 1, secondHighestStat);
    setScreen("bardEquipment");
  } else if (clzz == "Cleric") {
    insertItem(stats, 4, highestStat);
    insertItem(stats, 2, secondHighestStat);
    setScreen("clericEquipment");
    console.log("3");
  } else if (clzz == "Druid") {
    insertItem(stats, 4, highestStat);
    insertItem(stats, 1, secondHighestStat);
    setScreen("druidEquipment");
    console.log("4");
  } else if (clzz == "Fighter") {
    insertItem(stats, 0, highestStat);
    insertItem(stats, 1, secondHighestStat);
    setScreen("fighterEquipment");
    console.log("5");
  } else if (clzz == "Monk") {
    insertItem(stats, 1, highestStat);
    insertItem(stats, 4, secondHighestStat);
    setScreen("monkEquipment");
    console.log("6");
  } else if (clzz == "Paladin") {
    insertItem(stats, 0, highestStat);
    insertItem(stats, 5, secondHighestStat);
    setScreen("paladinEquipment");
    console.log("7");
  } else if (clzz == "Ranger") {
    insertItem(stats, 1, highestStat);
    insertItem(stats, 4, secondHighestStat);
    setScreen("rangerEquipment");
    console.log("8");
  } else if (clzz == "Rogue") {
    insertItem(stats, 1, highestStat);
    insertItem(stats, 5, secondHighestStat);
    setScreen("rogueEquipment");
    console.log("9");
  } else if (clzz == "Sorcerer") {
    insertItem(stats, 5, highestStat);
    insertItem(stats, 1, secondHighestStat);
    setScreen("sorcererEquipment");
    console.log("10");
  } else if (clzz == "Warlock") {
    insertItem(stats, 5, highestStat);
    insertItem(stats, 2, secondHighestStat);
    setScreen("warlockEquipment");
    console.log("11");
  } else if (clzz == "Wizard") {
    insertItem(stats, 4, highestStat);
    insertItem(stats, 2, secondHighestStat);
    setScreen("wizardEquipment");
    console.log("12");
  }
}

//-------------------------------------------------------------------------------------------------------------------------
//Class
var clzz = -1;

//------------------------------------------------------------------------------------------------------------------------
var clzz = getText("clzz");

var race = getText("race");

var background = 0;
//This function increases the character stats with the race modifiers
function raceMod(){
  if (race == "Hill Dwarf") {
    stats[2] = stats[2] + 2;
    stats[4] = stats[4] + 1;
  } else if (race == "Mountain Dwarf") {
    stats[2] = stats[2] + 2;
    stats[0] = stats[0] + 2;
  } else if (race == "High Elf") {
    stats[1] = stats[1] + 2;
    stats[3] = stats[3] + 1;
  } else if (race == "Wood Elf") {
    stats[1] = stats[1] + 2;
    stats[4] = stats[4] + 1;
  } else if (race == "Dark Elf") {
    stats[1] = stats[1] + 2;
    stats[5] = stats[5] + 1;
  } else if (race == "Lightfoot Halfling") {
    stats[1] = stats[1] + 2;
    stats[5] = stats[5] + 1;
  } else if (race == "Stout Halfling"){
    stats[1] = stats[1] + 2;
    stats[2] = stats[2] + 1;
  }else if (race == "Human"){
    stats[0] = stats[0] + 1;
    stats[1] = stats[1] + 1;
    stats[2] = stats[2] + 1;
    stats[3] = stats[3] + 1;
    stats[4] = stats[4] + 1;
    stats[5] = stats[5] + 1;
  }else if (race == "Dragonborn"){
    stats[0] = stats[0] + 2;
    stats[5] = stats[5] + 1;
  }else if (race =="Forest Gnome"){
    stats[4] = stats[4] + 2;
    stats[1] = stats[1] + 1;
  }else if (race == "Rock Gnome"){
    stats[4] = stats[4] + 2;
    stats[2] = stats[2] + 1;
  }else if (race == "Half-Elf"){
    stats[5] = stats[5] + 2;
    stats[halfElf1] = stats[halfElf1] + 1;
    stats[halfElf2] = stats[halfElf2] + 1;
  }else if (race == "Half-Orc"){
    stats[0] = stats[0] + 2;
    stats[2] = stats[2] + 1;
  }else if (race == "Tiefling"){
    stats[4] = stats[4] + 1;
    stats[5] = stats[5] + 2;
  }
}
//Sets the background text based on the drop down
function chooseBackground() {
   var background1 = getText("background1");
  if (background1 == "Urchin") {
    setText("backgroundText","Urchin");
  } else if (background1 == "Soldier") {
   setText ("backgroundText","Soldier");
  } else if (background1 == "Sailor") {
    setText ("backgroundText","Sailor");
  } else if (background1 == "Sage") {
    setText ("backgroundText","Sage");
  } else if (background1 == "Outlander") {
    setText ("backgroundText","Outlander");
  } else if (background1 == "Noble"){
    setText ("backgroundText","Noble");
  }else if (background1 == "Hermit"){
    setText ("backgroundText","Hermit");
  }else if (background1 == "Guild Artisan"){
    setText ("backgroundText","Guild Artisan");
  }else if (background1 =="Folk Hero"){
    setText ("backgroundText","Folk Hero");
  }else if (background1 == "Entertainer"){
    setText ("backgroundText","Entertainer");
  }else if (background1 == "Criminal"){
    setText ("backgroundText","Criminal");
  }else if (background1 == "Charlatan"){
    setText ("backgroundText","Charlatan");
  }else if(background1 == "Acolyte"){
  setText("backgroundText","Acolyte");
  }
  race = getText("race");
  setText("label18", race);
}
//Writes out the values on the final screen
function writeStats(){
 setText("strengthText", stats[0]); 
 setText("dexterityText", stats[1]); 
 setText("constitionText", stats[2]); 
 setText("intelligenceText", stats[3]); 
 setText("wisdomText", stats[4]); 
 setText("charismaText", stats[5]); 
}
//Sets the class text based on the drop down menu
function classStats(){
  
  if (clzz == "Barbarian") {
    setText("classText", "Barbarian");
  } else if (clzz == "Bard" ) {
   setText("classText", "Bard");
  } else if (clzz == "Cleric") {
    setText("classText","Cleric");
  } else if (clzz == "Druid") {
    setText("classText", "Druid");
  } else if (clzz == "Fighter") {
    setText("classText", "Fighter");
  } else if (clzz == "Monk") {
    setText("classText", "Monk");
  } else if (clzz == "Paladin") {
    setText("classText", "Paladin");
  } else if (clzz == "Ranger") {
   setText("classText", "Ranger");
  } else if (clzz == "Rogue") {
    setText("classText", "Rogue");
  } else if (clzz == "Sorcerer") {
    setText("classText", "Sorcerer");
  } else if (clzz == "Warlock") {
    setText("classText", "Warlock");
  } else if (clzz == "Wizard") {
    setText("classText", "Wizard");
  }
}
 function modifiers(){
 var sMod = Math.Floor(stats[0]/2);
 var dMod = Math.Floor(stats[1]/2);
 var coMod = Math.Floor(stats[2]/2);
 var wMod = Math.Floor(stats[3]/2);
 var iMod = Math.Floor(stats[4]/2);
 var chMod = Math.Floor(stats[5]/2);
 }

//Equipment
//------------------------------------------------------------------------------------------------------------------------
var Equipment1;
var Equipment2;
var Equipment3;
var Equipment4;
var Equipment5;
//------------------------------------------------------------------------------------------------------------------------\
//Actual Events
onEvent("rollDice", "click", function( ) {
  stats;
  chooseStats();
  console.log("Stats before raceMod" + stats);
  raceMod();
  chooseBackground();
  classStats();
  console.log(background);
  console.log(stats);
  writeStats();
  console.log(stats);
});


//Sets text of the equipment from dropdown for Barbarians
onEvent("buttonBarbarian", "click", function( ) {
Equipment1 = getText("barbarianDropdown1");
Equipment2 = getText("barbarianDropdown2");
Equipment3 = getText("barbarianDropdown3");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Bard
onEvent("buttonBard", "click", function( ) {
Equipment1 = getText("bardDropdown1");
Equipment2 = getText("bardDropdown2");
Equipment3 = getText("bardDropdown3");
Equipment4 = getText("bardDropdown4");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Cleric
onEvent("buttonCleric", "click", function( ) {
Equipment1 = getText("clericDropdown1");
Equipment2 = getText("clericDropdown2");
Equipment3 = getText("clericDropdown3");
Equipment4 = getText("clericDropdown4");
Equipment5 = getText("clericDropdown5");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setText("equipment5", Equipment5);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Druid
onEvent("buttonDruid", "click", function( ) {
Equipment1 = getText("druidDropdown1");
Equipment2 = getText("druidDropdown2");
Equipment3 = getText("druidDropdown3");
Equipment4 = getText("druidDropdown4");
Equipment5 = getText("druidDropdown5");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setText("equipment5", Equipment5);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Fighter
onEvent("buttonFighter", "click", function( ) {
Equipment1 = getText("fighterDropdown1");
Equipment2 = getText("fighterDropdown2");
Equipment3 = getText("fighterDropdown3");
Equipment4 = getText("fighterDropdown4");
Equipment5 = getText("fighterDropdown5");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setText("equipment5", Equipment5);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Monk
onEvent("buttonMonk", "click", function( ) {
Equipment1 = getText("monkDropdown1");
Equipment2 = getText("monkDropdown2");
Equipment3 = getText("monkDropdown3");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Paladin
onEvent("buttonPaladin", "click", function( ) {
Equipment1 = getText("paladinDropdown1");
Equipment2 = getText("paladinDropdown2");
Equipment3 = getText("paladinDropdown3");
Equipment4 = getText("paladinDropdown4");
Equipment5 = getText("paladinDropdown5");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setText("equipment5", Equipment5);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Ranger
onEvent("buttonRanger", "click", function( ) {
Equipment1 = getText("rangerDropdown1");
Equipment2 = getText("rangerDropdown2");
Equipment3 = getText("rangerDropdown3");
Equipment4 = getText("rangerDropdown4");
Equipment5 = getText("rangerDropdown5");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setText("equipment5", Equipment5);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Rogue
onEvent("buttonRogue", "click", function( ) {
Equipment1 = getText("rogueDropdown1");
Equipment2 = getText("rogueDropdown2");
Equipment3 = getText("rogueDropdown3");
Equipment4 = getText("rogueDropdown4");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Sorcerer
onEvent("buttonSorcerer", "click", function( ) {
Equipment1 = getText("sorcererDropdown1");
Equipment2 = getText("sorcererDropdown2");
Equipment3 = getText("sorcererDropdown3");
Equipment4 = getText("sorcererDropdown4");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Warlock
onEvent("buttonWarlock", "click", function( ) {
Equipment1 = getText("warlockDropdown1");
Equipment2 = getText("warlockDropdown2");
Equipment3 = getText("warlockDropdown3");
Equipment4 = getText("warlockDropdown4");
Equipment5 = getText("warlockDropdown5");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setText("equipment5", Equipment5);
setScreen("Final");
});

//Sets text of the equipment from dropdown for Wizard
onEvent("buttonWizard", "click", function( ) {
Equipment1 = getText("wizardDropdown1");
Equipment2 = getText("wizardDropdown2");
Equipment3 = getText("wizardDropdown3");
Equipment4 = getText("wizardDropdown4");
setText("equipment1", Equipment1);
setText("equipment2", Equipment2);
setText("equipment3", Equipment3);
setText("equipment4", Equipment4);
setScreen("Final");
});
