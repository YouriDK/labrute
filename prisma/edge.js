
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  lang: 'lang',
  name: 'name',
  admin: 'admin',
  connexionToken: 'connexionToken',
  bruteLimit: 'bruteLimit',
  gold: 'gold',
  fightSpeed: 'fightSpeed',
  backgroundMusic: 'backgroundMusic'
};

exports.Prisma.BruteBodyScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  longHair: 'longHair',
  lowerRightArm: 'lowerRightArm',
  rightHand: 'rightHand',
  upperRightArm: 'upperRightArm',
  rightShoulder: 'rightShoulder',
  rightFoot: 'rightFoot',
  lowerRightLeg: 'lowerRightLeg',
  upperRightLeg: 'upperRightLeg',
  leftFoot: 'leftFoot',
  lowerLeftLeg: 'lowerLeftLeg',
  pelvis: 'pelvis',
  upperLeftLeg: 'upperLeftLeg',
  tummy: 'tummy',
  torso: 'torso',
  head: 'head',
  leftHand: 'leftHand',
  upperLeftArm: 'upperLeftArm',
  lowerLeftArm: 'lowerLeftArm',
  leftShoulder: 'leftShoulder'
};

exports.Prisma.BruteColorsScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  skinColor: 'skinColor',
  skinShade: 'skinShade',
  hairColor: 'hairColor',
  hairShade: 'hairShade',
  primaryColor: 'primaryColor',
  primaryShade: 'primaryShade',
  secondaryColor: 'secondaryColor',
  secondaryShade: 'secondaryShade',
  accentColor: 'accentColor',
  accentShade: 'accentShade'
};

exports.Prisma.BruteScalarFieldEnum = {
  id: 'id',
  name: 'name',
  deletedAt: 'deletedAt',
  createdAt: 'createdAt',
  destinyPath: 'destinyPath',
  level: 'level',
  xp: 'xp',
  hp: 'hp',
  enduranceStat: 'enduranceStat',
  enduranceModifier: 'enduranceModifier',
  enduranceValue: 'enduranceValue',
  strengthStat: 'strengthStat',
  strengthModifier: 'strengthModifier',
  strengthValue: 'strengthValue',
  agilityStat: 'agilityStat',
  agilityModifier: 'agilityModifier',
  agilityValue: 'agilityValue',
  speedStat: 'speedStat',
  speedModifier: 'speedModifier',
  speedValue: 'speedValue',
  ranking: 'ranking',
  gender: 'gender',
  userId: 'userId',
  weapons: 'weapons',
  skills: 'skills',
  pets: 'pets',
  masterId: 'masterId',
  pupilsCount: 'pupilsCount',
  clanId: 'clanId',
  registeredForTournament: 'registeredForTournament',
  nextTournamentDate: 'nextTournamentDate',
  currentTournamentDate: 'currentTournamentDate',
  currentTournamentStepWatched: 'currentTournamentStepWatched',
  lastFight: 'lastFight',
  fightsLeft: 'fightsLeft',
  victories: 'victories',
  opponentsGeneratedAt: 'opponentsGeneratedAt',
  canRankUpSince: 'canRankUpSince'
};

exports.Prisma.BruteSpritesheetScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  image: 'image',
  json: 'json'
};

exports.Prisma.ClanScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.FightScalarFieldEnum = {
  id: 'id',
  date: 'date',
  brute1Id: 'brute1Id',
  brute2Id: 'brute2Id',
  winner: 'winner',
  loser: 'loser',
  steps: 'steps',
  fighters: 'fighters'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  date: 'date',
  currentBruteId: 'currentBruteId',
  type: 'type',
  level: 'level',
  brute: 'brute',
  fightId: 'fightId',
  xp: 'xp'
};

exports.Prisma.DestinyChoiceScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  path: 'path',
  type: 'type',
  skill: 'skill',
  weapon: 'weapon',
  pet: 'pet',
  stat1: 'stat1',
  stat1Value: 'stat1Value',
  stat2: 'stat2',
  stat2Value: 'stat2Value'
};

exports.Prisma.TournamentScalarFieldEnum = {
  id: 'id',
  date: 'date',
  type: 'type'
};

exports.Prisma.TournamentStepScalarFieldEnum = {
  id: 'id',
  tournamentId: 'tournamentId',
  step: 'step',
  fightId: 'fightId',
  xpDistributed: 'xpDistributed'
};

exports.Prisma.TournamentEarningScalarFieldEnum = {
  id: 'id',
  date: 'date',
  bruteId: 'bruteId',
  points: 'points',
  achievement: 'achievement',
  achievementCount: 'achievementCount'
};

exports.Prisma.AchievementScalarFieldEnum = {
  id: 'id',
  name: 'name',
  count: 'count',
  bruteId: 'bruteId',
  userId: 'userId'
};

exports.Prisma.BruteReportScalarFieldEnum = {
  id: 'id',
  bruteId: 'bruteId',
  reason: 'reason',
  count: 'count',
  date: 'date',
  status: 'status'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Lang = exports.$Enums.Lang = {
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es',
  ru: 'ru'
};

exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female'
};

exports.DestinyChoiceSide = exports.$Enums.DestinyChoiceSide = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
};

exports.WeaponName = exports.$Enums.WeaponName = {
  fan: 'fan',
  keyboard: 'keyboard',
  knife: 'knife',
  leek: 'leek',
  mug: 'mug',
  sai: 'sai',
  racquet: 'racquet',
  axe: 'axe',
  bumps: 'bumps',
  flail: 'flail',
  fryingPan: 'fryingPan',
  hatchet: 'hatchet',
  mammothBone: 'mammothBone',
  morningStar: 'morningStar',
  trombone: 'trombone',
  baton: 'baton',
  halbard: 'halbard',
  lance: 'lance',
  trident: 'trident',
  whip: 'whip',
  noodleBowl: 'noodleBowl',
  piopio: 'piopio',
  shuriken: 'shuriken',
  broadsword: 'broadsword',
  scimitar: 'scimitar',
  sword: 'sword'
};

exports.SkillName = exports.$Enums.SkillName = {
  herculeanStrength: 'herculeanStrength',
  felineAgility: 'felineAgility',
  lightningBolt: 'lightningBolt',
  vitality: 'vitality',
  immortality: 'immortality',
  reconnaissance: 'reconnaissance',
  weaponsMaster: 'weaponsMaster',
  martialArts: 'martialArts',
  sixthSense: 'sixthSense',
  hostility: 'hostility',
  fistsOfFury: 'fistsOfFury',
  shield: 'shield',
  armor: 'armor',
  toughenedSkin: 'toughenedSkin',
  untouchable: 'untouchable',
  sabotage: 'sabotage',
  shock: 'shock',
  bodybuilder: 'bodybuilder',
  relentless: 'relentless',
  survival: 'survival',
  leadSkeleton: 'leadSkeleton',
  balletShoes: 'balletShoes',
  determination: 'determination',
  firstStrike: 'firstStrike',
  resistant: 'resistant',
  counterAttack: 'counterAttack',
  ironHead: 'ironHead',
  thief: 'thief',
  fierceBrute: 'fierceBrute',
  tragicPotion: 'tragicPotion',
  net: 'net',
  bomb: 'bomb',
  hammer: 'hammer',
  cryOfTheDamned: 'cryOfTheDamned',
  hypnosis: 'hypnosis',
  flashFlood: 'flashFlood',
  tamer: 'tamer',
  regeneration: 'regeneration',
  chef: 'chef',
  spy: 'spy',
  saboteur: 'saboteur',
  backup: 'backup',
  hideaway: 'hideaway',
  monk: 'monk'
};

