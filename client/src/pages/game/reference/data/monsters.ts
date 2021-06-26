export interface IMonster {
  name: string;
  hitDie: string;
  armorClass: string;
  attacks: string[];
  savingThrow: string;
  special: string;
  movementRate: string;
  alignment: string;
  challengeLevel: string;
  experiencePoints: string;
  description: string;
}

export const monsters: IMonster[] = [
  {
    name: 'Ant, giant (Worker)',
    hitDie: '2',
    armorClass: '3 [16]',
    attacks: [
      'Bite (1d6)',
    ],
    savingThrow: '16',
    special: 'None',
    movementRate: '18',
    alignment: 'Neutrality',
    challengeLevel: '2',
    experiencePoints: '30',
    description: 'Giant ants live in vast subterranean hives tunneled through soil and\n' +
      'even stone. A hive can hold as many as 100 ants, in a worker-to-warrior\n' +
      'ratio of 5:1. A hive also contains one giant queen ant.',
  },
  {
    name: 'Ant, giant (Warrior)',
    hitDie: '3',
    armorClass: '3 [16]',
    attacks: [
      'Bite (1d6 + poison)',
    ],
    savingThrow: '14',
    special: 'None',
    movementRate: '18',
    alignment: 'Neutrality',
    challengeLevel: '2',
    experiencePoints: '30',
    description: 'The poison of a warrior ant does 2d6 points of damage if a saving throw\n' +
      'is failed, 1d4 points of damage if the saving throw succeeds.',
  },
  {
    name: 'Ant, giant (Queen)',
    hitDie: '10',
    armorClass: '3 [16]',
    attacks: [
      'Bite (1d6)',
    ],
    savingThrow: '5',
    special: 'None',
    movementRate: '3',
    alignment: 'Neutrality',
    challengeLevel: '8',
    experiencePoints: '800',
    description: 'The queen of a giant ant colony is larger, tougher, and slower than the\n' +
      'average giant ant.',
  },
  {
    name: 'Badger, giant',
    hitDie: '3',
    armorClass: '4 [15]',
    attacks: [
      '2 claws (1d3), bite (1d6)',
    ],
    savingThrow: '14',
    special: 'None',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'These subterranean predators are the size of a full-grown human, and\n' +
      'quite aggressive when defending their territory.',
  },
  {
    name: 'Banshee',
    hitDie: '7',
    armorClass: '0 [19]',
    attacks: [
      'Claw (1d8)',
    ],
    savingThrow: '9',
    special: 'See below',
    movementRate: '6',
    alignment: 'Chaos',
    challengeLevel: '11',
    experiencePoints: '1700',
    description: 'Banshees are horrid undead creatures that live in swamps and other\n' +
      'Monsters\n' +
      'About Magic Resistance:\n' +
      'One of the “Special” items that may be listed for some\n' +
      'creatures is “Magic Resistance,” followed by a percentage. The\n' +
      'given percentage chance is the likelihood that any magic used\n' +
      'against the creature (other than bonuses from weapons) will fail\n' +
      'to take effect. Roll d100 and if the result is less than the given\n' +
      'percentage, the magic will fail.\n' +
      'Swords & Wizardry: Complete Rulebook\n' +
      'desolate places. Banshees are only damaged by magic or silver\n' +
      'weapons, they have a magic resistance of 49%, and they are immune\n' +
      'to enchantments. Their shriek (once per day) necessitates a saving\n' +
      'throw versus death or the hearer will die in 2d6 rounds. One particularly\n' +
      'unusual thing about banshees is that they often associate with living\n' +
      'faerie creatures of the less savory variety; they might even be an undead\n' +
      'form of faerie.\n' +
      'A Banshee can travel over water and other terrain as if it were land,\n' +
      'but crossing running water causes it to lose its magic resistance for 3d6\n' +
      'hours. Banshees look like gaunt humans (male or female) with long,\n' +
      'stringy hair and glowing yellow eyes. They often wear hooded cloaks.\n' +
      'They are considered Type 9 undead for turning purposes.',
  },
  {
    name: 'Basilisk',
    hitDie: '6',
    armorClass: '4 [15]',
    attacks: [
      'Bite (1d10)',
    ],
    savingThrow: '11',
    special: 'Petrifying gaze',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '8',
    experiencePoints: '800',
    description: 'Basilisks are great lizards whose gaze turns to stone anyone meeting\n' +
      'its eye. (One way of resolving this: fighting without looking incurs a -4\n' +
      'penalty to hit.) If the basilisk’s own gaze is reflected back at it, it has\n' +
      'a 10% chance to force the basilisk into a saving throw against being\n' +
      'turned to stone itself.',
  },
  {
    name: 'Bat, giant (Vampire Bat)',
    hitDie: '1',
    armorClass: '8 [11]',
    attacks: [
      'Bite (1d6)',
    ],
    savingThrow: '17',
    special: 'Sucks blood',
    movementRate: '4/18 (flying)',
    alignment: 'Neutrality',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'These bats suck blood for automatic damage of 1d6 after a successful\n' +
      'bite. They are the size of a falcon.',
  },
  {
    name: 'Bat, giant (greater Bat)',
    hitDie: '4',
    armorClass: '7 [12]',
    attacks: [
      'Bite (1d10)',
    ],
    savingThrow: '13',
    special: 'None',
    movementRate: '4/18 (flying)',
    alignment: 'Neutrality',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'These massive, man-sized cousins of the bat do not suck blood, but\n' +
      'nonetheless their bite can be deadly.',
  },
  {
    name: 'Bat, giant (Bat Monster)',
    hitDie: '8',
    armorClass: '6 [13]',
    attacks: [
      'Bite (2d8)',
      '2 claws (1d6)',
    ],
    savingThrow: '8',
    special: 'None',
    movementRate: '4/18 (flying)',
    alignment: 'Neutrality unless intelligent (Chaos)',
    challengeLevel: '9',
    experiencePoints: '1,100',
    description: 'These creatures attack with claws as well as a bite. They are twice\n' +
      'the size of a man, with a tremendous wingspan. Fearful peasants might\n' +
      'even mistake them for small dragons when the bats fly by at night.',
  },
  {
    name: 'Bear',
    hitDie: '4+1',
    armorClass: '7 [12]',
    attacks: [
      '2 Claws (1d3)',
      'bite (1d6)',
    ],
    savingThrow: '13',
    special: 'Hug',
    movementRate: '9',
    alignment: 'Neutrality',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'If a bear hits with both claws, it hugs for an additional 1d8 hit points\n' +
      'of damage. Larger bears are to be found in mountains, caves, and arctic\n' +
      'regions, with more hit dice and inflicting more damage with the hug.',
  },
  {
    name: 'Beetle, giant (Fire)',
    hitDie: '1',
    armorClass: '4 [15]',
    attacks: [
      'Bite (3d8)',
    ],
    savingThrow: '18',
    special: 'None',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'A giant fire beetle’s oily light-glands glow a reddish color. If they are removed,\n' +
      'they continue to give off light for 1d6 days, shedding light in a 10-foot radius.',
  },
  {
    name: 'Black Pudding',
    hitDie: '10',
    armorClass: '6 [13]',
    attacks: [
      'Attack (3d8)',
    ],
    savingThrow: '5',
    special: 'Acidic surface, immune to cold, divides when hit\n' +
      'with lightning',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '11',
    experiencePoints: '1,700',
    description: 'Black puddings are amorphous globs with an acidic surface. They\n' +
      'are subterranean predators and scavengers. Any weapon or armor\n' +
      'contacting a black pudding will be eaten away by the acid as follows:\n' +
      'weapon (1 hit by weapon), chain mail or lesser armor (1 hit by pudding),\n' +
      'plate mail (2 hits by pudding). If a weapon or armor is magical, it can\n' +
      'take an additional hit per magical +1 before being dissolved.',
  },
  {
    name: 'Blink Dog',
    hitDie: '4',
    armorClass: '5 [14]',
    attacks: [
      'Bite (1d6)',
    ],
    savingThrow: '13',
    special: 'Teleports without error',
    movementRate: '12',
    alignment: 'Law',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Blink dogs are pack hunters, intelligent and usually friendly to those\n' +
      'who are not of evil intent. They can teleport short distances (without\n' +
      'error) and attack in the same turn—in most cases (75%) a blink dog will\n' +
      'be able to teleport behind an opponent and attack from the rear, with\n' +
      'appropriate bonuses.',
  },
  {
    name: 'Boar, Wild',
    hitDie: '3+3',
    armorClass: '7 [12]',
    attacks: [
      'Gore (3d4)',
    ],
    savingThrow: '14',
    special: 'Continues attacking 2 rounds after being “killed”',
    movementRate: '15',
    alignment: 'Neutrality',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Wild boars continue to attack for two rounds after they reach\n' +
      'zero hit points before they finally drop\n' +
      'dead. These stats might also be used for\n' +
      'any similar creature that is unique to a\n' +
      'campaign, such as “the blue tusken-hogs\n' +
      'of the Ymar Plains.”',
  },
  {
    name: 'Bugbear',
    hitDie: '3+1',
    armorClass: '5 [14]',
    attacks: [
      'Bite (2d4) or by weapon',
    ],
    savingThrow: '14',
    special: 'Surprise opponents on a\n' +
      '1–3',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'These large, hairy, goblin-like humanoids\n' +
      'are stealthier than their size would suggest,\n' +
      'almost always getting the chance to\n' +
      'surprise even alert opponents with a roll of\n' +
      '1–3 on a d6 (50%).',
  },
  {
    name: 'Bulette',
    hitDie: '7 to 10',
    armorClass: '-2 [21]',
    attacks: [
      'Bite (4d12)',
      '2 Claws (3d6)',
    ],
    savingThrow: '9 (7HD), 8 (8HD), 6 (9HD), 5 (10HD)',
    special: 'Leaping, surprise',
    movementRate: '15',
    alignment: 'Neutrality',
    challengeLevel: '7 HD (9), 8 HD (10), 9 HD (11), 10 HD (2000)',
    experiencePoints: '7 HD (1100), 8 HD (1400), 9 HD (1700), 10 HD (2000)',
    description: 'Roughly ten feet in height, a bulette (boo-LAY) is covered in natural\n' +
      'armor plating like that of an armadillo, and has a beak-like head that\n' +
      'opens to show wicked, serrated teeth. These creatures can leap to the\n' +
      'attack; in which case they cannot bite, but may attack with all four\n' +
      'claws. Bulettes dig underground to surprise their prey, leaving a furrow\n' +
      'in the ground as they go, caused by a dorsal crest in the creature’s armor.\n' +
      'These voracious hunters eat horses and halflings with gusto, although\n' +
      'they will devour anything from badgers to plowshares if their preferred\n' +
      'foods are not readily available. Although bulettes burrow, they do not\n' +
      'venture further underground, for they are surface predators. When the\n' +
      'dorsal crest of the bulette is raised (during combat this is usually only\n' +
      'after the thing has been wounded), the area underneath is AC 6 [13],\n' +
      'and this vulnerable point can be attacked if the monster is well enough\n' +
      'surrounded for its opponents to attack from behind as well as in front.',
  },
  {
    name: 'Carrion Creeper',
    hitDie: '2+4',
    armorClass: '7 [12]',
    attacks: [
      'Bite (1 hp) and 6 tentacles',
    ],
    savingThrow: '14',
    special: 'Tentacles cause paralysis',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'This caterpillar-like creature has 6 waving tentacles which, when they\n' +
      'score a hit, require the target to make a saving throw or be paralyzed\n' +
      'for 2d6 turns. These underground scavengers can be aggressive when\n' +
      'they are hungry, and will pursue prey unless distracted. They are good\n' +
      'climbers, but when crossing water they are unable to do much more\n' +
      'than float with the current.',
  },
  {
    name: 'Centaur',
    hitDie: '4',
    armorClass: '5 [14] or 4 [15] with shield',
    attacks: [
      '2 kicks (1d6) and weapon',
    ],
    savingThrow: '13',
    special: 'None',
    movementRate: '18',
    alignment: 'Any (usually Neutrality)',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'Half man, half horse, centaurs are fierce warriors and well-known\n' +
      'creatures of mythology. The Referee may choose any “version” of the\n' +
      'centaur from myth or folklore for the campaign: some are evil, some\n' +
      'aloof, and some are soothsayers.',
  },
  {
    name: 'Centipede, giant (Small, lethal)',
    hitDie: '1d2 hit points',
    armorClass: '9 [10]',
    attacks: [
      'Bite (deals 0 damage)',
    ],
    savingThrow: '18',
    special: 'Lethal poison, +4 save',
    movementRate: '13',
    alignment: 'Neutrality',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'Lethal giant centipedes of the small size inflict a deadly bite (+4 bonus\n' +
      'to saving throw), but cause no damage if the saving throw is successful.',
  },
  {
    name: 'Centipede, giant (Small, non-lethal)',
    hitDie: '1d2 hit points',
    armorClass: '9 [10]',
    attacks: [
      'Bite (0 hp damage)',
    ],
    savingThrow: '18',
    special: 'Non-lethal poison, +4 save',
    movementRate: '13',
    alignment: 'Neutrality',
    challengeLevel: 'B',
    experiencePoints: '10',
    description: 'The non-lethal variety of giant centipede has a painful bite but its\n' +
      'poison is only crippling, not lethal. Failing a saving throw (at a +4\n' +
      'bonus) against the poison of this centipede causes 1d4 rounds of\n' +
      'crippling pain (the victim is helpless, as when asleep). Additionally, the\n' +
      'limb (roll 1d4) is temporarily crippled (treat as a disease) for 2d4 days.\n' +
      'A crippled leg reduces movement by 50%; a crippled shield arm cannot\n' +
      'wield weapon or shield; a crippled sword arm attacks at -4. A second\n' +
      'bite on a leg reduces movement to one quarter normal, and a third bite\n' +
      'to the legs reduces movement to 1 foot per minute (prone, dragging\n' +
      'oneself by the arms).',
  },
  {
    name: 'Centipede, giant (Man-sized)',
    hitDie: '2',
    armorClass: '5 [14]',
    attacks: [
      'Bite (1d8 + poison)',
    ],
    savingThrow: '16',
    special: 'Lethal poison, +6 save',
    movementRate: '15',
    alignment: 'Neutrality',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'The man-sized giant centipede is a deadly predator with armored\n' +
      'segments, a strong bite, and a lethal (though relatively weak) poison.',
  },
  {
    name: 'Centipede, giant (large, 20 ft long)',
    hitDie: '4',
    armorClass: '0 [19]',
    attacks: [
      'Bite (3d8 + poison)',
    ],
    savingThrow: '13',
    special: 'Lethal poison, +4 save',
    movementRate: '18',
    alignment: 'Neutrality',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'A twenty-foot long horror of chitin, multiple legs, and clashing\n' +
      'pincers dripping with venom.',
  },
  {
    name: 'Chimera',
    hitDie: '9',
    armorClass: '4 [15]',
    attacks: [
      '2 claws (1d3)',
      '2 goat horns (1d4)',
      '1 lion bite (2d4)',
      '1 dragon bite (3d4)',
    ],
    savingThrow: '6',
    special: 'Breathes fire',
    movementRate: '9/18 (flying)',
    alignment: 'Chaos (sometimes Neutrality)',
    challengeLevel: '11',
    experiencePoints: '1,700',
    description: 'The chimera has three heads: one is the head of a goat, one the head of\n' +
      'a lion, and one the head of a dragon. Great wings rise from its lion-like\n' +
      'body. The dragon head can breathe fire (3 times per day) with a range\n' +
      'of 50 ft, causing 3d8 damage to anyone caught within the fiery blast\n' +
      '(saving throw for half damage).',
  },
  {
    name: 'Cockatrice',
    hitDie: '5',
    armorClass: '6 [13]',
    attacks: [
      'Bite (1d6+ turn to stone)',
    ],
    savingThrow: '12',
    special: 'Bite turns to stone',
    movementRate: '6/18 (flying)',
    alignment: 'Neutrality',
    challengeLevel: '7',
    experiencePoints: '600',
    description: 'This nasty creature resembles a bat-winged rooster with a long,\n' +
      'serpentine tail. Its bite turns enemies to stone unless the victim makes a\n' +
      'successful saving throw.',
  },
  {
    name: 'Crocodile, normal',
    hitDie: '3',
    armorClass: '4 [15]',
    attacks: [
      'Bite (1d6)',
    ],
    savingThrow: '14',
    special: 'None',
    movementRate: '9 (12 swimming)',
    alignment: 'Neutrality',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'Some normal crocodiles are man-eaters; all are dangerous and can\n' +
      'conceal themselves well.',
  },
  {
    name: 'Crocodile, giant or Sea',
    hitDie: '6',
    armorClass: '3 [16]',
    attacks: [
      'Bite (4d6) and tail (3d4)',
    ],
    savingThrow: '11',
    special: 'None',
    movementRate: '9 (12 swimming)',
    alignment: 'Neutrality',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'The smallest of giant crocodiles are about 20ft long (normal crocodiles\n' +
      'can grow to be as long as 15ft).',
  },
  {
    name: 'Demon, Baalroch (Balor)',
    hitDie: '10',
    armorClass: '2 [17]',
    attacks: [
      'Sword (1d12+2) and whip (see below)',
    ],
    savingThrow: '5',
    special: 'Magic resistance (75%), surrounded by fire',
    movementRate: '6/15 (flying)',
    alignment: 'Chaos',
    challengeLevel: '17',
    experiencePoints: '3,500',
    description: 'The Baalroch’s name means, roughly, the Bull of Baal: the Baal-\n' +
      'aurochs. (The aurochs was a bull that stood twelve feet tall at the\n' +
      'shoulder, and Baal is an ancient and evil pagan deity.) These powerful\n' +
      'demons somewhat resemble vast minotaurs with great, spreading bat-\n' +
      'wings; they burn with the fires of hell and are wreathed in flame. The\n' +
      'spells of casters below 6th level do not affect them, and against higher-\n' +
      'level spell casters they are still 75% immune to all spells.\n' +
      'In combat, a baalroch uses whip and sword. The whip can be used\n' +
      'to reach great distances; on a successful hit the victim is pulled close\n' +
      'to the baalroch and burned by the fires of the demon’s body (3d6 hit\n' +
      'points). Baalrochs are sometimes referred to in ancient texts as Balor or\n' +
      'Baalor, which may be the name of a single demon rather than a term for\n' +
      'all of them. A baalroch could be forced or tricked into the service of a\n' +
      'powerful wizard, but the risk would be immense.\n' +
      'Baalrochs may attempt to gate in an ally with a 70% chance of\n' +
      'success. The responding demon will usually be a third-category demon\n' +
      '(01-80 on 1d100) but an unusually successful summoning might call a\n' +
      'fourth-category demon (81-00 on 1d100).',
  },
  {
    name: 'Demon, Dretch',
    hitDie: '4',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d4)',
      '1 bite (1d6)',
    ],
    savingThrow: '13',
    special: 'Magical abilities',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'These creatures are fat, with long, spindly arms and legs. They have\n' +
      'rudimentary human heads, with slobbering jaws and folds of fat. Dretch\n' +
      'demons have some weak demonic powers. Although they are not par-\n' +
      'ticularly intelligent, they can cause a horrible stinking cloud once per\n' +
      'day, can teleport once per day, can cause darkness (10-foot diameter)\n' +
      'once per day, and can summon 1d4 giant rats once per day. The stinking\n' +
      'cloud has a radius of 20 ft. and requires anyone caught within it to make\n' +
      'a saving throw or be rendered helpless from nausea for 1d4+1 rounds.',
  },
  {
    name: 'Demon, Erinyes',
    hitDie: '6',
    armorClass: '2 [17]',
    attacks: [
      '1 bronze sword (1d6 + paralysis)',
    ],
    savingThrow: '11',
    special: 'Magic resistance (25%),magical abilities, immune\n' +
      'to fire and cold, entangle, fear',
    movementRate: '12/24 (flying)',
    alignment: 'Chaos',
    challengeLevel: '9',
    experiencePoints: '1,100',
    description: 'The erinyes, the “Furies” of Ancient Greek mythology, are female\n' +
      'demons who pursue those guilty of crimes against the order of the\n' +
      'gods. Their appearance is so terrible as to cause fear (saving throw).\n' +
      'They are able to see invisible things and locate objects at will, so it is\n' +
      'impossible to hide from them. Each fury carries a whip which, if it hits,\n' +
      'entangles the victim (saving throw) until the Fury releases it. The Furies\n' +
      'are immune to fire and cold, and have a magic resistance of 25%. The\n' +
      'blade of a Fury’s sword causes paralysis (saving throw).',
  },
  {
    name: 'Demon, glabrezu\n' +
      '(third-Category Demon)',
    hitDie: '10',
    armorClass: '–4 [23]',
    attacks: [
      '2 pincers (2d6)',
      '2 claws (1d3)',
      '1 bite 1d6',
    ],
    savingThrow: '5',
    special: 'Magic resistance (60%), immune to fire, magical\n' +
      'abilities',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '15',
    experiencePoints: '2,900',
    description: 'The third-category demons, Glabrezu, are massive and horrible,\n' +
      'standing ten feet high or more. They have goat horns and a humanoid\n' +
      'shape, but no wings. Four arms sprout from the torso: two huge arms\n' +
      'with great crab-pincers, and two much shorter arms with claws.\n' +
      'Glabrezu can cause darkness in a 10-foot radius, are immune to fire,\n' +
      'can cause fear at will, can levitate at will, can polymorph themselves,\n' +
      'and are 60% resistant to magic.\n' +
      'These demons have a 30% chance to gate in an ally (roll 1d4 to\n' +
      'determine the category of demon that responds).',
  },
  {
    name: 'Demon, Hezrou (Second-Category Demon)',
    hitDie: '9',
    armorClass: '-2 [21]',
    attacks: [
      '2 claws (1d3)',
      '1 bite (4d4)',
    ],
    savingThrow: '6',
    special: 'Magic resistance 50%, magical abilities',
    movementRate: '9/14 (flying)',
    alignment: 'Chaos',
    challengeLevel: '11',
    experiencePoints: '1,700',
    description: 'Toad-like demons with bat wings, the Hezrou have magic resistance of\n' +
      '50%. At will, they can cause fear (per the spell), detect invisibility (per the\n' +
      'spell), and cause darkness n a 15-foot radius. They are immune to fire.\n' +
      'Hezrou have a 20% chance to succeed at summoning another second-\n' +
      'category demon to their aid.',
  },
  {
    name: 'Demon, lemures',
    hitDie: '3',
    armorClass: '7 [12]',
    attacks: [
      'Claw (1d3)',
    ],
    savingThrow: '14',
    special: 'Regenerate (1 hp/round)',
    movementRate: '3',
    alignment: 'Chaos',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Lemures are vaguely humanoid, but their flesh is mud-like, shifting\n' +
      'and soft upon their horrible bodies. (This amorphous form allows them\n' +
      'to regenerate 1 hp per round.) Lemures are lower forms of demons, the\n' +
      'fleshly manifestations of damned souls. These demons can be permanently\n' +
      'destroyed only by sprinkling their disgusting bodies with holy water.',
  },
  {
    name: 'Demon, Manes',
    hitDie: '1',
    armorClass: '5[14]',
    attacks: [
      '2 claws (1d2)',
      '1 bite (1d4)',
    ],
    savingThrow: '18',
    special: 'Half damage from non-magic weapons',
    movementRate: '5',
    alignment: 'Chaos',
    challengeLevel: '2',
    experiencePoints: '30',
    description: 'Pathetic, damned souls, manes are demons no larger than humans,\n' +
      'with gray skin and empty eyes. Non-magical weapons inflict only half\n' +
      'normal damage on them.',
  },
  {
    name: 'Demon, Marilith (Fifth-Category Demon)',
    hitDie: '7',
    armorClass: '7 [12]',
    attacks: [
      '6 weapons (1d8)',
      'tail (1d8)',
    ],
    savingThrow: '9',
    special: 'Magic resistance (80%), +1 or better magic\n' +
      'weapon required to hit, immune to fire, magical abilities',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '13',
    experiencePoints: '2,300',
    description: 'Mariliths appear as a cruel-eyed beautiful woman with a six-armed\n' +
      'torso, but the lower body of a huge constrictor snake. They can wield\n' +
      'weapons in all six arms at once, and the tail, if it hits, constricts for\n' +
      'automatic damage after the initial hit. Mariliths are among the most\n' +
      'feared of demons – as much, even, as the mighty Baalrochs. They can,\n' +
      'at will, cast Charm Person, Levitate, and Polymorph Self, and are 80%\n' +
      'resistant to magic. Fire does not affect them.\n' +
      'They have a 50% chance of success when attempting to gate in allies;\n' +
      'if the attempt succeeds, roll 1d12 to determine the result. (1-3) First-\n' +
      'category, (4-6) Second-category, (7-8) Third-category, (9-10) Fourth-\n' +
      'category, (11) Sixth-category, (12) a demonlord or demon prince.',
  },
  {
    name: 'Demon, nalfeshnee\n' +
      '(Fourth-Category Demon)',
    hitDie: '7d10',
    armorClass: '4 [15]',
    attacks: [
      '2 claws (1d4)',
      '1 bite (2d4)',
    ],
    savingThrow: '9',
    special: 'Magic resistance (65%), +1 or better magic\n' +
      'weapon needed to hit, immune to fire, +2 on to-hit rolls,\n' +
      'magical abilities',
    movementRate: '9/14 (flying)',
    alignment: 'Chaos',
    challengeLevel: '12',
    experiencePoints: '2,000',
    description: 'Nalfeshnee demons have the body of an enormous gorilla, the head\n' +
      'of a boar, and cloven hooves. These massive, brutish demons are\n' +
      'actually quite intelligent, despite their appearance, an incongruity\n' +
      'that has deceived and doomed many who would attempt to control or\n' +
      'enslave them. The very size of a nalfeshnee prevents them from being\n' +
      'particularly agile flyers, though they do have wings. Nalfeshnee are\n' +
      'incredibly powerful (+2 to hit), and have various demonic powers in\n' +
      'addition to being immune to fire: at will, they can cause fear (as per the\n' +
      'spell), polymorph self, and dispel magic (at will). They can also create\n' +
      'a symbol of discord once per day.\n' +
      'A nalfeshnee demon has a 60% chance to gate in an ally (roll 1d6 to\n' +
      'determine which category of demon will respond).',
  },
  {
    name: 'Demon, Quasit',
    hitDie: '3',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d2 + non-lethal poison)',
      '1 bite (1d3)',
    ],
    savingThrow: '14',
    special: 'Magic resistance (25%), regenerate (1 hp/round),\n' +
      'non-lethal poison, magical abilities',
    movementRate: '14',
    alignment: 'Chaos',
    challengeLevel: '7',
    experiencePoints: '600',
    description: 'Quasits are demon familiars, much like imps but without wings and\n' +
      'with a less human-like shape. A quasit can polymorph into two other\n' +
      'forms (commonly a giant centipede and a bat). These demons are 25%\n' +
      'resistant to magic, regenerate at 1 hp per round, can become invisible\n' +
      'at will, and once per day can cast a Fear spell. The quasit’s claws are\n' +
      'laden with a poison that reduces an opponent’s Dexterity score by 1\n' +
      'point (saving throw applies, lasts for 2d6 rounds).',
  },
  {
    name: 'Demon, Succubus',
    hitDie: '6',
    armorClass: '9 [10]',
    attacks: [
      '2 scratches (1d3)',
    ],
    savingThrow: '11',
    special: 'Magic resistance (70%), immune to non-\n' +
      'magic weapons, cause darkness in a 10-foot diameter,\n' +
      'level drain (1 level) with kiss, summon other demons,\n' +
      'spells,change shape.',
    movementRate: '12 (18 fly)',
    alignment: 'Chaotic',
    challengeLevel: '9',
    experiencePoints: '1,100',
    description: 'A succubus is a creature of demonic lust, a drinker of souls who offers\n' +
      'fatal temptation to mortals that fall into the trap of her deadly embraces:\n' +
      'each kiss drains one level of experience. (The male form of this demon\n' +
      'is called an incubus. A succubus is always female, just as an incubus\n' +
      'is always male.) The demon’s form is that of a supernaturally beautiful\n' +
      'woman, curvaceous and alluring, but whose furled bat wings and deli-\n' +
      'cate horns betray her true nature. Small white fangs gleam from behind\n' +
      'the demoness’s full lips, and when she is enraged the pupils of her eyes\n' +
      'will contract and shift into those of a vicious serpent.\n' +
      'A succubus can “cast” Charm Person\n' +
      'whenever desired, as well as ESP,\n' +
      'Clairaudience, and Suggestion.\n' +
      'They can change shape at will,\n' +
      'but only into human or human-\n' +
      'like forms. Succubi also have\n' +
      'the ability to call forth (by\n' +
      'gate) other demons. A\n' +
      'succubus can summon\n' +
      'a demon prince (40%\n' +
      'chance to succeed),\n' +
      'but will seldom do\n' +
      'so, for the price to be\n' +
      'paid afterwards is gen-\n' +
      'erally significant and\n' +
      'unpleasant. However, a\n' +
      'succubus can summon\n' +
      'a Baalroch demon or a\n' +
      'Nalfeshnee (fourth-cat-\n' +
      'egory demon), again,\n' +
      'with a 40% chance of\n' +
      'success regardless of\n' +
      'the type of demon be-\n' +
      'ing summoned. If a suc-\n' +
      'cubus does not specify\n' +
      'the sort of demon she\n' +
      'is summoning, there\n' +
      'is a 5% chance that the\n' +
      'respondent will be a de-\n' +
      'mon prince, and if not,\n' +
      'there is a 75% chance\n' +
      'that the demon will be\n' +
      'of the fourth category, a\n' +
      'Nalfeshnee.\n' +
      'Succubi almost never\n' +
      'rely upon physical\n' +
      'attacks; they use their\n' +
      'charm and suggestion\n' +
      'abilities to allow them\n' +
      'to bestow their deadly\n' +
      'kisses upon opponents.',
  },
  {
    name: 'Demon, Vrock (First-Category Demon)',
    hitDie: '8',
    armorClass: '0 [19]',
    attacks: [
      '1 beak (1d6)',
      '2 foreclaws (1d8)',
      '2 rear claws (1d8)',
    ],
    savingThrow: '8',
    special: 'Magic resistance (50%), immune to fire, darkness',
    movementRate: '12/18 (flying)',
    alignment: 'Chaos',
    challengeLevel: '11',
    experiencePoints: '1,700',
    description: 'These demons are vulture-headed, with feathered humanoid bodies, and\n' +
      'huge dark-feathered wings. All can create darkness in a radius of 5 feet and\n' +
      'are immune to fire. They use their wings to bring both their arms and legs into\n' +
      'combat, along with their beaked bite. Vrock demons are quite stupid, though\n' +
      'like most demons they consider themselves to be tremendously intelligent.\n' +
      'A Vrock has a 10% chance to gate another first-category demon to its\n' +
      'assistance.',
  },
  {
    name: 'Demon Prince, ORCuS',
    hitDie: '30 (125hp)',
    armorClass: '–6 [25]',
    attacks: [
      'Wand of Orcus (2d6 or death) or 2 fists (3d6) and\n' +
      'tail sting (2d6 plus poison)',
    ],
    savingThrow: '3',
    special: 'Command undead, spells, summon undead, +3\n' +
      'or better weapon to hit, immunity to electricity and poison,\n' +
      'speak with dead, magic resistance (75%), telepathy 100 ft.',
    movementRate: '18/24 (flying)',
    alignment: 'Chaos',
    challengeLevel: '40',
    experiencePoints: '10400',
    description: 'Orcus is one of the strongest (if not the strongest) and most powerful\n' +
      'of all demon lords. Known as the Prince of the Undead, he fights a\n' +
      'never-ending war against rival demon princes that spans several\n' +
      'Abyssal layers. From his great bone palace he commands his troops as\n' +
      'they wage war across the smoldering and stinking planes of the Abyss.\n' +
      'Orcus spends most of his days in his palace, rarely leaving its confines\n' +
      'unless he decides to leads his troops into battle (which has happened on\n' +
      'more than one occasion). Most of the time though, he is content to let\n' +
      'his generals and commanders lead the battles.\n' +
      'Orcus is a squat, bloated humanoid standing 15 feet tall and\n' +
      'weighing 3 tons. His goat-like head sports large, spiraling ram-like\n' +
      'horns and his legs are covered in thick brown fur and end in hooves.\n' +
      'Two large, black, batlike wings protrude from his back and a long,\n' +
      'snake-like tail, tipped with a sharpened barb, trails behind it.\n' +
      'When not warring against rival demon princes, Orcus likes to\n' +
      'travel the planes, particularly the Material Plane. Should a foolish\n' +
      'spellcaster open a gate and speak his name, he is more than likely\n' +
      'going to hear the call and step through to the Material Plane. What\n' +
      'happens to the spellcaster that called him usually depends on the reason\n' +
      'for the summons and the power of the spellcaster. Extremely powerful\n' +
      'spellcasters are usually slain after a while and turned into undead\n' +
      'soldiers or generals in the demon lord’s armies.\n' +
      'Combat\n' +
      'Orcus prefers to fight using his Wand. His tail sting delivers a virulent\n' +
      'poison (save or die). Orcus can command or banish undead as a 15th-\n' +
      'level cleric, controlling up to 150 HD worth of undead at one time. He\n' +
      'casts spells as a 15th level Cleric and 12th level Magic-user, and can use\n' +
      'the following magical abilities at will: animate dead, charm monster,\n' +
      'darkness, dispel magic, ESP, fear, feeblemind (1/day), lightning bolt,\n' +
      'speak with dead, symbol (any) and wall of fire.\n' +
      'Orcus radiates a 60-foot-radius aura of fear (as the spell). A creature in the\n' +
      'area must succeed at a saving throw or be affected as though by a fear spell.\n' +
      'Three times per day, Orcus can summon one balor, 1d3 nalfeshnees\n' +
      'or 1d4 mariliths. As their prince, Orcus can summon up to 100 HD of\n' +
      'any type of undead each day.\n' +
      'Wand of Orcus: Mighty Orcus wields a huge, black, skull-tipped\n' +
      'rod that functions as a +3 heavy mace. It slays any living creature it\n' +
      'touches if the target fails a saving throw. Further, the Wand has the\n' +
      'following magical powers: 3/day—animate dead, darkness and fear; 2/\n' +
      'day—unholy word. Orcus occasionally allows his wand to pass into the\n' +
      'Material Plane, usually into the hands of one of his servants.',
  },
  {
    name: 'Djinni',
    hitDie: '7+3',
    armorClass: '5 [14]',
    attacks: [
      'Fist or weapon (2d8)',
    ],
    savingThrow: '9',
    special: 'magical powers, whirlwind',
    movementRate: '9/24 (flying)',
    alignment: 'Any',
    challengeLevel: '9',
    experiencePoints: '1,100',
    description: 'Djinn are one of the genies of folklore, creatures of the air (and possibly of\n' +
      'the elemental planes). They can carry 700 lbs of weight, and have a number\n' +
      'of magical powers. A djinni can create food and water as well as wooden and\n' +
      'cloth objects. They can also create objects of metal (including coins), but all\n' +
      'such magically created metals disappear in time. Djinn can call up illusions,\n' +
      'and although these are quite excellent they disappear when touched. A djinni\n' +
      'can give itself a gaseous form (cannot attack or be attacked, can enter any\n' +
      'area that is not airtight), and can become invisible at will. Finally, a djinni can\n' +
      'turn itself into a whirlwind, sweeping away any creature with one or fewer\n' +
      'hit dice. (The diameter of the whirlwind is 10 feet.) More powerful types of\n' +
      'djinn might be capable of granting limited wishes or even true wishes.',
  },
  {
    name: 'Doppleganger',
    hitDie: '4',
    armorClass: '5 [14]',
    attacks: [
      'Claw (1d12)',
    ],
    savingThrow: '13 (5 against any magic)',
    special: 'Mimics shape, immune to sleep and charm spells',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'A doppelganger can change its form to resemble the physical\n' +
      'appearance (including clothing and gear) of any person. These creatures\n' +
      'are immune to sleep and charm, and are considered magic resistant for\n' +
      'purposes such as breaking through Wizard Lock and similar spells.\n' +
      'They have a very good saving throw (5) against magic of all kinds.',
  },
  {
    name: 'Dragon, Black',
    hitDie: '6–8',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d4)',
      'bite (3d6)',
    ],
    savingThrow: '11, 9, or 8',
    special: 'Spits acid',
    movementRate: '9/24 (flying)',
    alignment: 'Chaos',
    challengeLevel: '(hit points/4) +2',
    experiencePoints: '',
    description: 'Black dragons spit a deadly, corrosive acid which covers everything\n' +
      'in a line 5 feet wide and 60 feet long. Black dragons have a 45% chance\n' +
      'of being able to talk; talking black dragons have a 5% chance of being\n' +
      'able to cast 1d4 first-level Magic-User spells.',
  },
  {
    name: 'Dragon, Blue',
    hitDie: '8–10',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d6)',
      'bite (2d12)',
    ],
    savingThrow: '8, 6, or 5',
    special: 'Spits lightning',
    movementRate: '9/24 (flying)',
    alignment: 'Chaos',
    challengeLevel: '(hit points/4) +2',
    experiencePoints: '',
    description: 'Blue dragons spit a blast of lightning in a line 5 ft wide and 100 ft\n' +
      'long, affecting everything in its path. A saving throw indicates half\n' +
      'damage. Blue dragons have a 65% chance of being able to talk; talking\n' +
      'blue dragons have a 15% chance of being able to cast 1d4 first-level\n' +
      'Magic-User spells and 1d3 second-level Magic-User spells.',
  },
  {
    name: 'Dragon, gold',
    hitDie: '10–12',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d8)',
      'bite (3d12)',
    ],
    savingThrow: '5, 4, or 3',
    special: 'Breathes poisonous gas or fire',
    movementRate: '9/24 (flying)',
    alignment: 'Law',
    challengeLevel: '(hit points/4) +2',
    experiencePoints: '',
    description: 'Gold dragons are the noble wyrms of story and song. They can breathe\n' +
      'either a cloud of poisonous gas, 50 feet in diameter (a successful saving\n' +
      'throw indicates half damage) or they can breathe fire in a cone-shape\n' +
      '90 feet long and roughly 30 feet wide at the base. Gold dragons have\n' +
      'a 100% chance of being able to talk and a 25% chance of being able\n' +
      'to cast Magic-User spells: 1d4 first-level, 1d3 second-level, 1d2 third-\n' +
      'level, and 1 fourth-level spell.',
  },
  {
    name: 'Dragon, green',
    hitDie: '7–9',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d6)',
      'bite (2d10)',
    ],
    savingThrow: '9, 8, or 6',
    special: 'Breathes poisonous gas',
    movementRate: '9/24 (flying)',
    alignment: 'Chaos',
    challengeLevel: '(hit points/4) +2',
    experiencePoints: '',
    description: 'Green dragons breathe a cloud of poisonous gas, 50 ft in diameter. (A\n' +
      'successful saving throw indicates half damage.) Green dragons have\n' +
      'a 55% chance of being able to talk; talking green dragons have a 10%\n' +
      'chance of being able to cast 1d4 first level Magic-User spells and 1d2\n' +
      'second level Magic-User spells.',
  },
  {
    name: 'Dragon, Red',
    hitDie: '9–11',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d8)',
      'bite (3d10)',
    ],
    savingThrow: '6, 5, or 4',
    special: 'Breathes fire',
    movementRate: '9/24 (flying)',
    alignment: 'Chaos',
    challengeLevel: '(hit points/4) +2',
    experiencePoints: '',
    description: 'Red dragons are the fire-breathing wyrms of legend. They breathe fire in\n' +
      'a cone-shape 90 feet long and roughly 30 ft wide at the base. Red dragons\n' +
      'have a 75% chance of being able to talk; talking red dragons have a 20%\n' +
      'chance of being able to cast 1d4 first level Magic-User spells, 1d3 second\n' +
      'level Magic-User spells, and 1d2 third level Magic-User spells.',
  },
  {
    name: 'Dragon, White',
    hitDie: '5–7',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d4)',
      'bite (2d8)',
    ],
    savingThrow: '12, 11, or 9',
    special: 'Breathes cold',
    movementRate: '9/24 (flying)',
    alignment: 'Chaos',
    challengeLevel: '(hit points/4) +2',
    experiencePoints: '',
    description: 'White dragons are usually found in cold regions, where they\n' +
      'camouflage themselves in ice and snow, lying in wait for prey. They\n' +
      'breathe a cone of intensely cold air and frost, with a length of 70 ft and\n' +
      'a base of 30 ft. White dragons are not able to talk or cast spells.',
  },
  {
    name: 'Dragon turtle',
    hitDie: '11 to 14',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d8)',
      'bite (3d10)',
    ],
    savingThrow: '4 (11HD) or 3',
    special: 'Break ships, breathe steam',
    movementRate: '3 (9 swimming)',
    alignment: 'Neutrality or Chaos',
    challengeLevel: '11 HD (13); 12 HD (14); 13 HD (15); 14 HD (16)',
    experiencePoints: '11 HD (2,300); 12 HD (2,600); 13 HD (2,900); 14 HD (3,200)',
    description: 'These shell-backed monsters breathe scalding steam in a cone-shape 90\n' +
      'feet long and roughly 30 ft wide at the base, inflicting as many hit points\n' +
      'of damage as the monster has (when at full hp). Dragon turtles have a 75%\n' +
      'chance of being able to talk, and these have a 20% chance of being able to\n' +
      'cast 1d4 first level Magic-User spells, 1d3 second level Magic-User spells,\n' +
      'and 1d2 third level Magic-User spells. A dragon turtle that rises beneath all\n' +
      'but the largest ship can lift it, possibly making it capsize (roughly 50%).',
  },
  {
    name: 'Dryad',
    hitDie: '2',
    armorClass: '9 [10]',
    attacks: [
      'Wooden dagger (1d4)',
    ],
    savingThrow: '16',
    special: 'Charm person (-2 save)',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'Dryads are beautiful female tree spirits who do not venture far from\n' +
      'their home trees. They can cast (as a native magical power) a strong\n' +
      'charm that operates as a Charm Person spell with a -2 penalty to the\n' +
      'saving throw. Those who are charmed seldom return, or might be kept\n' +
      'for a hundred years and a day within the dryad’s tree.',
  },
  {
    name: 'Dwarf',
    hitDie: '1',
    armorClass: '4 [15]',
    attacks: [
      'War hammer (1d4+1)',
    ],
    savingThrow: '17',
    special: 'Detects attributes of stonework',
    movementRate: '6',
    alignment: 'Law',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'Statistics above are for the common Dwarf with no particular unusual\n' +
      'characteristics. A dwarf-at-arms would usually have a full 8 hit points,\n' +
      'reflecting skill and general toughness. Stronger Dwarfs (sergeants-at-\n' +
      'arms, for example) might have more hit dice or unusual bonuses to hit,\n' +
      'or even magical abilities if such is possible (Norse myths are a good\n' +
      'example of this.) Do not bother to treat more-powerful NPC dwarfs as\n' +
      'Fighters or other character types; just assign the right number of hit dice\n' +
      'and abilities (if any) and keep moving along with the fantasy.',
  },
  {
    name: 'Efreeti',
    hitDie: '10',
    armorClass: '2 [17]',
    attacks: [
      'Fist or sword (2d8)',
    ],
    savingThrow: '5',
    special: 'Wall of fire',
    movementRate: '9/24 (flying)',
    alignment: 'Chaos',
    challengeLevel: '12',
    experiencePoints: '2,000',
    description: 'Efreet are a type of genie, associated with fire (in contrast to the djinn,\n' +
      'who have powers over the air). Efreet can carry up to 1000 pounds of\n' +
      'weight, and under the right circumstances they can be forced to serve\n' +
      'as a slave until they figure out how to free themselves. An efreeti can\n' +
      'create a wall of fire (per the spell). They appear as giant humans with\n' +
      'cruel features, their skin flickering with flames.',
  },
  {
    name: 'Elemental, Air',
    hitDie: '8, 12, or 16',
    armorClass: '2 [17]',
    attacks: [
      'Strike (2d8)',
    ],
    savingThrow: '8, 3, or 3',
    special: 'Whirlwind, immune to non-magic weapons',
    movementRate: '36 (flying',
    alignment: 'Neutrality',
    challengeLevel: '8 HD (9) 12 HD (2,300), 16 HD (3,500)',
    experiencePoints: '8 HD (1,100) 12 HD (2,300), 16 HD (3,500)',
    description: 'Air elementals can turn into a whirlwind of air with a diameter of 30\n' +
      'ft, hurling any creature of 1 HD or less for great distances (and almost\n' +
      'certainly killing them). These elemental whirlwinds are approximately\n' +
      '100 ft in height.',
  },
  {
    name: 'Elemental, Earth',
    hitDie: '8, 12, or 16',
    armorClass: '2 [17]',
    attacks: [
      'Fist (4d8)',
    ],
    savingThrow: '8, 3, or 3',
    special: 'Tear down stone, immune to non-magic weapons',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '8 HD (9) 12 HD (13), 16 HD (17)',
    experiencePoints: '8 HD (1,100) 12 HD (2,300), 16 HD (3,500)',
    description: 'Earth elementals are hulking man-shapes of rock and earth. They\n' +
      'batter opponents with their great fists, although damage is reduced by\n' +
      '1d6 if the opponent is not standing upon earth or rock. Earth elementals\n' +
      'can tear apart stone structures, able to rip down even a castle wall in a\n' +
      'matter of 1d4+4 rounds (minutes).',
  },
  {
    name: 'Elemental, Fire',
    hitDie: '8, 12, or 16',
    armorClass: '2 [17]',
    attacks: [
      'Strike (3d8)',
    ],
    savingThrow: '8, 3, or 3',
    special: 'Ignite materials, immune to non-magic weapons',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: '8 HD (9) 12 HD (13), 16 HD (3,500)',
    experiencePoints: '8 HD (1,100) 12 HD (2,300), 16 HD (3,500)',
    description: 'Fire elementals are formless masses of flame, perhaps with a vaguely\n' +
      'human shape. Their attacks cause flammable materials (including\n' +
      'wood) to ignite if the material fails a saving throw (as determined by\n' +
      'the Referee).',
  },
  {
    name: 'Elemental, Water',
    hitDie: '8, 12, or 16',
    armorClass: '2 [17]',
    attacks: [
      'Strike (3d10)',
    ],
    savingThrow: '8, 3, or 3',
    special: 'Can overturn boats, immune to non-magic weapons',
    movementRate: '6/18 (swimming)',
    alignment: 'Neutrality',
    challengeLevel: '8 HD (9) 12 HD (13), 16 HD (17)',
    experiencePoints: '8 HD (1,100) 12 HD (2,300), 16 HD (3,500)',
    description: 'Water elementals cannot move more than 60 ft from a large body\n' +
      'of water, and their damage is reduced by 1d6 if the opponent is not\n' +
      'standing in water (or swimming, etc.). These powerful beings can\n' +
      'overturn small boats, and can overturn a ship if given 1d4+4 rounds\n' +
      'to work at it. On water, they can attack ships, battering them to pieces\n' +
      'within 1 hour if not prevented or distracted.',
  },
  {
    name: 'Elf',
    hitDie: '1+1',
    armorClass: '5 [14]',
    attacks: [
      'Sword (1d8) or 2 arrows (1d6)',
    ],
    savingThrow: '17',
    special: 'None',
    movementRate: '12',
    alignment: 'Law (sometimes Neutrality)',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'The example above is for a typical Elf; trained warriors would likely\n' +
      'have the maximum 9 hit points. Obviously, Elves encountered in the\n' +
      'course of a party’s adventuring will have a variety of powers and\n' +
      'different attributes. The Referee will assign such powers as he sees\n' +
      'fit, in accordance with the way he envisions elves. They might be the\n' +
      'woodland dwellers of Tolkien’s The Hobbit, or the high Elves of the\n' +
      'Lord of the Rings, or might be the faerie folk of Irish legend. In any case,\n' +
      'the Referee should not bother trying to fit an idea of “advanced” Elves\n' +
      'into the constraints of character classes—just assign their attributes to\n' +
      'fit the concept. Non-player characters are not subject to the rules that\n' +
      'govern building a player character; they are tools for good fantasy.',
  },
  {
    name: 'Fish, giant',
    hitDie: 'varies (see below)',
    armorClass: '7 [12]',
    attacks: [
      '1 bite (1d6 per 5 feet in length)',
    ],
    savingThrow: 'varies (see below)',
    special: 'None (or swallow whole: see below)',
    movementRate: 'varies (roll 1d4+1 x10)',
    alignment: 'Neutrality (usually)',
    challengeLevel: 'varies',
    experiencePoints: 'varies',
    description: 'Giant fish can range from something barely larger than a shark to\n' +
      'something as large as a whale. In general, these creatures will be at least 11\n' +
      'feet long, and will have 1HD per 2 feet of length. Thus, if rolling randomly\n' +
      'for a giant fish, roll 1d10+10 feet to determine the length, and the hit dice\n' +
      'will be half that number. If the roll is a “10,” (i.e., the fish would be 20 feet\n' +
      'long) then it is a REALLY giant fish: roll 1d20 for additional feet in length.\n' +
      'Thus, the maximum size for a giant fish is 40 feet, and for some unknown\n' +
      'reason giant fish never seem to be exactly 20 feet in length; a matter for\n' +
      'philosophers to puzzle upon. The truly giant fish can most likely swallow\n' +
      'people whole on a natural roll of 18-20. Use the rules for creating monsters\n' +
      'to determine the saving throws and experience point values of the varying\n' +
      'sizes of giant fish. Giant fish might be intelligent (5% chance), in which\n' +
      'case they might have an alignment other than Neutrality.',
  },
  {
    name: 'gargoyle',
    hitDie: '4',
    armorClass: '5 [14]',
    attacks: [
      '2 claws (1d3)',
      '1 bite (1d4)',
      '1 horn (1d6)',
    ],
    savingThrow: '13',
    special: 'Immune to non-magic weapons',
    movementRate: '9/15 (flying)',
    alignment: 'Chaos',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'Gargoyles are winged beings resembling the carven monstrosities that\n' +
      'bedeck the walls of cathedrals and many subterranean dungeons. They\n' +
      'are terribly vicious predators.',
  },
  {
    name: 'gelatinous Cube',
    hitDie: '4',
    armorClass: '8 [11]',
    attacks: [
      'Attack (2d4)',
    ],
    savingThrow: '13',
    special: 'Paralysis, immune to lightning and cold',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'Gelatinous cubes are semi-transparent cubes that slosh through\n' +
      'subterranean passages, engulfing debris and carrion to digest. Their\n' +
      'entire substance is acidic; if the cube hits successfully, the victim must\n' +
      'make a saving throw or become paralyzed (6 turns) for the cube to\n' +
      'devour. Most gelatinous cubes contain various metallic treasures or\n' +
      'gems that they have engulfed but not yet digested.',
  },
  {
    name: 'ghoul',
    hitDie: '2',
    armorClass: '6 [13]',
    attacks: [
      '2 claws (1d3)',
      '1 bite (1d4)',
    ],
    savingThrow: '16',
    special: 'Immunities, paralysis',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'Ghouls are pack-hunting undead corpse eaters. They are immune, like\n' +
      'most undead, to charms and sleep spells. The most dangerous feature of\n' +
      'these horrid, cunning creatures is their paralyzing touch: any hit from a ghoul\n' +
      'requires a saving throw or the victim becomes paralyzed for 3d6 turns.',
  },
  {
    name: 'giant, Cloud',
    hitDie: '12 +1d4 hit points',
    armorClass: '4 [15]',
    attacks: [
      'Weapon (6d6)',
    ],
    savingThrow: '3',
    special: 'Hurl boulders',
    movementRate: '15',
    alignment: 'Chaos (sometimes Neutrality)',
    challengeLevel: '13',
    experiencePoints: '2,300',
    description: 'Cloud giants are cunning beasts, often living in cloud-castles in the\n' +
      'sky (hence their name). They throw rocks for 6d6 hit points of damage.\n' +
      'Cloud giants are famous for their ability to smell out food, enemies,\n' +
      'and Englishmen.',
  },
  {
    name: 'giant, Fire',
    hitDie: '11 +1d4 hit points',
    armorClass: '4 [15]',
    attacks: [
      'Weapon (5d6)',
    ],
    savingThrow: '4',
    special: 'Hurl boulders, immune to fire',
    movementRate: '12',
    alignment: 'Chaos (sometimes Neutrality)',
    challengeLevel: '12',
    experiencePoints: '2,000',
    description: 'Fire giants are usually found near volcanic mountains, in great castles\n' +
      'of basalt or even iron. They throw boulders for 5d6 hit points.',
  },
  {
    name: 'giant, Frost',
    hitDie: '10+1d4 hit points',
    armorClass: '4 [15]',
    attacks: [
      'Weapon (4d6)',
    ],
    savingThrow: '5',
    special: 'Hurl boulders, immune to cold',
    movementRate: '12',
    alignment: 'Chaos (sometimes Neutrality)',
    challengeLevel: '11',
    experiencePoints: '1,700',
    description: 'Frost giants dwell in cold regions, where they build (or conquer)\n' +
      'castles in remote places of ice and snow. They throw boulders or great\n' +
      'chunks of ice for 4d6 points of damage.',
  },
  {
    name: 'giant, Hill',
    hitDie: '8',
    armorClass: '4 [15]',
    attacks: [
      'Weapon (2d8)',
    ],
    savingThrow: '8',
    special: 'Hurl boulders',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '9',
    experiencePoints: '1,100',
    description: 'Hill giants are the least of the giant races; most are brutish cave-\n' +
      'dwellers who dress in pelts and uncured hides. They throw rocks for\n' +
      '2d8 points of damage.',
  },
  {
    name: 'giant, Stone',
    hitDie: '9',
    armorClass: '0 [19]',
    attacks: [
      'Club (3d6)',
    ],
    savingThrow: '6',
    special: 'Hurl boulders',
    movementRate: '12',
    alignment: 'Chaos (sometimes Neutrality)',
    challengeLevel: '10',
    experiencePoints: '1,400',
    description: 'Stone giants dwell in caves, isolated in the mountain fastnesses. They\n' +
      'throw rocks for 3d6 points of damage, and can be quite crafty in setting\n' +
      'up ambushes in their native mountains. Travelers who wander into the\n' +
      'territory of stone giants seldom return.',
  },
  {
    name: 'giant, Storm',
    hitDie: '15',
    armorClass: '1 [18]',
    attacks: [
      'Weapon (7d6)',
    ],
    savingThrow: '3',
    special: 'Throw boulders, control weather',
    movementRate: '15',
    alignment: 'Neutral (sometimes Law or Chaos)',
    challengeLevel: '16',
    experiencePoints: '3,200',
    description: 'Storm giants are the largest of giants, the most intelligent, the most\n' +
      'magical, and the most likely to talk with humans rather than simply\n' +
      'devour them. Storm giants can live in underwater sea-castles as well\n' +
      'as on the heights of mountains. They throw boulders for 7d6 points of\n' +
      'damage, and have the power to control weather (as per the spell).',
  },
  {
    name: 'gnoll',
    hitDie: '2',
    armorClass: '5 [14]',
    attacks: [
      'Bite (2d4) or weapon (1d10)',
    ],
    savingThrow: '16',
    special: 'None',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '2',
    experiencePoints: '30',
    description: 'Gnolls are tall humanoids with hyena-like heads. They may be found\n' +
      'both above ground and in subterranean caverns. They form into loosely\n' +
      'organized clans, often ranging far from home in order to steal and kill\n' +
      'with rapacious ferocity.',
  },
  {
    name: 'goblin',
    hitDie: '1d6 hit points',
    armorClass: '6 [13]',
    attacks: [
      'Weapon (1d6)',
    ],
    savingThrow: '18',
    special: '-1 to hit in sunlight',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: 'B',
    experiencePoints: '10',
    description: 'Goblins are small creatures (4 ft tall or so) that inhabit dark woods,\n' +
      'underground caverns, and (possibly) the otherworldly realms of the fey.\n' +
      'They attack at -1 in the full sunlight.',
  },
  {
    name: 'golem, Clay',
    hitDie: '10 (45 hit points)',
    armorClass: '7 [12]',
    attacks: [
      '1 fist (3d10)',
    ],
    savingThrow: '5',
    special: 'Immune to slashing and piercing weapons,\n' +
      'immune to most spells.',
    movementRate: '8',
    alignment: 'Neutrality',
    challengeLevel: '14',
    experiencePoints: '2,600',
    description: 'The “original” golem of folklore, clay golems may be created by Cler-\n' +
      'ics or powerful priests. They are massive clay statues of human beings,\n' +
      'imbued with a rudimentary intelligence and the ability to move and fol-\n' +
      'low their masters’ commands. For each round of combat, a clay golem\n' +
      'has a 1% chance (cumulative) to go berserk, leaving its master’s control\n' +
      'and attacking enemies and allies alike. Clay golems are not damaged by\n' +
      'slashing or piercing weapons. They are immune to all spells other than\n' +
      'those affecting earth, and these have very diminished effects – with one\n' +
      'exception. An earthquake spell may be used to utterly destroy a clay\n' +
      'golem.',
  },
  {
    name: 'golem, Flesh',
    hitDie: '8 (40 hit points)',
    armorClass: '9 [10]',
    attacks: [
      '2 fists (2d8)',
    ],
    savingThrow: '4',
    special: 'Hit only by magic weapons, slowed by fire and\n' +
      'cold, immune to most spells, healed by lightning',
    movementRate: '8',
    alignment: 'Neutrality',
    challengeLevel: '12',
    experiencePoints: '2,000',
    description: 'A creation stitched together from human limbs and other parts, a\n' +
      'flesh golem is similar to Frankenstein’s monster. Only +1 or better\n' +
      'magic weapons can harm a flesh golem, and it is slowed by fire and\n' +
      'cold spells. Lightning heals the golem for the number of points of\n' +
      'damage that it would normally inflict. No other type of spell affects\n' +
      'a flesh golem.',
  },
  {
    name: 'golem, iron',
    hitDie: '16 (80 hit points)',
    armorClass: '3 [16]',
    attacks: [
      'Weapon or fist (4d10)',
    ],
    savingThrow: '3',
    special: 'Poison gas, immune to all weapons +2 or less,\n' +
      'slowed by lightning, healed by fire, immune to most spells',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '17',
    experiencePoints: '3,500',
    description: 'Iron golems are huge moving statues of iron. They can breathe\n' +
      'a 10-foot-radius cloud of poison gas as well as attacking with great\n' +
      'power. Weapons of +2 or less do not affect iron golems. These hulking\n' +
      'statues are slowed by lightning spells, but fire-based spells actually\n' +
      'restore hit points to them. No other type of spell affects them.',
  },
  {
    name: 'golem, Stone',
    hitDie: '12 (60 hit points)',
    armorClass: '5 [14]',
    attacks: [
      'Fist (3d8)',
    ],
    savingThrow: '3',
    special: 'Unaffected by +1 or lesser weapons, immune to\n' +
      'most spells',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '16',
    experiencePoints: '3,200',
    description: 'Stone golems are massive stone statues animated by very powerful\n' +
      'magics (much more than just animate object, in other words). They\n' +
      'are slowed by fire spells, damaged by rock-to-mud spells, and healed\n' +
      'by the reverse. Spells that affect rock, and fire spells, are the only ones\n' +
      'that affect stone golems. They can only be hit by +2 or better weapons.',
  },
  {
    name: 'gorgon',
    hitDie: '8',
    armorClass: '2 [17]',
    attacks: [
      'Gore (2d6)',
    ],
    savingThrow: '8',
    special: 'Breath turns creatures to stone',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '10',
    experiencePoints: '1,400',
    description: 'Gorgons are bull-like creatures with scales like dragons. Their breath\n' +
      'turns creatures to stone (60-foot range, saving throw applies).',
  },
  {
    name: 'grey Ooze',
    hitDie: '3',
    armorClass: '8 [11]',
    attacks: [
      'Strike (2d6)',
    ],
    savingThrow: '14',
    special: 'Acid, immunities',
    movementRate: '1',
    alignment: 'Neutrality',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'Grey ooze is almost identical in appearance to wet rock, but it is\n' +
      'a slimy, formless substance that devours prey and carrion with its\n' +
      'acidic secretions, lashing out to strike enemies. Grey ooze is immune\n' +
      'to spells, heat, and cold damage. Metal (but not stone or wood) must\n' +
      'make a saving throw vs. acid when exposed to grey ooze (even if the\n' +
      'contact is as brief as the strike of a sword) or be rotted through. When\n' +
      'the grey ooze hits a character in metal armor, the armor must make an\n' +
      'item saving throw. Only cutting and piercing damages a grey ooze—it\n' +
      'is impervious to blunt or crushing attacks.',
  },
  {
    name: 'griffon',
    hitDie: '7',
    armorClass: '3 [16]',
    attacks: [
      '2 claws (1d4)',
      '1 bite (2d8)',
    ],
    savingThrow: '9',
    special: 'None',
    movementRate: '12/27 (flying)',
    alignment: 'Neutrality',
    challengeLevel: '8',
    experiencePoints: '800',
    description: 'Griffons have the body of a lion, with the head, fore-claws, and wings\n' +
      'of an eagle. These creatures can be tamed and ridden as mounts. They\n' +
      'usually nest in high mountain aeries, where they lay their eggs and hunt\n' +
      'their prey. Because the fledglings can be tamed, young griffons and\n' +
      'griffon eggs command a very high price in the marketplaces of the great\n' +
      'cities, or to noble lords and wizards.',
  },
  {
    name: 'Harpy',
    hitDie: '3',
    armorClass: '7 [12]',
    attacks: [
      '2 talons (1d3) and weapon (1d6)',
    ],
    savingThrow: '14',
    special: 'Siren-song',
    movementRate: '6/18 (flying)',
    alignment: 'Chaos',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Harpies have the upper body of a human female and the lower\n' +
      'body and wings of a vulture. Their song is a charm that draws its\n' +
      'victims to the harpy (saving throw applies), and the harpy’s touch\n' +
      'casts the equivalent of a charm person spell (again, saving throw\n' +
      'applies).',
  },
  {
    name: 'Hell Hound',
    hitDie: '4–7',
    armorClass: '4 [15]',
    attacks: [
      'Bite (1d6)',
    ],
    savingThrow: '13, 12, 11, or 9',
    special: 'Breathe fire',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '4 HD (5), 5 HD (6), 6 HD (7), 7 HD (8)',
    experiencePoints: '4 HD (240), 5 HD (400), 6 HD (600), 7 HD (800)',
    description: 'Hell hounds are fire-breathing dogs of the underworlds or lower\n' +
      'planes. In addition to biting, they can breathe fire each round, inflicting\n' +
      '2 hp damage per hit die (10 ft range, saving throw for half damage).',
  },
  {
    name: 'Hippogriff',
    hitDie: '3+1',
    armorClass: '5 [14]',
    attacks: [
      '2 claws (1d6)',
      '1 bite (1d10)',
    ],
    savingThrow: '14',
    special: 'None',
    movementRate: '18/24 (flying)',
    alignment: 'Neutrality',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'The hippogriff is similar to a griffon, having the head, foreclaws, and\n' +
      'wings of an eagle, but instead of the body of a lion, it has the body of a\n' +
      'horse. The poem Orlando Furioso (written by the poet Dante in 1516)\n' +
      'suggests that the hippogriff is the offspring of a griffon and a horse—\n' +
      'but they are apparently an independent breed, for folkloric tradition\n' +
      'holds that griffons frequently attack hippogriffs. Hippogriffs are not\n' +
      'as hard to train as griffons—again, from Orlando Furioso: “Drawn by\n' +
      'enchantment from his distant lair, The wizard thought but how to tame\n' +
      'the foal; And, in a month, instructed him to bear Saddle and bit, and\n' +
      'gallop to the goal; And execute on earth or in mid air, All shifts of\n' +
      'manege, course and caracole…”',
  },
  {
    name: 'Hobgoblin',
    hitDie: '1+1',
    armorClass: '5 [14]',
    attacks: [
      'Weapon (1d8)',
    ],
    savingThrow: '17',
    special: 'None',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'Hobgoblins are simply large goblins, possibly a separate breed living\n' +
      'apart from their smaller cousins, or perhaps not, as the Referee decides.\n' +
      'As a matter of the campaign’s flavoring, the Referee might choose\n' +
      'to make hobgoblins the “fey” goblins of Irish legend, while regular\n' +
      'goblins are the more Tolkien-style underground-dwellers.',
  },
  {
    name: 'Human, Bandit',
    hitDie: '1',
    armorClass: '7 [12]',
    attacks: [
      'Weapon (1d8)',
    ],
    savingThrow: '17',
    special: 'None',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'Bandits are roving groups of thieves, sometimes organized into small\n' +
      'armies led by more powerful bandit chiefs and captains with higher hit\n' +
      'dice.',
  },
  {
    name: 'Human, Berserker',
    hitDie: '1',
    armorClass: '7 [12]',
    attacks: [
      'Weapon (1d8)',
    ],
    savingThrow: '17',
    special: 'Berserking',
    movementRate: '12',
    alignment: 'Neutrality or Chaos',
    challengeLevel: '2',
    experiencePoints: '30',
    description: 'Berserkers are normal humans, but they fight with astounding ferocity.\n' +
      'A bonus of +2 is added to their attack rolls. They do not wear armor\n' +
      'heavier than leather armor.',
  },
  {
    name: 'Human, normal',
    hitDie: '1d6',
    armorClass: '9 [10]',
    attacks: [
      'Weapon (1d6)',
    ],
    savingThrow: '18',
    special: 'None',
    movementRate: '12',
    alignment: 'Any',
    challengeLevel: 'B',
    experiencePoints: '10',
    description: 'Normal humans are untrained peasants or townsfolk.',
  },
  {
    name: 'Human, Sergeant-at-Arms',
    hitDie: '3',
    armorClass: '5 [14]',
    attacks: [
      'Weapon (1d8)',
    ],
    savingThrow: '17',
    special: 'None',
    movementRate: '12',
    alignment: 'Any',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'Human sergeants are normally found in command of 1d6+5 human\n' +
      'soldiers. These are the leaders of city guard units and other small\n' +
      'military groups.',
  },
  {
    name: 'Human, Soldier',
    hitDie: '1',
    armorClass: '7 [12]',
    attacks: [
      'Weapon (1d8)',
    ],
    savingThrow: '17',
    special: 'None',
    movementRate: '12',
    alignment: 'Any',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'Human soldiers serve as city guardsmen, mercenaries, and men-at-\n' +
      'arms. They are generally armed with leather armor and a mace, sword,\n' +
      'or spear.',
  },
  {
    name: 'Hydra',
    hitDie: '5-12 (equal to the number of heads)',
    armorClass: '5 [14]',
    attacks: [
      '5-12 bites (1d6)',
    ],
    savingThrow: '12, 11, 9, 8, 6, 5, 4, or 3',
    special: 'None',
    movementRate: '9',
    alignment: 'Neutrality',
    challengeLevel: '5 HD (7), 6 HD (8), 7 HD (9), 8 HD (10), 9 HD (11), 10 HD (12), 11 HD (13), 12 HD (14)',
    experiencePoints: '5 HD (600), 6 HD (800), 7 HD (1,100), 8 HD (1,400), 9 HD (1,700), 10 HD (2,000), 11 HD (2,300), 12 HD (2,600)',
    description: 'Hydrae are great lizard-like or snake-like creatures with multiple\n' +
      'heads. Each head has one hit die of its own, and when an individual\n' +
      'head takes that much damage, that head dies. The body has as many\n' +
      'hit dice as the total of the heads, so it is a matter of good strategy for\n' +
      'adventurers to focus either on killing heads (when all the heads are dead\n' +
      'the body dies) or killing the creature by attacking the body (in which\n' +
      'case the heads die, too). Hydrae that breathe fire or regenerate their\n' +
      'heads are also known to exist.',
  },
  {
    name: 'invisible Stalker',
    hitDie: '8',
    armorClass: '3 [16]',
    attacks: [
      '“Bite” (4d4)',
    ],
    savingThrow: '8',
    special: 'Invisible',
    movementRate: 'Fly 12',
    alignment: 'Neutrality',
    challengeLevel: '9',
    experiencePoints: '1,100',
    description: 'Invisible stalkers are generally found only as a result of the spell\n' +
      'Invisible Stalker. They are invisible flying beings created to follow a\n' +
      'single command made by the caster.',
  },
  {
    name: 'Kobold',
    hitDie: '1d4 hp',
    armorClass: '7 [12]',
    attacks: [
      'Weapon (1d6)',
    ],
    savingThrow: '18',
    special: 'None',
    movementRate: '6',
    alignment: 'Chaos',
    challengeLevel: 'A',
    experiencePoints: '5',
    description: 'Kobolds are subterranean, vaguely goblin-like humanoids. They have\n' +
      'a -1 penalty when fighting above ground. Many use slings or short\n' +
      'bows, and they fight with short swords or spiked clubs in melee combat.',
  },
  {
    name: 'leech, giant',
    hitDie: '2',
    armorClass: '3 [16]',
    attacks: [
      '1 bite (2d6)',
    ],
    savingThrow: '16',
    special: 'Suck blood',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'If a giant leech hits with its attack, it drains a level of experience on\n' +
      'the following round. Anyone reduced below a level of 0 will die. Lost\n' +
      'levels of experience most likely return at a rate of 1 per day, if the\n' +
      'character rests. Freshwater leeches might simply drain hit points.',
  },
  {
    name: 'lich',
    hitDie: '12+',
    armorClass: '3 [16]',
    attacks: [
      'Hand (1d10 + automatic paralysis)',
    ],
    savingThrow: '3',
    special: 'Appearance causes paralytic fear, touch causes\n' +
      'automatic paralysis, spells',
    movementRate: '6',
    alignment: 'Chaos',
    challengeLevel: '12 HD (15), 13 HD (16), 14 HD (17), 15 HD (18), 16 HD (19), 17 HD (20), 18 HD (21)',
    experiencePoints: '12 HD (2,900), 13 HD (3,200), 14 HD (3,500), 15 HD (3,800), 16 HD (4,100), 17 HD (4,400), 18 HD (4,700)',
    description: 'Liches are the undead remnants of wizards, either made undead by\n' +
      'their own deliberate acts during life, or as the result of other magical\n' +
      'forces (possibly including their own magics gone awry). A lich has the\n' +
      'same number of hit dice as the original Magic-User and the same spell-\n' +
      'casting powers. A lich’s touch causes paralysis with no saving throw,\n' +
      'and the very sight of one of these dread creatures causes any being of\n' +
      '4 HD or below to flee in abject terror. Liches are highly intelligent and\n' +
      'totally malign.',
  },
  {
    name: 'lion',
    hitDie: '5+2',
    armorClass: '6 [13]',
    attacks: [
      '2 claws (1d4)',
      '1 bite (1d8)',
    ],
    savingThrow: '12',
    special: 'None',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'Male lions are\n' +
      'noticeably larger\n' +
      'than their female\n' +
      'counterparts, and\n' +
      'easily identified\n' +
      'by their manes.\n' +
      'They are usually\n' +
      'solitary beasts,\n' +
      'found leading\n' +
      'a pride only\n' +
      'in their prime.\n' +
      'The lioness,\n' +
      'while smaller\n' +
      'and having an\n' +
      'AC of 7 [12], is\n' +
      'an indisputably\n' +
      'skillful hunter—\n' +
      'far faster and\n' +
      'more agile than\n' +
      'the male lion.\n' +
      'Lionesses often\n' +
      'coordinate with others in their pride to bring down prey.',
  },
  {
    name: 'lizardman',
    hitDie: '2+1',
    armorClass: '5 [14]',
    attacks: [
      '2 claws (1d3)',
      '1 bite (1d8)',
    ],
    savingThrow: '16',
    special: 'Underwater',
    movementRate: '6/12 (swimming)',
    alignment: 'Usually Chaos',
    challengeLevel: '2',
    experiencePoints: '30',
    description: 'Lizardmen are reptilian humanoids, both male and female, usually\n' +
      'living in tribal villages in the depths of fetid swamps. Some can hold\n' +
      'their breath for long durations (an hour or more), while other can\n' +
      'actually breathe underwater.',
  },
  {
    name: 'lurker, Ceiling',
    hitDie: '10',
    armorClass: '6 [13]',
    attacks: [
      '1 crush (1d6)',
    ],
    savingThrow: '5',
    special: 'Smother',
    movementRate: '1/7 (flying)',
    alignment: 'Neutrality',
    challengeLevel: '10',
    experiencePoints: '1400',
    description: 'Lurkers resemble floating manta rays, with a rough, stone-like under-\n' +
      'surface. They levitate to ceiling-tops and wait for prey to walk under-\n' +
      'neath, whereupon they drop and enfold the victim in their thick “wings”\n' +
      '(to-hit roll). Anyone trapped inside a lurker’s clutches takes 1d6 points\n' +
      'of damage per round from crushing, and will suffocate within 1d4+1\n' +
      'rounds unless the lurker is killed. There is normally only a 10% chance\n' +
      'to detect a lurker’s presence visually before it attacks, and it has a 65%\n' +
      'chance to gain initiative automatically (unless a “surprise roll” system is\n' +
      'being used, in which case the lurker has a 4 in 6 chance to gain surprise).',
  },
  {
    name: 'lycanthrope, Werebear',
    hitDie: '6',
    armorClass: '2 [17]',
    attacks: [
      '2 claws (1d3)',
      '1 bite (2d4)',
    ],
    savingThrow: '9',
    special: 'Lycanthropy, hit only by magic or silver weapons. hug',
    movementRate: '9',
    alignment: 'Neutrality or Chaos',
    challengeLevel: '8',
    experiencePoints: '800',
    description: 'Werebears are often found in temperate forests. On an attack roll of\n' +
      '18+ (natural roll) with its claws, the werebear grabs its victim and hugs\n' +
      'it for an additional 2d8 points of damage.',
  },
  {
    name: 'lycanthrope, Wereboar',
    hitDie: '5',
    armorClass: '4 [15]',
    attacks: [
      'Bite (2d6)',
    ],
    savingThrow: '12',
    special: 'Lycanthropy, hit only by magic or silver weapons',
    movementRate: '12',
    alignment: 'Neutrality or Chaos',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'Wereboars are often found in the remote wilderness.',
  },
  {
    name: 'lycanthrope, Wererat',
    hitDie: '3',
    armorClass: '6 [13]',
    attacks: [
      'Bite (1d3)',
      'Weapon (1d6)',
    ],
    savingThrow: '14',
    special: 'Control rats, lycanthropy, hit only by magic or\n' +
      'silver weapons',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Wererats are often found in cities, lurking in shadowy alleyways.\n' +
      'Wererats can control rats, and are extremely stealthy, surprising\n' +
      'opponents on 1–4 on a d6.',
  },
  {
    name: 'lycanthrope, Weretiger',
    hitDie: '5',
    armorClass: '3 [16]',
    attacks: [
      '2 claws (1d4)',
      '2 claws (1d4)',
    ],
    savingThrow: '11',
    special: 'Lycanthropy, hit only by magic or silver weapons',
    movementRate: '12',
    alignment: 'Neutrality or Chaos',
    challengeLevel: '7',
    experiencePoints: '600',
    description: 'Weretigers are often found in tropical cities and ancient jungle ruins,\n' +
      'but will appear in more temperate climates as well, if tigers live in the\n' +
      'surrounding wilderness.',
  },
  {
    name: 'lycanthrope, Werewolf',
    hitDie: '4',
    armorClass: '5 [14]',
    attacks: [
      'Bite (2d4)',
    ],
    savingThrow: '13',
    special: 'Lycanthropy, hit only by magic or silver weapons',
    movementRate: '12',
    alignment: 'Usually Chaos',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'Werewolves are the traditional Lycanthropes seen in horror movies.\n' +
      'They can turn into a wolf or into a wolf-man. Wolvesbane keeps them\n' +
      'at bay.',
  },
  {
    name: 'Manticore',
    hitDie: '6+1',
    armorClass: '4 [15]',
    attacks: [
      '2 claws (1d3)',
      '1 bite (1d8)',
      '6 tail spikes (1d6)',
    ],
    savingThrow: '11',
    special: 'Tail spikes',
    movementRate: '12/18 (flying)',
    alignment: 'Chaos',
    challengeLevel: '8',
    experiencePoints: '800',
    description: 'This horrid monster has bat wings, the face of a feral human, the body\n' +
      'of a lion, and a tail tipped with 24 iron spikes. The manticore can hurl\n' +
      'up to 6 of the iron spikes from its tail per round, at a maximum range\n' +
      'of 180 ft.',
  },
  {
    name: 'Medusa',
    hitDie: '4',
    armorClass: '8 [11]',
    attacks: [
      'Weapon (1d4)',
    ],
    savingThrow: '11',
    special: 'Gaze turns to stone',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '8',
    experiencePoints: '800',
    description: 'The terrifying medusa has a female face but hair of writhing snakes;\n' +
      'it has no legs, but the body of a serpent. The gaze of a medusa turns\n' +
      'anyone looking upon it into stone. In addition to the medusa’s relatively\n' +
      'weak melee-weapon attack, the snake-hair makes one attack per round,\n' +
      'causing no damage but inflicting a lethal poison with a successful hit\n' +
      '(saving throw applies).',
  },
  {
    name: 'Merman',
    hitDie: '1',
    armorClass: '7 [12]',
    attacks: [
      'Weapon (1d6)',
    ],
    savingThrow: '17',
    special: 'Breathe water',
    movementRate: '1/18 (swimming)',
    alignment: 'Any',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'Mermen have the torso of a human and the lower body of a fish.\n' +
      'Although the race is called “mermen,” there are female members as\n' +
      'well.',
  },
  {
    name: 'Minotaur',
    hitDie: '6',
    armorClass: '6 [13]',
    attacks: [
      'Head butt (2d4)',
      'bite (1d3)',
      'weapon (1d8)',
    ],
    savingThrow: '11',
    special: 'Never get lost in labyrinths',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'The minotaur is a man-eating predator, with the head of a bull and\n' +
      'the body of a massive human, covered in shaggy hair. Most are not\n' +
      'particularly intelligent.',
  },
  {
    name: 'Mummy',
    hitDie: '5+1',
    armorClass: '3 [16]',
    attacks: [
      'Fist (1d12)',
    ],
    savingThrow: '11',
    special: 'Rot, hit only by magic weapons',
    movementRate: '6',
    alignment: 'Chaos',
    challengeLevel: '7',
    experiencePoints: '600',
    description: 'Mummies cannot be hit by normal weapons, and even magical\n' +
      'weapons cause only half damage. In addition to normal damage, their\n' +
      'touch also inflicts a rotting disease which prevents magical healing and\n' +
      'causes wounds to heal at one-tenth of the normal rate. A Cure Disease\n' +
      'spell can increase healing rate to one-half normal, but a Remove Curse\n' +
      'spell is required to completely lift the mummy’s curse.',
  },
  {
    name: 'naga, guardian',
    hitDie: '11',
    armorClass: '5 [14]',
    attacks: [
      'Bite (1d6 + poison)',
    ],
    savingThrow: '4',
    special: 'Spit poison, constriction, spells.',
    movementRate: '18',
    alignment: 'Law',
    challengeLevel: '13',
    experiencePoints: '2300',
    description: 'The largest and noblest of the naga, guardian nagas are from 20 to 25 feet\n' +
      'in length. They do not necessarily have a humanlike head, but some char-\n' +
      'acteristic (a flowing mane of hair, for instance) will immediately set their\n' +
      'appearance apart from normal serpents. They can bite or spit with lethal\n' +
      'poison, and if they hit with their coils they automatically cause 1d8 points\n' +
      'of constriction damage per round thereafter. Guardian nagas cast clerical\n' +
      'spells (2/2/1/1). A sample selection of spells for a guardian naga might in-\n' +
      'clude: level 1: Cure Light Wounds x2; level 2: Hold Person, Silence 15-foot\n' +
      'Radius; level 3: Cure Disease; level 4: Cure Serious Wounds.',
  },
  {
    name: 'naga, Spirit',
    hitDie: '9',
    armorClass: '5 [14]',
    attacks: [
      'Bite (1d3 + poison)',
    ],
    savingThrow: '6',
    special: 'Poison, charm gaze, spells.',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '13',
    experiencePoints: '2300',
    description: 'Spirit nagas are malicious, evil creatures. Their gaze has the effect of\n' +
      'a Charm Person spell, their bite is poison, and they cast both Magic-\n' +
      'User spells (4/2/1) and Cleric spells (2/1). A sample spell selection for a\n' +
      'spirit naga might be: Magic-User spells level 1: Charm Person x2, Magic\n' +
      'Missile, Sleep; level 2: Mirror Image, Web; level 3: Protection from Nor-\n' +
      'mal Missiles. Cleric spells level 1: Cure Light Wounds x2; level 2: Silence\n' +
      '15-foot Radius. Such nagas are from 10 to 20 feet in length, and have a\n' +
      'human head.',
  },
  {
    name: 'naga, Water',
    hitDie: '7',
    armorClass: '5 [14]',
    attacks: [
      'Bite (1d4 + poison)',
    ],
    savingThrow: '9',
    special: 'Poison, spells.',
    movementRate: '12/20 (swimming)',
    alignment: 'Any',
    challengeLevel: '10',
    experiencePoints: '1400',
    description: 'Water nagas might be of any alignment. They do not ordinarily have\n' +
      'human heads, but like the guardian nagas they will have some physical\n' +
      'attributes separating them clearly from normal serpents. In the case of\n' +
      'water nagas, this might be the color of the scales or the presence of flow-\n' +
      'ing beard-like fins, perhaps. Water nagas are from 10 to 15 feet long.\n' +
      'Water nagas cast Magic-User spells (4/2/1). A sample spell selection for\n' +
      'a water naga might be: level 1: Charm Person x2, Magic Missile, Sleep;\n' +
      'level 2: Mirror Image, Web; level 3: Protection from Normal Missiles.',
  },
  {
    name: 'nixie',
    hitDie: '1',
    armorClass: '7 [12]',
    attacks: [
      'Weapon (1d6)',
    ],
    savingThrow: '18',
    special: 'Charm',
    movementRate: '6/12 (swimming)',
    alignment: 'Neutrality',
    challengeLevel: 'B',
    experiencePoints: '10',
    description: 'Nixies are weak water fey creatures.\n' +
      'One in ten of them has the power to cast\n' +
      'a powerful Charm Person (-2 penalty\n' +
      'to saving throw) that causes the\n' +
      'victim to walk into the water and\n' +
      'join the nixies as their slave for\n' +
      'a year. Casting Dispel Magic\n' +
      'against the curse has\n' +
      'only a 75% chance of\n' +
      'success, and once the\n' +
      'victim is actually\n' +
      'in the water the\n' +
      'chance drops to\n' +
      '25%. Nixies\n' +
      'are ordinarily\n' +
      'f r i e n d l y,\n' +
      'but they are\n' +
      'capricious.',
  },
  {
    name: 'Ochre Jelly',
    hitDie: '5',
    armorClass: '8 [11]',
    attacks: [
      'Acid-laden strike (3d4)',
    ],
    savingThrow: '11',
    special: 'Lightning divides creature',
    movementRate: '3',
    alignment: 'Neutrality',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'Ochre jellies are amorphous oozes that damage opponents with their\n' +
      'acidic surface. They dissolve any adventurers they kill, making a Raise\n' +
      'Dead spell impossible.',
  },
  {
    name: 'Octopus, giant',
    hitDie: '4',
    armorClass: '7 [12]',
    attacks: [
      '8 tentacles (1d3) (see below)',
    ],
    savingThrow: '13',
    special: 'Jet, Ink',
    movementRate: '9 (swimming)',
    alignment: 'Neutrality',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'After a giant octopus hits with a tentacle, it does 1d6 points of damage\n' +
      'per round, automatically, instead of the initial 1d3. Also, there is a 25%\n' +
      'chance that the tentacle “hit” pinions one of the victim’s limbs (roll\n' +
      'randomly for left/right arms and legs to see which is immobilized). A\n' +
      'giant octopus can jet water out to achieve a movement rate of up to 27,\n' +
      'and can also release a huge cloud of ink to obscure its location. Some\n' +
      'giant octopi might be able to move onto land for short periods of time.',
  },
  {
    name: 'Ogre',
    hitDie: '4+1',
    armorClass: '5 [14]',
    attacks: [
      'Weapon (1d10)',
    ],
    savingThrow: '13',
    special: 'None',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Ogres are normally quite stupid, but more intelligent versions might\n' +
      'be encountered here and there.',
  },
  {
    name: 'Ogre Mage',
    hitDie: '5+4',
    armorClass: '4 [15]',
    attacks: [
      'Weapon (1d12)',
    ],
    savingThrow: '12',
    special: 'Magic use (See below), regenerate 1hp/round',
    movementRate: '12/18 (flying)',
    alignment: 'Chaos',
    challengeLevel: '7',
    experiencePoints: '600',
    description: 'The ogre mage is an ogre with magic powers, based on Japanese\n' +
      'legend. An ogre mage can fly, turn invisible (per the spell), create a\n' +
      '10-foot-radius circle of magical darkness, change into human form,\n' +
      'cast Sleep and Charm Person once per day, and cast a Cone of Frost\n' +
      'with a range of 60 feet to a base of 30 feet, causing 8d6 damage to any\n' +
      'caught within (saving throw applies). Western folklore also contains\n' +
      'many examples of shape-shifting, magical ogres (the most famous\n' +
      'example being the one in Puss-in-Boots), so there might be many\n' +
      'different interpretations of magical ogres whether or not they are called\n' +
      '“ogre mage.”',
  },
  {
    name: 'Orc',
    hitDie: '1',
    armorClass: '6 [13]',
    attacks: [
      'Weapon, usually spear (1d6) or scimitar (1d8)',
    ],
    savingThrow: '17',
    special: 'None',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'Orcs are stupid, brutish humanoids that gather in tribes of hundreds.\n' +
      'Most are subterranean dwellers, and fight with a penalty of -1 in\n' +
      'sunlight. Occasionally, war-bands or even entire tribes of orcs issue\n' +
      'forth from their caverns to raid and pillage by night. Orcish leaders are\n' +
      'great brutes with additional hit dice, and magic-using shamans may\n' +
      'also be found in the larger tribes. Orcish tribes hate each other, and will\n' +
      'fight savagely unless restrained by a powerful and feared commander,\n' +
      'such as a Chaotic high priest or an evil sorcerer.',
  },
  {
    name: 'Owlbear',
    hitDie: '5',
    armorClass: '5 [14]',
    attacks: [
      '2 claws (1d6)',
      '1 bite (2d6)',
    ],
    savingThrow: '12',
    special: 'Hug for additional 2d8 if to-hit roll is 18+',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'Owlbears have the body of a bear but the beak of an owl, with some\n' +
      'feathers on the head and places on the body as well. On an attack roll of\n' +
      '18+ (natural roll) with its claws, the owlbear grabs its victim and hugs\n' +
      'it for an additional 2d8 points of damage.',
  },
  {
    name: 'Pegasus',
    hitDie: '2+2',
    armorClass: '6 [13]',
    attacks: [
      '2 hooves (1d8)',
    ],
    savingThrow: '13',
    special: 'None',
    movementRate: '24/48 (flying)',
    alignment: 'Law',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Pegasi are winged horses. Most have feathered wings, but some might\n' +
      'have bat wings and some might be evil—at the Referee’s discretion.',
  },
  {
    name: 'Piercer',
    hitDie: '1 to 4',
    armorClass: '3 [16]',
    attacks: [
      '1 drop/pierce (1d6 per HD)',
    ],
    savingThrow: '17, 16, 14, or 13',
    special: 'Drop from ceiling',
    movementRate: '1',
    alignment: 'Neutrality',
    challengeLevel: '1 HD (1), 2 HD (2), 3 HD (3), 4 HD (4)',
    experiencePoints: '1 HD (15), 2 HD (30), 3 HD (60), 4 HD (120)',
    description: 'Piercers resemble stalactites, and drop from cavern ceilings to pierce\n' +
      'their victims. After falling (and feeding), they crawl slowly back to the\n' +
      'ceiling in order to attack again. Note that the damage inflicted by a\n' +
      'piercer is 1d6 per hit die of the creature.',
  },
  {
    name: 'Purple Worm',
    hitDie: '15',
    armorClass: '6 [13]',
    attacks: [
      'Bite (2d12)',
      'sting (1d8 + poison)',
    ],
    savingThrow: '3',
    special: 'Poison sting, swallows whole',
    movementRate: '9',
    alignment: 'Neutrality',
    challengeLevel: '17',
    experiencePoints: '3,500',
    description: 'Purple worms are massive annelids that grow 40 ft and more in length,\n' +
      'and sometimes exceed ten feet in width. They are subterranean, chew-\n' +
      'ing tunnels in rock (or through sand, in deserts, where they are a tan\n' +
      'color). These beasts swallow their prey whole on a roll 4 higher than the\n' +
      'needed number, or if the worm rolls double the number required to hit.\n' +
      'They can swallow anything the size of a horse or smaller. In addition to\n' +
      'the worm’s dreaded bite, it has a poison stinger on its tail, the length of\n' +
      'a sword and just as deadly even from the piercing wound it inflicts. In\n' +
      'addition, the poison injected by the stinger is lethal if the victim fails\n' +
      'a saving throw. What prey the purple worms once hunted with such\n' +
      'natural weaponry (or perhaps still do, in deep places), must have been\n' +
      'terrifying indeed. Aquatic versions of the purple worm might also exist.',
  },
  {
    name: 'Rakshasa',
    hitDie: '7',
    armorClass: '-4 [23]',
    attacks: [
      '2 claws (1d3)',
      '1 bite (1d6)',
    ],
    savingThrow: '9',
    special: ' Illusory appearance, special magic resistance,\n' +
      'spells',
    movementRate: '15',
    alignment: 'Chaos',
    challengeLevel: '12',
    experiencePoints: '2,000',
    description: 'Rakshasas are evil spirits from Indian mythology. Their true form is\n' +
      'that of a demon with the head of a tiger or other predatory animal, but\n' +
      'by magical illusion they always appear to others in a friendly or non-\n' +
      'threatening form. Rakshasas can only be affected by the most powerful\n' +
      'of spells (level 8 or 9), and they can only be hit with magical weapons.\n' +
      'Crossbow bolts that have been blessed by a Cleric are the bane of the\n' +
      'rakshasa – such bolts are treated as +3 weapons against them. Raksha-\n' +
      'sas are minor spell casters, able to cast Magic-User spells (3/2/1) and\n' +
      'Cleric spells (1 Level-1 spell). Typical spells for a rakshasa might be:\n' +
      'Magic-User level 1: Magic Missile x3; level 2: Mirror Image, Web; level 3: Fly\n' +
      'Cleric level 1: Cure Light Wounds',
  },
  {
    name: 'Rat, giant',
    hitDie: ' 1d4 hit points',
    armorClass: '7 [12]',
    attacks: [
      'Bite (1d3)',
    ],
    savingThrow: '18',
    special: '5% are diseased',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: 'A',
    experiencePoints: '5',
    description: 'Giant rats are often found in dungeons, and are about the size of a cat,\n' +
      'or perhaps a lynx. The bite of some (1 in 20) giant rats causes disease.\n' +
      'A saving throw is allowed (versus poison). The effects of the disease\n' +
      'are decided by the Referee.',
  },
  {
    name: 'Rat, giant (Monstrously Huge)',
    hitDie: '3',
    armorClass: '6 [13]',
    attacks: [
      '2 claws (1d3)',
      '1 bite (1d6)',
    ],
    savingThrow: '14',
    special: '5% are diseased',
    movementRate: '12',
    alignment: 'Neutrality unless intelligent (Chaos)',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Giant rats (monstrously huge) are often found in dungeons, and are\n' +
      'vicious predators the size of a wolf. The bite of some (1 in 20) giant rats\n' +
      'causes disease. A saving throw is allowed (versus poison). The effects\n' +
      'of the disease are decided by the Referee.',
  },
  {
    name: 'Roc',
    hitDie: '12',
    armorClass: '4 [15]',
    attacks: [
      'Bite (3d6)',
      '2 claws (2d6)',
    ],
    savingThrow: '3',
    special: 'None',
    movementRate: '3/30 flying)',
    alignment: 'Neutrality or Law',
    challengeLevel: '12',
    experiencePoints: '2,000',
    description: 'Rocs are the mythological great birds of legend, large enough to prey\n' +
      'upon elephants. They can be trained as fledglings to serve as steeds,\n' +
      'so roc eggs or fledglings would be a prize indeed, worth great sums\n' +
      'of gold. Rocs might grow as large as 18 HD, with commensurately\n' +
      'increased statistics.',
  },
  {
    name: 'Salamander',
    hitDie: '7',
    armorClass: '5 [14] (torso); 3 [16] (serpent body)',
    attacks: [
      'Touch and constrict (2d8 + 1d6 heat)',
      '1 weapon (1d6 +1d6 heat)',
    ],
    savingThrow: '9',
    special: 'Heat, constrict',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '8',
    experiencePoints: '800',
    description: 'Salamanders are intelligent creatures of the elemental planes of fire. They\n' +
      'have the upper body of a human and the lower body of a snake, and give off\n' +
      'tremendous, intense heat. The very touch of a salamander deals 1d6 hit\n' +
      'points of fire damage, and they wrap their tails around foes to cause an\n' +
      'additional 2d8 points of crushing damage per round as the victim writhes\n' +
      'in the deadly heat of the serpentine coils. The salamander’s human torso is\n' +
      'AC 5 [14], and the armored serpent-tail is AC 3 [16]. Salamanders cannot\n' +
      'be enslaved in the same manner djinn and efreet might be.',
  },
  {
    name: 'Sea Monster',
    hitDie: '30',
    armorClass: '2 [17]',
    attacks: [
      'Bite (4d10)',
    ],
    savingThrow: '3',
    special: 'Swallow whole',
    movementRate: '0/18 (swimming)',
    alignment: 'Neutrality',
    challengeLevel: '30',
    experiencePoints: '12,900',
    description: 'Sea monsters generally resemble bizarre fish, long-necked monsters\n' +
      'with seal-like bodies, or massive eels, although virtually all have a\n' +
      'hide of incredibly tough scales. In general, their appearance is quite\n' +
      'varied, for there does not appear to be a particular “species” of sea\n' +
      'monster. Sea monsters swallow their prey whole, like sea serpents: if the\n' +
      'attack roll is 4 over the required number (or a natural 20), the victim is\n' +
      'swallowed, will die in an hour, and will be fully digested within a day. Sea\n' +
      'monsters are not generally venomous. They are generally encountered\n' +
      'underwater; unlike sea serpents, they seldom venture to the surface.',
  },
  {
    name: 'Sea Serpent',
    hitDie: '15',
    armorClass: '6 [13]',
    attacks: [
      'Bite (2d12)',
    ],
    savingThrow: '3',
    special: 'Swallow whole',
    movementRate: '0/20 (swimming)',
    alignment: 'Neutrality',
    challengeLevel: '17',
    experiencePoints: '3,500',
    description: 'A fully-grown sea serpent is approximately 50 feet in length, and will\n' +
      'swallow a person whole on any attack roll in which the die rolled is 4 or\n' +
      'more over the required number, and always if the die roll is a 20.\n' +
      'Swallowed victims will be dead within an hour, and fully digested\n' +
      'within one day. Some sea serpents are also venomous, in which case\n' +
      'the CL/XP is 19/4,100.',
  },
  {
    name: 'Shadow',
    hitDie: '2+2',
    armorClass: '7 [12]',
    attacks: [
      '1 touch (1d4 + Str drain)',
    ],
    savingThrow: '14',
    special: 'Drains 1 Str with hit, can only be hit by magical\n' +
      'weapons',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Shadows may or may not be undead creatures: they are immune to Sleep and\n' +
      'Charm, but the Referee may decide whether they are undead creatures subject\n' +
      'to turning or whether they are some horrible “other” thing: a manifestation,\n' +
      'perhaps, or a creature from another dimension (or gaps in the dimensions).\n' +
      'Shadows are dark and resemble actual shadows, though they may be even\n' +
      'darker in coloration. They are not corporeal, and can only be harmed with\n' +
      'magical weapons or by spells. Their chill touch drains one point of Strength\n' +
      'with a successful hit, and if a victim is brought to a Strength attribute of 0, he\n' +
      'or she is transformed into a new shadow. If the person does not come to such a\n' +
      'dark ending, then Strength points return after 90 minutes (9 turns).',
  },
  {
    name: 'Shambling Mound',
    hitDie: '7 to 12',
    armorClass: '1 [18]',
    attacks: [
      '2 fists (2d8)',
    ],
    savingThrow: '9, 8, 6, 5, 4, or 3',
    special: 'Immunities, enfold and suffocate victims.',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: 'HD 7 (10); HD 8 (11); HD 9 (12); HD 10 (13); HD 11 (14); HD 12 (15)',
    experiencePoints: 'HD 7 (1400); HD 8 (1700); HD 9 (2000); HD 10 (2300); HD 11 (2600); HD 12 (2900)',
    description: 'Shambling mounds are moving plants, huge masses of slimy vegeta-\n' +
      'tion that shamble through swamps and marshes looking for prey. They\n' +
      'have a roughly bipedal shape, with two ‘legs’ and two ‘arms.’\n' +
      'Shambling mounds are immune to fire because of their slimy, wet bod-\n' +
      'ies. They take only half damage from cold, and half damage from weapons\n' +
      'of any kind. Electricity causes a shambling mound to gain one hit die. If\n' +
      'a shambling mound hits with both arms, the victim is enfolded into the\n' +
      'slimy body and will suffocate in 2d4 melee rounds unless freed.',
  },
  {
    name: 'Shrieker',
    hitDie: '2+2',
    armorClass: '7 [12]',
    attacks: [
      'None',
    ],
    savingThrow: '14',
    special: 'Shriek',
    movementRate: '1',
    alignment: 'Neutrality',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'Shriekers are huge mushrooms with tough, fibrous bodies. They do not\n' +
      'physically attack, but if light shines on them (or within about 30 feet) or if\n' +
      'anything moves near them (within about 10 feet), they emit a high-pitched\n' +
      'shrieking noise. This noise causes 1 hp damage per round (saving throw\n' +
      'applies) to anyone nearby (within 30 feet). The true danger of shriekers is\n' +
      'that they tend to summon wandering monsters. If they are attacked with\n' +
      'missile weapons, they will attempt to shuffle away, although they do not\n' +
      'move very fast.',
  },
  {
    name: 'Skeleton',
    hitDie: '1',
    armorClass: '8 [11], with shield 7 [12]',
    attacks: [
      'Weapon or strike (1d6)',
    ],
    savingThrow: '17',
    special: 'Immune to sleep and charm spells',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'Skeletons are animated bones of the dead, usually under the control\n' +
      'of some evil master.',
  },
  {
    name: 'Slithering tracker',
    hitDie: '4',
    armorClass: '5 [14]',
    attacks: [
      'No normal attack',
    ],
    savingThrow: '13',
    special: 'Transparent, paralysis',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'Perhaps the most dangerous of wandering monsters, slithering trackers are\n' +
      'a form of transparent slug and may be related to gelatinous cubes. They are\n' +
      'difficult to see (10% chance for a person to spot it, and he may lose sight of it\n' +
      'again in the next round). Unless they are starving, they do not attack moving\n' +
      'prey (5% chance to be starving). Instead, they follow the potential prey until it\n' +
      'sleeps or camps. They can ooze under doors and through fairly small cracks,\n' +
      'so even a barricaded room with a closed door is probably not safe. When it\n' +
      'attacks, the victim must make a saving throw or be paralyzed by the slitherer’s\n' +
      'secretions. A paralyzed victim will be sucked dry of all body fluids in 5 turns\n' +
      '(50 minutes), losing 20% of hit points each 10 minutes.',
  },
  {
    name: 'Slug, giant',
    hitDie: '12',
    armorClass: '8 [11]',
    attacks: [
      'Bite (1d12) or acid',
    ],
    savingThrow: '3',
    special: 'Spit acid (6d6)',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '13',
    experiencePoints: '2,300',
    description: 'These tremendously large masses of slimy, rubbery flesh are\n' +
      'completely immune to blunt weapons. In addition to their powerful bite,\n' +
      'giant slugs can spit their acidic saliva at one target at a time. The base\n' +
      'range for spitting is 60 feet, and within this range the slug’s spittle will\n' +
      'be 50% likely to hit (no other to-hit roll required). For every additional\n' +
      '10 feet of range, the chance to hit decreases by 10%. On its first spitting\n' +
      'attack, the slug only has a 10% chance to hit within 60 feet, and no\n' +
      'chance of hitting beyond that range. Some giant slugs might have more\n' +
      'or less virulent acidity, thus changing the damage inflicted.',
  },
  {
    name: 'Spectre',
    hitDie: '6',
    armorClass: '2 [17]',
    attacks: [
      'Spectral weapon or touch (1d8 + level drain)',
    ],
    savingThrow: '9',
    special: 'Level drain (2 levels) with hit',
    movementRate: '15/30 (flying)',
    alignment: 'Chaos',
    challengeLevel: '9',
    experiencePoints: '1,100',
    description: 'Spectres are wraith-like undead creatures without corporeal bodies.\n' +
      'When a spectre hits an opponent, with either hand or weapon, the touch\n' +
      'drains two levels from the victim. Only magical weapons can damage\n' +
      'a spectre. In some cases, these terrifying creatures may be mounted\n' +
      'upon living beasts, if the beasts have been trained to tolerate proximity\n' +
      'to the undead. Any being killed (or drained below level 0) by a spectre\n' +
      'becomes a spectre as well, a pitiful thrall to its creator.',
  },
  {
    name: 'Spider, giant (Smaller)',
    hitDie: '1+1',
    armorClass: '8 [11]',
    attacks: [
      'Bite (1 hp) + poison',
    ],
    savingThrow: '17',
    special: 'Poison (+2 save or die)',
    movementRate: '9',
    alignment: 'Neutrality',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'Giant spiders are aggressive hunters. The smaller variety pounce on\n' +
      'prey and do not spin webs.',
  },
  {
    name: 'Spider, giant (Man-sized, 4-foot diameter)',
    hitDie: '2+2',
    armorClass: '6 [13]',
    attacks: [
      'Bite (1d6) + poison',
    ],
    savingThrow: '16',
    special: 'Poison (+1 save or die), surprise',
    movementRate: '18',
    alignment: 'Neutrality unless intelligent (Chaos)',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'Man-sized giant spiders surprise on a roll of 1–5 on a d6, being able\n' +
      'to hide well in shadows. Most are not web-spinners.',
  },
  {
    name: 'Spider, giant (greater, 6-foot diameter)',
    hitDie: '4+2',
    armorClass: '4 [15]',
    attacks: [
      'Bite (1d6+2) + poison',
    ],
    savingThrow: '13',
    special: 'Poison (save or die), webs',
    movementRate: '4',
    alignment: 'Chaos',
    challengeLevel: '7',
    experiencePoints: '600',
    description: 'The greater giant spiders are all web builders. Webs spun by giant\n' +
      'spiders require a saving throw to avoid becoming stuck. Those who\n' +
      'make a saving throw can fight in and move (5 ft per round) through the\n' +
      'webs. The webs are flammable.',
  },
  {
    name: 'Spider, Phase',
    hitDie: '5',
    armorClass: '6 [13]',
    attacks: [
      'Bite (1d6) + poison',
    ],
    savingThrow: '16',
    special: 'Poison (+1 save or die), phase shifting',
    movementRate: '18',
    alignment: 'Neutrality',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'Phase spiders can shift out of phase with their surroundings (so they\n' +
      'can be attacked only be ethereal creatures), only to come back into\n' +
      'phase later for an attack.',
  },
  {
    name: 'Squid, giant',
    hitDie: '6',
    armorClass: '3 [16] (body shell), 7 [12] tentacles and front',
    attacks: [
      '10 (1d3)',
    ],
    savingThrow: '11',
    special: 'Jet, Ink, Constrict',
    movementRate: '9 (swimming)',
    alignment: 'Neutrality',
    challengeLevel: '9',
    experiencePoints: '1100',
    description: 'After a giant squid hits with a tentacle, it does 1d6 points of\n' +
      'damage per round, automatically, instead of the initial 1d3. Also,\n' +
      'there is a 25% chance that the tentacle “hit” pinions one of the\n' +
      'victim’s limbs (roll randomly for left/right arms and legs to see\n' +
      'which is immobilized). A giant squid can jet water out to achieve\n' +
      'a movement rate of up to 27, and can also release a huge cloud\n' +
      'of ink to obscure its location. If a giant squid wraps its tentacles\n' +
      'around a ship, the ship will be crushed in 10 rounds, taking damage\n' +
      'throughout that time.',
  },
  {
    name: 'Stirge',
    hitDie: '1+1',
    armorClass: '7 [12]',
    attacks: [
      '“Sting” (1d3 + blood drain)',
    ],
    savingThrow: '17',
    special: 'Drain blood 1d4/round,+2 bonus to hit',
    movementRate: '3/18 (when flying)',
    alignment: 'Neutrality',
    challengeLevel: '1',
    experiencePoints: '15',
    description: 'Resembling small, feathered, bat-winged anteaters, stirges have a\n' +
      'proboscis which they jab into their prey to drain blood. After a stirge’s\n' +
      'first hit, it drains blood automatically at a rate of 1d4 hp per round.',
  },
  {
    name: 'tick, giant',
    hitDie: '3',
    armorClass: '4 [15]',
    attacks: [
      'Bite (1d4)',
    ],
    savingThrow: '14',
    special: 'Drains blood',
    movementRate: '3',
    alignment: 'Neutrality',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'Giant ticks drain blood at a rate of 4 hit points per round after a\n' +
      'successful hit. Their bite causes disease, which will kill the victim in\n' +
      '2d4 days. (cure disease spells will remove the infection.) A giant tick\n' +
      'can be forced off a victim by fire or by simply killing it.',
  },
  {
    name: 'titan',
    hitDie: '16 HD+1d6 HD',
    armorClass: '2 [17] to –3 [22]',
    attacks: [
      'Weapon (7d6)',
    ],
    savingThrow: '3',
    special: 'Spells',
    movementRate: '21',
    alignment: 'Any',
    challengeLevel: '17 HD (19), 18+ HD (Add 1 challenge level per additional HD over 17)',
    experiencePoints: '17 HD (4,100), 18+ HD (Add 300 XP per additional HD over 17)',
    description: 'Titans are mythological creatures, almost as powerful as gods. A titan has 2\n' +
      'Magic-User spells of each spell level from 1st-level spells to 7th-level spells,\n' +
      'and 2 Cleric spells of each spell level from 1st to 7th. The Referee might\n' +
      'choose to substitute other magical abilities for spells—these creatures vary\n' +
      'considerably in powers and personalities from one to the next.\n' +
      'One possible spell list for a titan might include the following Magic-\n' +
      'User and Cleric spells:\n' +
      'Magic-User: Charm Person (1), Sleep (1), Invisibility (2), Mirror\n' +
      'Image (2), Fireball (3), Fly (3), Polymorph Other (4), Confusion\n' +
      '(4), Conjure Elemental (5), Feeblemind (5), Anti-magic Shell (6),\n' +
      'Stone to Flesh (6), Limited Wish (7), Power Word Stun (7).\n' +
      'Cleric: Light (1), Protection From Evil (1), Hold Person (2),\n' +
      'Speak with Animals (2), Cure Disease (3), Dispel Magic (3), Cure\n' +
      'Serious Wounds (4), Neutralize Poison (4), Finger of Death (5),\n' +
      'Quest (5), Blade Barrier (6), Word of Recall (6), Earthquake (7),\n' +
      'Resurrection (Raise Dead Fully) (7).',
  },
  {
    name: 'trapper Beast',
    hitDie: '10 to 12',
    armorClass: '3 [16]',
    attacks: [
      '1 enfold',
    ],
    savingThrow: '5, 4, or 3',
    special: 'Immunities; enfold and smother',
    movementRate: '1',
    alignment: 'Neutrality',
    challengeLevel: '10 HD (11), 11 HD (12), 12 HD (13)',
    experiencePoints: '10 HD (1,700), 11 HD (2,000), 12 HD (2,300)',
    description: 'Trapper-beasts are large manta-like creatures resembling the stone\n' +
      'floors of the subterranean areas where they live. When prey steps onto\n' +
      'the trapper’s body, it whips up its wings to enfold and smother its vic-\n' +
      'tims (to a maximum of four). Death occurs in 7 melee rounds. Cold\n' +
      'does not damage them, and fire inflicts only half damage.',
  },
  {
    name: 'treant',
    hitDie: '6 HD + 1d6 HD',
    armorClass: '2 [17]',
    attacks: [
      '2 strikes (2d6, 3d6, or 4d6)',
    ],
    savingThrow: '9, 8, 6, 5, 4, or 3',
    special: 'Control trees',
    movementRate: '12',
    alignment: 'Neutrality',
    challengeLevel: '7 HD (7), 8 HD (8), 9 HD (9), 10 HD (10), 11 HD (11) 12 HD (12)',
    experiencePoints: '7 HD (600), 8 HD (800), 9 HD (1,100), 10 HD (1,400), 11 HD (1,700) 12 HD (2,000)',
    description: 'Treants are tree-like protectors and “shepherds” of forest trees.\n' +
      'Depending upon their size, they have different hit dice and do different\n' +
      'amounts of damage: treants of 7 to 8 hit dice inflict 2d6 points of\n' +
      'damage with each strike of their branch-like hands, treants of 9–10 hit\n' +
      'dice inflict 3d6 points, and treants of 11–12 hit dice inflict 4d6 points.\n' +
      'All treants can “wake” trees within 60 ft, allowing them to walk at a\n' +
      'rate of 3, and possibly to attack. (No more than two trees at a time can\n' +
      'be awake at the behest of a single treant.)',
  },
  {
    name: 'troll',
    hitDie: '6+3',
    armorClass: '4 [15]',
    attacks: [
      '2 claws (1d4)',
      '1 bite (1d8)',
    ],
    savingThrow: '11',
    special: 'Regenerates',
    movementRate: '12',
    alignment: 'Chaos',
    challengeLevel: '8',
    experiencePoints: '800',
    description: 'Trolls are as tall as ogres, and just as strong. Unlike ogres, however,\n' +
      'they attack with claws and teeth instead of weapons. Trolls regenerate,\n' +
      'which is to say that any damage inflicted upon them heals within\n' +
      'minutes (3 hit points per round). The only way to utterly kill a troll is\n' +
      'to submerse it in acid or burn it. Trolls can even re-grow lopped-off\n' +
      'heads and limbs.',
  },
  {
    name: 'unicorn',
    hitDie: '4',
    armorClass: '2 [17]',
    attacks: [
      '2 hoofs (1d8)',
      '1 horn (1d8)',
    ],
    savingThrow: '13',
    special: 'Magic resistance (25%), double damage for\n' +
      'charge, teleport',
    movementRate: '24',
    alignment: 'Law',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'Unicorns are generally shy and benevolent creatures, who will allow\n' +
      'only a chaste maiden to approach them. They can teleport once per\n' +
      'day to a distance of 360 ft, with a rider. The unicorn’s horn has healing\n' +
      'properties, according to legend. (The details of this, if any, are left to the\n' +
      'Referee). There is considerable room to create variant sorts of unicorns:\n' +
      'evil ones, flying ones, etc.',
  },
  {
    name: 'Vampire',
    hitDie: '7–9',
    armorClass: '2 [17]',
    attacks: [
      'Bite (1d10 + level drain)',
    ],
    savingThrow: '9, 8, or 6',
    special: 'See below',
    movementRate: '12/18 (flying)',
    alignment: 'Chaos',
    challengeLevel: '7 HD (9), 8 HD (10), 9 HD (11)',
    experiencePoints: '7 HD (1,100), 8 HD (1,400), 9 HD (1,700)',
    description: 'Vampires are some of the most powerful of undead creatures. They\n' +
      'can only be hit with magic weapons, and when “killed” in this way they\n' +
      'turn into a gaseous form, returning to their coffins.\n' +
      'They regenerate at a rate of 3 hit points per round, can turn into a\n' +
      'gaseous form or into a giant bat at will, and can summon a horde of\n' +
      'bats or 3d6 wolves out from the night. Looking into a vampire’s eyes\n' +
      'necessitates a saving throw at -2, or the character is charmed (per the\n' +
      'Charm Person spell). Most terrifyingly, a vampire’s bite drains two\n' +
      'levels from the victim.\n' +
      'Fortunately, vampires have some weaknesses. They can be killed\n' +
      '(though these are the only known methods) by immersing them in\n' +
      'running water, exposing them to sunlight, or driving a wooden stake\n' +
      'through the heart. They retreat from the smell of garlic, the sight of\n' +
      'a mirror, or the sight of “good” holy symbols. Any human killed by a\n' +
      'vampire becomes a vampire under the control of its creator.\n' +
      'This description will be recognized easily as the “Dracula” type\n' +
      'of vampire. Many other possibilities for vampires exist in folklore:\n' +
      'Chinese vampires, for instance, and blood-drinkers more feral than\n' +
      'intelligent. Plus, other cultural templates with different attributes could\n' +
      'be created—how about an ancient Egyptian mummified vampire, or an\n' +
      'Aztec vampire?',
  },
  {
    name: 'Wight',
    hitDie: '3',
    armorClass: '5 [14]',
    attacks: [
      'Claw (1 hp + level drain)',
    ],
    savingThrow: '14',
    special: 'Level drain (1 level) with hit, can only be hit by\n' +
      'magical or silver weapons',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '5',
    experiencePoints: '240',
    description: 'Wights live in tombs, graveyards, and burial mounds (barrows). They\n' +
      'are undead, and thus not affected by sleep or charm spells. Wights\n' +
      'are immune to all non-magical weapons, with the exception of silver\n' +
      'weapons. Any human killed or completely drained of levels by a wight\n' +
      'becomes a wight.',
  },
  {
    name: 'Will-o-the-Wisp',
    hitDie: '9',
    armorClass: '-8 [27]',
    attacks: [
      'Shock (2d6)',
    ],
    savingThrow: '6',
    special: 'Change appearance, lightning',
    movementRate: '18',
    alignment: 'Chaos',
    challengeLevel: '10',
    experiencePoints: '1400',
    description: 'Will o’ the wisps are phantom-like shapes of eerie light, creatures that\n' +
      'live in dangerous places and try to lure travelers into quicksand, off the\n' +
      'edges of cliffs, etc. They usually inhabit swamps or high moors. They\n' +
      'can brighten or dim their own luminescence, and change their shapes\n' +
      'as well, to appear as a group of lights, a wisp of light, or in the glowing\n' +
      'wraithlike shape of a human (often female). They will generally depart\n' +
      'if the attempt to lead victims into danger fails, but if they are attacked\n' +
      'they can defend themselves with violent shocks of lightning-like power.\n' +
      'These creatures are intelligent, and can be forced to reveal the location\n' +
      'of their treasure hoards.',
  },
  {
    name: 'Wolf',
    hitDie: '2+2',
    armorClass: '7 [12]',
    attacks: [
      'Bite (1d4+1)',
    ],
    savingThrow: '16',
    special: 'None',
    movementRate: '18',
    alignment: 'Neutrality',
    challengeLevel: '2',
    experiencePoints: '30',
    description: 'Wolves are pack hunters, and may be found in large numbers. Male\n' +
      'wolves weigh from 80 to 100 pounds.',
  },
  {
    name: 'Worg',
    hitDie: '4',
    armorClass: '6 [13]',
    attacks: [
      'Bite (1d6+1)',
    ],
    savingThrow: '13',
    special: 'None',
    movementRate: '18',
    alignment: 'Chaos',
    challengeLevel: '4',
    experiencePoints: '120',
    description: 'Worgs are large, intelligent, and evil wolves. They may have\n' +
      'supernatural origins.',
  },
  {
    name: 'Wraith',
    hitDie: '4',
    armorClass: '3 [16]',
    attacks: [
      'Touch (1d6 + level drain)',
    ],
    savingThrow: '13',
    special: 'Level drain (1 level) with hit',
    movementRate: '9',
    alignment: 'Chaos',
    challengeLevel: '6',
    experiencePoints: '400',
    description: 'Wraiths are powerful wights, immune to all non-magical weapons\n' +
      'other than silver ones (which inflict only half damage). Arrows are\n' +
      'particularly ineffective against them, for even magical and silver arrows\n' +
      'inflict only one hit point of damage per hit. Wraiths can be found riding\n' +
      'well-trained battle steeds or more unusual mounts that will tolerate their\n' +
      'presence.',
  },
  {
    name: 'Wyvern',
    hitDie: '8',
    armorClass: '3 [16]',
    attacks: [
      'Bite (2d8) or sting (1d6 + poison)',
    ],
    savingThrow: '8',
    special: 'Poison sting',
    movementRate: '6/24 (flying)',
    alignment: 'Neutrality',
    challengeLevel: '9',
    experiencePoints: '1,100',
    description: 'A wyvern is a two-legged form of dragon. These creatures are smaller\n' +
      'and less intelligent than true four-legged dragons, not to mention that\n' +
      'they do not have a breath weapon. Each wyvern has a poisonous sting at\n' +
      'the end of its tails. However, they are not coordinated enough to attack\n' +
      'with both bite and sting in a single round. In any given round, a wyvern\n' +
      'is 60% likely to use its tail, which can lash out to the creature’s front\n' +
      'even farther than its head can reach.',
  },
  {
    name: 'Yellow Mold',
    hitDie: '',
    armorClass: '',
    attacks: [
      '1d6 damage if touched',
    ],
    savingThrow: '',
    special: 'Poisonous spores',
    movementRate: '',
    alignment: '',
    challengeLevel: '3',
    experiencePoints: '60',
    description: 'Yellow mold is a subterranean fungus; it neither moves nor attacks.\n' +
      'However, if it is poked or struck, it may (50% chance) release a cloud\n' +
      '(roughly 10 feet in diameter) of poisonous spores,. Failing a saving\n' +
      'throw against the spores means that the character dies a rather horrible\n' +
      'death. Even just touching yellow mold inflicts 1d6 points of acid\n' +
      'damage on the creature doing the touching. These growths can be\n' +
      'destroyed with fire.',
  },
  {
    name: 'Yeti',
    hitDie: '5',
    armorClass: '6 [13]',
    attacks: [
      '2 fists (1d6)',
    ],
    savingThrow: '12',
    special: 'Immune to cold, hug, fear.',
    movementRate: '14',
    alignment: 'Chaos',
    challengeLevel: '7',
    experiencePoints: '600',
    description: 'Yetis are the “Bigfoot” creatures of the arctic and the high mountains.\n' +
      'If a yeti strikes the same opponent with both fists, it bear-hugs for an\n' +
      'additional 2d8 points of damage. Anyone caught in the yeti’s arms like\n' +
      'this must make a saving throw or be paralyzed with fear for 1d3 rounds,\n' +
      'during which time the yeti hits automatically. Yetis are very intelligent,\n' +
      'and can be quite malevolent. They are immune to normal and magical\n' +
      'cold.',
  },
  {
    name: 'Zombie',
    hitDie: '2',
    armorClass: '8 [11], or 7 [12] with shield',
    attacks: [
      'Weapon or strike (1d8)',
    ],
    savingThrow: '16',
    special: 'Immune to sleep and charm spells',
    movementRate: '6',
    alignment: 'Neutrality',
    challengeLevel: '2',
    experiencePoints: '30',
    description: 'Zombies are mindless creatures, the walking dead. (These are merely\n' +
      'animated corpses, not carriers of any sort of undead contagion as are\n' +
      'ghouls.) If their Undeath is contagious, they should be worth a few\n' +
      'more experience points than described here, and if a single hit from a\n' +
      'zombie causes contagion or any other sort of disease, they should be\n' +
      'worth considerably more experience. However, the standard zombie is\n' +
      'simply a corpse animated to do its creator’s bidding.',
  },
];
