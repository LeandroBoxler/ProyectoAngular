export interface Champ {
  allytips: string[];
  blurb: string;
  enemytips: string[];
  id: string;
  image: Image;
  info: Info;
  key: string;
  lore: string;
  name: string;
  partype: string;
  passive: Passive;
  recommended: any[];
  skins: Skin[];
  spells: Spell[];
  stats: { [key: string]: number };
  tags: string[];
  title: string;
}

export interface Image {
  full: string;
  group: string;
  h: number;
  sprite: string;
  w: number;
  x: number;
  y: number;
}

export interface Info {
  attack: number;
  defense: number;
  difficulty: number;
  magic: number;
}

export interface Passive {
  description: string;
  image: Image;
  name: string;
}

export interface Skin {
  chromas: boolean;
  id: string;
  name: string;
  num: number;
}

export interface Spell {
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  costType: string;
  datavalues: Datavalues;
  description: string;
  effect: Array<number[] | null>;
  effectBurn: Array<null | string>;
  id: string;
  image: Image;
  leveltip: Leveltip;
  maxammo: string;
  maxrank: number;
  name: string;
  range: number[];
  rangeBurn: string;
  resource: string;
  tooltip: string;
  vars: any[];
}

export interface Datavalues {}

export interface Leveltip {
  effect: string[];
  label: string[];
}
