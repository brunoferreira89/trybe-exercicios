const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const generateDamage = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const dragonDamage = () => {
  const strength = battleMembers.dragon.strength;
  let damage = generateDamage(15, strength);
  return damage;
};

const warriorDamage = () => {
  const strength = battleMembers.warrior.strength;
  const maxDamage = strength * battleMembers.warrior.weaponDmg;
  let damage = generateDamage(strength, maxDamage);
  return damage;
};

const mageDamage = () => {
  const intelligence = battleMembers.mage.intelligence;
  let damage = generateDamage(intelligence, intelligence * 2);
  let mageMana = battleMembers.mage.mana;
  if (mageMana < 15) { return 'Não possui mana suficiente' };
  return { dano: damage, mana: 15 };
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const damageDone = warriorDamage();
    battleMembers.warrior.damage = damageDone;
    const actualHP = battleMembers.dragon.healthPoints - damageDone;
    battleMembers.dragon.healthPoints = actualHP;
  },
  mageTurn: (mageDamage) => {
    const damageDone = mageDamage().dano;
    battleMembers.mage.damage = damageDone;
    const manaSpent = mageDamage().mana;
    battleMembers.mage.mana -= manaSpent;
    const actualHP = battleMembers.dragon.healthPoints - damageDone;
    battleMembers.dragon.healthPoints = actualHP;
  },
  dragonTurn: (dragonDamage) => {
    const damageDone = dragonDamage();
    battleMembers.dragon.damage = damageDone;
    const actualWarriorHP = battleMembers.warrior.healthPoints - damageDone;
    battleMembers.warrior.healthPoints = actualWarriorHP;
    const actualMageHP = battleMembers.mage.healthPoints - damageDone;
    battleMembers.mage.healthPoints = actualMageHP;
  },
  endedTurn: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.endedTurn());