export interface DataChamp {
  name: string;

  allytips: string[];
  blurb: string;
  enemytips: string[];
  id: string;
  key?: string;
  lore?: string;
  partype?: string;
  recommended?: any[];
  stats?: { [key: string]: number };
  tags?: string[];
  title: string;
}