exports.PetName = exports.$Enums.PetName = {
  dog1: 'dog1',
  dog2: 'dog2',
  dog3: 'dog3',
  panther: 'panther',
  bear: 'bear'
};

exports.LogType = exports.$Enums.LogType = {
  win: 'win',
  lose: 'lose',
  child: 'child',
  childup: 'childup',
  up: 'up',
  lvl: 'lvl',
  survive: 'survive',
  tournament: 'tournament',
  tournamentXp: 'tournamentXp'
};

exports.DestinyChoiceType = exports.$Enums.DestinyChoiceType = {
  skill: 'skill',
  weapon: 'weapon',
  pet: 'pet',
  stats: 'stats'
};

exports.BruteStat = exports.$Enums.BruteStat = {
  endurance: 'endurance',
  strength: 'strength',
  agility: 'agility',
  speed: 'speed'
};

exports.TournamentType = exports.$Enums.TournamentType = {
  DAILY: 'DAILY',
  GLOBAL: 'GLOBAL',
  CUSTOM: 'CUSTOM'
};

exports.AchievementName = exports.$Enums.AchievementName = {
  wins: 'wins',
  defeats: 'defeats',
  flawless: 'flawless',
  winWith1HP: 'winWith1HP',
  steal2Weapons: 'steal2Weapons',
  singleHitWin: 'singleHitWin',
  combo3: 'combo3',
  combo4: 'combo4',
  combo5: 'combo5',
  counter4b2b: 'counter4b2b',
  reversal4b2b: 'reversal4b2b',
  block4b2b: 'block4b2b',
  evade4b2b: 'evade4b2b',
  disarm4: 'disarm4',
  damage100once: 'damage100once',
  hit20times: 'hit20times',
  use10skills: 'use10skills',
  saboteur: 'saboteur',
  dog: 'dog',
  panther: 'panther',
  bear: 'bear',
  panther_bear: 'panther_bear',
  felAg_fistsOfF: 'felAg_fistsOfF',
  felAg_fistsOfF_untouch_relentless: 'felAg_fistsOfF_untouch_relentless',
  vita_armor_toughened: 'vita_armor_toughened',
  herculStr_hammer_fierceBrute: 'herculStr_hammer_fierceBrute',
  shock: 'shock',
  balletShoes_survival: 'balletShoes_survival',
  cryOfTheDamned_hypnosis: 'cryOfTheDamned_hypnosis',
  shield_counterAttack: 'shield_counterAttack',
  reconnaissance_monk: 'reconnaissance_monk',
  immortality: 'immortality',
  doubleBoost: 'doubleBoost',
  tripleBoost: 'tripleBoost',
  quadrupleBoost: 'quadrupleBoost',
  regeneration_potion: 'regeneration_potion',
  bear_tamer: 'bear_tamer',
  tripleDogs: 'tripleDogs',
  fiveWeapons: 'fiveWeapons',
  tenWeapons: 'tenWeapons',
  fifteenWeapons: 'fifteenWeapons',
  twentyWeapons: 'twentyWeapons',
  twentyThreeWeapons: 'twentyThreeWeapons',
  monk_sixthSense_whip: 'monk_sixthSense_whip',
  weaponsMaster_sharp_bodybuilder_heavy: 'weaponsMaster_sharp_bodybuilder_heavy',
  hostility_counterWeapon: 'hostility_counterWeapon',
  flashFlood_twelveWeapons: 'flashFlood_twelveWeapons',
  lightningBolt_firstStrike: 'lightningBolt_firstStrike',
  herculeanStrength: 'herculeanStrength',
  felineAgility: 'felineAgility',
  lightningBolt: 'lightningBolt',
  vitality: 'vitality',
  potion_chef: 'potion_chef',
  tamer_net: 'tamer_net',
  untouchable_balletShoes: 'untouchable_balletShoes',
  survival_resistant: 'survival_resistant',
  hideaway_spy: 'hideaway_spy',
  weaponsFast3: 'weaponsFast3',
  weaponsSharp3: 'weaponsSharp3',
  weaponsHeavy3: 'weaponsHeavy3',
  weaponsLong3: 'weaponsLong3',
  weaponsThrown3: 'weaponsThrown3',
  weaponsBlunt3: 'weaponsBlunt3',
  agility50: 'agility50',
  agility100: 'agility100',
  speed50: 'speed50',
  speed100: 'speed100',
  strength50: 'strength50',
  strength100: 'strength100',
  hp300: 'hp300',
  hp600: 'hp600',
  winTournamentAs20: 'winTournamentAs20',
  winTournamentAs15: 'winTournamentAs15',
  looseAgainst2: 'looseAgainst2',
  looseAgainst3: 'looseAgainst3',
  looseAgainst4: 'looseAgainst4',
  winAgainst2: 'winAgainst2',
  winAgainst3: 'winAgainst3',
  winAgainst4: 'winAgainst4',
  winAsLower: 'winAsLower',
  win: 'win',
  rankUp10: 'rankUp10',
  rankUp9: 'rankUp9',
  rankUp8: 'rankUp8',
  rankUp7: 'rankUp7',
  rankUp6: 'rankUp6',
  rankUp5: 'rankUp5',
  rankUp4: 'rankUp4',
  rankUp3: 'rankUp3',
  rankUp2: 'rankUp2',
  rankUp1: 'rankUp1',
  rankUp0: 'rankUp0',
  sacrifice: 'sacrifice',
  beta: 'beta',
  bug: 'bug'
};

exports.BruteReportReason = exports.$Enums.BruteReportReason = {
  name: 'name'
};

exports.BruteReportStatus = exports.$Enums.BruteReportStatus = {
  pending: 'pending',
  accepted: 'accepted',
  rejected: 'rejected'
};

