export interface ISpell {
  name: string;
  level: string;
  range: string;
  duration: string;
  description: string;
}

export const spells: ISpell[] = [
    {
        name: 'Aerial Servant',
        level: 'Cleric, 7th Level',
        range: 'N/A',
        duration: 'Until completed or insanity',
        description: 'This spell summons a powerful creature from the elemental planes of\n' +
            'air, to fetch and return one thing (or creature) to the caster. Only a creature\n' +
            'with a Strength of 18 can fight its way from the servant’s grasp, and even\n' +
            'then the chance is not likely to be greater than 50%. The servant can carry\n' +
            'up to 500 pounds in weight. An aerial servant has the following attributes:\n' +
            'HD 16, AC 3 [16], Atk Bonus +17, Atk 1 (4d4), Move 240 feet. If the\n' +
            'servant is frustrated in its efforts to bring the desired object to the caster,\n' +
            'it will become insane, returning and attacking him or her.',
    },
    {
        name: 'Animal growth',
        level: 'Druid, 5th Level; Magic-User, 5th Level',
        range: '120 feet',
        duration: '2 hours',
        description: 'This spell causes 1d6 normal creatures to grow immediately to giant\n' +
            'size. While the spell lasts, the affected creatures can attack as per a giant\n' +
            'version of themselves.',
    },
    {
        name: 'Animal Summoning i',
        level: 'Druid, 4th Level',
        range: '30 feet',
        duration: '1 hour',
        description: 'The Druid summons forth normal animals to serve as allies: 1 creature\n' +
            'larger than a man (such as an elephant), 3 animals the size of a man or\n' +
            'horse (such as a lion), or 6 animals smaller than a man (such as a wolf).\n' +
            'The animals obey the caster’s commands.',
    },
    {
        name: 'Animal Summoning ii',
        level: 'Druid, 5th Level',
        range: '30 feet',
        duration: '2 hours',
        description: 'The Druid summons forth normal animals to serve as allies: 2\n' +
            'creatures larger than a man (such as an elephant), 6 animals the size of\n' +
            'a man or horse (such as a lion), or 12 animals smaller than a man (such\n' +
            'as wolves). The animals obey the caster’s commands.',
    },
    {
        name: 'Animal Summoning iii',
        level: 'Druid, 6th Level',
        range: '30 feet',
        duration: '4 hours',
        description: 'The Druid summons forth normal animals to serve as allies: 4\n' +
            'creatures larger than a man (such as an elephant), 12 animals the size of\n' +
            'a man or horse (such as a lion), or 24 animals smaller than a man (such\n' +
            'as wolves). The animals obey the caster’s commands.',
    },
    {
        name: 'Animate Dead',
        level: 'Magic-User, 5th Level',
        range: 'Referee’s Discretion',
        duration: 'Permanent',
        description: 'This spell animates skeletons or zombies from dead bodies. 1d6\n' +
            'undead are animated per level of the caster above 8th. The corpses\n' +
            'remain animated until slain.',
    },
    {
        name: 'Animate Object',
        level: 'Cleric, 6th Level',
        range: '60 feet',
        duration: '1 hour',
        description: 'The Cleric “brings to life” inanimate objects such as statues, chairs,\n' +
            'carpets, and tables. The objects follow the Cleric’s commands, attacking\n' +
            'foes or performing other actions on the caster’s behalf. The Referee\n' +
            'must determine the combat attributes of the objects (such as armor\n' +
            'class, speed, hit dice, and to-hit bonuses) on the spur of the moment.\n' +
            'A stone statue, as a basic example, might have AC of 1 [18], attack\n' +
            'as a creature with 7–9 HD, and inflict 2d8 points of damage. Wooden\n' +
            'furniture would be considerably less dangerous.',
    },
    {
        name: 'Animate Rock',
        level: 'Druid, 7th Level',
        range: '60 feet',
        duration: '1 hour',
        description: 'The caster brings rock to life, perhaps by calling a spirit into it, or\n' +
            'perhaps by some other means related to the druidic affinity for stone\n' +
            'and the elements. The mass of rock, whether or not shaped into an\n' +
            'object, moves and attacks of its own volition. The druid has roughly a\n' +
            '50% +2% per level chance to be able to bring the object under control;\n' +
            'otherwise it will act somewhat randomly, having little or no independent\n' +
            'intelligence. The quantity of rock that can be animated is a function of\n' +
            'the druid’s power and is about 2-3 cubic feet per level. If the animated\n' +
            'rock is a statue, it will move at a speed appropriate to whatever the\n' +
            'statue depicts (a wolf statue, for example, moving faster than the statue\n' +
            'of a man). A formless mass of rock will have a movement rate of 3.',
    },
    {
        name: 'Anti-Animal Shell', // FIXME
        level: '',
        range: '',
        duration: '',
        description: 'See Anti-Animal Ward',
    },
    {
        name: 'Anti-Animal Ward',
        level: 'Druid, 6th Level',
        range: 'Caster',
        duration: '2 hours',
        description: 'The caster is surrounded by a magical barrier that prevents any sort\n' +
            'of normal or giant animal (but not magical beasts such as a manticore\n' +
            'or griffon) from reaching through or attacking. The spell has a radius\n' +
            'of 10 feet. If anyone within the magical warding casts an attack spell or\n' +
            'makes a physical attack, the barrier instantly evaporates.',
    },
    {
        name: 'Anti-Magic Shell',
        level: 'Magic-User, 6th Level',
        range: 'Caster',
        duration: '2 hours',
        description: 'An invisible bubble of force surrounds the caster, impenetrable to\n' +
            'magic. Spells and other magical effects cannot pass into or out of the\n' +
            'shell. The shell is ten feet in radius.',
    },
    {
        name: 'Anti-Plant Shell', // fixme
        level: '',
        range: '',
        duration: '',
        description: 'See Anti-Plant Ward',
    },
    {
        name: 'Anti-Plant Ward',
        level: 'Druid, 5th Level',
        range: 'Caster',
        duration: '2 hours',
        description: 'The caster is surrounded by a magical barrier which prevents any sort\n' +
            'of plant, magical or not, from reaching through or attacking. The shell has\n' +
            'a radius of ten feet. If anyone within the magical warding casts an attack\n' +
            'spell or makes a physical attack, the barrier will instantly evaporate.',
    },
    {
        name: 'Astral Spell',
        level: 'Magic-User, 9th Level',
        range: '100 miles (above ground), 100 yards (below\n' +
            'ground)',
        duration: '2 hours',
        description: 'The caster projects his or her astral form into other places; the astral\n' +
            'form is invisible to all creatures but those also traveling the astral\n' +
            'plane of existence. The spell has a duration of two hours. If the caster’s\n' +
            'physical body is moved more than 100 miles from its original location\n' +
            'while the astral form is away, the link is sundered and the caster’s soul\n' +
            'becomes lost in the beyond. (If the caster’s body is underground, it need\n' +
            'only be moved 100 yards before the connection is broken.)\n' +
            'The astral form is capable of casting spells, but there is a 5% chance\n' +
            'per spell level that the spell will fail. Additionally, there is a 2% chance\n' +
            'per spell level of the attempted spell that the astral spell itself will falter\n' +
            'as a result of the spell casting, and the astral form will return to the\n' +
            'physical body. When traveling in astral form upon the earth, the astral\n' +
            'form may travel as fast as 100 miles per hour per level above 18th. If\n' +
            'the form is traveling underground, its top speed is much slower: 120\n' +
            'feet per 10-minute turn. When traveling into the deeper regions beyond\n' +
            'the earth, speed and distance are obviously not measured in miles.',
    },
    {
        name: 'Blade Barrier',
        level: 'Cleric, 6th Level',
        range: '60 feet',
        duration: '12 turns',
        description: 'Mystical blades, whirling and thrusting, form a lethal circle around\n' +
            'the spell’s recipient, at a radius of 15 feet. The barrier inflicts 7d10\n' +
            'points of damage to anyone trying to pass through.',
    },
    {
        name: 'Bless',
        level: 'Cleric, 2nd Level',
        range: 'Only upon a character not in combat.',
        duration: '1 hour (6 turns)',
        description: 'This spell grants its recipient a +1 to attack rolls (and improves\n' +
            'morale, if the recipient is not a player character). The recipient cannot\n' +
            'already be in combat when the spell is cast.',
    },
    {
        name: 'Cacodemon or Cacodaemon',
        level: '',
        range: '',
        duration: '',
        description: 'See Conjuration of Demons',
    },
    {
        name: 'Call lightning',
        level: 'Druid, 3rd level',
        range: '1000 feet',
        duration: 'One hour',
        description: 'This spell of colossal power may only be used outdoors, and even\n' +
            'then only when a storm is present or immediately imminent. Under\n' +
            'such conditions, the caster may tap into and unleash the power of the\n' +
            'storm itself, calling forth bolts of lightning from the sky at intervals\n' +
            'of no less than ten minutes in between. The lightning blasts straight\n' +
            'downward from the heavens, inflicting damage of 8d6 hp + 1 hp/level.',
    },
    {
        name: 'Charm Monster',
        level: 'Magic-User, 4th Level',
        range: '60 feet',
        duration: 'See below',
        description: 'This spell operates in the same manner as Charm Person, but can affect\n' +
            'any one living creature, including powerful monsters. For monsters of\n' +
            'fewer than 3 hit dice, up to 3d6 can be affected. Monsters have one\n' +
            'chance per week to break free of the charm, with the probability based\n' +
            'on their hit dice (as shown on the following table).',
    }, // FIXME add table
    {
        name: 'Charm Person',
        level: 'Magic-User, 1st Level',
        range: '120 feet',
        duration: 'Until dispelled',
        description: 'This spell affects living bipeds of human size or smaller, such as\n' +
            'goblins or dryads. If the spell succeeds (saving throw allowed), the\n' +
            'unfortunate creature falls under the caster’s influence.',
    },
    {
        name: 'Charm Plants',
        level: 'Magic-User, 7th Level',
        range: '120 feet',
        duration: 'Until dispelled',
        description: 'If the plant fails a saving throw (and it need not be intelligent), it will\n' +
            'obey the caster to the extent of its ability. The spell affects one large\n' +
            'tree, six man-sized plants, twelve plants three feet tall, or twenty-four\n' +
            'flower-sized plants.',
    },
    {
        name: 'Clairaudience',
        level: 'Magic-User, 3rd Level',
        range: '60 feet',
        duration: '2 hours',
        description: 'Clairaudience allows the caster to hear through solid stone (limiting\n' +
            'range to 2 feet or so) and other obstacles, any sounds within a range\n' +
            'of 60 feet. The spell’s effect cannot pass through even a thin sheeting\n' +
            'of lead, however, for this metal blocks it utterly. The spell can be cast\n' +
            'through a crystal ball.',
    },
    {
        name: 'Clairvoyance',
        level: 'Magic-User, 3rd Level',
        range: '60 feet',
        duration: '2 hours',
        description: 'Clairvoyance allows the caster to see through solid stone (limiting\n' +
            'range to 2 feet or so) and other obstacles, anything within a range of 60\n' +
            'feet. The spell’s effect cannot pass through even a thin sheeting of lead,\n' +
            'however, for this metal blocks it completely.',
    },
    {
        name: 'Clone',
        level: 'Magic-User, 8th Level',
        range: 'Close',
        duration: 'Permanent',
        description: 'By this eerie and disturbing spell, a piece of flesh, taken from a living\n' +
            'person, is grown into an exact duplicate of the person at the time the\n' +
            'flesh was removed. (Whether this requires a laboratory and how much\n' +
            'time is needed to regrow the clone depend upon the spell formula and\n' +
            'the Referee’s discretion.) If a clone is created while its parent-creature\n' +
            'still lives, the clone will seek to kill its original. If it fails to achieve this\n' +
            'goal, both the clone and the original will become insane.',
    },
    {
        name: 'Cloudkill',
        level: 'Magic-User, 5th Level',
        range: 'Moves 6 feet per minute',
        duration: '1 hour',
        description: 'Foul and poisonous vapors boil from the thin air, forming a cloud 15\n' +
            'feet in radius. The cloud moves directly forward at a rate of 6 feet per\n' +
            'minute unless its direction or speed is affected by winds. Unusually\n' +
            'strong gusts can dissipate and destroy the cloud. Poison-laden, the horrid\n' +
            'mist is heavier than air, and thus sinks down any pits or stairs in its path.\n' +
            'For any creature with fewer than 5HD, touching the cloud (much less\n' +
            'breathing it) requires a saving throw to avoid immediate death.',
    },
    {
        name: 'Commune',
        level: 'Cleric, 5th Level',
        range: 'Caster',
        duration: '3 questions',
        description: 'Higher powers grant an answer to three questions the caster poses to\n' +
            'them. Higher powers do not like being constantly interrogated by mere\n' +
            'mortals, so use of the spell should be limited to once per week or so by\n' +
            'the Referee.',
    },
    {
        name: 'Commune with nature',
        level: 'Druid, 5th Level',
        range: 'Caster',
        duration: '3 questions',
        description: 'The powers of land, sky, and nature grant an answer to three questions\n' +
            'the caster poses to them. The spell cannot be used while underground\n' +
            'or within a building; a fourth question may be asked if the caster is in a\n' +
            'druidic holy place. The powers of nature can only respond to questions\n' +
            'that are within their knowledge and purview. It is inadvisable to use the\n' +
            'spell more than once per week.',
    },
    {
        name: 'Confusion',
        level: 'Druid, 7th Level; Magic-User, 4th Level',
        range: '120 feet',
        duration: '2 hours',
        description: 'This spell confuses people and monsters, making them act randomly.\n' +
            'On a roll of 2d6, the creatures will do the following:' +
            'The effects of the confusion may shift every 10 minutes or so, and the\n' +
            'dice are once again rolled.\n' +
            'The spell affects 2d6 creatures, plus an additional creature for every\n' +
            'caster level above 8th. Creatures of 3 hit dice or fewer are automatically\n' +
            'affected by the spell, and it takes effect instantly. Creatures of 4 hit dice\n' +
            'or more automatically overcome the confusion effect as it builds up to\n' +
            'its full power (1d12 minutes, minus the caster’s level), and only then\n' +
            'are they permitted a saving throw. Eventually, these creatures are likely\n' +
            'to succumb to the confusion, for they must continue to make another\n' +
            'saving throw every 10 minutes until the spell’s two-hour duration has\n' +
            'run its course.',
    }, // TODO add table
    {
        name: 'Conjure Animals',
        level: '',
        range: '',
        duration: '',
        description: 'See Conjuration of Animals',
    },
    {
        name: 'Conjure Earth Elemental',
        level: '',
        range: '',
        duration: '',
        description: 'See Conjuration of Earth Elementals',
    },
    {
        name: 'Conjure Elemental',
        level: '',
        range: '',
        duration: '',
        description: 'See Conjuration of Elementals',
    },
    {
        name: 'Conjure Fire Elemental',
        level: '',
        range: '',
        duration: '',
        description: 'See Conjuration of Fire Elementals',
    },
    {
        name: 'Conjuration of Animals',
        level: 'Cleric, 6th Level',
        range: '30 feet',
        duration: '1 hour',
        description: 'The Cleric conjures up normal animals to serve as allies: 1 creature\n' +
            'larger than a man (such as an elephant), 3 animals the size of a man or\n' +
            'horse (such as a lion), or 6 animals smaller than a man (such as a wolf).\n' +
            'The animals obey the caster’s commands.',
    },
    {
        name: 'Conjuration of Demons',
        level: 'Magic-User, 7th Level',
        range: '10 feet',
        duration: 'Referee’s discretion',
        description: 'This spell summons a demon or other fiend (such as a devil) from the\n' +
            'lower planes of existence. The spell provides no protection whatsoever\n' +
            'against the wrath of the summoned creature, and the Magic-User should\n' +
            'be versed in the lore of pentacles and other magical means of hedging\n' +
            'out demons. Gaining the demon’s assistance is beyond the spell’s\n' +
            'power, coming down to a matter of negotiations and threats between\n' +
            'the caster and the fiend.',
    },
    {
        name: 'Conjuration of Earth Elementals',
        level: 'Druid, 7th Level',
        range: '240 feet',
        duration: 'Until dispelled or concentration ceases',
        description: 'This spell summons forth a 16 HD earth elemental and binds it to\n' +
            'follow the caster’s commands. The elemental obeys the caster only\n' +
            'for as long as the caster concentrates on maintaining control over it.\n' +
            'Unlike the Magic-User spell for conjuring elementals (Conjuration\n' +
            'of Elementals) this spell summons a willing ally from the elemental\n' +
            'planes rather than a hostile slave. The elemental will not stay longer\n' +
            'than the caster concentrates upon it, but it will not seek to attack a\n' +
            'druidic summoner once this binding is released. The spell is powerful\n' +
            'enough not to risk the random consequences of the sixth level Druid\n' +
            'spell Conjuration of Fire Elementals, or perhaps it is simply that the\n' +
            'magic of stone is less mercurial than the magic of fire.',
    },
    {
        name: 'Conjuration of Elementals',
        level: 'Magic-User, 5th Level',
        range: '240 feet',
        duration: 'Until dispelled or slain',
        description: 'The caster summons a 16 HD elemental (any kind) from the elemental\n' +
            'planes of existence, and binds it to follow commands. The elemental\n' +
            'obeys the caster only for as long as the caster concentrates on it; and\n' +
            'when the caster ceases to concentrate, even for a moment, the elemental\n' +
            'is released and will attack its former master.',
    },
    {
        name: 'Conjuration of Fire Elementals',
        level: 'Druid, 6th Level',
        range: '240 feet',
        duration: 'Until dispelled or concentration ceases',
        description: 'The caster summons a 16 HD fire elemental from the elemental planes\n' +
            'of existence, and binds it to obey the character’s commands. The elemental\n' +
            'obeys the caster only for as long as the caster concentrates on it. Unlike the\n' +
            'Magic-User spell for conjuring elementals (Conjuration of Elementals) this\n' +
            'spell summons a willing ally from the elemental planes rather than a hostile\n' +
            'slave. The elemental will not stay longer than the caster concentrates upon\n' +
            'it, but it will not seek to attack a druidic summoner. There is, however, a 5%\n' +
            'chance that the spell will summon forth powers unintended by the druid. If\n' +
            'this happens, one of two things will occur, with a 50% chance of each. The\n' +
            'spell might summon forth a truly great elemental force, an elemental with\n' +
            '20 HD. However, there is also the chance that the spell will summon forth\n' +
            'an efreeti. The efreet do not have the same rapport with Druids as the pure\n' +
            'elementals do, and an efreeti, unlike elementals, will attack the caster when\n' +
            'the Druid’s concentration falters.',
    },
    {
        name: 'Contact Other Plane',
        level: 'Magic-User, 5th Level',
        range: 'None',
        duration: 'Number of “Yes/No” questions',
        description: 'The caster creates a mental contact with the planes, forces, powers,\n' +
            'and geometries of the beyond, in order to gain affirmative or negative\n' +
            'answers to the questions being contemplated. The spell’s effects depend\n' +
            'upon how deeply the caster quests into the various planes of existence.\n' +
            'The caster must decide how “far” into the planes of existence the\n' +
            'contact will be attempted. The number of planes in “depth” that the\n' +
            'caster chooses will affect the number of yes or no questions that can\n' +
            'be asked, the chance that the knowledge is available at that level, the\n' +
            'chance of receiving a wrong answer, and the chance that the caster will\n' +
            'become temporarily insane from the experience. Temporary insanity\n' +
            'lasts for as many weeks as the “number” of the plane where the caster’s\n' +
            'sanity failed… or perhaps was deliberately removed.',
    }, // TODO table / note
    {
        name: 'Continual light',
        level: 'Magic-User, 2nd Level',
        range: '120 feet',
        duration: 'Permanent until dispelled',
        description: 'The targeted person or object produces light as bright as sunlight (and\n' +
            'with the same effects as sunlight), to a radius of 120 feet.',
    },
    {
        name: 'Control temperature, 10-foot radius',
        level: 'Druid, 4th Level',
        range: 'Touched sprig of mistletoe',
        duration: '3 turns + 1 turn/level',
        description: 'The caster may raise or lower the temperature by 50 degrees (hotter\n' +
            'or colder) in a 10-foot radius around the material component, a sprig\n' +
            'of mistletoe.',
    },
    {
        name: 'Control Weather',
        level: 'Cleric, 7th Level; Druid, 7th Level; Magic-User,\n' +
            '6th Level',
        range: 'Referee’s discretion',
        duration: 'Referee’s discretion',
        description: 'The caster can summon or stop rainfall, create unusually high or low\n' +
            'temperatures, summon or disperse a tornado, clear the sky of clouds, or\n' +
            'summon clouds into being.',
    },
    {
        name: 'Control Winds',
        level: 'Druid, 5th Level',
        range: 'Centered on caster',
        duration: '6 turns + 1 turn/level',
        description: 'Within a radius of 240 feet, the caster controls the winds. It is possible\n' +
            'to make the air completely still, or to whisk it into a gale-like tumult of\n' +
            'unbelievable ferocity.',
    },
    {
        name: 'Create Water',
        level: 'Cleric, 4th Level; Druid 2nd Level',
        range: 'Close',
        duration: 'Immediate',
        description: 'This spell creates a one-day supply of drinking water for 24 men (or,\n' +
            'for game purposes, horses). At 9th level the amount of water doubles,\n' +
            'and it doubles again at every level thereafter.',
    },
    {
        name: 'Create Food',
        level: 'Cleric, 5th Level',
        range: 'Close',
        duration: 'Immediate',
        description: 'This spell creates a one-day supply of food for 24 humans (or the\n' +
            'like). At 9th level the amount of food doubles, and it doubles again at\n' +
            'every level thereafter.',
    },
    {
        name: 'Creeping Doom',
        level: 'Druid, 7th Level',
        range: '50 feet',
        duration: 'See below',
        description: 'Spiders, centipedes, and other such vermin boil forth from the ground,\n' +
            'assembling into a coherent swarm within 1d3 rounds (1-3 minutes). The caster\n' +
            'may direct the swarm in any direction, or toward a particular target within 60\n' +
            'feet of the swarm’s location. It will march in that direction and attack anything\n' +
            'in its path, pursuing a particular target up to a distance of 240 feet from the\n' +
            'caster. The swarm is composed of 1d10 x100 creatures, each of which inflicts\n' +
            'one point of damage and then dies. (A swarm of 100 will inflict a total of 100\n' +
            'hp before being “used up,” and a swarm of 1000 would eventually inflict a total\n' +
            'of 1000 hp in damage if it came across enough victims.)',
    },
    {
        name: 'Cure Disease',
        level: 'Cleric, 3rd Level, Druid, 3rd Level',
        range: 'Touch',
        duration: 'Immediate',
        description: 'Cures the spell’s recipient of any diseases, including magically\n' +
            'inflicted ones. An evil reversal of this spell allows a Chaotically aligned\n' +
            'Cleric to cause disease.',
    },
    {
        name: 'Cure light Wounds',
        level: 'Cleric, 1st Level; Druid 2nd, Level',
        range: 'Touch',
        duration: 'Immediate',
        description: 'Cures 1d6+1 hit points of damage. An evil reversal of this spell allows a\n' +
            'Chaotically aligned Cleric to cause light wounds rather than curing them.',
    },
    {
        name: 'Cure Serious Wounds',
        level: 'Cleric, 4th Level; Druid, 4th Level',
        range: 'Touch',
        duration: 'Immediate',
        description: 'Cures 2d6+2 hit points of damage. An evil reversal of this spell allows\n' +
            'a Chaotically aligned Cleric to cause serious wounds.',
    },
    {
        name: 'Darkness 15-foot Radius',
        level: 'Magic-User, 2nd Level',
        range: '120 feet',
        duration: '1 hour',
        description: 'Darkness falls within the spell’s radius, impenetrable even to darkvision.\n' +
            'A Light spell or Dispel Magic can be used to counteract the darkness.',
    },
    {
        name: 'Darkvision',
        level: 'Magic-User, 3rd Level',
        range: '40 feet',
        duration: '1 day',
        description: 'The recipient of the spell can see in total darkness for the length of\n' +
            'the spell’s duration.',
    },
    {
        name: 'Death Spell',
        level: 'Magic-User, 6th Level',
        range: '240 feet',
        duration: 'Causes normal death',
        description: 'Within a 60-foot radius, up to 2d8 creatures, with fewer than 7 hit dice\n' +
            'each, perish.',
    },
    {
        name: 'Delayed Blast Fireball',
        level: 'Magic-User, 7th Level',
        range: '240 feet',
        duration: 'Chosen by caster (up to 10 minutes)',
        description: 'This spell creates a normal fireball, but the blast can be delayed for a\n' +
            'period of up to 10 minutes. The burst radius, per a normal fireball, is 20\n' +
            'feet, and damage is 1d6 per level of the caster. The blast shapes itself to\n' +
            'the available volume (33,000 cubic feet), filling 33 10-foot x 10-foot x\n' +
            '10-foot cubical areas.',
    },
    {
        name: 'Detect Evil (Cleric)',
        level: 'Cleric, 1st Level',
        range: '120 feet',
        duration: '1 hour',
        description: 'The caster detects any evil enchantments, evil intentions, evil\n' +
            'thoughts, or evil auras within the spell’s range. Poison is not inherently\n' +
            'evil and cannot be detected by means of this spell. Whether there is any\n' +
            'distinction between “evil” and “Chaos” is left to the Referee; in most\n' +
            'campaigns they are exactly the same.',
    },
    {
        name: 'Detect Evil (Magic-user)',
        level: 'Magic-User, 2nd Level',
        range: '60 feet',
        duration: '20 minutes',
        description: 'The caster detects any evil enchantments, evil intentions, evil\n' +
            'thoughts, or evil auras within the spell’s range. Poison is not inherently\n' +
            'evil and cannot be detected by means of this spell. Whether there is\n' +
            'any meaningful distinction between “evil” and “Chaos” is left to the\n' +
            'Referee; in most campaigns they are exactly the same.',
    },
    {
        name: 'Detect invisibility',
        level: 'Magic-User, 2nd Level',
        range: '10 feet per caster level',
        duration: '1 hour',
        description: 'The caster can perceive invisible objects and creatures, even those\n' +
            'lurking in the Astral or Ethereal planes of existence.',
    },
    {
        name: 'Detect magic',
        level: 'Cleric, Magic-User, Druid 1st Level',
        range: '60 feet',
        duration: '20 minutes',
        description: 'The caster can perceive, in places, people, or things, the presence of\n' +
            'a magical spell or enchantment. For example, magical items may be\n' +
            'discovered in this fashion, as can the presence of a charm secretly laid\n' +
            'upon a person.',
    },
    {
        name: 'Detect Snares and Pits',
        level: 'Druid 1st Level',
        range: '30 feet',
        duration: '1 hour + 10 min/level',
        description: 'Much like the Clerical Find Traps spell, this spell grants the caster a\n' +
            'mystical power of sight, revealing any traps. However, the spell only\n' +
            'functions outdoors; it is useless inside buildings or in dungeons.',
    },
    {
        name: 'Dimension Door',
        level: 'Magic-User, 4th Level',
        range: '10 feet (360-foot teleport distance)',
        duration: '1 hour',
        description: 'Dimension Door is a weak form of teleportation, a spell that can be managed\n' +
            'by lesser magicians who cannot yet manage the Teleport spell. The caster can\n' +
            'teleport himself, an object, or another person, with perfect accuracy to the\n' +
            'stated location, as long as it is within the spell’s range.',
    },
    {
        name: 'Disintegrate',
        level: 'Magic-User, 6th Level',
        range: '60 feet',
        duration: 'Permanent—cannot be dispelled',
        description: 'The caster defines one specific target such as a door, a peasant, or\n' +
            'a statue, and it disintegrates into dust. Magical materials are not\n' +
            'disintegrated, and living creatures (such as the aforementioned peasant)\n' +
            'are permitted a saving throw.',
    },
    {
        name: 'Dispel Evil',
        level: 'Cleric, 5th Level',
        range: '30 feet',
        duration: '10 minutes against an item',
        description: 'This spell is similar to the Magic-User spell Dispel Magic, but\n' +
            'affects only evil magic. Also unlike the Dispel Magic spell, Dispel\n' +
            'Evil functions (temporarily) against evil “sendings,” possibly\n' +
            'including dreams or supernatural hunting-beasts. The power of\n' +
            'an evil magic item is held in abeyance for 10 minutes rather\n' +
            'than being permanently dispelled. Evil spells are completely\n' +
            'destroyed.\n' +
            'As with Dispel Magic, the chance of successfully dispelling evil is a\n' +
            'percentage based on the ratio of the level of the dispelling caster over\n' +
            'the level of original caster (or HD of the monster). Thus, a 9th-level\n' +
            'Cleric attempting to dispel an evil charm cast by a 12th-level Cleric has a\n' +
            '75% chance of success (9/12 = .75, or 75%). If the 12th-level Cleric was\n' +
            'dispelling the 9th-level Cleric’s charm, success would be certain (12/9 =\n' +
            '1.33, or 133%).',
    },
    {
        name: 'Dispel Magic',
        level: 'Druid, 4th Level; Magic-User, 3rd Level',
        range: '120 feet',
        duration: '10 minutes against an item',
        description: 'Dispel Magic, although not powerful enough to permanently\n' +
            'disenchant a magic item (nullifies for 10 minutes), can be used to\n' +
            'completely dispel most other spells and enchantments.\n' +
            'The chance of successfully dispelling magic is a percentage based on the\n' +
            'ratio of the level of the dispelling caster over the level of original caster (or\n' +
            'HD of the monster). Thus, a 6th-level Magic-User attempting to dispel a\n' +
            'charm cast by a 12th-level Magic-User has a 50% chance of success (6/12\n' +
            '= .50, or 50%). If the 12th-level Magic-User was dispelling the 6th-level\n' +
            'Magic-User’s charm, success would be certain (12/6 = 2.00, or 200%).',
    },
    {
        name: 'Earthquake',
        level: 'Cleric, 7th Level',
        range: 'Referee’s discretion',
        duration: 'Immediate',
        description: 'The Cleric causes a powerful earthquake in an area 60x60 feet plus an\n' +
            'additional 10 feet (in both length and width) per three levels above 17th.\n' +
            'The quake topples walls, causes rockslides, and opens gaping fissures\n' +
            'in the earth. Any creature caught in the quake has a 1 in 6 chance of\n' +
            'falling into the depths of the earth and being killed. The earthquake’s\n' +
            'tremors do not extend in any way beyond the spell’s area of effect.',
    },
    {
        name: 'Enchant item',
        level: 'Magic-User, 6th Level',
        range: 'Touch',
        duration: 'Permanent',
        description: 'This spell is used in the creation of a magical item, in addition to\n' +
            'whatever research, special ingredients, or other efforts the Referee may\n' +
            'determine are necessary for the task.',
    },
    {
        name: 'ESP (Detect thoughts)',
        level: 'Magic-User, 2nd Level',
        range: '60 feet',
        duration: '2 hours',
        description: 'The caster can detect the thoughts of other beings at a distance of\n' +
            '60 feet. The spell cannot penetrate more than two feet of stone, and is\n' +
            'blocked by even a thin sheet of lead.',
    },
    {
        name: 'Explosive Runes',
        level: 'Magic-User, 3rd Level',
        range: 'Written on parchment',
        duration: 'Permanent',
        description: 'The Magic-User scribes a rune onto parchment, vellum, or paper as a deadly\n' +
            'trap. If anyone other than the caster reads the rune, the sigil explodes into fire,\n' +
            'automatically dealing 4d6 points of damage to anyone directly in front of it. The\n' +
            'parchment or book upon which the rune was scribed will also be destroyed. An\n' +
            'explosive rune can be detected, bypassed, and even removed by a higher-level\n' +
            'Magic-User. Any Magic-User at least two levels higher than the rune’s creator\n' +
            'has a 60% chance to detect it, a 75% chance to bypass it (if it is detected), and a\n' +
            '100% chance to remove it (if it is successfully detected and bypassed).',
    },
    {
        name: 'Extension i',
        level: 'Magic-User, 4th Level',
        range: 'Caster',
        duration: 'See below',
        description: 'Extension I lengthens the duration of another of the caster’s spells by\n' +
            '50%. Only spells of levels 1–3 can be affected by Extension I.',
    },
    {
        name: 'Extension ii',
        level: 'Magic-User, 5th Level',
        range: 'Caster',
        duration: 'See below',
        description: 'Extension II lengthens the duration of another of the caster’s spells by\n' +
            '50%. Only spells of levels 1–4 can be affected by Extension II.',
    },
    {
        name: 'Extension iii',
        level: 'Magic-User, 6th Level',
        range: 'Caster',
        duration: 'See below',
        description: 'Extension III doubles the duration of another of the caster’s spells.\n' +
            'Spells of level 1–5 can be affected by Extension III.',
    },
    {
        name: 'Faerie Fire',
        level: 'Druid, 1st Level',
        range: '60 feet',
        duration: '1 hour',
        description: 'This spell illumines an object or creature with an eerie, fey glow. The\n' +
            'spell’s target may be approximately as large as 10 square feet, plus 2\n' +
            'square feet per level of the caster. The spell can be used for diverse\n' +
            'purposes, such as revealing the true dimensions or extent of a thing, or\n' +
            'to prevent a creature from retreating into the darkness. Depending upon\n' +
            'the precise circumstances, the Referee may allow such illumination to\n' +
            'render a creature more easily hit, granting a +1 to-hit bonus to attackers.',
    },
    {
        name: 'Fear',
        level: 'Magic-User, 4th Level',
        range: '240 feet',
        duration: '1 hour',
        description: 'This spell causes the creatures in its cone-shaped path to flee in horror\n' +
            'if they fail a saving throw. If they do so, there is a 60% chance that they\n' +
            'will drop whatever they are holding. The cone extends 240 feet to a\n' +
            'base 120 feet across.',
    },
    {
        name: 'Feeblemind',
        level: 'Druid, 6th Level; Magic-User, 5th Level',
        range: '240 feet',
        duration: 'Permanent until dispelled',
        description: 'Feeblemind is a spell that affects only Magic-Users. The saving throw\n' +
            'against the spell is made at a -4 penalty, and if the saving throw fails,\n' +
            'the targeted Magic-User becomes feeble of mind until the magic is\n' +
            'dispelled.',
    },
    {
        name: 'Find the Path',
        level: 'Cleric, 6th Level',
        range: 'Caster',
        duration: '1 hour +10 minutes/level; 1 day outdoors',
        description: 'The caster perceives the fastest way out of an area, even if the area is\n' +
            'designed to be difficult to navigate, such as a labyrinth. Outdoors the\n' +
            'spell has greater power, lasting a full day.',
    },
    {
        name: 'Find traps',
        level: 'Cleric, 2nd Level',
        range: '30 feet',
        duration: '20 minutes (2 turns)',
        description: 'The caster can perceive both magical and non-magical traps at a\n' +
            'distance of 30 feet.',
    },
    {
        name: 'Finger of Death',
        level: 'Cleric, 5th Level; Druid, 6th Level',
        range: '120 feet',
        duration: 'Immediate',
        description: 'This spell kills a single creature (saving throw applies). Misusing the\n' +
            'spell is an evil act that will likely invoke divine retribution of some kind.',
    },
    {
        name: 'Fire Storm',
        level: 'Druid, 7th Level',
        range: '100 feet + 10 feet/level',
        duration: '1 turn (10 minutes)',
        description: 'A massive conflagration of fire erupts in the spot directed by the caster. The\n' +
            'fire burns in a shape, area, and size defined by the caster, the volume being no\n' +
            'less than 30 feet x 30 feet x 30 feet. The maximum possible volume of fire that\n' +
            'can be called forth is the minimum area (30x30x30) times the caster’s level.\n' +
            'While the magical fire burns, creatures with 3 or fewer hit dice cannot pass\n' +
            'through it, and no creature can see through it to the other side. Creatures who\n' +
            'are able to pass through the fire receive 1d6 hit points of damage per ten feet\n' +
            'traveled (no saving throw) and undead creatures sustain twice this damage.',
    },
    {
        name: 'Fireball',
        level: 'Magic-User, 3rd Level',
        range: '240 feet',
        duration: 'Instantaneous',
        description: 'A bead-like missile shoots from the caster’s finger, to explode, at the\n' +
            'targeted location, in a furnace-like blast of fire. The burst radius is 20\n' +
            'feet, and damage is 1d6 per level of the caster. The blast fills 33,000\n' +
            'cubic feet (33 ten-foot x ten-foot x ten-foot cubical areas) but shapes\n' +
            'itself to the available volume. A successful saving throw means that the\n' +
            'target takes only half damage.',
    },
    {
        name: 'Fly',
        level: 'Magic-User, 3rd Level',
        range: 'Touch',
        duration: '1 turn/level + 1d6 turns',
        description: 'This spell imbues the Magic-User with the power of flight, with a movement\n' +
            'rate of 120 feet per round. The Referee secretly rolls the 1d6 additional turns;\n' +
            'the player does not know exactly how long the power of flight will last.',
    },
    {
        name: 'gate',
        level: 'Magic-User, 9th Level',
        range: 'Near the caster',
        duration: 'See below',
        description: 'A Gate spell creates an opening to another plane of existence and summons\n' +
            'forth a specified, tremendously powerful being from the other plane,\n' +
            'including gods, demi-gods, demons, etc. The caster must know the name\n' +
            'of the creature being summoned or the spell will fail. There is a 5% chance\n' +
            'that the wrong being might be summoned forth, and (regardless whether the\n' +
            'summoned being is the right one or not) there is a 5% chance that it will lack\n' +
            'interest in the situation and return through the gate. The summoned being is\n' +
            'not necessarily friendly to the caster, and may even be extremely annoyed.',
    },
    {
        name: 'geas',
        level: 'Magic-User, 6th Level',
        range: '30 feet',
        duration: 'Until task is completed',
        description: 'If the spell succeeds (saving throw cancels), the caster may set a\n' +
            'task for the spell’s victim. If the victim does not diligently work at\n' +
            'performing the task, the refusal will cause weakness (50% reduction in\n' +
            'strength), and trying to ignore the geas eventually causes death.',
    },
    {
        name: 'Hallucinatory Forest',
        level: 'Druid, 4th Level',
        range: '60 feet',
        duration: 'Until dispelled',
        description: 'Much like the Magic-User spell Hallucinatory Terrain, this spell\n' +
            'changes the appearance of the land, although the illusion is always\n' +
            'that of a forest. Druids and magical creatures of the forest such as\n' +
            'a dryad or treant will not be fooled by the illusion, but until the\n' +
            'dweomer is dispelled all other creatures will perceive the area to be\n' +
            'forested. The maximum extent of the nonexistent forest, measured\n' +
            'for convenience in 30-foot x 30-foot “squares,” is one such square\n' +
            'per level of the caster.',
    },
    {
        name: 'Hallucinatory terrain',
        level: 'Magic-User. 4th Level',
        range: '240 feet',
        duration: 'Until touched (other than by ally) or dispelled',
        description: 'This spell changes the appearance of the terrain into the semblance of\n' +
            'what the caster desires. A hill can be made to disappear, or it could be\n' +
            'replaced with an illusory forest, for example.',
    },
    {
        name: 'Haste',
        level: 'Magic-User, 3rd Level',
        range: '240 feet',
        duration: '30 minutes',
        description: 'In an area with a radius of 60 feet around the point where the spell\n' +
            'is targeted, as many as 24 creatures become able to move and attack at\n' +
            'double normal speed.',
    },
    {
        name: 'Heat Metal',
        level: 'Druid, 2nd Level',
        range: '30 feet',
        duration: '7 rounds',
        description: 'This spell heats metal to searing hot temperatures, affecting 20\n' +
            'pounds of metal per level of the caster. As a rule of thumb, this magic\n' +
            'affects the armor and weapons of one opponent per caster level when\n' +
            'used as a general attack, although the spell is definitely not limited\n' +
            'to general combat. Metal does not get a saving throw against being\n' +
            'heated, but any sort of magical fire resistance prevents damage from\n' +
            'the heat itself.' +
            'Effect of continuous exposure to heated metal:\n' +
            'Round 1: The metal becomes hot, but is not yet dangerous.\n' +
            'Round 2: 1d4 points of damage. If hands are what remain in contact,\n' +
            'the blistering makes them unusable for 1 day thereafter.\n' +
            'Rounds 3-5: 1d4+1 points of damage per round. If hands remain in contact,\n' +
            'their skin is so badly scorched that they cannot be used for 1d3 weeks. If the\n' +
            'head is in contact, the victim falls unconscious for 1d8 turns.\n' +
            'Round 6: 1d4 points of damage.\n' +
            'Round 7: The metal has begun to cool, and is merely hot to the touch.',
    },
    {
        name: 'Hold Animal',
        level: 'Druid, 3rd level',
        range: '120 feet',
        duration: '1 hour (+10 minutes/level)',
        description: 'The caster targets no more than four normal or giant animals, with\n' +
            'total hit dice equal to or less than those of the Druid. These animals\n' +
            'are completely immobilized (saving throw applies). If the caster\n' +
            'targets a single creature, the saving throw is made with a penalty\n' +
            'of -2.',
    },
    {
        name: 'Hold Monster',
        level: 'Magic-User, 5th Level',
        range: '120 feet',
        duration: '1 hour (+10 minutes/level)',
        description: 'The caster targets 1d4 creatures, which are completely immobilized\n' +
            '(saving throw applies). The caster may also target a single creature, in\n' +
            'which case the saving throw is made with a penalty of -2.',
    },
    {
        name: 'Hold Plant',
        level: 'Druid, 5th Level',
        range: '30 feet/level',
        duration: '1 hour (+10 minutes/level)',
        description: 'The caster targets 1d4 plants or plant-creatures, which become completely\n' +
            'immobilized. (A saving throw applies for monster-type plants.) The caster\n' +
            'may also target a single plant, in which case the saving throw is made\n' +
            'with a penalty of -2. The spell does not only immobilize plants; it will also\n' +
            'temporarily arrest the growth of any plant, magical or not.',
    },
    {
        name: 'Hold Person (Cleric)',
        level: 'Cleric, 2nd Level',
        range: '180 feet',
        duration: '9 turns',
        description: 'The caster targets 1d4 persons (according to the same parameters\n' +
            'as the Charm Person spell), who are completely immobilized (saving\n' +
            'throw applies). The caster may also target a single person, in which case\n' +
            'the saving throw is made with a penalty of -2.',
    },
    {
        name: 'Hold Person (Magic-user)',
        level: 'Magic-User, 3rd Level',
        range: '120 feet',
        duration: '1 hour (+10 minutes/level)',
        description: 'The caster targets 1d4 persons (according to the same parameters\n' +
            'as the Charm Person spell), who are completely immobilized (saving\n' +
            'throw applies). The caster may also target a single person, in which case\n' +
            'the saving throw is made with a penalty of -2.',
    },
    {
        name: 'Hold Portal',
        level: 'Magic-User, 1st Level',
        range: 'Referee’s Discretion',
        duration: '2d6 turns',
        description: 'This spell holds a door closed for the spell’s duration or until dispelled.\n' +
            'Creatures with magic resistance can shatter the spell without effort.',
    },
    {
        name: 'Holy Word',
        level: 'Cleric, 7th Level',
        range: '40-foot radius',
        duration: 'Immediate',
        description: 'The speaking of a Holy Word dramatically affects all those within the\n' +
            'range of its divine power. Creatures of fewer than 5 hit dice are slain,\n' +
            'creatures of 5-8 hit dice are stunned for 2d10 turns, and creatures with\n' +
            '9-12 hit dice are deafened for 1d6 turns. Creatures with 13+ hit dice are\n' +
            'unaffected but probably impressed.',
    },
    {
        name: 'ice Storm',
        level: 'Magic-User, 4th Level',
        range: '120 feet',
        duration: '1 round',
        description: 'A whirling vortex of ice, snow, and hail forms in a cube roughly 30\n' +
            'feet across. Massive hailstones inflict 3d10 hit points of damage (no\n' +
            'saving throw applies) to all within the area.',
    },
    {
        name: 'insect Plague',
        level: 'Cleric, 5th Level; Druid, 4th level',
        range: '480 feet',
        duration: '1 day',
        description: 'This spell works only outdoors. A storm of insects gathers, and goes\n' +
            'wherever the caster directs. The cloud covers approximately 400 square\n' +
            'feet (20 feet by 20 feet, with roughly corresponding height). Any\n' +
            'creature of 2 HD or fewer that is exposed to the cloud of insects flees in\n' +
            'terror (no saving throw).',
    },
    {
        name: 'invisibility',
        level: 'Magic-User, 2th Level',
        range: '240 ft',
        duration: 'Until dispelled or an attack is made',
        description: 'The object of this spell, whether a person or a thing, becomes invisible\n' +
            'to both normal sight and darkvision. The result is that an invisible creature\n' +
            'cannot be attacked unless its approximate location is known, and all attacks\n' +
            'are made at -4 to hit. If the invisible creature makes an attack, the spell is\n' +
            'broken. Otherwise, it lasts until dispelled or removed by the caster.',
    },
    {
        name: 'invisibility 10-Foot Radius',
        level: 'Magic-User, 3rd Level',
        range: '240 feet',
        duration: 'Until dispelled or an attack is made',
        description: 'Like the Invisibility spell, Invisibility 10-Foot Radius makes the target\n' +
            'creature or object invisible to normal sight and darkvision. It also,\n' +
            'however, throws a radius of invisibility around the recipient, which\n' +
            'moves with him/her/it. Nothing inside the radius of invisibility can be\n' +
            'attacked unless its approximate location is known, and all attacks are\n' +
            'made at -4 to hit. If an invisible creature makes an attack, the spell is\n' +
            'broken. Otherwise, it lasts until dispelled or removed by the caster.',
    },
    {
        name: 'invisible Stalker',
        level: 'Magic-User, 6th Level',
        range: 'Close',
        duration: 'Until mission is completed',
        description: 'This spell summons (or perhaps creates) an invisible stalker, an\n' +
            'invisible being with 8 HD. (See the Monster section for more details.)\n' +
            'The stalker will perform one task as commanded by the caster, regardless\n' +
            'of how long the task may take or how far the stalker may have to travel.\n' +
            'The stalker cannot be banished by means of Dispel Magic; it must be\n' +
            'killed in order to deter it from its mission.',
    },
    {
        name: 'Knock',
        level: 'Magic-User, 2nd Level',
        range: '60 feet',
        duration: 'Immediate',
        description: 'This spell unlocks and unbars all doors, gates, and portals within its\n' +
            'range, including those held or locked by normal magic.',
    },
    {
        name: 'legend lore',
        level: 'Magic-User, 6th Level',
        range: 'Caster',
        duration: 'See below',
        description: 'Over the course of long and arduous magical efforts (1d100 days), the\n' +
            'caster gains knowledge about some legendary person, place, or thing.\n' +
            'The spell’s final result may be no more than a cryptic phrase or riddle,\n' +
            'or it might be quite specific.',
    },
    {
        name: 'levitate',
        level: 'Magic-User, 2nd Level',
        range: '20 feet/level',
        duration: '1 turn/level',
        description: 'This spell allows the Magic-User to levitate himself, moving vertically\n' +
            'up or down, but the spell itself provides no assistance with lateral\n' +
            'movement. A wall, cliff side, or ceiling could, of course, be used to pull\n' +
            'along hand-over-hand. Levitation allows up- or downward movement at\n' +
            'a rate of up to 6 feet per minute (60 feet per turn), and the caster cannot\n' +
            'levitate more than 20 feet per level from the ground level where the spell\n' +
            'was cast. (Such range is applied both to movement into the air and to\n' +
            'downward movement into a pit or chasm.)',
    },
    {
        name: 'light',
        level: 'Cleric; Magic-User, 1st Level',
        range: '60 feet',
        duration: '1 hour (+10 minutes/level)',
        description: 'The target person or object (at a range of up to 60 feet) produces light\n' +
            'about as bright as a torch, to a radius of 20 feet.\n' +
            'The Cleric version of this spell lasts 2 hours.',
    },
    {
        name: 'lightning Bolt',
        level: 'Magic-User, 3rd Level',
        range: '240 feet (maximum distance)',
        duration: 'Instantaneous',
        description: 'A bolt of lighting extends 60 feet from the targeted point, almost ten\n' +
            'feet wide. Anyone in its path suffers 1d6 points of damage per level\n' +
            'of the caster (half with a successful saving throw). The bolt always\n' +
            'extends 60 feet, even if this means that it ricochets backward from\n' +
            'something that blocks its path.',
    },
    {
        name: 'limited Wish',
        level: 'Magic-User, 7th Level',
        range: 'Referee’s discretion',
        duration: 'Changes reality',
        description: 'This powerful spell allows the caster to change reality, although in limited\n' +
            'ways and sometimes only for limited periods of time. Such limitations will\n' +
            'determined by the Referee in accordance with the circumstances.',
    },
    {
        name: 'locate Animal',
        level: 'Druid, 1st level',
        range: '60 feet +10 feet/level',
        duration: '1 round/level',
        description: 'Within the spell’s range, the caster perceives the correct direction (as\n' +
            'the crow flies) toward the nearest specimen of a type of animal named\n' +
            'in the casting of the spell.',
    },
    {
        name: 'locate Object (Cleric)',
        level: 'Cleric, 3rd Level',
        range: '90 feet',
        duration: '1 round/level',
        description: 'Within the spell’s range, the Cleric perceives the correct direction (as\n' +
            'the crow flies) toward an object the caster specifies by description in\n' +
            'the spell. The object must be something the caster has seen, although\n' +
            'the spell can detect an object in a general class of items known to the\n' +
            'caster: stairs, gold, etc.',
    },
    {
        name: 'locate Object (Magic-user)',
        level: 'Magic-User, 2nd Level',
        range: '60 feet +10 feet/level',
        duration: '1 round/level',
        description: 'Within the spell’s range, the caster perceives the correct direction (as\n' +
            'the crow flies) toward an object the caster specifies by description in\n' +
            'the spell. The object must be something the caster has seen, although\n' +
            'the spell can detect an object in a general class of items known to the\n' +
            'caster: stairs, gold, etc.',
    },
    {
        name: 'locate Plants',
        level: 'Druid, 2nd level',
        range: '60 feet (+10 feet/level)',
        duration: '1 round/level',
        description: 'The caster perceives the correct direction (as the crow flies) toward\n' +
            'the nearest specimen of a type of plant named in the casting of the spell.',
    },
    {
        name: 'lower Water',
        level: 'Magic-User, 6th Level',
        range: '240 feet',
        duration: '2 hours',
        description: 'This spell lowers the depth and water level of lakes, rivers, wells, and\n' +
            'other bodies of water to one-half normal.',
    },
    {
        name: 'Magic Jar',
        level: 'Magic-User, 5th Level',
        range: 'See below',
        duration: 'See below',
        description: 'This spell relocates the caster’s life essence, intelligence, and soul into\n' +
            'an object of virtually any kind. The ‘jar’ must be within 30 feet of the\n' +
            'caster’s body for the transition to succeed. Once within the magic jar,\n' +
            'the caster can possess the bodies of other creatures and people, provided\n' +
            'that they are within 120 feet of the jar and fail a saving throw. The\n' +
            'caster can return his or her soul to the magic jar at any time; if a body\n' +
            'the caster controls is slain, the soul returns to the jar immediately. The\n' +
            'Magic-User can return from the jar to his or her original body whenever\n' +
            'desired, thus ending the spell. If the caster’s body is destroyed while his\n' +
            'or her soul is in the magic jar, the soul no longer has a home other than\n' +
            'within the magic jar, although the disembodied wizard can still possess\n' +
            'other bodies as before. If the jar itself is destroyed while the Magic-\n' +
            'User’s soul is within, the soul is lost.',
    },
    {
        name: 'Magic Missile',
        level: 'Magic-User, 1st Level',
        range: '150 feet',
        duration: 'Immediate',
        description: 'A magical missile flies where the caster directs, with a range of 150\n' +
            'feet. At the Referee’s discretion, this spell may have one of two effects:\n' +
            '1) The Magic-User must roll to hit the target with a +1 bonus to the\n' +
            'roll. The missile inflicts 1d6+1 points of damage. 2) The missile hits\n' +
            'automatically, doing 1d4+1 points of damage.\n' +
            'In either case, the Magic-User casts an additional two missiles for\n' +
            'every 5 levels of experience. Thus, at 5th level, the caster is able to hurl\n' +
            '3 magic missiles, and 5 missiles at 10th level.',
    },
    {
        name: 'Magic Mouth',
        level: 'Magic-User, 2nd Level',
        range: 'Touch',
        duration: 'Permanent until triggered or dispelled',
        description: 'This enchantment is set upon an object, and the magic is triggered\n' +
            'when certain conditions established by the caster are met. When that\n' +
            'happens, a mouth appears on the object and speaks the message it has\n' +
            'been commanded to speak. The message may be up to thirty words\n' +
            'long.',
    },
    {
        name: 'Mass Charm',
        level: 'Magic-User, 8th Level',
        range: '120 feet',
        duration: 'Until dispelled',
        description: 'This spell operates in the same manner and with the same restrictions\n' +
            'as Charm Person. However, it affects a total of 30 HD of creatures, in\n' +
            'any combination. All saving throws are made with a penalty of -2.',
    },
    {
        name: 'Mass invisibility',
        level: 'Magic-User, 7th Level',
        range: '240 feet',
        duration: 'See below',
        description: 'This spell makes 1d3 x 100 man- or horse-sized creatures (or objects)\n' +
            'invisible, as if they had been affected by a single Invisibility spell. The\n' +
            'spell can instead affect up to 6 creatures of dragon size. As with the\n' +
            'Invisibility spell, the enchantment lasts until dispelled or until one of\n' +
            'the creatures makes an attack.',
    },
    {
        name: 'Massmorph',
        level: 'Magic-User, 4th Level',
        range: '240 feet',
        duration: 'Until negated by the caster or dispelled',
        description: 'One hundred or fewer man- or horse-sized creatures are changed\n' +
            'to appear like innocent trees. The illusion is so perfect that creatures\n' +
            'moving through the “forest” will not detect the deception.',
    },
    {
        name: 'Maze',
        level: 'Magic-User, 9th Level',
        range: '60 feet',
        duration: 'Depends on Intelligence',
        description: 'The targeted creature disappears into a gap in reality, where strange\n' +
            'curving and branching passages conceal the way out. Creatures with\n' +
            'an Intelligence score lower than 6 require 2d4 x3 rounds (minutes) to\n' +
            'escape the interdimensional prison. Creatures with Intelligence scores\n' +
            '7–11 require 2d4 rounds, and creatures with an intelligence of 12+\n' +
            'require only 1d4 rounds to puzzle their way back into normal reality.\n' +
            'Although monsters are not described with specific Intelligence scores,\n' +
            'it should not be hard to determine into which category any specific\n' +
            'monster falls. Unless ruled otherwise by the Referee, there is no saving\n' +
            'throw to avoid the spell.',
    },
    {
        name: 'Meteor Swarm',
        level: 'Magic-User, 9th Level',
        range: '240 feet',
        duration: 'Instantaneous',
        description: 'Tiny meteors swarm from the caster’s hands and explode into balls of fire\n' +
            'where desired. The caster may hurl 4 normal fireballs for 10d6 damage or\n' +
            '8 fireballs of 10-foot diameter that inflict 5d6 points of damage. Targets are\n' +
            'permitted a saving throw, allowing them to take half damage.',
    },
    {
        name: 'Mind Blank',
        level: 'Magic-user, 8th Level',
        range: '10-foot radius',
        duration: '24 hours',
        description: 'The spell protects against all magic spying, including crystal balls,\n' +
            'spells (including Wish), and even magical scrying by minor deities.',
    },
    {
        name: 'Mirror image',
        level: 'Magic-User, 2nd Level',
        range: 'Around caster',
        duration: '1 hour or until destroyed',
        description: 'The spell creates 1d4 images of the caster, acting in perfect\n' +
            'synchronization with him like mirror images. Attackers cannot\n' +
            'distinguish the images from the caster, and may attack one of the\n' +
            'images instead of the caster himself (determined randomly). When a hit\n' +
            'is scored upon one of the images, it disappears.',
    },
    { // TODO: add table
        name: 'Monster Summoning i',
        level: 'Magic-User, 3rd Level',
        range: 'N/A',
        duration: '6 rounds (minutes)',
        description: 'The caster summons allies, who serve him until slain, or until the\n' +
            'duration of the spell expires. The allies do not appear immediately;\n' +
            'there is a delay of 1 turn (10 minutes) before they appear.',
    },
    { // TODO: add table
        name: 'Monster Summoning ii',
        level: 'Magic-User, 4th Level',
        range: 'N/A',
        duration: '6 rounds (minutes)',
        description: 'The caster summons allies, who serve him until slain, or until the\n' +
            'duration of the spell expires. The allies do not appear immediately;\n' +
            'there is a delay of 1 turn (10 minutes) before they appear.',
    },
    { // TODO: add table
        name: 'Monster Summoning iii',
        level: 'Magic-User, 5th Level',
        range: 'N/A',
        duration: '6 rounds (minutes)',
        description: 'The caster summons allies, who serve him until slain, or until the\n' +
            'duration of the spell expires. The allies do not appear immediately;\n' +
            'there is a delay of 1 turn (10 minutes) before they appear.',
    },
    { // TODO: add table
        name: 'Monster Summoning iV',
        level: 'Magic-User, 6th Level',
        range: 'N/A',
        duration: '6 rounds (minutes)',
        description: 'The caster summons allies, who serve him until slain, or until the\n' +
            'duration of the spell expires. The allies do not appear immediately;\n' +
            'there is a delay of 1 turn (10 minutes) before they appear.',
    },
    { // TODO: add table
        name: 'Monster Summoning V',
        level: 'Magic-User, 7th Level',
        range: 'N/A',
        duration: '6 rounds (minutes)',
        description: 'The caster summons allies, who serve him until slain, or until the\n' +
            'duration of the spell expires. The allies do not appear immediately;\n' +
            'there is a delay of 1 turn (10 minutes) before they appear.',
    },
    { // TODO: add table
        name: 'Monster Summoning VI',
        level: 'Magic-User, 8th Level',
        range: 'N/A',
        duration: '6 rounds (minutes)',
        description: 'The caster summons allies, who serve him until slain, or until the\n' +
            'duration of the spell expires. The allies do not appear immediately;\n' +
            'there is a delay of 1 turn (10 minutes) before they appear.',
    },
    { // TODO: add table
        name: 'Monster Summoning VII',
        level: 'Magic-User, 9th Level',
        range: 'N/A',
        duration: '6 rounds (minutes)',
        description: 'The caster summons allies, who serve him until slain, or until the\n' +
            'duration of the spell expires. The allies do not appear immediately;\n' +
            'there is a delay of 1 turn (10 minutes) before they appear.',
    },
    {
        name: 'Move Earth',
        level: 'Magic-User, 6th Level',
        range: '240 feet',
        duration: '1 hour; effects permanent',
        description: 'This spell can only be used above ground. It allows the caster to move\n' +
            'hills and other raised land or stone at a rate of 6 feet per minute (60 feet\n' +
            'per turn).',
    },
    {
        name: 'Neutralize Poison',
        level: 'Cleric, 4th Level; Druid, 3rd Level',
        range: 'Touch',
        duration: 'Immediate',
        description: 'This spell counteracts poison if used promptly, but cannot be used to\n' +
            'bring the dead back to life later.',
    },
    {
        name: 'Obscurement',
        level: '',
        range: '',
        duration: '',
        description: 'See Obscuring Mist',
    },
    {
        name: 'Obscuring Mist',
        level: 'Druid, 2nd Level',
        range: '20 feet',
        duration: '1 turn/level',
        description: 'A misty vapor seethes outward from the casting point, billowing forth\n' +
            'to fill a radius of 20 feet + 10 feet per level of the caster.',
    },
    {
        name: 'Part Water',
        level: 'Cleric, 7th Level',
        range: '240 feet',
        duration: '2 hours',
        description: 'This spell creates a gap through water, to a depth of 20 feet. At 18th\n' +
            'level and every level thereafter, the Cleric adds 10 feet to the depth of\n' +
            'water parted, and 1 additional hour to the spell’s duration.',
    },
    {
        name: 'Part Water',
        level: 'Magic-User, 6th Level',
        range: '120 feet',
        duration: '1 hour',
        description: 'This spell creates a gap through water, but only to a depth of 10 feet.',
    },
    { // TODO table
        name: 'Passplant',
        level: 'Druid, 5th Level',
        range: 'Touch (first tree)',
        duration: '1 hour per level or until exit',
        description: 'The caster may step into one tree and emerge from a distant tree of the same\n' +
            'kind; both trees must be living, and have a girth as large as the caster’s own. The\n' +
            'caster need not step out of the first tree immediately, but may wait within the\n' +
            'tree for as long as desired (up to the limit of the spell’s duration) before leaving.\n' +
            'It is possible for the caster to step from tree to tree in series without ending the\n' +
            'spell; however, upon emerging from any tree into the outside, the caster ends\n' +
            'the spell. The table below shows the maximum distance the caster may travel\n' +
            'in a single step; this is also the maximum total distance that can be traveled in\n' +
            'a single casting of the spell, even if the caster moves through multiple trees.\n' +
            'Upon casting the spell, the caster will become aware of the various trees within\n' +
            'the range of the spell, so there is no chance of “missing” the target.',
    },
    {
        name: 'Passwall',
        level: 'Magic-User, 5th Level',
        range: '30 feet',
        duration: '3 turns (30 minutes)',
        description: 'This spell creates a hole through solid rock, about 7 feet high, 10\n' +
            'feet wide, and 10 feet deep (possibly deeper at the discretion of the\n' +
            'Referee). The hole closes again at the end of the spell’s duration.',
    },
    {
        name: 'Permanency',
        level: 'Magic-User, 8th Level',
        range: 'See below',
        duration: 'Permanent until dispelled by an opponent of\n' +
            'twice the caster’s level',
        description: 'This spell makes the effect of another spell permanent—unless a Magic-\n' +
            'User of twice the caster’s level dispels it. No more than one Permanency\n' +
            'is ordinarily possible on any one object, and no more than two upon a\n' +
            'creature. Considerable Referee discretion is required for the use of this\n' +
            'spell; many spells should not be subject to being made permanent.',
    },
    {
        name: 'Phantasmal Force',
        level: 'Magic-User, 2nd Level',
        range: '240 feet',
        duration: 'Until concentration ends',
        description: 'This spell creates an illusion that seems realistic to all who view it.\n' +
            'The illusion disappears when it is touched, but if the viewer believes the\n' +
            'illusion is real, it can cause damage. Unless the Referee rules otherwise,\n' +
            'victims of the spell are permitted a saving throw, and the illusion cannot\n' +
            'cause more than 2d6 points of damage per victim. This will depend on\n' +
            'circumstances; a truly brilliant use of the spell can be quite devastating,\n' +
            'and a poorly thought-out illusion might cause almost immediate disbelief.',
    },
    {
        name: 'Phase Door',
        level: 'Magic-User, 7th Level',
        range: '10 feet from caster',
        duration: 'Seven uses',
        description: 'The phase door is an invisible portal about 7 feet high, 10 feet wide,\n' +
            'and 10 feet deep, accessible only to the caster. A barrage of Dispel\n' +
            'Magic spells can close the passage, but only if the combined level of\n' +
            'the dispelling casters is twice that of the portal’s creator.',
    },
    {
        name: 'Plant Door',
        level: '',
        range: '',
        duration: '',
        description: 'See Plant Doorway',
    },
    {
        name: 'Plant Doorway',
        level: 'Druid, 4th Level',
        range: 'Passage begins where caster stands',
        duration: '3 turns + 1 turn/level',
        description: 'This spell opens a pathway for the caster through even the deepest and\n' +
            'most tangled growths of plants, thorns, and trees. The pathway can be\n' +
            'made up to 5 feet wide, 6 feet tall, and 100 feet in length, but only the\n' +
            'caster can move through it. The Druid may choose to remain housed\n' +
            'safely inside a tree, if the spell has opened a passage through one. It is\n' +
            'possible to remain within the tree after the spell expires; for as long as\n' +
            'desired, in fact, before leaving it.',
    },
    {
        name: 'Plant growth',
        level: 'Druid, 3rd Level; Magic-User, 4th Level',
        range: '240 feet',
        duration: 'Permanent until dispelled',
        description: 'Undergrowth in the area suddenly grows into an impassable forest\n' +
            'of thorns and vines. Up to 300 square feet of ground can be affected\n' +
            'by this spell and the caster can decide the shape of the area to be\n' +
            'enchanted. An alternate version (Referee’s decision) would allow the\n' +
            'spell to affect an area of 300 feet x 300 feet, for a total of 90,000\n' +
            'square feet).',
    },
    {
        name: 'Polymorph Object',
        level: 'Magic-User, 8th Level',
        range: '240 feet',
        duration: 'Referee’s discretion',
        description: 'An object can be turned into another object, animal, vegetable,\n' +
            'or mineral. The degree of change will affect the spell’s duration.\n' +
            'Animal-to-animal changes, vegetable-to-vegetable changes, and\n' +
            'mineral-to-mineral changes are all likely to remain permanent\n' +
            'until dispelled. Thus, turning a human into an orc, or turning a\n' +
            'wall into a pile of sand, would both result in a permanent change.\n' +
            'On the other hand, turning a shrub into a thinking human being\n' +
            'would last only a small number of turns. Determining how long a\n' +
            'proposed use of the spell will last is the province of the Referee;\n' +
            'it is important to remember that this is an eighth-level spell of\n' +
            'considerable power—but not as powerful as a ninth-level Wish\n' +
            'spell.',
    },
    {
        name: 'Polymorph Other',
        level: 'Magic-User, 4th Level',
        range: '240 feet',
        duration: 'Permanent until dispelled',
        description: 'This spell allows the caster to turn another being into a different\n' +
            'type of creature, such as a dragon, a garden slug, or of course, a frog\n' +
            'or newt. The polymorphed creature gains all the abilities of the new\n' +
            'form, but retains its own mind and hit points.',
    },
    {
        name: 'Polymorph Self',
        level: 'Magic-User, 4th Level',
        range: 'Caster',
        duration: '1 hour or Referee’s discretion',
        description: 'The caster assumes the form of any object or creature, gaining the\n' +
            'new form’s attributes (the use of wings, for example), but not its hit\n' +
            'points or combat abilities. The Referee might allow the benefit of the\n' +
            'new form’s armor class, if it is due to heavily armored skin. A great deal\n' +
            'of the spell’s effect is left to the Referee to decide.',
    },
    {
        name: 'Power Word, Blind',
        level: 'Magic-User, 8th Level',
        range: '120 feet',
        duration: '1d4 or 2d4 days (See below)',
        description: 'The caster speaks a word of power to a particular creature. If that\n' +
            'creature has 40 hit points or fewer, it is instantly blinded for 2d4 days;\n' +
            'if the creature has from 41 to 80 hit points, it is blinded for 1d4 days. If\n' +
            'the creature has more than 80 hit points it is not affected by the spell.\n' +
            'No saving throw applies.',
    },
    {
        name: 'Power Word, Kill',
        level: 'Magic-User, 9th Level',
        range: '120 feet',
        duration: 'Immediate',
        description: 'The caster speaks a word of power to a particular creature. If that creature\n' +
            'has 50 hit points or fewer, it is slain by the word it hears; if it has more than\n' +
            '50 hit points it is not affected by the spell. No saving throw is permitted.',
    },
    {
        name: 'Power Word, Stun',
        level: 'Magic-User, 7th Level',
        range: '120 feet',
        duration: '1d6 or 2d6 turns (See below)',
        description: 'The caster speaks a word of power to a particular creature. If that\n' +
            'creature has 35 or fewer hit points, it is instantly stunned for 2d6 turns;\n' +
            'if the creature has from 36 to 70 hit points, it is stunned for only 1d6\n' +
            'turns. If the creature has more than 70 hit points it is not affected by the\n' +
            'spell. No saving throw is permitted.',
    },
    {
        name: 'Prayer',
        level: 'Cleric, 3rd Level',
        range: '30 feet',
        duration: 'Following melee round',
        description: 'The Prayer spell seeks short-term favor from the gods to help some\n' +
            'other spell or attack to succeed. Prayer affects a 20-foot x 20-foot area,\n' +
            'causing a saving throw penalty to all creatures in that area. The penalty\n' +
            'is a -1, plus an additional -1 for every ten caster levels. Thus, a 10th\n' +
            'level Cleric causes a saving throw penalty of -2. The penalty actually\n' +
            'takes effect in the melee round following the one in which it was cast.',
    },
    {
        name: 'Predict Weather',
        level: 'Druid, 1st Level',
        range: 'Centered on caster',
        duration: 'Immediate',
        description: 'The Druid silently drinks in knowledge from the surrounding area,\n' +
            'becoming attuned to the patterns of air, wind, earth and fire. Within\n' +
            'moments, the character can predict what the weather conditions will\n' +
            'be for the next twelve hours in the immediate vicinity (2 square miles/\n' +
            'level). As with most forecasts of weather, conditions may change\n' +
            'unexpectedly, giving rise to a 5% chance that the Druid’s prediction\n' +
            'will, ultimately, prove to be incorrect.',
    },
    { // TODO add teble
        name: 'Prismatic Sphere',
        level: 'Magic-User, 9th Level',
        range: '10-foot sphere',
        duration: '1 hour',
        description: 'A sphere of seven colors whirls about the Magic-User, with a radius of\n' +
            '10 feet. The glowing colors form a layered spectrum; to destroy the sphere,\n' +
            'each layer must be destroyed in turn from Red to Orange, to Yellow, to\n' +
            'Blue, to Indigo, and then to the innermost Violet layer. Any creature of 7\n' +
            'or fewer hit dice that looks upon the sphere will be blinded for 1d6 turns.',
    },
    {
        name: 'Produce Fire',
        level: 'Druid, 4th Level',
        range: '30 feet',
        duration: '1 turn (10 minutes)',
        description: 'This spell instantly creates fire in an area of up to 10 feet x 10 feet.\n' +
            'The fire burns for no longer than ten minutes without fuel, but will\n' +
            'set alight any flammable materials in the area where it was summoned\n' +
            'forth. The spell may also be reversed to quench flames rather than ignite\n' +
            'them.',
    },
    {
        name: 'Produce Flame',
        level: 'Druid, 2nd Level',
        range: 'Palm of hand',
        duration: '2 turns/level',
        description: 'Flame ignites from nowhere in the palm of the caster’s hand, causing\n' +
            'no damage to the caster, but otherwise as hot as natural fire. It can be\n' +
            'used while held, or thrown to a distance of 30 feet, to ignite flammable\n' +
            'materials. For so long as the druid-fire is in the caster’s hand, it can be\n' +
            'extinguished immediately whenever the caster wishes it gone.',
    },
    {
        name: 'Project image',
        level: 'Magic-User, 6th Level',
        range: '240-foot sphere',
        duration: '1 hour',
        description: 'The caster projects an image of himself or herself, to a maximum\n' +
            'range of 240 feet. Not only does the projected image mimic the caster’s\n' +
            'sounds and gestures, but also any spells being cast will appear to\n' +
            'originate from the image.',
    },
    {
        name: 'Protection from Evil',
        level: 'Cleric, 1st Level; Magic-User, 1st Level',
        range: 'Caster',
        duration: '2 hours',
        description: 'Creates a magical field of protection immediately around the caster,\n' +
            'blocking out all enchanted monsters such as elementals and demons).\n' +
            'Evil monsters suffer a -1 penalty to hit the caster, and the caster gains +1\n' +
            'on all saving throws against such attacks. If the caster already has any\n' +
            'magical bonuses to saving throws or armor class, the bonus from the\n' +
            'magic circle has no effect, although the protective circle still functions\n' +
            'against enchanted creatures.\n' +
            'The Magic-User version of this spell is exactly the same as the one\n' +
            'used by the Cleric, except that it has a duration time of 1 hour.',
    },
    {
        name: 'Protection from Evil, 10-Foot Radius',
        level: 'Cleric, 4th Level; Magic-User, 3rd Level',
        range: 'Centered on caster',
        duration: '1 hour',
        description: 'The spell creates a magical field of protection, ten feet in radius,\n' +
            'around the caster. The field blocks out all enchanted monsters (such\n' +
            'as elementals and demons). Evil monsters suffer a -1 penalty to hit\n' +
            'anyone within the protective globe, and these shielded individuals gain\n' +
            '+1 on all saving throws against such attacks. If a person in the circle\n' +
            'already has any magical bonuses to saving throws or armor class, the\n' +
            'bonus from the magic circle has no effect for that person, although the\n' +
            'protective circle still functions against enchanted creatures.',
    },
    {
        name: 'Protection from Fire',
        level: 'Druid, 3rd Level',
        range: 'Touch',
        duration: '3 turns +1 turn/level',
        description: 'Protection from Fire may be cast on another person, but it confers a great\n' +
            'deal more eldritch warding if it is woven personally around the caster.\n' +
            'When used to protect another creature, the spell’s warding grants complete\n' +
            'immunity to normal fire and cuts damage from magical fire in half. When\n' +
            'used to ward the caster, the spell also grants complete immunity against one\n' +
            'exposure to magical fire, after which it functions normally.',
    },
    {
        name: 'Protection from lightning',
        level: 'Druid, 4th Level',
        range: 'Touch',
        duration: '6 turns +1 turn/level',
        description: 'This spell protects any creature from lightning, reducing any damage\n' +
            'by one-half. Once lightning strikes, however, the spell ends.',
    },
    {
        name: 'Protection from normal Missiles',
        level: 'Magic-User, 3rd Level',
        range: 'Caster',
        duration: '2 hours',
        description: 'The caster becomes invulnerable to non-magical missiles, although\n' +
            'larger missiles such as boulders will overcome the spell’s magic.',
    },
    {
        name: 'Purify Food and Drink',
        level: 'Cleric, 1st Level',
        range: 'Close/Touch (Referee’s discretion)',
        duration: 'Immediate',
        description: 'Enough food and water for up to a dozen people is made pure,\n' +
            'removing spoilage and poisons.',
    },
    {
        name: 'Purify Water',
        level: 'Druid, 1st Level',
        range: 'Close/Touch (Referee’s discretion)',
        duration: 'Immediate',
        description: 'Approximately ten gallons of water is made pure, removing all\n' +
            'poisons, algae, and other such contaminants.',
    },
    {
        name: 'Pyrotechnics',
        level: 'Druid, 3rd Level; Magic-User, 2nd Level',
        range: '240 feet',
        duration: '1 hour',
        description: 'The caster creates either fireworks or blinding smoke from a\n' +
            'normal fire source such as a torch or campfire. The Referee will\n' +
            'decide exactly how much smoke (or fireworks) is produced, what\n' +
            'effect it has, and what happens to it as it is produced, but the amount\n' +
            'of smoke will definitely be more than 8000 cubic feet (roughly 20\n' +
            'x 20 x 20 feet).',
    },
    {
        name: 'Quest',
        level: 'Cleric, 5th Level',
        range: 'Speaking range',
        duration: 'Until completed',
        description: 'If the spell succeeds (saving throw applies), the caster may set a\n' +
            'task for the spell’s victim. If the victim does not diligently work at\n' +
            'performing the task, a deadly weakness will set in (50% reduction in\n' +
            'Strength), and an attempt to entirely abandon the quest incurs a curse\n' +
            'set by the caster in the wording of the original Quest. The details, of\n' +
            'course, must be approved by the Referee.',
    },
    {
        name: 'Raise Dead',
        level: 'Cleric, 5th Level',
        range: 'Close/Touch (Referee’s discretion)',
        duration: 'Immediate',
        description: 'Raise Dead allows the Cleric to raise a corpse from the dead, provided\n' +
            'it has not been dead too long. The normal time limit is 5 days, but\n' +
            'for every caster level higher than 8th, the time limit extends another 5\n' +
            'days. Characters with low Constitution might not survive the ordeal,\n' +
            'and even for those with strong Constitution a period of at least a week is\n' +
            'required before they can function normally. This spell functions only on\n' +
            '“human-like” races, that is, ones that can be used for player characters.',
    },
    {
        name: 'Read languages',
        level: 'Magic-User, 1st Level',
        range: 'Normal reading distance',
        duration: 'One or two readings',
        description: 'This spell allows the caster to decipher directions, instructions, and\n' +
            'formulae in languages unknown to the caster. This can be particularly\n' +
            'useful for treasure maps, but it does not solve any codes.',
    },
    {
        name: 'Read Magic',
        level: 'Magic-User, 1st Level',
        range: 'Caster only',
        duration: '2 scrolls or other magical writings',
        description: 'This spell allows the caster to read the magical writings upon scrolls\n' +
            'and (occasionally) dungeon walls. Without the use of this spell, magical\n' +
            'writing cannot be read even by a Magic-User.',
    },
    { // TODO table
        name: 'Reincarnation (Druidic)',
        level: 'Druid, 7th Level',
        range: 'Touch',
        duration: 'Instantaneous',
        description: 'This spell brings a dead person’s soul back from the dead, but the\n' +
            'soul reappears in a newly formed body. Druidic Reincarnation will\n' +
            'not affect someone who has been dead more than a week. Roll 1d100,\n' +
            'and on a roll of 01-75 the result is determined from the same table as\n' +
            'would be used for a Magic-User’s Reincarnation spell (below). If the\n' +
            'percentile dice gave a result of 76-00, roll 1d6 on the following table:',
    },
    { // TODO table
        name: 'Reincarnation (Magic-user)',
        level: 'Magic-User, 6th Level',
        range: 'Touch',
        duration: 'Instantaneous',
        description: 'This spell brings a dead person’s soul back from the dead, but the\n' +
            'soul reappears in a newly formed body. Reincarnation will not affect\n' +
            'someone who has been dead more than a week. Roll 1d20 on the\n' +
            'following table. If the resulting creature is a normal character race, roll\n' +
            '1d6 to determine the character’s new level.',
    },
    {
        name: 'Remove Curse',
        level: 'Cleric, 3rd Level; Magic-User, 4th Level',
        range: 'Very close',
        duration: 'Immediate',
        description: 'This spell removes one curse from a person or object.',
    },
    {
        name: 'Repel Wood',
        level: 'Druid, 6th Level',
        range: '20 feet/level',
        duration: '1 turn/level',
        description: 'When this spell is cast, a mystical druidic force issues forth from a\n' +
            'place designated by the caster, in roughly the shape of a wall 120 feet\n' +
            'across. This power rolls forward at a rate of 5 feet per round directly\n' +
            'away from the caster, inexorably pressing all wood, or wooden objects,\n' +
            'backward. Once the power is set in motion, it cannot be stopped other\n' +
            'than by the caster’s command.',
    },
    {
        name: 'Repulsion',
        level: 'Magic-User, 6th Level',
        range: '120 feet',
        duration: '1 hour',
        description: 'Any creature trying to move toward the caster finds itself moving\n' +
            'away, instead.',
    },
    {
        name: 'Restoration',
        level: 'Cleric, 7th Level',
        range: 'Referee’s discretion',
        duration: 'Immediate',
        description: 'This spell restores levels lost to such horrible creatures as wraiths\n' +
            'and shadows. An evil reversal of the spell allows a Chaotically aligned\n' +
            'Cleric to drain a level from the target. The “good” version of the spell\n' +
            'is exhausting to the caster, incapacitating him for 2d10 days. At the\n' +
            'discretion of the Referee, this spell may restore lost points of attribute\n' +
            'scores as well as lost levels.',
    },
    {
        name: 'Resurrection',
        level: 'Cleric, 7th Level',
        range: 'Referee’s discretion',
        duration: 'Immediate',
        description: 'This spell (also known as “Raise Dead Fully”) raises the dead back\n' +
            'to life, in the same manner as the Raise Dead spell. It is, however,\n' +
            'considerably more powerful: the person raised from the dead needs no\n' +
            'time to recuperate from the experience of death, and suffers no other\n' +
            'penalties. An evil “reversal” of the spell can also be cast, which causes\n' +
            'death with no saving throw.',
    },
    {
        name: 'Reverse gravity',
        level: 'Magic-User, 7th Level',
        range: '90 feet',
        duration: '1 round (minute)',
        description: 'The spell reverses gravity in a cubical area approximately 30 feet x 30\n' +
            'feet x 30 feet in size. Everything in the area falls upward, and then when\n' +
            'the spell ends it all falls back down again.',
    },
    {
        name: 'Rope trick',
        level: 'Magic-User, 3rd Level',
        range: 'As far as the caster can throw a rope',
        duration: '1 hour +1 turn/level',
        description: 'The caster tosses a rope into the air and it hangs there, waiting to\n' +
            'be climbed. The caster and up to three others can climb the rope and\n' +
            'disappear into a small ‘other’ dimension. The rope itself can be pulled\n' +
            'into the pocket dimension, or left outside. If it is left outside, however,\n' +
            'someone may steal it.',
    },
    {
        name: 'Shape Change',
        level: 'Magic-User, 9th Level',
        range: 'Caster',
        duration: '1d6+10 turns +1 turn/level',
        description: 'When the caster casts this spell upon him- or herself, it allows the\n' +
            'caster to turn at will into a variety of creatures. In each form, the\n' +
            'wizard gains the characteristics of the creature, much as with the\n' +
            'Polymorph Others spell. Thus, turning into a dragon actually allows\n' +
            'the caster to use the dragon’s breath weapon. The caster might then\n' +
            'choose to turn into a raven, then a frog, or whatever other creature\n' +
            'is chosen. It is not, of course, required that the caster use more than\n' +
            'one shape—remaining as a dragon for the duration of the spell works\n' +
            'perfectly well.',
    },
    {
        name: 'Shield',
        level: 'Magic-User, 1st Level',
        range: 'Caster',
        duration: '2 turns',
        description: 'The caster conjures up an invisible shield that interposes itself in front\n' +
            'of attacks. The shield improves the caster’s armor class to 2 [17] against\n' +
            'missile attacks and to 4 [15] against other (melee) attacks. If the caster’s\n' +
            'armor class is already better than the spell would grant, the spell has\n' +
            'no effect.',
    },
    {
        name: 'Silence, 15-Foot Radius',
        level: 'Cleric, 2nd Level',
        range: '180 feet',
        duration: '12 turns',
        description: 'Magical silence falls in an area with a 15-foot radius around the\n' +
            'targeted creature or object, and moves with it. Nothing from this area,\n' +
            'no matter how loud, can be heard outside the radius.',
    },
    {
        name: 'Simulacrum',
        level: 'Magic-User, 7th Level',
        range: 'Touch',
        duration: 'Permanent',
        description: 'The caster creates a duplicate of himself or some other person.\n' +
            'The basic form is created from snow and ice, and must then be\n' +
            'animated. (Animate Dead is an acceptable means.) A Limited Wish\n' +
            '(along with the actual Simulacrum spell) is then used to imbue\n' +
            'the animated form with intelligence and certain knowledge of the\n' +
            'person being simulated. The simulacrum gains 30–60% (use a d4) of\n' +
            'the simulated creature’s knowledge and experience. The simulacrum\n' +
            'follows its creator’s orders. Note that the simulacrum is not a\n' +
            'perfect representation of the original. Side by side, the differences\n' +
            'are obvious, and the simulacrum is a magical creature detectable\n' +
            'with a Detect Magic spell. If the original of the simulacrum dies, a\n' +
            'strange effect begins: the simulacrum begins to gain the knowledge\n' +
            'and experience of the dead individual at a rate of 1% per week, to a\n' +
            'maximum of 90%.',
    },
    { // TODO table
        name: 'Sleep',
        level: 'Magic-User, 1st Level',
        range: '240 feet',
        duration: '1 hour',
        description: 'This spell puts enemies into an enchanted slumber (no saving throw\n' +
            'permitted). It affects creatures based on their hit dice.',
    },
    {
        name: 'Slow',
        level: 'Magic-User, 3rd Level',
        range: '240 feet',
        duration: '3 turns (30 minutes)',
        description: 'In an area with a radius of 60 feet around the point where the spell is\n' +
            'targeted, as many as 24 creatures failing a saving throw can move and\n' +
            'attack only at half speed.',
    },
    {
        name: 'Snake Charm',
        level: 'Cleric, 2nd Level',
        range: '60 feet',
        duration: '1d4+2 turns',
        description: 'One hit die (1 HD) of snakes can be charmed per level of the caster.\n' +
            'The snakes obey the caster’s commands.',
    },
    {
        name: 'Speak with Animals',
        level: 'Cleric, 2nd Level; Druid, 2nd Level',
        range: 'Caster',
        duration: '6 turns',
        description: 'The caster can speak with normal animals. There is a good chance\n' +
            'that the animals will provide reasonable assistance if requested, and\n' +
            'they will not attack – unless the caster uses the spell to say something\n' +
            'particularly offensive.',
    },
    {
        name: 'Speak with the Dead',
        level: 'Cleric, 3rd Level',
        range: 'Close/Touch (Referee’s discretion)',
        duration: '3 questions',
        description: 'The caster can ask three questions of a corpse, and it will answer,\n' +
            'although the answers might be cryptic. Only higher-level Clerics have\n' +
            'enough spiritual power to command answers of long-dead corpses.\n' +
            'Clerics lower than 8th level can gain answers only from bodies that\n' +
            'have been dead 1d4 days. Clerics levels 8–14 can speak to corpses\n' +
            'that have been dead 1d4 months. Clerics of level 15+ can gain answers\n' +
            'from a corpse of any age, including thousand-year-old relics, as long\n' +
            'as the body is still relatively intact. Note that a die roll is involved\n' +
            'here: for example, a seventh-level Cleric attempting to speak with a\n' +
            'two-day-old corpse might still fail—the d4 roll might indicate that\n' +
            'only a one-day-old corpse can be reached with this particular attempt\n' +
            'at the spell.',
    },
    {
        name: 'Speak with Monsters',
        level: 'Cleric, 6th Level',
        range: 'Speaking range',
        duration: '3d4 questions',
        description: 'The caster can speak with any type of monster, for the duration of a\n' +
            'certain number of questions. The monster is not forced to answer.',
    },
    {
        name: 'Speak with Plants',
        level: 'Cleric, 4th Level; Druid, 4th Level',
        range: 'Speaking range',
        duration: '6 turns',
        description: 'The caster can speak and understand the speech of plants. Plants smaller\n' +
            'than trees will obey commands, moving aside when requested, etc.',
    },
    {
        name: 'Strength',
        level: 'Magic-User, 2nd Level',
        range: 'Touch',
        duration: '8 hours (80 turns)',
        description: 'This spell may be cast upon a Fighter or a Cleric. For the duration\n' +
            'of the spell, a Fighter gains 2d4 points of Strength, and a Cleric gains\n' +
            '1d6 points of Strength. Strength cannot exceed 18 unless the Referee\n' +
            'chooses to allow additional bonuses resulting from the additional\n' +
            'Strength.',
    },
    {
        name: 'Sticks to Snakes',
        level: 'Cleric, 4th Level; Druid, 5th Level',
        range: '120 feet',
        duration: '1 hour',
        description: 'The caster may turn as many as 2d8 normal sticks into snakes, each\n' +
            'one having a 50% chance of being venomous. The snakes follow\n' +
            'commands, but turn back into sticks at the end of the spell, or when\n' +
            'killed.',
    },
    {
        name: 'Stone to Flesh',
        level: 'Magic-User, 6th Level',
        range: '120 feet',
        duration: 'Permanent until reversed',
        description: 'This spell can be used to counteract the negative effects of monsters\n' +
            'who petrify their victims. It can also be reversed to turn flesh into stone,\n' +
            'as desired by the caster. A saving throw is permitted to avoid being\n' +
            'turned to stone, but if the spell succeeds the victim is transformed into\n' +
            'a statue; the stone-to-flesh version of the spell will restore the victim\n' +
            'to normal.',
    },
    {
        name: 'Suggestion',
        level: 'Magic-User, 3rd Level',
        range: 'Shouting distance',
        duration: '1 week',
        description: 'The caster speaks a hypnotic suggestion to the intended victim.\n' +
            'Victims who fail a saving throw will carry out the suggestion, as long\n' +
            'as it can be performed within a week. The suggestion might not call for\n' +
            'the action to be carried out immediately, and can be contingent upon\n' +
            'something else happening first. A suggestion that the victim commit\n' +
            'suicide is only 1% likely to be obeyed.',
    },
    {
        name: 'Symbol (Cleric)',
        level: 'Cleric, 7th Level',
        range: 'Referee’s discretion (according to symbol)',
        duration: 'Varies (depends upon symbol used)',
        description: 'A Symbol spell creates a deadly magical trap, written into the shape\n' +
            'of a divine rune. The rune’s magic is activated when any person or\n' +
            'creature hostile to the caster reads it, or passes over, under, or past it.\n' +
            'Various different runes are known, and others may be possible:\n' +
            'Symbol of Discord: Causes all creatures in the hostile group to begin\n' +
            'arguing, and possibly fighting amongst themselves with lethal intent.\n' +
            'Symbol of Fear: Casts a Fear spell.\n' +
            'Symbol of Sleep: Casts a Sleep spell affecting double the normal\n' +
            'number of creatures and with double the normal duration.\n' +
            'Symbol of Stunning: Up to 150 hit points of creatures are affected as\n' +
            'per a Power Word, Stun.\n' +
            'Divine symbols cannot be crafted in such a way that would cause a\n' +
            'permanent effect (such as insanity) upon those affected.',
    },
    {
        name: 'Symbol (Magic-user)',
        level: 'Magic-User, 8th Level',
        range: 'Referee’s discretion (according to symbol)',
        duration: 'Varies (depends upon symbol used)',
        description: 'A Symbol spell creates a deadly magical trap, written into the shape\n' +
            'of an arcane rune. The rune’s magic is activated when any person or\n' +
            'creature hostile to the caster reads it, or passes over, under, or past it.\n' +
            'Various different runes are known, and others may be possible:\n' +
            'Symbol of Death: Deals a total of 75 hit points of damage.\n' +
            'Symbol of Discord: Causes all creatures in the hostile group to begin\n' +
            '70\n' +
            'MAgiC\n' +
            'arguing, and possibly fighting amongst themselves with lethal intent.\n' +
            'Symbol of Fear: Casts a Fear spell.\n' +
            'Symbol of Insanity: Up to 100 hit points of creatures are driven insane\n' +
            'by a curse.\n' +
            'Symbol of Sleep: Casts a Sleep spell affecting double the normal\n' +
            'number of creatures and with double the normal duration.\n' +
            'Symbol of Stunning: Up to 150 hit points of creatures are affected as\n' +
            'per a Power Word, Stun.',
    },
    {
        name: 'telekinesis',
        level: 'Magic-User, 5th Level',
        range: '120 feet',
        duration: '6 turns (1 hour)',
        description: 'The caster can move objects using mental power alone. The amount\n' +
            'of weight that can be lifted and moved is 20 pounds per level. It is up\n' +
            'to the Referee’s interpretation of the spell whether the objects can be\n' +
            'thrown, and at what speed.',
    },
    {
        name: 'teleport',
        level: 'Magic-User, 5th Level',
        range: 'Touch',
        duration: 'Instantaneous',
        description: 'This spell transports the caster or another person to a destination that\n' +
            'the caster knows, or at least knows what it looks like from a picture\n' +
            'or a map. Success depends on how well the caster knows the targeted\n' +
            'location, as follows:\n' +
            '1. If the caster has only seen the location in a picture or through a map\n' +
            '(so that knowledge is not based on direct experience), there is only a\n' +
            '25% chance of success, and failure means death, for the traveler’s soul\n' +
            'is lost in the spaces between realities.\n' +
            '2. If the caster has seen but not studied the location, there is a 20%\n' +
            'chance of error. In the case of an error, there is a 50% chance that\n' +
            'the traveler arrives low, 1d10 x10 feet below the intended location\n' +
            '(with death resulting from arrival within a solid substance). If the\n' +
            'error is high (over the 50% chance for a “low” arrival), the traveler\n' +
            'arrives 1d10 x10 feet above the targeted location—likely resulting in\n' +
            'a deadly fall.\n' +
            '3. If the caster is well familiar with the location, or has studied it carefully,\n' +
            'there is only a 5% chance of error. On a 1 in 6 the teleport is low, otherwise\n' +
            'it is high. In either case, the arrival is 1d4 x10 feet high or low.',
    },
    {
        name: 'time Stop',
        level: 'Magic-User, 9th Level',
        range: 'Caster',
        duration: '1d4+1 rounds',
        description: 'The caster stops the passage of time in a radius of about 15 feet\n' +
            'around himself. (The time-stopped area does not thereafter move with\n' +
            'the caster.) Any creatures within this area are suspended in time, unable\n' +
            'to act. The caster is not stopped in time while in the area or beyond.',
    },
    {
        name: 'transmute Metal to Wood',
        level: 'Druid, 7th Level',
        range: '120 feet',
        duration: 'Permanent',
        description: 'This spell transmutes metal into wood in a 10-foot x 10-foot area.\n' +
            'Each discrete piece of metal is allowed a saving throw. (Coins may\n' +
            'be checked in batches rather than rolling hundreds of saving throws.)\n' +
            'The effect cannot be dispelled, although a reversed version of this spell\n' +
            'could be used to undo the transmutation.',
    },
    {
        name: 'transmute Rock to Mud',
        level: 'Druid, 5th Level; Magic-User, 5th Level',
        range: '120 feet',
        duration: '3d6 days, unless reversed',
        description: 'This spell transmutes rock (and any other form of earth, including\n' +
            'sand) into mud. An area of roughly 300 x 300 feet becomes a deep mire,\n' +
            'reducing movement to 10% of normal.',
    },
    {
        name: 'transport via Plants',
        level: 'Druid, 6th Level',
        range: 'Touch first plant',
        duration: '24 hours or until travel is completed',
        description: 'The caster may enter any normal plant and pass any distance to a chosen\n' +
            'plant of the same kind in a single round, regardless of the distance separat-\n' +
            'ing the two. Both plants must be alive. The caster may also choose to remain\n' +
            'in one or the other of the two plants for up to 24 hours, but the destruction\n' +
            'of an occupied plant slays the caster and ejects the body from the plant. The\n' +
            'caster becomes aware of all plants within 3000 feet, and the spell will not\n' +
            'fail if the attempted travel is made within this radius. However, if the caster\n' +
            'attempts to travel beyond this radius into the substance of a plant the caster\n' +
            'has never before seen – meaning that specific plant, not just the species –\n' +
            'there is a 20% chance of error during travel. The exact nature of the error\n' +
            'depends upon specific circumstances, but it is likely to be off by a margin of\n' +
            'at least 1d6 miles, into any other sort of plant.',
    },
    {
        name: 'turn Wood',
        level: '',
        range: '',
        duration: '',
        description: 'See Repel Wood',
    },
    {
        name: 'Wall of Fire',
        level: 'Druid, 5th Level; Magic-User, 4th Level',
        range: '60 feet',
        duration: 'Concentration',
        description: 'A wall of fire flares into being and burns for as long as the caster\n' +
            'concentrates upon it. Creatures with 3 or fewer hit dice cannot pass\n' +
            'through it, and no creature can see through it to the other side. Passing\n' +
            'through the fire inflicts 1d6 hit points of damage (no saving throw)\n' +
            'and undead creatures sustain twice the normal damage. The caster\n' +
            'may choose to create a straight wall 60 feet long and 20 feet high, or a\n' +
            'circular wall with a 15-foot radius, also 20 feet high.',
    },
    {
        name: 'Wall of ice',
        level: 'Magic-User, 4th Level',
        range: '60 feet',
        duration: 'Concentration',
        description: 'The caster conjures up a wall of ice, six feet thick and non-transparent.\n' +
            'The caster may choose to create a straight wall 60 feet long and 20\n' +
            'feet high, or a circular wall with a 15-foot radius, also 20 feet high.\n' +
            'Creatures with 3 or fewer hit dice cannot affect the wall, but creatures\n' +
            'of 4+ hit dice are able to smash through it, taking 1d6 points of damage\n' +
            'in the process. Creatures with fire-based metabolisms take 2d6 instead\n' +
            'of the normal 1d6. Fire spells and magical effects are negated in the\n' +
            'vicinity of the wall.',
    },
    {
        name: 'Wall of iron',
        level: 'Magic-User, 5th Level',
        range: '60 feet',
        duration: '2 hours',
        description: 'The caster conjures an iron wall from thin air. The wall is 3 feet thick,\n' +
            '50 feet tall, and 50 feet long.',
    },
    {
        name: 'Wall of Stone',
        level: 'Magic-User, 5th Level',
        range: '60 feet',
        duration: 'Permanent until dispelled',
        description: 'The wall of stone conjured by this spell is two feet thick, with a\n' +
            'surface area of 1,000 square feet. The caster might choose to make the\n' +
            'wall 50 feet long (in which case it would be 20 feet tall), or 100 feet\n' +
            'long (in which case it would be only 10 feet tall).',
    },
    {
        name: 'Warp Wood',
        level: 'Druid, 2nd Level',
        range: '60 feet',
        duration: 'Permanent',
        description: 'This spell warps, bends, and twists wood. The volume of about one\n' +
            '2-inch x 4-inch x 5-foot plank may be affected per every two levels of\n' +
            'the caster – the volume of a spear or several arrows. However, keep in\n' +
            'mind that springing a door open or causing a leak in a ship’s planking\n' +
            'does not actually require much of the constituent wood to be warped.',
    },
    {
        name: 'Water Breathing',
        level: 'Druid, 3rd Level; Magic-User, 3rd Level',
        range: '30 feet',
        duration: '2 hours',
        description: 'The recipient of the spell is able to breathe underwater until the spell’s\n' +
            'duration expires.',
    },
    {
        name: 'Weather Summoning',
        level: 'Druid, 6th Level',
        range: 'Centered on caster',
        duration: '1 hour/level',
        description: 'Within 30 minutes, whatever weather the Druid desires will form in\n' +
            'the surrounding five-mile radius. It is not under the caster’s control,\n' +
            'in the sense that it will not specifically target any individuals or affect\n' +
            'one place within the radius more than any other place. Note that this\n' +
            'spell is not by any means the only way in which groups of druids might\n' +
            'exercise control over weather conditions using holy places or acting\n' +
            'together in mystic rituals. It is simply the manner by which a lone (but\n' +
            'powerful) Druid can summon forth weather conditions using no ritual\n' +
            'beyond mere spell casting.',
    },
    {
        name: 'Web',
        level: 'Magic-User, 2nd Level',
        range: '30 feet',
        duration: '8 hours',
        description: 'Fibrous, sticky webs fill an area up to 10 x 10 x 20 feet. It is extremely\n' +
            'difficult to get through the mass of strands—it takes one turn if a torch\n' +
            'and sword (or a flaming sword) are used, and creatures larger than a\n' +
            'horse can break through in 2 turns. Humans alone take more time to\n' +
            'break through—perhaps 3–4 turns or longer at the Referee’s discretion.',
    },
    {
        name: 'Wizard Eye',
        level: 'Magic-User, 4th Level',
        range: '240 feet',
        duration: '1 hour',
        description: 'The caster conjures up an invisible, magical “eye,” that can move a\n' +
            'maximum of 240 feet from its creator. It floats along as directed by the\n' +
            'caster, at a rate of 120 feet per turn (12 feet per minute).',
    },
    {
        name: 'Wizard lock',
        level: 'Magic-User, 2nd Level',
        range: 'Close',
        duration: 'Permanent until dispelled',
        description: 'As with a Hold Portal spell, Wizard Lock holds a door closed, but it is\n' +
            'permanent until dispelled. Creatures with magic resistance can shatter\n' +
            'the spell without effort. Any Magic-User at least three levels higher\n' +
            'than the caster can open the portal, and a Knock spell will open it as\n' +
            'well, although the spell is not permanently destroyed in these cases.',
    },
    {
        name: 'Wish',
        level: 'Magic-User, 9th Level',
        range: 'Unlimited',
        duration: 'See below',
        description: 'This spell is not all-powerful; it grants wishes of limited scope\n' +
            '(although more powerful than a Limited Wish). The Referee’s\n' +
            'discretion will rule what sort of wishes are within the spell’s power.\n' +
            '(One possible—unofficial—guideline might be that a Wish can grant\n' +
            'effects that would be similar in power to a spell of level 8 or lower,\n' +
            'with permanent effects in many cases.) After casting a Wish spell, the\n' +
            'Magic-User is mentally drained and unable to cast spells for a period\n' +
            'of 1d4 days.',
    },
    {
        name: 'Wind Walk',
        level: 'Cleric, 7th Level',
        range: 'Touch',
        duration: '1 day or until dispelled',
        description: 'The caster and one other person in contact with him become\n' +
            'incorporeal and mist-like, able to travel through walls and other\n' +
            'obstacles. The Cleric can bring this companion along and travel at 48\n' +
            'feet per minute indoors (or in subterranean settings) and much faster\n' +
            'outdoors.',
    },
    {
        name: 'Word of Recall',
        level: 'Cleric, 6th Level',
        range: 'Indefinite',
        duration: 'Immediate',
        description: 'The Cleric teleports without error back to a prepared sanctuary.',
    },
];
// {
//     name: '',
//         level: '',
//     range: '',
//     duration: '',
//     description: '',
// },
