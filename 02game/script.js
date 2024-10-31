let xp = 0;
let health = 100;
let gold = 50;
let currentWeaponIndex = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
/**84The value of the currentWeaponIndex variable corresponds to an index in the weapons 
 * array. The player starts with a "stick", since currentWeaponIndex starts at 0 and 
 * weapons[0] is the "stick" weapon. */
const weapons = [
    { name: 'stick', power: 5 },
    { name: 'dagger', power: 30 },
    { name: 'claw hammer', power: 50 },
    { name: 'sword', power: 100 }
  ];
const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    /** Use escaping forward slashes to allow "Store" in the string */
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  }
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  },
  {
    name: "kill monster",
    "button text": ["Go to town square", "Go to town square", "Go to town square"],
    "button functions": [goTown, goTown, goTown],
    /** Use escaping single quotes to allow "Arg!" in the string */
    text: 'The monster screams "Arg!" as it dies. You gain experience points and find gold.'
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

/**After a monster is defeated, the monster's stat box should no longer display. */
function update(location) {
    monsterStats.style.display = 'none';
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0]);
  }
  
  function goStore() {
    update(locations[1]);
  }
  
  function goCave() {
    update(locations[2]);
  }
  
  function buyHealth() {
    if (gold >= 10) {
      gold -= 10;
      health += 10;
      goldText.innerText = gold;
      healthText.innerText = health;
    } else {
      text.innerText = "You do not have enough gold to buy health.";
    }
  }
  
/**Once a player has the best weapon, they cannot buy another one.  */
function buyWeapon() {
  if (currentWeaponIndex < weapons.length - 1) {
    if (gold >= 30) {
      gold -= 30;
      currentWeaponIndex++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeaponIndex].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  } else {
    text.innerText = "You already have the most powerful weapon!";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick = sellWeapon;
  }
}

function sellWeapon() {
  if (inventory.length > 1) {
    gold += 15;
    goldText.innerText = gold;
    let currentWeapon = inventory.shift();
    text.innerText = "You sold a " + currentWeapon + ".";
    text.innerText += " In your inventory you have: " + inventory;
  } else {
    text.innerText = "Don't sell your only weapon!";
  }
}

function fightSlime() {
  fighting = 0;
  goFight();
}

function fightBeast() {
  fighting = 1;
  goFight();
}

function fightDragon() {
  fighting = 2;
  goFight();
}
/**Initially, monsterStats are hidden with CSS. On "Fight dragon" button click, display them 
 * using monsterStats.style.display */
function goFight() {
  update(locations[3]);
  monsterHealth = monsters[fighting].health;
  monsterStats.style.display = 'block';
  /**update the text for the current monster's name and health */
  monsterName.innerText = monsters[fighting].name;
  monsterHealthText.innerText = monsterHealth; 
}
/**Add innertext for the attack, and reduce player health according to monster's damage level. 
 * Reduce monsterHealth according to currentweapon damage and player xp. 
 * Update health, and call lose function */
function attack() {
  text.innerText = "The "+ monsters[fighting].name +" attacks.";
  text.innerText += " You attack it with your "+ weapons[currentWeaponIndex].name +".";
  health -= monsters[fighting].level;
  monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random()* xp) + 1;
  healthText.innerText = health;
  monsterHealthText.innerText = monsterHealth;
  if (health <= 0) {
    return lose();
  } else if (monsterHealth <= 0) {
    defeatMonster()
  }
}
  
function dodge() {
  text.innerText = "You dodge the attack from the " + monsters[fighting].name;
}

/**Add to gold and xp according to monsters level, then update the innerText and 
 * update to locations[4]*/
function defeatMonster() {
  gold += Math.floor((monsters[fighting].level * 6.7))
  xp += monsters[fighting].level;
  goldText.innerText = gold;
  xpText.innerText = xp;
  update(locations[4])
}
 /**TODO make 6th loacation
  * update to locations[5] */
function lose() {
  update(locations[5]);
}

function restart() {
  xp = 0;
  health = 100;
  gold = 50;
  currentWeaponIndex = 0;
  inventory = ["stick"];
  xpText.innerText = xp;
  healthText.innerText = health;
  goldText.innerText = gold;
  goTown()
}