exports.Prisma.ModelName = {
  User: 'User',
  BruteBody: 'BruteBody',
  BruteColors: 'BruteColors',
  Brute: 'Brute',
  BruteSpritesheet: 'BruteSpritesheet',
  Clan: 'Clan',
  Fight: 'Fight',
  Log: 'Log',
  DestinyChoice: 'DestinyChoice',
  Tournament: 'Tournament',
  TournamentStep: 'TournamentStep',
  TournamentEarning: 'TournamentEarning',
  Achievement: 'Achievement',
  BruteReport: 'BruteReport'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\perso\\Documents\\GitHub\\labrute\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x"
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../server/.env"
  },
  "relativePath": "../server/prisma",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIgogIG91dHB1dCAgICAgICAgPSAiLi4vLi4vcHJpc21hIgogIGJpbmFyeVRhcmdldHMgPSBbIm5hdGl2ZSIsICJkZWJpYW4tb3BlbnNzbC0zLjAueCIsICJkZWJpYW4tb3BlbnNzbC0xLjEueCJdCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gInBvc3RncmVzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCmVudW0gTGFuZyB7CiAgZW4KICBmcgogIGRlCiAgZXMKICBydQp9Cgptb2RlbCBVc2VyIHsKICBpZCAgICAgICAgICAgICAgU3RyaW5nICAgICAgICBAaWQgQHVuaXF1ZSBAZGIuVXVpZAogIGxhbmcgICAgICAgICAgICBMYW5nICAgICAgICAgIEBkZWZhdWx0KGZyKQogIG5hbWUgICAgICAgICAgICBTdHJpbmcgICAgICAgIEBkYi5WYXJDaGFyKDI1NSkKICBhZG1pbiAgICAgICAgICAgQm9vbGVhbiAgICAgICBAZGVmYXVsdChmYWxzZSkKICBjb25uZXhpb25Ub2tlbiAgU3RyaW5nICAgICAgICBAZGIuVXVpZAogIGJydXRlTGltaXQgICAgICBJbnQgICAgICAgICAgIEBkZWZhdWx0KDMpCiAgZ29sZCAgICAgICAgICAgIEludCAgICAgICAgICAgQGRlZmF1bHQoMCkKICBmaWdodFNwZWVkICAgICAgSW50ICAgICAgICAgICBAZGVmYXVsdCgxKQogIGJhY2tncm91bmRNdXNpYyBCb29sZWFuICAgICAgIEBkZWZhdWx0KHRydWUpCiAgYnJ1dGVzICAgICAgICAgIEJydXRlW10KICBhY2hpZXZlbWVudHMgICAgQWNoaWV2ZW1lbnRbXQogIHJlcG9ydHMgICAgICAgICBCcnV0ZVJlcG9ydFtdCn0KCmVudW0gRGVzdGlueUNob2ljZVNpZGUgewogIExFRlQgIEBtYXAoIjAiKQogIFJJR0hUIEBtYXAoIjEiKQp9CgplbnVtIEdlbmRlciB7CiAgbWFsZQogIGZlbWFsZQp9Cgptb2RlbCBCcnV0ZUJvZHkgewogIGlkICAgICAgICAgICAgSW50ICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBicnV0ZSAgICAgICAgIEJydXRlIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkICAgICAgIEludCAgIEB1bmlxdWUKICBsb25nSGFpciAgICAgIEludAogIGxvd2VyUmlnaHRBcm0gSW50CiAgcmlnaHRIYW5kICAgICBJbnQKICB1cHBlclJpZ2h0QXJtIEludAogIHJpZ2h0U2hvdWxkZXIgSW50CiAgcmlnaHRGb290ICAgICBJbnQKICBsb3dlclJpZ2h0TGVnIEludAogIHVwcGVyUmlnaHRMZWcgSW50CiAgbGVmdEZvb3QgICAgICBJbnQKICBsb3dlckxlZnRMZWcgIEludAogIHBlbHZpcyAgICAgICAgSW50CiAgdXBwZXJMZWZ0TGVnICBJbnQKICB0dW1teSAgICAgICAgIEludAogIHRvcnNvICAgICAgICAgSW50CiAgaGVhZCAgICAgICAgICBJbnQKICBsZWZ0SGFuZCAgICAgIEludAogIHVwcGVyTGVmdEFybSAgSW50CiAgbG93ZXJMZWZ0QXJtICBJbnQKICBsZWZ0U2hvdWxkZXIgIEludAp9Cgptb2RlbCBCcnV0ZUNvbG9ycyB7CiAgaWQgICAgICAgICAgICAgSW50ICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYnJ1dGUgICAgICAgICAgQnJ1dGUgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkICAgICAgICBJbnQgICAgQHVuaXF1ZQogIHNraW5Db2xvciAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgc2tpblNoYWRlICAgICAgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkKICBoYWlyQ29sb3IgICAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjU1KQogIGhhaXJTaGFkZSAgICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgcHJpbWFyeUNvbG9yICAgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkKICBwcmltYXJ5U2hhZGUgICBTdHJpbmcgQGRiLlZhckNoYXIoMjU1KQogIHNlY29uZGFyeUNvbG9yIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCiAgc2Vjb25kYXJ5U2hhZGUgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkKICBhY2NlbnRDb2xvciAgICBTdHJpbmcgQGRiLlZhckNoYXIoMjU1KQogIGFjY2VudFNoYWRlICAgIFN0cmluZyBAZGIuVmFyQ2hhcigyNTUpCn0KCmVudW0gV2VhcG9uTmFtZSB7CiAgZmFuCiAga2V5Ym9hcmQKICBrbmlmZQogIGxlZWsKICBtdWcKICBzYWkKICByYWNxdWV0CiAgYXhlCiAgYnVtcHMKICBmbGFpbAogIGZyeWluZ1BhbgogIGhhdGNoZXQKICBtYW1tb3RoQm9uZQogIG1vcm5pbmdTdGFyCiAgdHJvbWJvbmUKICBiYXRvbgogIGhhbGJhcmQKICBsYW5jZQogIHRyaWRlbnQKICB3aGlwCiAgbm9vZGxlQm93bAogIHBpb3BpbwogIHNodXJpa2VuCiAgYnJvYWRzd29yZAogIHNjaW1pdGFyCiAgc3dvcmQKfQoKZW51bSBTa2lsbE5hbWUgewogIGhlcmN1bGVhblN0cmVuZ3RoCiAgZmVsaW5lQWdpbGl0eQogIGxpZ2h0bmluZ0JvbHQKICB2aXRhbGl0eQogIGltbW9ydGFsaXR5CiAgcmVjb25uYWlzc2FuY2UKICB3ZWFwb25zTWFzdGVyCiAgbWFydGlhbEFydHMKICBzaXh0aFNlbnNlCiAgaG9zdGlsaXR5CiAgZmlzdHNPZkZ1cnkKICBzaGllbGQKICBhcm1vcgogIHRvdWdoZW5lZFNraW4KICB1bnRvdWNoYWJsZQogIHNhYm90YWdlCiAgc2hvY2sKICBib2R5YnVpbGRlcgogIHJlbGVudGxlc3MKICBzdXJ2aXZhbAogIGxlYWRTa2VsZXRvbgogIGJhbGxldFNob2VzCiAgZGV0ZXJtaW5hdGlvbgogIGZpcnN0U3RyaWtlCiAgcmVzaXN0YW50CiAgY291bnRlckF0dGFjawogIGlyb25IZWFkCiAgdGhpZWYKICBmaWVyY2VCcnV0ZQogIHRyYWdpY1BvdGlvbgogIG5ldAogIGJvbWIKICBoYW1tZXIKICBjcnlPZlRoZURhbW5lZAogIGh5cG5vc2lzCiAgZmxhc2hGbG9vZAogIHRhbWVyCiAgcmVnZW5lcmF0aW9uCiAgY2hlZgogIHNweQogIHNhYm90ZXVyCiAgYmFja3VwCiAgaGlkZWF3YXkKICBtb25rCn0KCmVudW0gUGV0TmFtZSB7CiAgZG9nMQogIGRvZzIKICBkb2czCiAgcGFudGhlcgogIGJlYXIKfQoKbW9kZWwgQnJ1dGUgewogIGlkICAgICAgICAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGIuVmFyQ2hhcigyNTUpCiAgZGVsZXRlZEF0ICAgICAgICAgICAgICAgICAgICBEYXRlVGltZT8gICAgICAgICAgIEBkYi5UaW1lc3RhbXB0eigpCiAgY3JlYXRlZEF0ICAgICAgICAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAZGIuVGltZXN0YW1wdHooKQogIGRlc3RpbnlQYXRoICAgICAgICAgICAgICAgICAgRGVzdGlueUNob2ljZVNpZGVbXSBAZGVmYXVsdChbXSkKICBsZXZlbCAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICB4cCAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBocCAgICAgICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBlbmR1cmFuY2VTdGF0ICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBlbmR1cmFuY2VNb2RpZmllciAgICAgICAgICAgIEZsb2F0ICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICBlbmR1cmFuY2VWYWx1ZSAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBzdHJlbmd0aFN0YXQgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBzdHJlbmd0aE1vZGlmaWVyICAgICAgICAgICAgIEZsb2F0ICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICBzdHJlbmd0aFZhbHVlICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBhZ2lsaXR5U3RhdCAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBhZ2lsaXR5TW9kaWZpZXIgICAgICAgICAgICAgIEZsb2F0ICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICBhZ2lsaXR5VmFsdWUgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBzcGVlZFN0YXQgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBzcGVlZE1vZGlmaWVyICAgICAgICAgICAgICAgIEZsb2F0ICAgICAgICAgICAgICAgQGRlZmF1bHQoMSkKICBzcGVlZFZhbHVlICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICByYW5raW5nICAgICAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMTEpCiAgZ2VuZGVyICAgICAgICAgICAgICAgICAgICAgICBHZW5kZXIKICB1c2VyICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXI/ICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXNlcklkICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmc/ICAgICAgICAgICAgIEBkYi5VdWlkCiAgYm9keSAgICAgICAgICAgICAgICAgICAgICAgICBCcnV0ZUJvZHk/CiAgY29sb3JzICAgICAgICAgICAgICAgICAgICAgICBCcnV0ZUNvbG9ycz8KICB3ZWFwb25zICAgICAgICAgICAgICAgICAgICAgIFdlYXBvbk5hbWVbXSAgICAgICAgQGRlZmF1bHQoW10pCiAgc2tpbGxzICAgICAgICAgICAgICAgICAgICAgICBTa2lsbE5hbWVbXSAgICAgICAgIEBkZWZhdWx0KFtdKQogIHBldHMgICAgICAgICAgICAgICAgICAgICAgICAgUGV0TmFtZVtdICAgICAgICAgICBAZGVmYXVsdChbXSkKICBtYXN0ZXIgICAgICAgICAgICAgICAgICAgICAgIEJydXRlPyAgICAgICAgICAgICAgQHJlbGF0aW9uKCJNYXN0ZXIiLCBmaWVsZHM6IFttYXN0ZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgbWFzdGVySWQgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgcHVwaWxzICAgICAgICAgICAgICAgICAgICAgICBCcnV0ZVtdICAgICAgICAgICAgIEByZWxhdGlvbigiTWFzdGVyIikKICBwdXBpbHNDb3VudCAgICAgICAgICAgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBjbGFuICAgICAgICAgICAgICAgICAgICAgICAgIENsYW4/ICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2NsYW5JZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgY2xhbklkICAgICAgICAgICAgICAgICAgICAgICBJbnQ/CiAgcmVnaXN0ZXJlZEZvclRvdXJuYW1lbnQgICAgICBCb29sZWFuICAgICAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQogIG5leHRUb3VybmFtZW50RGF0ZSAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuRGF0ZQogIGN1cnJlbnRUb3VybmFtZW50RGF0ZSAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuRGF0ZQogIGN1cnJlbnRUb3VybmFtZW50U3RlcFdhdGNoZWQgSW50PyAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGxhc3RGaWdodCAgICAgICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuRGF0ZQogIGZpZ2h0c0xlZnQgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAZGVmYXVsdCg2KQogIHZpY3RvcmllcyAgICAgICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAZGVmYXVsdCgwKQogIGZpZ2h0cyAgICAgICAgICAgICAgICAgICAgICAgRmlnaHRbXQogIGZpZ2h0c0FzQWR2ZXJzYXJ5ICAgICAgICAgICAgRmlnaHRbXSAgICAgICAgICAgICBAcmVsYXRpb24oIkFkdmVyc2FyeSIpCiAgbG9ncyAgICAgICAgICAgICAgICAgICAgICAgICBMb2dbXQogIGRlc3RpbnlDaG9pY2VzICAgICAgICAgICAgICAgRGVzdGlueUNob2ljZVtdCiAgc3ByaXRlc2hlZXQgICAgICAgICAgICAgICAgICBCcnV0ZVNwcml0ZXNoZWV0PwogIHRvdXJuYW1lbnRzICAgICAgICAgICAgICAgICAgVG91cm5hbWVudFtdCiAgb3Bwb25lbnRzICAgICAgICAgICAgICAgICAgICBCcnV0ZVtdICAgICAgICAgICAgIEByZWxhdGlvbigiT3Bwb25lbnRzIikKICBvcHBvbmVudE9mICAgICAgICAgICAgICAgICAgIEJydXRlW10gICAgICAgICAgICAgQHJlbGF0aW9uKCJPcHBvbmVudHMiKQogIG9wcG9uZW50c0dlbmVyYXRlZEF0ICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuRGF0ZQogIGNhblJhbmtVcFNpbmNlICAgICAgICAgICAgICAgRGF0ZVRpbWU/ICAgICAgICAgICBAZGIuRGF0ZQogIGFjaGlldmVtZW50cyAgICAgICAgICAgICAgICAgQWNoaWV2ZW1lbnRbXQogIHRvdXJuYW1lbnRFYXJuaW5ncyAgICAgICAgICAgVG91cm5hbWVudEVhcm5pbmdbXQogIHJlcG9ydHMgICAgICAgICAgICAgICAgICAgICAgQnJ1dGVSZXBvcnRbXQp9Cgptb2RlbCBCcnV0ZVNwcml0ZXNoZWV0IHsKICBpZCAgICAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGJydXRlICAgQnJ1dGUgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkIEludCAgICBAdW5pcXVlCiAgaW1hZ2UgICBCeXRlcz8gQGRiLkJ5dGVBCiAganNvbiAgICBKc29uPyAgQGRiLkpzb24KfQoKbW9kZWwgQ2xhbiB7CiAgaWQgICAgIEludCAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgU3RyaW5nICBAdW5pcXVlIEBkYi5WYXJDaGFyKDI1NSkKICBicnV0ZXMgQnJ1dGVbXQp9CgplbnVtIExvZ1R5cGUgewogIHdpbgogIGxvc2UKICBjaGlsZAogIGNoaWxkdXAKICB1cAogIGx2bAogIHN1cnZpdmUKICB0b3VybmFtZW50CiAgdG91cm5hbWVudFhwCn0KCmVudW0gRmlnaHRlclR5cGUgewogIGJydXRlCiAgcGV0Cn0KCm1vZGVsIEZpZ2h0IHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZSAgICAgICAgICAgRGF0ZVRpbWUgICAgICAgICBAZGVmYXVsdChub3coKSkgQGRiLkRhdGUKICBicnV0ZTEgICAgICAgICBCcnV0ZSAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZTFJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnJ1dGUxSWQgICAgICAgSW50CiAgYnJ1dGUyICAgICAgICAgQnJ1dGUgICAgICAgICAgICBAcmVsYXRpb24oIkFkdmVyc2FyeSIsIGZpZWxkczogW2JydXRlMklkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZTJJZCAgICAgICBJbnQKICB3aW5uZXIgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1NSkKICBsb3NlciAgICAgICAgICBTdHJpbmcgICAgICAgICAgIEBkYi5WYXJDaGFyKDI1NSkKICBzdGVwcyAgICAgICAgICBKc29uICAgICAgICAgICAgIEBkYi5Kc29uCiAgZmlnaHRlcnMgICAgICAgSnNvbiAgICAgICAgICAgICBAZGIuSnNvbgogIGxvZ3MgICAgICAgICAgIExvZ1tdCiAgVG91cm5hbWVudFN0ZXAgVG91cm5hbWVudFN0ZXBbXQp9Cgptb2RlbCBMb2cgewogIGlkICAgICAgICAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZSAgICAgICAgICAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBkYi5EYXRlCiAgY3VycmVudEJydXRlICAgQnJ1dGUgICAgQHJlbGF0aW9uKGZpZWxkczogW2N1cnJlbnRCcnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBjdXJyZW50QnJ1dGVJZCBJbnQKICB0eXBlICAgICAgICAgICBMb2dUeXBlCiAgbGV2ZWwgICAgICAgICAgSW50PwogIGJydXRlICAgICAgICAgIFN0cmluZz8gIEBkYi5WYXJDaGFyKDI1NSkKICBmaWdodCAgICAgICAgICBGaWdodD8gICBAcmVsYXRpb24oZmllbGRzOiBbZmlnaHRJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgZmlnaHRJZCAgICAgICAgSW50PwogIHhwICAgICAgICAgICAgIEludD8KfQoKZW51bSBEZXN0aW55Q2hvaWNlVHlwZSB7CiAgc2tpbGwKICB3ZWFwb24KICBwZXQKICBzdGF0cwp9CgplbnVtIEJydXRlU3RhdCB7CiAgZW5kdXJhbmNlCiAgc3RyZW5ndGgKICBhZ2lsaXR5CiAgc3BlZWQKfQoKbW9kZWwgRGVzdGlueUNob2ljZSB7CiAgaWQgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgYnJ1dGUgICAgICBCcnV0ZSAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkICAgIEludAogIHBhdGggICAgICAgRGVzdGlueUNob2ljZVNpZGVbXQogIHR5cGUgICAgICAgRGVzdGlueUNob2ljZVR5cGUKICBza2lsbCAgICAgIFNraWxsTmFtZT8KICB3ZWFwb24gICAgIFdlYXBvbk5hbWU/CiAgcGV0ICAgICAgICBQZXROYW1lPwogIHN0YXQxICAgICAgQnJ1dGVTdGF0PwogIHN0YXQxVmFsdWUgSW50PwogIHN0YXQyICAgICAgQnJ1dGVTdGF0PwogIHN0YXQyVmFsdWUgSW50Pwp9CgplbnVtIFRvdXJuYW1lbnRUeXBlIHsKICBEQUlMWQogIEdMT0JBTAogIENVU1RPTQp9Cgptb2RlbCBUb3VybmFtZW50IHsKICBpZCAgICAgICAgICAgSW50ICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGRhdGUgICAgICAgICBEYXRlVGltZSAgICAgICAgIEBkYi5EYXRlCiAgdHlwZSAgICAgICAgIFRvdXJuYW1lbnRUeXBlICAgQGRlZmF1bHQoREFJTFkpCiAgcGFydGljaXBhbnRzIEJydXRlW10KICBzdGVwcyAgICAgICAgVG91cm5hbWVudFN0ZXBbXQp9Cgptb2RlbCBUb3VybmFtZW50U3RlcCB7CiAgaWQgICAgICAgICAgICBJbnQgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgdG91cm5hbWVudCAgICBUb3VybmFtZW50IEByZWxhdGlvbihmaWVsZHM6IFt0b3VybmFtZW50SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIHRvdXJuYW1lbnRJZCAgSW50CiAgc3RlcCAgICAgICAgICBJbnQKICBmaWdodCAgICAgICAgIEZpZ2h0ICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2ZpZ2h0SWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGZpZ2h0SWQgICAgICAgSW50CiAgeHBEaXN0cmlidXRlZCBCb29sZWFuICAgIEBkZWZhdWx0KGZhbHNlKQp9Cgptb2RlbCBUb3VybmFtZW50RWFybmluZyB7CiAgaWQgICAgICAgICAgICAgICBJbnQgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZGF0ZSAgICAgICAgICAgICBEYXRlVGltZSAgICAgICAgIEBkYi5EYXRlCiAgYnJ1dGUgICAgICAgICAgICBCcnV0ZSAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFticnV0ZUlkXSwgcmVmZXJlbmNlczogW2lkXSkKICBicnV0ZUlkICAgICAgICAgIEludAogIHBvaW50cyAgICAgICAgICAgSW50PwogIGFjaGlldmVtZW50ICAgICAgQWNoaWV2ZW1lbnROYW1lPwogIGFjaGlldmVtZW50Q291bnQgSW50Pwp9CgplbnVtIEFjaGlldmVtZW50TmFtZSB7CiAgLy8gRmlnaHRzCiAgd2lucwogIGRlZmVhdHMKICBmbGF3bGVzcwogIHdpbldpdGgxSFAKICBzdGVhbDJXZWFwb25zCiAgc2luZ2xlSGl0V2luCiAgY29tYm8zCiAgY29tYm80CiAgY29tYm81CiAgY291bnRlcjRiMmIKICByZXZlcnNhbDRiMmIKICBibG9jazRiMmIKICBldmFkZTRiMmIKICBkaXNhcm00CiAgZGFtYWdlMTAwb25jZQogIGhpdDIwdGltZXMKICB1c2UxMHNraWxscwogIC8vIFNraWxscyB1c2UKICBzYWJvdGV1cgogIC8vIFBlcmtzIHVubG9jawogIGRvZwogIHBhbnRoZXIKICBiZWFyCiAgcGFudGhlcl9iZWFyCiAgZmVsQWdfZmlzdHNPZkYKICBmZWxBZ19maXN0c09mRl91bnRvdWNoX3JlbGVudGxlc3MKICB2aXRhX2FybW9yX3RvdWdoZW5lZAogIGhlcmN1bFN0cl9oYW1tZXJfZmllcmNlQnJ1dGUKICBzaG9jawogIGJhbGxldFNob2VzX3N1cnZpdmFsCiAgY3J5T2ZUaGVEYW1uZWRfaHlwbm9zaXMKICBzaGllbGRfY291bnRlckF0dGFjawogIHJlY29ubmFpc3NhbmNlX21vbmsKICBpbW1vcnRhbGl0eQogIGRvdWJsZUJvb3N0CiAgdHJpcGxlQm9vc3QKICBxdWFkcnVwbGVCb29zdAogIHJlZ2VuZXJhdGlvbl9wb3Rpb24KICBiZWFyX3RhbWVyCiAgdHJpcGxlRG9ncwogIGZpdmVXZWFwb25zCiAgdGVuV2VhcG9ucwogIGZpZnRlZW5XZWFwb25zCiAgdHdlbnR5V2VhcG9ucwogIHR3ZW50eVRocmVlV2VhcG9ucwogIG1vbmtfc2l4dGhTZW5zZV93aGlwCiAgd2VhcG9uc01hc3Rlcl9zaGFycF9ib2R5YnVpbGRlcl9oZWF2eQogIGhvc3RpbGl0eV9jb3VudGVyV2VhcG9uCiAgZmxhc2hGbG9vZF90d2VsdmVXZWFwb25zCiAgbGlnaHRuaW5nQm9sdF9maXJzdFN0cmlrZQogIGhlcmN1bGVhblN0cmVuZ3RoCiAgZmVsaW5lQWdpbGl0eQogIGxpZ2h0bmluZ0JvbHQKICB2aXRhbGl0eQogIHBvdGlvbl9jaGVmCiAgdGFtZXJfbmV0CiAgdW50b3VjaGFibGVfYmFsbGV0U2hvZXMKICBzdXJ2aXZhbF9yZXNpc3RhbnQKICBoaWRlYXdheV9zcHkKICB3ZWFwb25zRmFzdDMKICB3ZWFwb25zU2hhcnAzCiAgd2VhcG9uc0hlYXZ5MwogIHdlYXBvbnNMb25nMwogIHdlYXBvbnNUaHJvd24zCiAgd2VhcG9uc0JsdW50MwogIC8vIFN0YXRzCiAgYWdpbGl0eTUwCiAgYWdpbGl0eTEwMAogIHNwZWVkNTAKICBzcGVlZDEwMAogIHN0cmVuZ3RoNTAKICBzdHJlbmd0aDEwMAogIGhwMzAwCiAgaHA2MDAKICAvLyBUb3VybmFtZW50CiAgd2luVG91cm5hbWVudEFzMjAKICB3aW5Ub3VybmFtZW50QXMxNQogIGxvb3NlQWdhaW5zdDIKICBsb29zZUFnYWluc3QzCiAgbG9vc2VBZ2FpbnN0NAogIHdpbkFnYWluc3QyCiAgd2luQWdhaW5zdDMKICB3aW5BZ2FpbnN0NAogIHdpbkFzTG93ZXIKICB3aW4KICAvLyBSYW5rcwogIHJhbmtVcDEwCiAgcmFua1VwOQogIHJhbmtVcDgKICByYW5rVXA3CiAgcmFua1VwNgogIHJhbmtVcDUKICByYW5rVXA0CiAgcmFua1VwMwogIHJhbmtVcDIKICByYW5rVXAxCiAgcmFua1VwMAogIC8vIFVzZXIKICBzYWNyaWZpY2UKICBiZXRhCiAgYnVnCn0KCm1vZGVsIEFjaGlldmVtZW50IHsKICBpZCAgICAgIEludCAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIG5hbWUgICAgQWNoaWV2ZW1lbnROYW1lCiAgY291bnQgICBJbnQgICAgICAgICAgICAgQGRlZmF1bHQoMCkKICBicnV0ZSAgIEJydXRlPyAgICAgICAgICBAcmVsYXRpb24oZmllbGRzOiBbYnJ1dGVJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgYnJ1dGVJZCBJbnQ/CiAgdXNlciAgICBVc2VyPyAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFtpZF0pCiAgdXNlcklkICBTdHJpbmc/ICAgICAgICAgQGRiLlV1aWQKfQoKZW51bSBCcnV0ZVJlcG9ydFN0YXR1cyB7CiAgcGVuZGluZwogIGFjY2VwdGVkCiAgcmVqZWN0ZWQKfQoKZW51bSBCcnV0ZVJlcG9ydFJlYXNvbiB7CiAgbmFtZQp9Cgptb2RlbCBCcnV0ZVJlcG9ydCB7CiAgaWQgICAgICBJbnQgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGJydXRlICAgQnJ1dGUgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2JydXRlSWRdLCByZWZlcmVuY2VzOiBbaWRdKQogIGJydXRlSWQgSW50CiAgdXNlcnMgICBVc2VyW10KICByZWFzb24gIEJydXRlUmVwb3J0UmVhc29uIEBkZWZhdWx0KG5hbWUpCiAgY291bnQgICBJbnQgICAgICAgICAgICAgICBAZGVmYXVsdCgxKQogIGRhdGUgICAgRGF0ZVRpbWUgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBkYi5EYXRlCiAgc3RhdHVzICBCcnV0ZVJlcG9ydFN0YXR1cyBAZGVmYXVsdChwZW5kaW5nKQp9Cg==",
  "inlineSchemaHash": "61bdc658c8959e33746a594114422f0e3059b11bd879750afead960ae475a8e9"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lang\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Lang\",\"default\":\"fr\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"connexionToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteLimit\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":3,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gold\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightSpeed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"backgroundMusic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Achievement\",\"relationName\":\"AchievementToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteReport\",\"relationName\":\"BruteReportToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteBody\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteBody\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"longHair\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lowerRightArm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rightHand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upperRightArm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rightShoulder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rightFoot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lowerRightLeg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upperRightLeg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leftFoot\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lowerLeftLeg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pelvis\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upperLeftLeg\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tummy\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"torso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"head\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leftHand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"upperLeftArm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lowerLeftArm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"leftShoulder\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteColors\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteColors\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skinColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skinShade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hairColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hairShade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primaryColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primaryShade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secondaryColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"secondaryShade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accentColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"accentShade\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Brute\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deletedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinyPath\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DestinyChoiceSide\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"hp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"enduranceValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"strengthValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"agilityValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedStat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedModifier\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"speedValue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ranking\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":11,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Gender\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BruteToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"body\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteBody\",\"relationName\":\"BruteToBruteBody\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"colors\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteColors\",\"relationName\":\"BruteToBruteColors\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weapons\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"WeaponName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skills\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"SkillName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pets\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"PetName\",\"default\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"master\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Master\",\"relationFromFields\":[\"masterId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"masterId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pupils\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Master\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pupilsCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clan\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Clan\",\"relationName\":\"BruteToClan\",\"relationFromFields\":[\"clanId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"clanId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"registeredForTournament\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nextTournamentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentTournamentDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentTournamentStepWatched\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastFight\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightsLeft\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":6,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"victories\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fights\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"BruteToFight\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightsAsAdversary\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"Adversary\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Log\",\"relationName\":\"BruteToLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"destinyChoices\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoice\",\"relationName\":\"BruteToDestinyChoice\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"spritesheet\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteSpritesheet\",\"relationName\":\"BruteToBruteSpritesheet\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournaments\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tournament\",\"relationName\":\"BruteToTournament\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Opponents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponentOf\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Opponents\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"opponentsGeneratedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"canRankUpSince\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievements\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Achievement\",\"relationName\":\"AchievementToBrute\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentEarnings\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentEarning\",\"relationName\":\"BruteToTournamentEarning\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reports\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteReport\",\"relationName\":\"BruteToBruteReport\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteSpritesheet\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteSpritesheet\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"json\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Clan\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brutes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToClan\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Fight\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute1\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToFight\",\"relationFromFields\":[\"brute1Id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute1Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute2\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"Adversary\",\"relationFromFields\":[\"brute2Id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute2Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"winner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"loser\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fighters\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Log\",\"relationName\":\"FightToLog\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TournamentStep\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentStep\",\"relationName\":\"FightToTournamentStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Log\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentBrute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToLog\",\"relationFromFields\":[\"currentBruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentBruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"LogType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"FightToLog\",\"relationFromFields\":[\"fightId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DestinyChoice\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToDestinyChoice\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"path\",\"kind\":\"enum\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoiceSide\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DestinyChoiceType\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"skill\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SkillName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"weapon\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"WeaponName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pet\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PetName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat1\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteStat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat1Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat2\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BruteStat\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stat2Value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tournament\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"TournamentType\",\"default\":\"DAILY\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"participants\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournament\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"steps\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TournamentStep\",\"relationName\":\"TournamentToTournamentStep\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentStep\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournament\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tournament\",\"relationName\":\"TournamentToTournamentStep\",\"relationFromFields\":[\"tournamentId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tournamentId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"step\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fight\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Fight\",\"relationName\":\"FightToTournamentStep\",\"relationFromFields\":[\"fightId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fightId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"xpDistributed\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TournamentEarning\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToTournamentEarning\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievement\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"achievementCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Achievement\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AchievementName\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"AchievementToBrute\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"AchievementToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"BruteReport\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brute\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Brute\",\"relationName\":\"BruteToBruteReport\",\"relationFromFields\":[\"bruteId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bruteId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"BruteReportToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reason\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BruteReportReason\",\"default\":\"name\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BruteReportStatus\",\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Lang\":{\"values\":[{\"name\":\"en\",\"dbName\":null},{\"name\":\"fr\",\"dbName\":null},{\"name\":\"de\",\"dbName\":null},{\"name\":\"es\",\"dbName\":null},{\"name\":\"ru\",\"dbName\":null}],\"dbName\":null},\"DestinyChoiceSide\":{\"values\":[{\"name\":\"LEFT\",\"dbName\":\"0\"},{\"name\":\"RIGHT\",\"dbName\":\"1\"}],\"dbName\":null},\"Gender\":{\"values\":[{\"name\":\"male\",\"dbName\":null},{\"name\":\"female\",\"dbName\":null}],\"dbName\":null},\"WeaponName\":{\"values\":[{\"name\":\"fan\",\"dbName\":null},{\"name\":\"keyboard\",\"dbName\":null},{\"name\":\"knife\",\"dbName\":null},{\"name\":\"leek\",\"dbName\":null},{\"name\":\"mug\",\"dbName\":null},{\"name\":\"sai\",\"dbName\":null},{\"name\":\"racquet\",\"dbName\":null},{\"name\":\"axe\",\"dbName\":null},{\"name\":\"bumps\",\"dbName\":null},{\"name\":\"flail\",\"dbName\":null},{\"name\":\"fryingPan\",\"dbName\":null},{\"name\":\"hatchet\",\"dbName\":null},{\"name\":\"mammothBone\",\"dbName\":null},{\"name\":\"morningStar\",\"dbName\":null},{\"name\":\"trombone\",\"dbName\":null},{\"name\":\"baton\",\"dbName\":null},{\"name\":\"halbard\",\"dbName\":null},{\"name\":\"lance\",\"dbName\":null},{\"name\":\"trident\",\"dbName\":null},{\"name\":\"whip\",\"dbName\":null},{\"name\":\"noodleBowl\",\"dbName\":null},{\"name\":\"piopio\",\"dbName\":null},{\"name\":\"shuriken\",\"dbName\":null},{\"name\":\"broadsword\",\"dbName\":null},{\"name\":\"scimitar\",\"dbName\":null},{\"name\":\"sword\",\"dbName\":null}],\"dbName\":null},\"SkillName\":{\"values\":[{\"name\":\"herculeanStrength\",\"dbName\":null},{\"name\":\"felineAgility\",\"dbName\":null},{\"name\":\"lightningBolt\",\"dbName\":null},{\"name\":\"vitality\",\"dbName\":null},{\"name\":\"immortality\",\"dbName\":null},{\"name\":\"reconnaissance\",\"dbName\":null},{\"name\":\"weaponsMaster\",\"dbName\":null},{\"name\":\"martialArts\",\"dbName\":null},{\"name\":\"sixthSense\",\"dbName\":null},{\"name\":\"hostility\",\"dbName\":null},{\"name\":\"fistsOfFury\",\"dbName\":null},{\"name\":\"shield\",\"dbName\":null},{\"name\":\"armor\",\"dbName\":null},{\"name\":\"toughenedSkin\",\"dbName\":null},{\"name\":\"untouchable\",\"dbName\":null},{\"name\":\"sabotage\",\"dbName\":null},{\"name\":\"shock\",\"dbName\":null},{\"name\":\"bodybuilder\",\"dbName\":null},{\"name\":\"relentless\",\"dbName\":null},{\"name\":\"survival\",\"dbName\":null},{\"name\":\"leadSkeleton\",\"dbName\":null},{\"name\":\"balletShoes\",\"dbName\":null},{\"name\":\"determination\",\"dbName\":null},{\"name\":\"firstStrike\",\"dbName\":null},{\"name\":\"resistant\",\"dbName\":null},{\"name\":\"counterAttack\",\"dbName\":null},{\"name\":\"ironHead\",\"dbName\":null},{\"name\":\"thief\",\"dbName\":null},{\"name\":\"fierceBrute\",\"dbName\":null},{\"name\":\"tragicPotion\",\"dbName\":null},{\"name\":\"net\",\"dbName\":null},{\"name\":\"bomb\",\"dbName\":null},{\"name\":\"hammer\",\"dbName\":null},{\"name\":\"cryOfTheDamned\",\"dbName\":null},{\"name\":\"hypnosis\",\"dbName\":null},{\"name\":\"flashFlood\",\"dbName\":null},{\"name\":\"tamer\",\"dbName\":null},{\"name\":\"regeneration\",\"dbName\":null},{\"name\":\"chef\",\"dbName\":null},{\"name\":\"spy\",\"dbName\":null},{\"name\":\"saboteur\",\"dbName\":null},{\"name\":\"backup\",\"dbName\":null},{\"name\":\"hideaway\",\"dbName\":null},{\"name\":\"monk\",\"dbName\":null}],\"dbName\":null},\"PetName\":{\"values\":[{\"name\":\"dog1\",\"dbName\":null},{\"name\":\"dog2\",\"dbName\":null},{\"name\":\"dog3\",\"dbName\":null},{\"name\":\"panther\",\"dbName\":null},{\"name\":\"bear\",\"dbName\":null}],\"dbName\":null},\"LogType\":{\"values\":[{\"name\":\"win\",\"dbName\":null},{\"name\":\"lose\",\"dbName\":null},{\"name\":\"child\",\"dbName\":null},{\"name\":\"childup\",\"dbName\":null},{\"name\":\"up\",\"dbName\":null},{\"name\":\"lvl\",\"dbName\":null},{\"name\":\"survive\",\"dbName\":null},{\"name\":\"tournament\",\"dbName\":null},{\"name\":\"tournamentXp\",\"dbName\":null}],\"dbName\":null},\"FighterType\":{\"values\":[{\"name\":\"brute\",\"dbName\":null},{\"name\":\"pet\",\"dbName\":null}],\"dbName\":null},\"DestinyChoiceType\":{\"values\":[{\"name\":\"skill\",\"dbName\":null},{\"name\":\"weapon\",\"dbName\":null},{\"name\":\"pet\",\"dbName\":null},{\"name\":\"stats\",\"dbName\":null}],\"dbName\":null},\"BruteStat\":{\"values\":[{\"name\":\"endurance\",\"dbName\":null},{\"name\":\"strength\",\"dbName\":null},{\"name\":\"agility\",\"dbName\":null},{\"name\":\"speed\",\"dbName\":null}],\"dbName\":null},\"TournamentType\":{\"values\":[{\"name\":\"DAILY\",\"dbName\":null},{\"name\":\"GLOBAL\",\"dbName\":null},{\"name\":\"CUSTOM\",\"dbName\":null}],\"dbName\":null},\"AchievementName\":{\"values\":[{\"name\":\"wins\",\"dbName\":null},{\"name\":\"defeats\",\"dbName\":null},{\"name\":\"flawless\",\"dbName\":null},{\"name\":\"winWith1HP\",\"dbName\":null},{\"name\":\"steal2Weapons\",\"dbName\":null},{\"name\":\"singleHitWin\",\"dbName\":null},{\"name\":\"combo3\",\"dbName\":null},{\"name\":\"combo4\",\"dbName\":null},{\"name\":\"combo5\",\"dbName\":null},{\"name\":\"counter4b2b\",\"dbName\":null},{\"name\":\"reversal4b2b\",\"dbName\":null},{\"name\":\"block4b2b\",\"dbName\":null},{\"name\":\"evade4b2b\",\"dbName\":null},{\"name\":\"disarm4\",\"dbName\":null},{\"name\":\"damage100once\",\"dbName\":null},{\"name\":\"hit20times\",\"dbName\":null},{\"name\":\"use10skills\",\"dbName\":null},{\"name\":\"saboteur\",\"dbName\":null},{\"name\":\"dog\",\"dbName\":null},{\"name\":\"panther\",\"dbName\":null},{\"name\":\"bear\",\"dbName\":null},{\"name\":\"panther_bear\",\"dbName\":null},{\"name\":\"felAg_fistsOfF\",\"dbName\":null},{\"name\":\"felAg_fistsOfF_untouch_relentless\",\"dbName\":null},{\"name\":\"vita_armor_toughened\",\"dbName\":null},{\"name\":\"herculStr_hammer_fierceBrute\",\"dbName\":null},{\"name\":\"shock\",\"dbName\":null},{\"name\":\"balletShoes_survival\",\"dbName\":null},{\"name\":\"cryOfTheDamned_hypnosis\",\"dbName\":null},{\"name\":\"shield_counterAttack\",\"dbName\":null},{\"name\":\"reconnaissance_monk\",\"dbName\":null},{\"name\":\"immortality\",\"dbName\":null},{\"name\":\"doubleBoost\",\"dbName\":null},{\"name\":\"tripleBoost\",\"dbName\":null},{\"name\":\"quadrupleBoost\",\"dbName\":null},{\"name\":\"regeneration_potion\",\"dbName\":null},{\"name\":\"bear_tamer\",\"dbName\":null},{\"name\":\"tripleDogs\",\"dbName\":null},{\"name\":\"fiveWeapons\",\"dbName\":null},{\"name\":\"tenWeapons\",\"dbName\":null},{\"name\":\"fifteenWeapons\",\"dbName\":null},{\"name\":\"twentyWeapons\",\"dbName\":null},{\"name\":\"twentyThreeWeapons\",\"dbName\":null},{\"name\":\"monk_sixthSense_whip\",\"dbName\":null},{\"name\":\"weaponsMaster_sharp_bodybuilder_heavy\",\"dbName\":null},{\"name\":\"hostility_counterWeapon\",\"dbName\":null},{\"name\":\"flashFlood_twelveWeapons\",\"dbName\":null},{\"name\":\"lightningBolt_firstStrike\",\"dbName\":null},{\"name\":\"herculeanStrength\",\"dbName\":null},{\"name\":\"felineAgility\",\"dbName\":null},{\"name\":\"lightningBolt\",\"dbName\":null},{\"name\":\"vitality\",\"dbName\":null},{\"name\":\"potion_chef\",\"dbName\":null},{\"name\":\"tamer_net\",\"dbName\":null},{\"name\":\"untouchable_balletShoes\",\"dbName\":null},{\"name\":\"survival_resistant\",\"dbName\":null},{\"name\":\"hideaway_spy\",\"dbName\":null},{\"name\":\"weaponsFast3\",\"dbName\":null},{\"name\":\"weaponsSharp3\",\"dbName\":null},{\"name\":\"weaponsHeavy3\",\"dbName\":null},{\"name\":\"weaponsLong3\",\"dbName\":null},{\"name\":\"weaponsThrown3\",\"dbName\":null},{\"name\":\"weaponsBlunt3\",\"dbName\":null},{\"name\":\"agility50\",\"dbName\":null},{\"name\":\"agility100\",\"dbName\":null},{\"name\":\"speed50\",\"dbName\":null},{\"name\":\"speed100\",\"dbName\":null},{\"name\":\"strength50\",\"dbName\":null},{\"name\":\"strength100\",\"dbName\":null},{\"name\":\"hp300\",\"dbName\":null},{\"name\":\"hp600\",\"dbName\":null},{\"name\":\"winTournamentAs20\",\"dbName\":null},{\"name\":\"winTournamentAs15\",\"dbName\":null},{\"name\":\"looseAgainst2\",\"dbName\":null},{\"name\":\"looseAgainst3\",\"dbName\":null},{\"name\":\"looseAgainst4\",\"dbName\":null},{\"name\":\"winAgainst2\",\"dbName\":null},{\"name\":\"winAgainst3\",\"dbName\":null},{\"name\":\"winAgainst4\",\"dbName\":null},{\"name\":\"winAsLower\",\"dbName\":null},{\"name\":\"win\",\"dbName\":null},{\"name\":\"rankUp10\",\"dbName\":null},{\"name\":\"rankUp9\",\"dbName\":null},{\"name\":\"rankUp8\",\"dbName\":null},{\"name\":\"rankUp7\",\"dbName\":null},{\"name\":\"rankUp6\",\"dbName\":null},{\"name\":\"rankUp5\",\"dbName\":null},{\"name\":\"rankUp4\",\"dbName\":null},{\"name\":\"rankUp3\",\"dbName\":null},{\"name\":\"rankUp2\",\"dbName\":null},{\"name\":\"rankUp1\",\"dbName\":null},{\"name\":\"rankUp0\",\"dbName\":null},{\"name\":\"sacrifice\",\"dbName\":null},{\"name\":\"beta\",\"dbName\":null},{\"name\":\"bug\",\"dbName\":null}],\"dbName\":null},\"BruteReportStatus\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"accepted\",\"dbName\":null},{\"name\":\"rejected\",\"dbName\":null}],\"dbName\":null},\"BruteReportReason\":{\"values\":[{\"name\":\"name\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
